/// <reference types="@cloudflare/workers-types" />

import { Resend } from "resend";
import {
  CONTACT_EMAIL_MAX_LENGTH,
  CONTACT_MESSAGE_MAX_LENGTH,
  CONTACT_MESSAGE_MIN_LENGTH,
  CONTACT_NAME_MAX_LENGTH,
  CONTACT_NAME_MIN_LENGTH,
} from "@/lib/contact-constants";

interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL: string;
  CONTACT_FROM_EMAIL: string;
  TURNSTILE_SECRET_KEY: string;
  NEXT_PUBLIC_SITE_URL?: string;
  CONTACT_ALLOWED_ORIGINS?: string;
}

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  body?: unknown;
  captchaToken?: unknown;
}

interface TurnstileResponse {
  success?: boolean;
  "error-codes"?: string[];
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[\p{L}\p{M}\s.'-]+$/u;

const SINGLE_LINE_CONTROL_CHARS = /[\u0000-\u001F\u007F]+/g;
const MESSAGE_CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

const toStringOrEmpty = (value: unknown) =>
  typeof value === "string" ? value : "";

const sanitizeSingleLine = (value: unknown) =>
  toStringOrEmpty(value)
    .normalize("NFKC")
    .replace(SINGLE_LINE_CONTROL_CHARS, " ")
    .replace(/\s+/g, " ")
    .trim();

const sanitizeMessage = (value: unknown) =>
  toStringOrEmpty(value)
    .normalize("NFKC")
    .replace(/\r\n?/g, "\n")
    .replace(MESSAGE_CONTROL_CHARS, "")
    .trim();

const normalizeOrigin = (value: string) => {
  try {
    return new URL(value).origin;
  } catch {
    return undefined;
  }
};

const isAllowedRequestOrigin = (request: Request, env: Env) => {
  const originHeader = request.headers.get("origin")?.trim();

  if (!originHeader) {
    return true;
  }

  const requestOrigin = normalizeOrigin(originHeader);

  if (!requestOrigin) {
    return false;
  }

  const configuredOrigins = [
    env.NEXT_PUBLIC_SITE_URL,
    ...(env.CONTACT_ALLOWED_ORIGINS?.split(",") ?? []),
  ];

  const trustedOrigins = new Set(
    configuredOrigins
      .map((origin) => normalizeOrigin((origin ?? "").trim()))
      .filter((origin): origin is string => Boolean(origin)),
  );

  if (trustedOrigins.size === 0) {
    return requestOrigin === new URL(request.url).origin;
  }

  return trustedOrigins.has(requestOrigin);
};

const getClientIp = (request: Request) => {
  return (
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
};

const verifyTurnstile = async (
  token: string,
  remoteIp: string,
  secret: string,
) => {
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret,
        response: token,
        remoteip: remoteIp,
      }),
    },
  );

  if (!response.ok) {
    return false;
  }

  const result = (await response.json()) as TurnstileResponse;

  if (!result.success) {
    console.error("Turnstile rejection:", result["error-codes"]);
    return false;
  }

  return true;
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    if (!isAllowedRequestOrigin(request, env)) {
      return Response.json(
        { message: "Request origin is not allowed." },
        { status: 403 },
      );
    }

    if (
      !env.RESEND_API_KEY ||
      !env.CONTACT_TO_EMAIL ||
      !env.CONTACT_FROM_EMAIL ||
      !env.TURNSTILE_SECRET_KEY
    ) {
      console.error("Missing contact form environment variables.");

      return Response.json(
        { message: "Contact service is not configured." },
        { status: 500 },
      );
    }

    const payload = (await request.json()) as ContactPayload;

    const rawName = toStringOrEmpty(payload.name);
    const rawEmail = toStringOrEmpty(payload.email);

    if (/[\r\n]/.test(rawName) || /[\r\n]/.test(rawEmail)) {
      return Response.json(
        { message: "Invalid characters detected." },
        { status: 400 },
      );
    }

    const name = sanitizeSingleLine(payload.name);
    const email = sanitizeSingleLine(payload.email);
    const body = sanitizeMessage(payload.body);
    const captchaToken = sanitizeSingleLine(payload.captchaToken);

    if (
      name.length < CONTACT_NAME_MIN_LENGTH ||
      name.length > CONTACT_NAME_MAX_LENGTH ||
      !NAME_REGEX.test(name)
    ) {
      return Response.json(
        { message: "Please provide a valid full name." },
        { status: 400 },
      );
    }

    if (email.length > CONTACT_EMAIL_MAX_LENGTH || !EMAIL_REGEX.test(email)) {
      return Response.json(
        { message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    if (
      body.length < CONTACT_MESSAGE_MIN_LENGTH ||
      body.length > CONTACT_MESSAGE_MAX_LENGTH
    ) {
      return Response.json(
        {
          message:
            `Message must be between ${CONTACT_MESSAGE_MIN_LENGTH} ` +
            `and ${CONTACT_MESSAGE_MAX_LENGTH} characters.`,
        },
        { status: 400 },
      );
    }

    if (!captchaToken) {
      return Response.json(
        { message: "Please complete the security check." },
        { status: 400 },
      );
    }

    const captchaValid = await verifyTurnstile(
      captchaToken,
      getClientIp(request),
      env.TURNSTILE_SECRET_KEY,
    );

    if (!captchaValid) {
      return Response.json(
        { message: "Captcha verification failed." },
        { status: 400 },
      );
    }

    const resend = new Resend(env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: env.CONTACT_FROM_EMAIL,
      to: env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Website Contact from ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, "", "Message:", body].join(
        "\n",
      ),
    });

    if (result.error) {
      console.error("Resend error:", result.error);

      return Response.json(
        { message: "Could not send your message right now." },
        { status: 502 },
      );
    }

    return Response.json({
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      { message: "Something went wrong while sending your message." },
      { status: 500 },
    );
  }
};
