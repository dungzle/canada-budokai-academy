import { Metadata } from "next";
import Image from "next/image";

import ActionButton from "@/components/ui/ActionButton";
import { SHARED_OPEN_GRAPH, SHARED_TWITTER } from "@/lib/seo";

export const metadata: Metadata = {
  title: "The Dai Nippon Butoku Kai",
  description:
    "Explore the history and philosophy of the Dai Nippon Butoku Kai and how its traditional Budo values guide our Karate instruction.",
  alternates: {
    canonical: "/about/dnbk",
  },
  openGraph: {
    ...SHARED_OPEN_GRAPH,
    title: "The Dai Nippon Butoku Kai",
    description:
      "Explore the history and philosophy of the Dai Nippon Butoku Kai and how its traditional Budo values guide our Karate instruction.",
    url: "/about/dnbk",
  },
  twitter: {
    ...SHARED_TWITTER,
    title: "The Dai Nippon Butoku Kai",
    description:
      "Explore the history and philosophy of the Dai Nippon Butoku Kai and how its traditional Budo values guide our Karate instruction.",
  },
};

export default function DNBK() {
  return (
    <div className="text-[var(--foreground)]">
      <section className="relative overflow-hidden bg-black border-b border-gold-600/20 py-12 md:py-16">
        <div className="container mx-auto max-w-9/10 xl:max-w-8/10 px-4">
          <h1 className="max-w-4xl text-3xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-[0.03em] text-gold-500">
            Dai Nippon Butoku Kai
          </h1>
          <div className="w-20 h-0.5 opacity-80 bg-gold-500 my-6" />
          <p className="max-w-5xl text-stone-300 text-sm md:text-base leading-relaxed">
            An established Japanese martial arts authority dedicated to
            preserving the virtues and traditions of classical Budo.
          </p>
        </div>
      </section>

      <section className="py-8 lg:py-16 bg-[var(--background)] border-t border-[var(--border-subtle)]">
        <div className="container mx-auto max-w-9/10 xl:max-w-8/10 px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-neutral-900">
            History of the Dai Nippon Butoku Kai
          </h2>
          <div className="border-t border-gold-500 mt-3 mb-4" />
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7 space-y-4 text-neutral-600 leading-relaxed">
              <p>
                The Dai Nippon Butoku Kai was officially founded in 1895 in
                Kyoto under Imperial patronage and quickly became Japan’s
                national authority for martial arts. Before World War II, it
                grew to more than three million members and recognized tens of
                thousands of qualified instructors across many disciplines.
                During this period, DNBK served as the highest governing body
                for Japanese Budo.
              </p>
              <p>
                During the war, DNBK came under direct control of the government
                and military, leading to the loss of its original independence.
                Following Japan’s defeat in 1945, Allied occupation authorities
                ordered the organization to dissolve in 1946, confiscating its
                property and removing its leadership.
              </p>
              <p>
                In 1953, after Japan regained sovereignty, DNBK was
                reestablished and returned to its original ideals, focusing on
                peace, education, and cultural preservation. In the decades that
                followed, it expanded internationally, welcoming qualified
                practitioners from around the world while remaining committed to
                preserving the true spirit and traditions of classical Japanese
                Budo.
              </p>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end">
              <div className="w-full max-w-2xl">
                <Image
                  src="/kyoto-butokuden.jpg"
                  alt="Butokuden - Kyoto, Japan"
                  width={1200}
                  height={1200}
                  sizes="(min-width: 1024px) 50vw, (min-width: 640px) 60vw, 100vw"
                  className="w-full h-auto rounded-2xl object-cover shadow-lg ring-1 ring-black/5"
                />
                <p className="mt-3 text-sm text-neutral-500 text-center">
                  Kyoto Budo Center (former Butokuden hall)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-16 bg-[var(--surface-muted)]">
        <div className="container mx-auto max-w-9/10 xl:max-w-8/10 px-4">
          <div className="space-y-6 text-neutral-600 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-neutral-900 mb-4">
              Mission and Philosophy
            </h2>
            <div className="border-t border-gold-500 mb-6" />
            <p>
              The Dai Nippon Butoku Kai is devoted to the preservation and
              transmission of classical Japanese Budo. Its mission is to
              safeguard traditional martial disciplines through education,
              research, and the maintenance of proper standards for instruction
              and conduct. Through these efforts, DNBK seeks to ensure the
              accurate continuation of martial culture and the integrity of Budo
              traditions.
            </p>
            <p>
              The Dai Nippon Butoku Kai regards Budo as a lifelong path of
              disciplined training that cultivates both technical skill and
              moral character. Practice emphasizes respect, discipline,
              responsibility, and self-control, recognizing that true martial
              ability must be grounded in proper conduct. By valuing
              demonstrated ability and dedication beyond lineage, DNBK upholds
              the spirit of classical Budo and supports practitioners in
              carrying these traditions forward with sincerity and purpose.
            </p>
            <div className="mt-8 mb-2 text-center">
              <ActionButton
                href="https://dnbk.org/"
                variant="dark"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 font-bold tracking-widest"
              >
                Learn More
              </ActionButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
