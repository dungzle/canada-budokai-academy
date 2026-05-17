import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Canada Budokai Academy",
  description:
    "Get in touch with Canada Budokai Academy. Send us your questions and inquiries.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
