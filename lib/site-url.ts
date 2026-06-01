const LOCAL_DEV_URL = "http://localhost:3000";
let hasWarnedMissingSiteUrl = false;
let hasWarnedInvalidSiteUrl = false;

interface SiteUrlOptions {
  requireInProduction?: boolean;
}

function normalizeSiteUrl(rawUrl: string): string | undefined {
  try {
    const parsed = new URL(rawUrl);

    // Keep one canonical origin: lower-case hostname, https in production,
    // and no path/query/hash segments that could cause redirect variants.
    parsed.hostname = parsed.hostname.toLowerCase();
    parsed.hash = "";
    parsed.search = "";
    parsed.pathname = "";

    if (process.env.NODE_ENV === "production" && parsed.protocol === "http:") {
      parsed.protocol = "https:";
    }

    return parsed.origin;
  } catch {
    return undefined;
  }
}

export function getSiteUrl(options: { requireInProduction: true }): string;
export function getSiteUrl(options?: SiteUrlOptions): string | undefined;
export function getSiteUrl(options: SiteUrlOptions = {}): string | undefined {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (envUrl) {
    const normalizedUrl = normalizeSiteUrl(envUrl);

    if (normalizedUrl) {
      return normalizedUrl;
    }

    if (!hasWarnedInvalidSiteUrl) {
      hasWarnedInvalidSiteUrl = true;
      console.warn(
        "NEXT_PUBLIC_SITE_URL is invalid. Use an absolute URL like https://example.com.",
      );
    }
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
