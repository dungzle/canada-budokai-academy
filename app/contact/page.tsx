"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const MESSAGE_MAX_LENGTH = 2000;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isValidEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!subject) {
      setSubjectError("Please choose what you are interested in.");
      return;
    }

    setEmailError("");
    setSubjectError("");
    setIsSubmitting(true);

    // TODO: Add email functionality here
    console.log({ name, email, subject, body });

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName("");
      setEmail("");
      setSubject("");
      setBody("");

      // Reset success message after 4 seconds
      setTimeout(() => setSubmitted(false), 4000);
    }, 500);
  };

  return (
    <div className="text-[var(--foreground)] mb-2">
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
                minLength={2}
                maxLength={80}
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
                minLength={10}
                maxLength={MESSAGE_MAX_LENGTH}
                className="w-full px-4 py-3 rounded-lg border border-[var(--border-subtle)] bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none"
              />
              <p
                className="text-sm text-neutral-500 text-right"
                aria-live="polite"
              >
                {body.length}/{MESSAGE_MAX_LENGTH} characters
              </p>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
                Thank you for reaching out! We will get back to you soon.
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-4 bg-budokai-dark text-gold-500 rounded-full hover:bg-gold-500 hover:text-white transition-all font-bold tracking-wide text-base border border-gold-500/30 shadow-xl shadow-budokai-dark/10 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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
