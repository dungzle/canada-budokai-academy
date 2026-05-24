import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl({ requireInProduction: true });

const routes = [
  "",
  "/about/our-philosophy",
  "/about/our-practice",
  "/about/instructors",
  "/about/dnbk",
  "/locations",
  "/faq",
  "/contact",
] as const;

const routeSeoHints: Record<
  (typeof routes)[number],
  {
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }
> = {
  "": { changeFrequency: "monthly", priority: 1 },
  "/about/our-philosophy": { changeFrequency: "yearly", priority: 0.7 },
  "/about/our-practice": { changeFrequency: "yearly", priority: 0.7 },
  "/about/instructors": { changeFrequency: "yearly", priority: 0.7 },
  "/about/dnbk": { changeFrequency: "yearly", priority: 0.6 },
  "/locations": { changeFrequency: "monthly", priority: 0.9 },
  "/faq": { changeFrequency: "monthly", priority: 0.8 },
  "/contact": { changeFrequency: "monthly", priority: 0.8 },
};

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    ...routeSeoHints[route],
    url: `${siteUrl}${route}`,
  }));
}
