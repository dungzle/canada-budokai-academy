import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The requested page could not be found on Canada Budokai Academy.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="min-h-[60vh] bg-[var(--surface-muted)] py-14 lg:py-20">
      <div className="container mx-auto max-w-9/10 xl:max-w-8/10 px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
          404
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-serif font-semibold text-neutral-900">
          Page Not Found
        </h1>
        <p className="mt-4 mx-auto max-w-2xl text-sm md:text-base text-neutral-600 leading-relaxed">
          The page you are looking for does not exist or may have been moved.
          You can return to the homepage or view current dojo locations.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-full px-7 py-3 text-sm font-semibold tracking-wide leading-none whitespace-nowrap border border-gold-600 bg-gold-500 text-black hover:bg-gold-400"
          >
            Back to Home
          </Link>
          <Link
            href="/locations"
            className="inline-flex min-h-11 items-center justify-center rounded-full px-7 py-3 text-sm font-semibold tracking-wide leading-none whitespace-nowrap border border-gold-500/35 bg-budokai-dark text-gold-500 hover:bg-budokai-dark/90 hover:border-gold-500/55 hover:text-gold-400"
          >
            View Locations
          </Link>
        </div>
      </div>
    </section>
  );
}
