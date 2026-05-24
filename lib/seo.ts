export const SHARED_OPEN_GRAPH = {
  type: "website" as const,
  locale: "en_CA",
  siteName: "Canada Budokai Academy",
  images: [
    {
      url: "/opengraph-image",
      width: 1200,
      height: 630,
      alt: "Traditional Karate in Victoria and Duncan, BC | Canada Budokai Academy",
    },
  ],
};

export const SHARED_TWITTER = {
  card: "summary_large_image" as const,
  images: ["/twitter-image"],
};
