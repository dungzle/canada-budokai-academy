import type { Metadata } from "next";

import FAQSection from "@/components/home/FAQSection";
import HeroSection from "@/components/home/HeroSection";
import LocationsCTASection from "@/components/home/LocationsCTASection";
import PhilosophySection from "@/components/home/PhilosophySection";
import PracticeSection from "@/components/home/PracticeSection";
import { SHARED_OPEN_GRAPH, SHARED_TWITTER } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();
const facebookUrl = "https://www.facebook.com/CanadaBudokaiAcademy";

export const metadata: Metadata = {
  title: {
    absolute:
      "Karate Victoria BC & Duncan BC | Canada Budokai Academy",
  },
  description:
    "Canada Budokai Academy offers traditional martial arts classes in Victoria BC and Duncan BC for youth and adults, with beginner-friendly training and free trial options.",
  keywords: [
    "karate victoria bc",
    "karate duncan bc",
    "martial arts victoria bc",
    "martial arts duncan bc",
    "karate vancouver island",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    ...SHARED_OPEN_GRAPH,
    title: "Karate Victoria BC & Duncan BC | Canada Budokai Academy",
    description:
      "Canada Budokai Academy offers traditional martial arts classes in Victoria BC and Duncan BC for youth and adults, with beginner-friendly training and free trial options.",
    url: "/",
  },
  twitter: {
    ...SHARED_TWITTER,
    title: "Karate Victoria BC & Duncan BC | Canada Budokai Academy",
    description:
      "Traditional Karate and martial arts classes in Victoria and Duncan, BC for youth and adults.",
  },
};

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["SportsClub", "Organization"],
        "@id": siteUrl ? `${siteUrl}/#organization` : "#organization",
        name: "Canada Budokai Academy",
        description:
          "Traditional Karate and classical martial arts training in Victoria and Duncan, BC.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Victoria",
          addressRegion: "BC",
          postalCode: "V8P 5C2",
          addressCountry: "CA",
        },
        areaServed: ["Victoria, BC", "Duncan, BC", "Vancouver Island, BC"],
        sport: ["Karate", "Martial Arts"],
        keywords:
          "karate victoria bc, martial arts victoria bc, karate duncan bc, martial arts duncan bc",
        url: siteUrl,
        image: siteUrl ? `${siteUrl}/dojo-logo.webp` : "/dojo-logo.webp",
        logo: siteUrl ? `${siteUrl}/dojo-logo.webp` : "/dojo-logo.webp",
        sameAs: [facebookUrl],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            url: siteUrl ? `${siteUrl}/contact` : "/contact",
            availableLanguage: ["en"],
          },
        ],
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <div>
        <HeroSection />
        <PhilosophySection />
        <PracticeSection />
        <FAQSection />
        <LocationsCTASection />
      </div>
    </div>
  );
}
