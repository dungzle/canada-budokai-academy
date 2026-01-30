import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Philosophy",
  description: "Our Philosophy",
};

export default function OurPhilosophy() {
  return (
    <main className="bg-budokai-dark text-white py-8">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
        <div className="container mx-auto px-6 py-20 relative">
          <div className="inline-flex items-center gap-2 border border-gold-600/50 text-gold-600 text-md tracking-[0.4em] uppercase font-bold rounded-full px-4 py-1.5 bg-black/40">
            Our Philosophy
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight uppercase">
            Budo as a Way of Life.
            <span className="block text-gold-600">
              Ethics Before Competition.
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-stone-300 text-base md:text-lg leading-relaxed">
            Classical training is rooted in combat ethics rather than sport. It
            shapes character, discipline, and respect, framing martial arts as a
            lifelong path.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8 text-stone-300 leading-relaxed">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Budo Foundation
              </h2>
              <p className="mt-3">
                “Bu” means martial, “Do” means way. Budo is the spiritual
                foundation of our training and the ethical code that guides
                every technique and decision.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Whole-Person Development
              </h2>
              <p className="mt-3">
                We cultivate mental, physical, and spiritual strength through
                diligent practice, discipline, and humility. Training is a path
                of refinement.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Ichi Go Ichi Ki
              </h2>
              <p className="mt-3">
                “Now is the last time, now is the only time.” Classical martial
                arts remind us that every moment is precious and demands full
                presence and responsibility.
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
                Principles
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-3 text-stone-300 text-sm">
                <li>Humility</li>
                <li>Compassion</li>
                <li>Honour</li>
                <li>Loyalty</li>
                <li>Patience</li>
                <li>Gratitude</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
                The Way
              </h3>
              <p className="mt-4 text-stone-300 text-sm leading-relaxed">
                The hard work, repetition, and lifetime of practice are not just
                for skill, but for wisdom—learning to live with purpose and
                integrity.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
