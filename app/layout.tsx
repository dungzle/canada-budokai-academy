import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import { SHARED_OPEN_GRAPH, SHARED_TWITTER } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site-url";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default:
      "Canada Budokai Academy | Karate & Martial Arts in Victoria BC and Duncan BC",
    template: "%s | Canada Budokai Academy",
  },
  description:
    "Canada Budokai Academy offers traditional Karate in Victoria BC and Duncan BC. Join beginner-friendly martial arts classes for youth and adults across Vancouver Island with free trial options.",
  keywords: [
    "karate victoria bc",
    "martial arts victoria bc",
    "karate duncan bc",
    "martial arts duncan bc",
    "karate vancouver island",
    "martial arts vancouver island",
    "traditional karate victoria",
    "traditional karate duncan",
    "dojo victoria bc",
    "dojo duncan bc",
    "kids karate victoria",
    "adult karate victoria",
    "canada budokai academy",
  ],
  openGraph: {
    ...SHARED_OPEN_GRAPH,
    title:
      "Canada Budokai Academy | Karate & Martial Arts in Victoria BC and Duncan BC",
    description:
      "Train in traditional Karate and martial arts in Victoria BC and Duncan BC with Canada Budokai Academy.",
  },
  twitter: {
    ...SHARED_TWITTER,
    title: "Canada Budokai Academy | Karate in Victoria and Duncan, BC",
    description:
      "Traditional Karate and martial arts classes in Victoria, Duncan, and across Vancouver Island.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-[var(--header-height)]" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
