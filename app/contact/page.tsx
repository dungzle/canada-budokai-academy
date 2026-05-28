"use client";

import Script from "next/script";
import { SubmitEvent, useEffect, useRef, useState } from "react";

import {
  CONTACT_EMAIL_MAX_LENGTH,
  CONTACT_MESSAGE_MAX_LENGTH,
  CONTACT_MESSAGE_MIN_LENGTH,
  CONTACT_NAME_MAX_LENGTH,
  CONTACT_NAME_MIN_LENGTH,
} from "@/lib/contact-constants";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        },
      ) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId?: string) => void;
    };
  }
}

export default function Contact() {
  const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isTurnstileReady, setIsTurnstileReady] = useState(false);
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);
  const didRetryTurnstileRenderRef = useRef(false);
  const turnstileRetryTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  useEffect(() => {
    const removeTurnstileWidget = () => {
      if (turnstileWidgetIdRef.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetIdRef.current);
        turnstileWidgetIdRef.current = null;
      }

      if (turnstileContainerRef.current) {
        turnstileContainerRef.current.innerHTML = "";
      }
    };

    const clearTurnstileRetry = () => {
      if (turnstileRetryTimeoutRef.current) {
        clearTimeout(turnstileRetryTimeoutRef.current);
        turnstileRetryTimeoutRef.current = null;
      }
    };

    const renderTurnstile = () => {
      if (!TURNSTILE_SITE_KEY || !isTurnstileReady) {
        return;
      }

      const container = turnstileContainerRef.current;
      if (!container) {
        return;
      }

      if (!window.turnstile) {
        if (!didRetryTurnstileRenderRef.current) {
          didRetryTurnstileRenderRef.current = true;
          turnstileRetryTimeoutRef.current = setTimeout(() => {
            turnstileRetryTimeoutRef.current = null;
            renderTurnstile();
          }, 500);
        }
        return;
      }

      removeTurnstileWidget();

      turnstileWidgetIdRef.current = window.turnstile.render(container, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token: string) => {
          setCaptchaToken(token);
          setSubmitError("");
        },
        "expired-callback": () => {
          setCaptchaToken("");
        },
        "error-callback": () => {
          setCaptchaToken("");
          setSubmitError(
            "Captcha failed to load. Please refresh and try again.",
          );
        },
      });
    };

    clearTurnstileRetry();
    didRetryTurnstileRenderRef.current = false;
    renderTurnstile();

    return () => {
      clearTurnstileRetry();
      removeTurnstileWidget();
    };
  }, [TURNSTILE_SITE_KEY, isTurnstileReady]);

  const isValidEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!TURNSTILE_SITE_KEY) {
      setSubmitError("Captcha is not configured yet.");
      return;
    }

    if (!captchaToken) {
      setSubmitError("Please complete the captcha.");
      return;
    }

    setEmailError("");
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, body, captchaToken }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          message?: string;
        } | null;
        setSubmitError(
          data?.message ?? "Could not send your message right now.",
        );
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setSubmitted(true);
      setName("");
      setEmail("");
      setBody("");
      setCaptchaToken("");
      window.turnstile?.reset(turnstileWidgetIdRef.current ?? undefined);

      // Reset success message after 4 seconds
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setSubmitError("Network error. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-[var(--foreground)] mb-2">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        onReady={() => setIsTurnstileReady(true)}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-black border-b border-gold-600/20 py-12 md:py-16">
        <div className="container mx-auto max-w-9/10 xl:max-w-8/10 px-4">
          <h1 className="max-w-4xl text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[0.03em] text-gold-500 font-serif">
            Contact Us
          </h1>
          <div className="w-20 h-0.5 opacity-80 bg-gold-500 my-6" />
          <p className="max-w-5xl text-stone-300 text-sm md:text-base leading-relaxed">
            Interested in training with us? Contact us today to learn more about
            our programs or schedule a free trial class. We would be happy to
            hear from you.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-8 lg:py-16 bg-[var(--surface-muted)]">
        <div className="container mx-auto max-w-9/10 xl:max-w-8/10 rounded-2xl border border-[var(--border-subtle)]/80 p-8 bg-white shadow-[0_20px_40px_-30px_rgba(0,0,0,0.45)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-neutral-800 mb-2"
              >
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                autoComplete="name"
                minLength={CONTACT_NAME_MIN_LENGTH}
                maxLength={CONTACT_NAME_MAX_LENGTH}
                required
                className="w-full px-4 py-3 rounded-lg border border-[var(--border-subtle)] bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-neutral-800 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => {
                  const nextEmail = e.target.value;
                  setEmail(nextEmail);

                  if (emailError && isValidEmail(nextEmail)) {
                    setEmailError("");
                  }
                }}
                onBlur={() => {
                  if (email && !isValidEmail(email)) {
                    setEmailError("Please enter a valid email address.");
                  }
                }}
                placeholder="you@example.com"
                autoComplete="email"
                maxLength={CONTACT_EMAIL_MAX_LENGTH}
                required
                aria-invalid={Boolean(emailError)}
                aria-describedby={emailError ? "email-error" : undefined}
                className="w-full px-4 py-3 rounded-lg border border-[var(--border-subtle)] bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
              />
              {emailError && (
                <p
                  id="email-error"
                  className="mt-2 text-sm text-red-600"
                  role="alert"
                >
                  {emailError}
                </p>
              )}
            </div>

            {/* Body Field */}
            <div>
              <label
                htmlFor="body"
                className="block text-sm font-semibold text-neutral-800 mb-2"
              >
                Message
              </label>
              <textarea
                id="body"
                name="message"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="How can we help? If you’d like to try a class, please include your preferred location or class time."
                required
                rows={6}
                minLength={CONTACT_MESSAGE_MIN_LENGTH}
                maxLength={CONTACT_MESSAGE_MAX_LENGTH}
                className="w-full px-4 py-3 rounded-lg border border-[var(--border-subtle)] bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none"
              />
              <p
                className="text-sm text-neutral-500 text-right"
                aria-live="polite"
              >
                {body.length}/{CONTACT_MESSAGE_MAX_LENGTH} characters
              </p>
            </div>

            <div>
              {TURNSTILE_SITE_KEY ? (
                <div ref={turnstileContainerRef} className="min-h-[65px]" />
              ) : (
                <p className="text-sm text-amber-700">
                  Captcha is not configured yet.
                </p>
              )}
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
                Thank you for reaching out! We will get back to you soon.
              </div>
            )}

            {submitError && (
              <div
                className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm font-medium"
                role="alert"
              >
                {submitError}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-11 items-center justify-center rounded-full px-7 py-3 text-sm font-semibold tracking-wide leading-none whitespace-nowrap transition-colors transition-shadow duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] active:scale-95 border border-gold-500/35 bg-budokai-dark text-gold-500 hover:bg-budokai-dark/90 hover:border-gold-500/55 hover:text-gold-400 shadow-md shadow-budokai-dark/15 focus-visible:ring-gold-500/60 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
