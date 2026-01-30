import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission",
  description: "Our Mission",
};

export default function OurMission() {
  return (
    <main className="bg-budokai-dark text-white py-8">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
        <div className="container mx-auto px-6 py-20 relative">
          <div className="inline-flex items-center gap-2 border border-gold-600/50 text-gold-600 text-md tracking-[0.4em] uppercase font-bold rounded-full px-4 py-1.5 bg-black/40">
            Our Mission
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight uppercase">
            Preserve Tradition.
            <span className="block text-gold-600">
              Elevate the Next Generation.
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-stone-300 text-base md:text-lg leading-relaxed">
            We preserve classical martial arts in our local community and beyond
            by honoring heritage, upholding tradition, and promoting education
            and service.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8 text-stone-300 leading-relaxed">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                What We Commit To
              </h2>
              <p className="mt-3">
                We deliver the highest standards of classical martial art
                education and maintain the teaching passed down from the masters
                across generations.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Pass It Forward
              </h2>
              <p className="mt-3">
                Our program preserves knowledge, philosophy, and moral precepts
                so that future generations inherit both skill and character.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Whole-Person Growth
              </h2>
              <p className="mt-3">
                We develop each student physically, mentally, and spiritually in
                a respectful environment rooted in discipline and service.
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-gold-600 bg-black/40 p-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
                Mission Pillars
              </h3>
              <ul className="mt-4 space-y-3 text-stone-300 text-sm">
                <li>Preserve classical lineage and tradition</li>
                <li>Educate with integrity and excellence</li>
                <li>Serve community and global Budo culture</li>
                <li>Develop mind, body, and spirit</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gold-600 bg-black/40 p-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
                Training Environment
              </h3>
              <p className="mt-4 text-stone-300 text-sm leading-relaxed">
                We provide a traditional, ethical learning space that reinforces
                discipline, respect, and responsibility in every class.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
