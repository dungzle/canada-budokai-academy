"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Add email functionality here
    console.log({ subject, body });

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setSubject("");
      setBody("");

      // Reset success message after 4 seconds
      setTimeout(() => setSubmitted(false), 4000);
    }, 500);
  };

  return (
    <main className="text-[var(--foreground)]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black border-b border-gold-600/20 py-12 md:py-16">
        <div className="container mx-auto max-w-9/10 xl:max-w-8/10 px-4">
          <h1 className="max-w-4xl text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[0.03em] text-gold-500 font-serif">
            Contact Us
          </h1>
          <div className="w-20 h-0.5 opacity-80 bg-gold-500 my-6" />
          <p className="max-w-3xl text-stone-300 text-sm md:text-base leading-relaxed">
            Have questions about our programs, locations, or want to learn more?
            Get in touch with us today. We would love to hear from you.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-8 lg:py-16 bg-[var(--surface-muted)]">
        <div className="container mx-auto max-w-9/10 xl:max-w-8/10 px-4">
          {/* Contact Info */}
          <div className="mb-8 rounded-2xl border border-[var(--border-subtle)]/80 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-sm font-semibold text-gold-600 uppercase tracking-wide mb-4">
              Contact Information
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wide mb-1">
                  Email
                </p>
                <a
                  href="mailto:contact@canadabudokaiAcademy.ca"
                  className="text-neutral-700 font-medium hover:text-gold-600 transition-colors break-all"
                >
                  contact@canadabudokaiAcademy.ca
                </a>
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wide mb-1">
                  Phone
                </p>
                <a
                  href="tel:+11234567899"
                  className="text-neutral-700 font-medium hover:text-gold-600 transition-colors"
                >
                  +1 (123) 456-7899
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border-subtle)]/80 p-8 bg-white shadow-[0_20px_40px_-30px_rgba(0,0,0,0.45)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-neutral-800 mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="What is this about?"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border-subtle)] bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                />
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
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Tell us more..."
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border-subtle)] bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none"
                />
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
        </div>
      </section>
    </main>
  );
}
