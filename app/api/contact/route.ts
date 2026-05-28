import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGE_MAX_LENGTH = 2000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

const requestLog = new Map<string, number[]>();

type ContactPayload = {
  name?: string;
  email?: string;
  body?: string;
  captchaToken?: string;
};

const sanitize = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

const getClientIp = (request: Request) => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
};

const isRateLimited = (ip: string) => {
  const now = Date.now();
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
    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const payload = (await request.json()) as ContactPayload;

    const name = sanitize(payload.name ?? "");
    const email = sanitize(payload.email ?? "");
    const body = (payload.body ?? "").trim();
    const captchaToken = (payload.captchaToken ?? "").trim();

    if (!name || name.length < 2 || name.length > 80) {
      return NextResponse.json(
        { message: "Please provide a valid full name." },
        { status: 400 },
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    if (body.length < 10 || body.length > MESSAGE_MAX_LENGTH) {
      return NextResponse.json(
        {
          message: `Message must be between 10 and ${MESSAGE_MAX_LENGTH} characters.`,
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
