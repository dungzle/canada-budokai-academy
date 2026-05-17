import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Practice | Canada Budokai Academy",
  description:
    "A complete, lineage-based martial arts system rooted in traditional Budo.",
};

export default function OurPractice() {
  return (
    <main className="text-[var(--foreground)]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black border-b border-gold-600/20 py-12 md:py-16">
        <div className="container mx-auto max-w-9/10 xl:max-w-8/10 px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[0.03em] text-gold-500 font-serif">
            Our Practice
          </h1>

          <div className="w-20 h-0.5 opacity-80 bg-gold-500 my-6" />

          {/* Clear, student-focused introduction */}
          <p className="max-w-3xl text-stone-300 text-sm md:text-base leading-relaxed">
            We teach a complete, classical martial arts system rooted in
            traditional Budo. Training goes beyond learning techniques or a
            single style. Students study how martial arts function as practical
            self-defense, disciplined training, and a lifelong path of personal
            development.
          </p>

          <p className="mt-3 max-w-3xl text-stone-300 text-sm md:text-base leading-relaxed">
            Drawing from Chinese, Okinawan, and Japanese traditions, our
            curriculum integrates striking, grappling, weapons, internal
            practices, and philosophy into one coherent system. The goal is not
            competition, but the development of skill, judgment, awareness, and
            character.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-8 lg:py-16 bg-[var(--surface-muted)]">
        <div className="container mx-auto max-w-9/10 xl:max-w-8/10 px-4">
          <div className="grid gap-16 lg:grid-cols-[2fr_0.5fr]">
            {/* MAIN COLUMN */}
            <div className="space-y-12 leading-relaxed text-neutral-600">
              <div>
                <h2 className="text-xl md:text-2xl font-serif font-semibold text-neutral-900">
                  Core System
                </h2>
                <div className="h-px w-12 border-t border-gold-500 my-4" />
                <p>
                  Our foundation is Shorinji-ryu Karate-do, an open-hand system
                  influenced by Chinese, Okinawan, and Japanese traditions.
                  Training emphasizes not only physical technique, but also
                  strategy, ethics, legal considerations, and scientific
                  principles that govern effective self-defense.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-serif font-semibold text-neutral-900">
                  Classical Disciplines
                </h2>
                <div className="h-px w-12 border-t border-gold-500 my-4" />
                <p>
                  Students are exposed to a range of classical disciplines that
                  complement the core system. These include Meibukan Goju-ryu
                  Karate-do, Daito-ryu Aki-jujitsu for close-range control and
                  grappling, Kobujutsu for traditional weapons training, and
                  internal practices such as Da Jia Tai Chi Chuan, Chi Kung, and
                  Bagua Zhang.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-serif font-semibold text-neutral-900">
                  Complete Training
                </h2>
                <div className="h-px w-12 border-t border-gold-500 my-4" />
                <p>
                  Training includes kata study, applied self-defense, controlled
                  partner work, strategic and tactical principles, and
                  meditation. Rather than relying on fixed techniques or a
                  single style, students develop adaptable skills that can be
                  applied across situations while maintaining calm awareness and
                  control.
                </p>
              </div>
            </div>

            {/* ASIDE */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--background)] p-6 shadow-md">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gold-500">
                  Disciplines
                </h3>
                <ul className="mt-4 space-y-3 text-neutral-600 text-sm">
                  <li>Shorinji-ryu Karate-do</li>
                  <li>Meibukan Goju-ryu Karate-do</li>
                  <li>Daito-ryu Aki-jujitsu</li>
                  <li>Kobujutsu (classical weapons)</li>
                  <li>Da Jia Tai Chi Chuan</li>
                  <li>Chi Kung &amp; Bagua Zhang</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
