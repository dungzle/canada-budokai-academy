import { NextResponse } from "next/server";
import { Resend } from "resend";

import {
  CONTACT_EMAIL_MAX_LENGTH,
  CONTACT_MESSAGE_MAX_LENGTH,
  CONTACT_MESSAGE_MIN_LENGTH,
  CONTACT_NAME_MAX_LENGTH,
  CONTACT_NAME_MIN_LENGTH,
} from "@/lib/contact-constants";

export const runtime = "edge";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[\p{L}\p{M}\s.'-]+$/u;
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_CLEANUP_INTERVAL_MS = 60 * 1000;
const RATE_LIMIT_MAX_TRACKED_IPS = 2000;

const requestLog = new Map<string, number[]>();
let lastRateLimitCleanupAt = 0;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  body?: unknown;
  captchaToken?: unknown;
};

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

const hasHeaderInjectionChars = (value: unknown) =>
  /[\r\n]/.test(toStringOrEmpty(value));

const normalizeOrigin = (value: string) => {
  try {
    return new URL(value).origin;
  } catch {
    return undefined;
  }
};

const trustedOrigins = (() => {
  const rawOrigins = [
    process.env.NEXT_PUBLIC_SITE_URL,
    ...(process.env.CONTACT_ALLOWED_ORIGINS?.split(",") ?? []),
  ];

  const origins = new Set<string>();

  for (const rawOrigin of rawOrigins) {
    const origin = normalizeOrigin((rawOrigin ?? "").trim());

    if (origin) {
      origins.add(origin);
    }
  }

  return origins;
})();

const isAllowedRequestOrigin = (request: Request) => {
  const originHeader = request.headers.get("origin")?.trim();

  // Non-browser traffic (without Origin) can still submit forms via scripts.
  if (!originHeader) {
    return true;
  }

  const requestOrigin = normalizeOrigin(originHeader);

  if (!requestOrigin) {
    return false;
  }

  if (trustedOrigins.size === 0) {
    if (process.env.NODE_ENV !== "production") {
      return true;
    }

    const host =
      request.headers.get("x-forwarded-host") ?? request.headers.get("host");
    const protocol = request.headers.get("x-forwarded-proto") ?? "https";

    if (!host) {
      return false;
    }

    return requestOrigin === `${protocol}://${host}`;
  }

  return trustedOrigins.has(requestOrigin);
};

const getClientIp = (request: Request) => {
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) {
    return cfIp;
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
};

const cleanupRateLimitLog = (now: number) => {
  if (now - lastRateLimitCleanupAt < RATE_LIMIT_CLEANUP_INTERVAL_MS) {
    return;
  }

  const start = now - RATE_LIMIT_WINDOW_MS;

  for (const [ip, timestamps] of requestLog.entries()) {
    const recent = timestamps.filter((timestamp) => timestamp > start);

    if (recent.length > 0) {
      requestLog.set(ip, recent);
      continue;
    }

    requestLog.delete(ip);
  }

  lastRateLimitCleanupAt = now;
};

const isRateLimited = (ip: string) => {
  const now = Date.now();
  cleanupRateLimitLog(now);

  // Keep bounded memory usage even under broad, low-volume probing.
  if (requestLog.size > RATE_LIMIT_MAX_TRACKED_IPS) {
    const oldestTrackedIp = requestLog.keys().next().value;
    if (oldestTrackedIp) {
      requestLog.delete(oldestTrackedIp);
    }
  }

  const start = now - RATE_LIMIT_WINDOW_MS;
  const timestamps = requestLog.get(ip) ?? [];
  const recent = timestamps.filter((timestamp) => timestamp > start);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, recent);
    return true;
  }

  recent.push(now);
  requestLog.set(ip, recent);
  return false;
};

const verifyTurnstile = async (token: string, remoteip: string) => {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return {
      ok: false,
      reason: "Turnstile service is not configured yet.",
    };
  }

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
        remoteip,
      }),
    },
  );

  if (!response.ok) {
    return { ok: false, reason: "Captcha verification failed." };
  }

  const data = (await response.json()) as {
    success?: boolean;
    "error-codes"?: string[];
  };

  if (!data.success) {
    return {
      ok: false,
      reason: "Captcha verification failed.",
      codes: data["error-codes"],
    };
  }

  return { ok: true };
};

export async function POST(request: Request) {
  try {
    if (!isAllowedRequestOrigin(request)) {
      return NextResponse.json(
        { message: "Request origin is not allowed." },
        { status: 403 },
      );
    }

    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const payload = (await request.json()) as ContactPayload;

    if (
      hasHeaderInjectionChars(payload.name) ||
      hasHeaderInjectionChars(payload.email)
    ) {
      return NextResponse.json(
        { message: "Invalid characters detected in form fields." },
        { status: 400 },
      );
    }

    const name = sanitizeSingleLine(payload.name);
    const email = sanitizeSingleLine(payload.email);
    const body = sanitizeMessage(payload.body);
    const captchaToken = sanitizeSingleLine(payload.captchaToken);

    if (
      !name ||
      name.length < CONTACT_NAME_MIN_LENGTH ||
      name.length > CONTACT_NAME_MAX_LENGTH ||
      !NAME_REGEX.test(name)
    ) {
      return NextResponse.json(
        { message: "Please provide a valid full name." },
        { status: 400 },
      );
    }

    if (!EMAIL_REGEX.test(email) || email.length > CONTACT_EMAIL_MAX_LENGTH) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    if (
      body.length < CONTACT_MESSAGE_MIN_LENGTH ||
      body.length > CONTACT_MESSAGE_MAX_LENGTH
    ) {
      return NextResponse.json(
        {
          message: `Message must be between ${CONTACT_MESSAGE_MIN_LENGTH} and ${CONTACT_MESSAGE_MAX_LENGTH} characters.`,
        },
        { status: 400 },
      );
    }

    if (!captchaToken) {
      return NextResponse.json(
        { message: "Please complete the security check." },
        { status: 400 },
      );
    }

    const captchaCheck = await verifyTurnstile(captchaToken, clientIp);
    if (!captchaCheck.ok) {
      if (captchaCheck.codes) {
        console.error("Turnstile rejected request:", captchaCheck.codes);
      }

      return NextResponse.json(
        { message: captchaCheck.reason },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_TO_EMAIL;
    const senderEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendApiKey || !recipientEmail || !senderEmail) {
      console.error("Missing contact form email environment variables.");
      return NextResponse.json(
        { message: "Email service is not configured yet." },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);

    const sendResult = await resend.emails.send({
      from: senderEmail,
      to: recipientEmail,
      replyTo: email,
      subject: `Website Contact from ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, "", "Message:", body].join(
        "\n",
      ),
    });

    if (sendResult.error) {
      console.error("Resend failed to send contact email:", sendResult.error);
      return NextResponse.json(
        { message: "Could not send your message right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Unexpected contact form error:", error);
    return NextResponse.json(
      { message: "Something went wrong while sending your message." },
      { status: 500 },
    );
  }
}
