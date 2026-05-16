import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Philosophy | Canada Budokai Academy",
  description:
    "Our philosophy is rooted in traditional Budo, emphasizing ethical practice, whole-person development, and lifelong discipline.",
};

export default function OurPhilosophy() {
  return (
    <main className="text-[var(--foreground)]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-budokai-dark border-b border-gold-600/20">
        <div className="container mx-auto px-6 py-16 md:py-20 relative">
          <div className="max-w-5xl mx-auto">
            <h1 className="max-w-4xl text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[0.03em] text-gold-500 font-serif">
              Our Philosophy
            </h1>

            <div className="w-20 h-1 bg-gold-500 my-6" />

            <p className="max-w-3xl text-stone-300 text-sm md:text-base leading-relaxed">
              Our philosophy is rooted in Budo, the martial way, where
              disciplined practice develops character, awareness, and
              responsibility as a lifelong path.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-14 leading-relaxed text-neutral-600">
            {/* BUDO */}
            <div>
              <h2 className="text-xl md:text-2xl font-serif font-semibold text-neutral-900">
                Budo as a Way of Life
              </h2>
              <div className="border-t border-gold-500 mt-3 mb-4 w-12" />
              <p>
                The philosophy of Canada Budokai Academy is rooted in{" "}
                <em>budo</em>, the “martial way.” More than physical technique,
                budo provides an ethical framework that guides how martial skill
                is developed and how it is carried into daily life. Classical
                martial arts are practiced with an awareness of both combat and
                responsibility, emphasizing character, restraint, and respect
                rather than competition.
              </p>
              <p className="mt-4">
                Through sustained practice, students are challenged to confront
                limitation, uncertainty, and mortality. This perspective
                cultivates discipline, humility, and a deeper appreciation for
                life and the choices one makes both on and off the training
                floor.
              </p>
            </div>

            {/* PRACTICE */}
            <div>
              <h2 className="text-xl md:text-2xl font-serif font-semibold text-neutral-900">
                Philosophy in Practice
              </h2>
              <div className="border-t border-gold-500 mt-3 mb-4 w-12" />
              <p>
                The aim of training is the development of the whole person:
                mind, body, and spirit. Physical conditioning, mental focus, and
                ethical conduct are cultivated together through disciplined
                practice and repetition. Progress is not measured by rank alone,
                but by the refinement of character, self-awareness, and the
                ability to act with composure and integrity under pressure.
              </p>
              <p className="mt-4">
                At Canada Budokai Academy, this development is guided through
                the classical framework of <em>Nin</em>, <em>Shu</em>, and{" "}
                <em>Cho</em>, a progression that leads the student from
                endurance, through disciplined refinement, and ultimately toward
                transcendence.
              </p>
            </div>

            {/* NIN */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="text-7xl text-gold-600 min-w-[96px]">忍</div>
              <div>
                <h3 className="text-sm uppercase font-semibold tracking-[0.3em] text-neutral-900">
                  Nin — Endure
                </h3>
                <p className="mt-3">
                  Nin represents the ability to endure hardship with composure.
                  Through demanding training and sustained effort, students
                  develop resilience, patience, and inner strength that form the
                  foundation of discipline in both martial practice and life.
                </p>
              </div>
            </div>

            {/* SHU */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="text-7xl text-gold-600 min-w-[96px]">修</div>
              <div>
                <h3 className="text-sm uppercase font-semibold tracking-[0.3em] text-neutral-900">
                  Shu — Train
                </h3>
                <p className="mt-3">
                  Shu emphasizes refinement through repetition and study.
                  Technique, posture, and mindset are continually polished—not
                  as an end goal, but as an ongoing process of correction,
                  learning, and growth.
                </p>
              </div>
            </div>

            {/* CHO */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="text-7xl text-gold-600 min-w-[96px]">超</div>
              <div>
                <h3 className="text-sm uppercase font-semibold tracking-[0.3em] text-neutral-900">
                  Cho — Transcend
                </h3>
                <p className="mt-3">
                  Cho reflects the stage where training moves beyond form and
                  ego. Through long-term practice, martial study becomes
                  inseparable from daily life, allowing the practitioner to act
                  with clarity, restraint, and purpose in all situations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
