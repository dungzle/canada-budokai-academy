import { Metadata } from "next";

import { SHARED_OPEN_GRAPH, SHARED_TWITTER } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us - Karate Dojos in Victoria BC & Duncan BC",
  description:
    "Contact Canada Budokai Academy for Karate Victoria BC and Duncan BC class inquiries, schedules, and free trial booking.",
  keywords: [
    "karate victoria bc",
    "martial arts victoria bc",
    "karate duncan bc",
    "martial arts duncan bc",
    "karate classes victoria",
    "karate classes duncan",
    "canada budokai academy contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    ...SHARED_OPEN_GRAPH,
    title: "Contact Us - Karate Dojos in Victoria BC & Duncan BC",
    description:
      "Contact Canada Budokai Academy for Karate Victoria BC and Duncan BC class inquiries and free trial booking.",
    url: "/contact",
  },
  twitter: {
    ...SHARED_TWITTER,
    title: "Contact Us - Karate Dojos in Victoria BC & Duncan BC",
    description:
      "Contact Canada Budokai Academy for class inquiries in Victoria BC and Duncan BC.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
