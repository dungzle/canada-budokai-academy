import { Metadata } from "next";

import ActionButton from "@/components/ui/ActionButton";
import FacebookIcon from "@/components/ui/FacebookIcon";
import { dojos } from "@/lib/constants";
import { SHARED_OPEN_GRAPH, SHARED_TWITTER } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Karate Victoria BC & Duncan BC | Locations",
  description:
    "Explore Canada Budokai Academy dojo locations and karate class schedules in Victoria BC, Duncan BC, and across Vancouver Island.",
  keywords: [
    "karate victoria bc",
    "martial arts victoria bc",
    "karate duncan bc",
    "martial arts duncan bc",
    "karate vancouver island",
    "dojo victoria",
    "dojo duncan",
    "karate schedule victoria",
    "karate schedule duncan",
    "canada budokai academy locations",
  ],
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    ...SHARED_OPEN_GRAPH,
    title: "Karate Victoria BC & Duncan BC | Locations",
    description:
      "Explore Canada Budokai Academy dojo locations and karate class schedules in Victoria BC, Duncan BC, and across Vancouver Island.",
    url: "/locations",
  },
  twitter: {
    ...SHARED_TWITTER,
    title: "Karate Victoria BC & Duncan BC | Locations",
    description:
      "Explore Canada Budokai Academy dojo locations and karate class schedules in Victoria BC, Duncan BC, and across Vancouver Island.",
  },
};

const siteUrl = getSiteUrl();

const dayToSchemaDay: Record<string, string> = {
  Monday: "https://schema.org/Monday",
  Tuesday: "https://schema.org/Tuesday",
  Wednesday: "https://schema.org/Wednesday",
  Thursday: "https://schema.org/Thursday",
  Friday: "https://schema.org/Friday",
  Saturday: "https://schema.org/Saturday",
  Sunday: "https://schema.org/Sunday",
};

