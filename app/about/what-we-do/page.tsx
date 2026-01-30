import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do",
  description: "Learn more about us",
};

export default function WhatWeDo() {
  return (
    <main className="bg-budokai-dark text-white py-8">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
        <div className="container mx-auto px-6 py-20 relative">
          <p className="inline-flex items-center gap-2 border border-gold-600 text-gold-600 text-md tracking-[0.4em] uppercase font-bold rounded-full px-4 py-1.5 my-4 bg-black/40">
            What We Do
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight uppercase">
            Traditional Budo.
            <span className="block text-gold-600">
              Complete Martial Arts System.
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-stone-300 text-base md:text-lg leading-relaxed">
            We teach a lineage-based system passed down from the original
            Shaolin Temple in China, through Okinawa and Japan, and now to North
            America. Our curriculum blends internal and external disciplines to
            develop the complete martial artist—mind, body, and spirit.
          </p>
        </div>
      </section>

      <section className="container bg-budokai-dark mx-auto px-6 pb-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8 text-stone-300 leading-relaxed">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Core System
              </h2>
              <p className="mt-3">
                The foundation is Shorinji Ryu Karate-do (open-hand,
                Chinese/Okinawan/Japanese origin). Students learn the
                philosophical, strategic, legal, and scientific aspects of
                martial arts—not just technique.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Classical Disciplines
              </h2>
              <p className="mt-3">
                Our system includes Daito-Ryu Aki-Jujitsu (precursor to modern
                Aikido and Judo), Kobujutsu with authentic weaponry, and
                internal practices such as Da Jia Tai Chi Chuan, Chi Kung, and
                Bagua Zhang.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Complete Training
              </h2>
              <p className="mt-3">
                We emphasize diligent kata study, applied self-defense,
                strategic and tactical combat, and meditation. The result is
                practical, adaptable skill rather than reliance on a single
                style.
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-gold-600 bg-black/40 p-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
                Disciplines
              </h3>
              <ul className="mt-4 space-y-3 text-stone-300 text-sm">
                <li>Shorinji Ryu Karate-do</li>
                <li>Daito-Ryu Aki-Jujitsu</li>
                <li>Kobujutsu (classical weapons)</li>
                <li>Da Jia Tai Chi Chuan</li>
                <li>Chi Kung &amp; Bagua Zhang</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gold-600 bg-black/40 p-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
                Budo Principles
              </h3>
              <p className="mt-4 text-stone-300 text-sm leading-relaxed">
                Training follows the traditional “old ways” with uncompromising
                respect for lineage. Shu Ha Ri guides our path from foundational
                learning to mastery.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
