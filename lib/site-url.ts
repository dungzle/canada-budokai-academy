const LOCAL_DEV_URL = "http://localhost:3000";
let hasWarnedMissingSiteUrl = false;

interface SiteUrlOptions {
  requireInProduction?: boolean;
}

export function getSiteUrl(options: { requireInProduction: true }): string;
export function getSiteUrl(options?: SiteUrlOptions): string | undefined;
export function getSiteUrl(options: SiteUrlOptions = {}): string | undefined {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");

  if (envUrl) {
    return envUrl;
  }

  if (!hasWarnedMissingSiteUrl) {
    hasWarnedMissingSiteUrl = true;
    console.warn(
      "NEXT_PUBLIC_SITE_URL is missing. Set it for correct canonical, robots, sitemap, and schema URLs.",
    );
  }

  if (process.env.NODE_ENV !== "production") {
    return LOCAL_DEV_URL;
  }

  if (options.requireInProduction) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL is required in production for canonical, robots, sitemap, and schema URLs.",
    );
  }

  return undefined;
}
