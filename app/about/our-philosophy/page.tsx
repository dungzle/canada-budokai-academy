import { Metadata } from "next";

import ActionButton from "@/components/ui/ActionButton";
import { SHARED_OPEN_GRAPH, SHARED_TWITTER } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Budo Philosophy Behind Our Karate Training",
  description:
    "Learn the Budo philosophy that guides our traditional Karate training in Victoria and Duncan, BC, with a focus on discipline, ethics, and lifelong development.",
  alternates: {
    canonical: "/about/our-philosophy",
  },
  openGraph: {
    ...SHARED_OPEN_GRAPH,
    title: "Budo Philosophy Behind Our Karate Training",
    description:
      "Learn the Budo philosophy that guides our traditional Karate training in Victoria and Duncan, BC, with a focus on discipline, ethics, and lifelong development.",
    url: "/about/our-philosophy",
  },
  twitter: {
    ...SHARED_TWITTER,
    title: "Budo Philosophy Behind Our Karate Training",
    description:
      "Learn the Budo philosophy that guides our traditional Karate training in Victoria and Duncan, BC, with a focus on discipline, ethics, and lifelong development.",
  },
};

export default function OurPhilosophy() {
  return (
    <div className="text-[var(--foreground)]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black border-b border-gold-600/20 py-8 lg:py-16 ">
        <div className="container mx-auto max-w-9/10 xl:max-w-8/10 px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[0.03em] text-gold-500 font-serif">
            Our Philosophy
          </h1>

          <div className="w-20 h-0.5 opacity-80 bg-gold-500 my-6" />

          <p className="max-w-4xl text-stone-300 text-sm md:text-base leading-relaxed">
            Our philosophy is rooted in Budo, the martial way, where disciplined
            practice develops character, awareness, and responsibility as a
            lifelong path.
          </p>
        </div>
      </section>

      <section className="py-8 lg:py-16 bg-[var(--surface-muted)]">
        <div className="container mx-auto max-w-9/10 xl:max-w-8/10 px-4">
          <div className="space-y-14 leading-relaxed text-neutral-600">
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
                endurance, through disciplined training, and ultimately toward
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
                  Shu represents the disciplined refinement of the self through
                  rigorous training. Each repetition, correction, and return to
                  the fundamentals sharpens the body, focuses the mind, and
                  polishes the character. Through training, the practitioner
                  learns that mastery is not a destination, but a lifelong path
                  of improvement.
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

            <div className="mb-8 lg:mb-0 flex justify-center">
              <ActionButton href="/about/our-practice" variant="dark">
                Explore Our Practice
              </ActionButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
