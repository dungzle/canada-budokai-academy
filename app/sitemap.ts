import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site-url";

export const revalidate = false;

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
  "": { changeFrequency: "weekly", priority: 1 },
  "/about/our-philosophy": { changeFrequency: "yearly", priority: 0.7 },
  "/about/our-practice": { changeFrequency: "yearly", priority: 0.7 },
  "/about/instructors": { changeFrequency: "yearly", priority: 0.7 },
  "/about/dnbk": { changeFrequency: "yearly", priority: 0.6 },
  "/locations": { changeFrequency: "weekly", priority: 0.95 },
  "/faq": { changeFrequency: "monthly", priority: 0.85 },
  "/contact": { changeFrequency: "monthly", priority: 0.85 },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  if (!siteUrl) {
    return [];
  }

  return routes.map((route) => ({
    ...routeSeoHints[route],
    url: `${siteUrl}${route}`,
  }));
}
