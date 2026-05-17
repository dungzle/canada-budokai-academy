import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locations | Canada Budokai Academy",
  description:
    "Explore our dojo locations, class schedules, and training options across Vancouver Island.",
};

const dojos = [
  {
    name: "CARSA Honbu dojo",
    venue: "CARSA University of Victoria",
    address: "3800 Finnerty Rd, Victoria, BC",
    mapsUrl: "https://maps.app.goo.gl/6YGjvT35znpxZ2Ho9",
    classes: [
      { day: "Tuesday", level: "All levels", time: "6:00pm-8:00pm" },
      { day: "Thursday", level: "Advanced", time: "6:00pm-8:00pm" },
      { day: "Friday", level: "All levels", time: "6:00pm-8:00pm" },
    ],
  },
  {
    name: "Vimy dojo",
    venue: "Vimy Community Hall",
    address: "3968 Gibbins Rd, Duncan, BC",
    mapsUrl: "https://maps.app.goo.gl/DUijgqhGBD2hPrWR8",
    classes: [
      { day: "Monday", level: "All levels", time: "6:00pm-8:00pm" },
      { day: "Wednesday", level: "All levels", time: "6:00pm-8:00pm" },
      { day: "Friday", level: "All levels", time: "6:00pm-8:00pm" },
    ],
  },
  {
    name: "QMS dojo",
    venue: "Queen Margaret's School",
    address: "660 Brownsey Ave, Duncan, BC",
    mapsUrl: "https://maps.app.goo.gl/R89Y9P64WRW4AZmg9",
    classes: [{ day: "Wednesday", level: "All levels", time: "6:00pm-8:00pm" }],
  },
] as const;

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M12 21s7-5.8 7-11a7 7 0 1 0-14 0c0 5.2 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="m7 17 10-10" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export default function Locations() {
  return (
    <main className="text-[var(--foreground)]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black border-b border-gold-600/20 py-12 md:py-16">
        <div className="container mx-auto max-w-9/10 xl:max-w-8/10 px-4">
          <h1 className="max-w-4xl text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[0.03em] text-gold-500 font-serif">
            Locations
          </h1>
          <div className="w-20 h-0.5 opacity-80 bg-gold-500 my-6" />
          <p className="max-w-3xl text-stone-300 text-sm md:text-base leading-relaxed">
            Our locations are designed to provide a safe and welcoming
            environment for students of all levels, focusing on the principles
            of classical Budo and practical application. Whether you are a
            beginner or an experienced practitioner, our instructors provide
            personalized guidance to help you achieve your martial arts goals.
          </p>
        </div>
      </section>

      <section className="py-8 lg:py-16 bg-[var(--surface-muted)]">
        <div className="container mx-auto max-w-9/10 xl:max-w-8/10 px-4">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {dojos.map((dojo) => (
              <article
                key={dojo.name}
                className="flex h-full flex-col rounded-2xl border border-[var(--border-subtle)]/80 p-6 bg-white shadow-[0_20px_40px_-30px_rgba(0,0,0,0.45)]"
              >
                <h2 className="text-xl font-serif font-semibold text-gold-600 md:text-2xl">
                  {dojo.name}
                </h2>

                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="mt-0.5 text-gold-700">
                      <LocationIcon />
                    </span>
                    <p>
                      <span className="block font-medium text-neutral-800">
                        {dojo.venue}
                      </span>
                      <span>{dojo.address}</span>
                    </p>
                  </div>

                  <a
                    href={dojo.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gold-700 transition-colors hover:text-gold-600"
                  >
                    Get directions
                    <ArrowIcon />
                  </a>
                </div>

                <div className="mt-6 rounded-xl border border-[var(--border-subtle)] bg-white/50 p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-700">
                    <span className="text-gold-700">
                      <ClockIcon />
                    </span>
                    Weekly schedule
                  </div>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    {dojo.classes.map((item) => (
                      <li
                        key={`${dojo.name}-${item.day}`}
                        className="flex items-start justify-between gap-3"
                      >
                        <span className="font-medium text-neutral-900">
                          {item.day}
                        </span>
                        <span className="text-right">
                          <span className="block text-xs uppercase tracking-wide text-neutral-500">
                            {item.level}
                          </span>
                          <span>{item.time}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12 mb-4 lg:mb-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-budokai-dark text-gold-500 rounded-full hover:bg-gold-500 hover:text-white transition-all font-bold tracking-wide text-sm lg:text-base border border-gold-500/30 shadow-xl shadow-budokai-dark/10"
            >
              Book a Free Trial Class
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
