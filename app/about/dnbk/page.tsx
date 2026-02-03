import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Dai Nippon Butoku-kai",
  description:
    "History, mission, and philosophy of the Dai Nippon Butoku Kai (DNBK).",
};

export default function DNBK() {
  return (
    <main className="text-[var(--foreground)]">
      <section className="relative overflow-hidden bg-budokai-dark border-b border-gold-600/20">
        <div className="container mx-auto px-6 py-24 md:py-28 relative">
          <span className="inline-flex items-center border border-gold-600/50 text-gold-600 text-xs tracking-[0.4em] uppercase font-semibold rounded-full px-4 py-1.5 bg-black/40 backdrop-blur">
            Authority • Tradition • Stewardship
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-[0.03em] text-gold-600">
            Dai Nippon Butoku Kai
          </h1>
          <div className="w-24 h-1 bg-gold-600 mt-6" />
          <p className="mt-6 max-w-3xl text-stone-300 text-base md:text-lg leading-relaxed">
            An established Japanese martial arts authority dedicated to
            preserving the virtues and traditions of classical Budo.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[var(--background)] border-t border-[var(--border-subtle)]">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6 space-y-4 text-neutral-600 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-neutral-900">
                History of the Dai Nippon Butoku Kai
              </h2>
              <div className="border-t border-gold-500 mt-3 mb-4" />
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
            <div className="lg:col-span-6 flex lg:justify-end">
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

      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container mx-auto px-6">
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
            <div className="pt-2">
              <a
                href="https://dnbk.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-gold-600/30 bg-budokai-dark px-10 py-4 text-sm font-bold uppercase tracking-widest text-gold-600 shadow-xl shadow-budokai-dark/10 transition-all hover:bg-gold-600 hover:text-white"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
