import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site-url";

export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: siteUrl ?? undefined,
    sitemap: siteUrl ? `${siteUrl}/sitemap.xml` : undefined,
  };
}