function to24Hour(time: string): string {
  const [timePart, meridiemRaw] = time
    .trim()
    .toLowerCase()
    .split(/\s*(am|pm)$/);

  const meridiem = meridiemRaw?.toLowerCase();
  const [hoursRaw, minutesRaw] = timePart.split(":");

  let hours = Number.parseInt(hoursRaw, 10);
  const minutes = Number.parseInt(minutesRaw ?? "0", 10);

  if (meridiem === "pm" && hours !== 12) {
    hours += 12;
  }

  if (meridiem === "am" && hours === 12) {
    hours = 0;
  }

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0",
  )}`;
}

function toOpeningHoursSpecification(
  classes: readonly { day: string; time: string }[],
) {
  return classes.map((classItem) => {
    const [opens, closes] = classItem.time
      .split("-")
      .map((value) => to24Hour(value));

    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayToSchemaDay[classItem.day] ?? classItem.day,
      opens,
      closes,
    };
  });
}

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
  const organizationId = siteUrl ? `${siteUrl}/#organization` : "#organization";

  const locationsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["SportsClub", "Organization"],
        "@id": organizationId,
        name: "Canada Budokai Academy",
        description:
          "Traditional Karate and classical martial arts training in Victoria and Duncan, BC.",
        keywords:
          "karate victoria bc, martial arts victoria bc, karate duncan bc, martial arts duncan bc",
        url: siteUrl,
        image: siteUrl ? `${siteUrl}/dojo-logo.webp` : "/dojo-logo.webp",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Victoria",
          addressRegion: "BC",
          postalCode: "V8P 5C2",
          addressCountry: "CA",
        },
      },
      ...dojos.map((dojo, index) => {
        return {
          "@type": "SportsActivityLocation",
          "@id": siteUrl
            ? `${siteUrl}/locations#dojo-${index + 1}`
            : `#dojo-${index + 1}`,
          name: `${dojo.name} - Canada Budokai Academy`,
          description: `Traditional Karate classes at ${dojo.venue}.`,
          keywords: `${dojo.city} BC karate, ${dojo.city} BC martial arts, traditional karate classes`,
          sport: ["Karate", "Martial Arts"],
          areaServed: ["Victoria, BC", "Duncan, BC", "Vancouver Island, BC"],
          image: siteUrl ? `${siteUrl}/dojo-logo.webp` : "/dojo-logo.webp",
          parentOrganization: {
            "@id": organizationId,
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: dojo.address.split(",")[0],
            addressLocality: dojo.city,
            addressRegion: "BC",
            addressCountry: "CA",
          },
          openingHoursSpecification: toOpeningHoursSpecification(dojo.classes),
          hasMap: dojo.mapsUrl,
          sameAs: dojo.facebookUrl ? [dojo.facebookUrl] : undefined,
          url: siteUrl ? `${siteUrl}/locations` : "/locations",
        };
      }),
    ],
  };

  return (
    <div className="text-[var(--foreground)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(locationsSchema),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gold-600/20 bg-black py-12 md:py-16">
        <div className="container mx-auto max-w-9/10 px-4 xl:max-w-8/10">
          <h1 className="max-w-4xl font-serif text-3xl font-semibold tracking-[0.03em] text-gold-500 md:text-5xl lg:text-6xl">
            Locations & Schedules
          </h1>

          <div className="my-6 h-0.5 w-20 bg-gold-500 opacity-80" />

          <p className="max-w-5xl text-sm leading-relaxed text-stone-300 md:text-base">
            Our Victoria, BC and Duncan, BC dojos welcome youth and adult
            students of all experience levels, from beginners to experienced
            practitioners, with training rooted in traditional Karate, classical
            martial arts, and the principles of Budo.
          </p>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-[var(--surface-muted)] py-8 lg:py-16">
        <div className="container mx-auto max-w-9/10 px-4 xl:max-w-8/10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {dojos.map((dojo) => (
              <article
                key={dojo.name}
                className="flex h-full flex-col rounded-2xl border border-[var(--border-subtle)]/80 bg-white p-6 shadow-[0_20px_40px_-30px_rgba(0,0,0,0.45)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-serif text-xl font-semibold text-gold-600 md:text-2xl">
                    {dojo.name}
                  </h2>

                  {dojo.facebookUrl && (
                    <a
                      href={dojo.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit the ${dojo.name} Facebook page`}
                      title={`${dojo.name} on Facebook`}
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-gold-700 transition-opacity hover:opacity-70"
                    >
                      <FacebookIcon className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
                    </a>
                  )}
                </div>

                <div className="mt-4">
                  <div className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="mt-0.5 shrink-0 text-gold-700">
                      <LocationIcon />
                    </span>

                    <div>
                      <p>
                        <span className="block font-medium text-neutral-800">
                          {dojo.venue}
                        </span>
                        <span>{dojo.address}</span>
                      </p>

                      <a
                        href={dojo.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 font-semibold text-gold-700 transition-colors hover:text-gold-600"
                      >
                        Get directions
                        <ArrowIcon />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-[var(--border-subtle)] bg-white/50 p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-700">
                    <span className="text-gold-700">
                      <ClockIcon />
                    </span>
                    Weekly schedule
                  </div>

                  {dojo.classes.length > 0 ? (
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
                  ) : (
                    <p className="text-sm text-neutral-700">
                      Please contact us for current class details and
                      availability.
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="border-t border-[var(--border-subtle)] bg-[var(--background)] py-10 lg:py-14">
        <div className="container mx-auto max-w-9/10 px-4 text-center xl:max-w-8/10">
          <p className="mx-auto max-w-5xl text-sm leading-relaxed text-neutral-600 md:text-base">
            Ready to begin? Schedule your free trial class and take the first
            step in your training.
          </p>

          <div className="mt-6 flex justify-center">
            <ActionButton href="/contact">
              Schedule a Free Trial Class
            </ActionButton>
          </div>
        </div>
      </section>
    </div>
  );
}
