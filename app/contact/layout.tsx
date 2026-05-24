import { Metadata } from "next";

import { SHARED_OPEN_GRAPH, SHARED_TWITTER } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Canada Budokai Academy. Send us your questions and inquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    ...SHARED_OPEN_GRAPH,
    title: "Contact Us | Canada Budokai Academy",
    description:
      "Get in touch with Canada Budokai Academy. Send us your questions and inquiries.",
    url: "/contact",
  },
  twitter: {
    ...SHARED_TWITTER,
    title: "Contact Us | Canada Budokai Academy",
    description:
      "Get in touch with Canada Budokai Academy. Send us your questions and inquiries.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
