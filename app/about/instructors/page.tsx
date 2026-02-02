import { Metadata } from "next";
import Image from "next/image";
import StoryGallery from "@/components/about/StoryGallery";

export const metadata: Metadata = {
  title: "Instructors | Canada Budokai Academy",
  description:
    "Meet our instructors—dedicated teachers rooted in classical Budo and lifelong study.",
};

export default function Instructors() {
  return (
    <main className="text-[var(--foreground)]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-budokai-dark border-b border-gold-600/20">
        <div className="container mx-auto px-6 py-24 md:py-28 relative">
          <span className="inline-flex items-center border border-gold-600/50 text-gold-600 text-xs tracking-[0.4em] uppercase font-semibold rounded-full px-4 py-1.5 bg-black/40 backdrop-blur">
            Classical Budo Instructors
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[0.03em] text-gold-600 font-serif">
            Instructors
          </h1>

          <div className="w-24 h-1 bg-gold-600 mt-6" />

          <p className="mt-6 max-w-3xl text-stone-300 text-base md:text-lg leading-relaxed">
            Our instructors are dedicated teachers and lifelong students,
            committed to preserving classical Budo through disciplined training,
            study, and personal example.
          </p>
        </div>
      </section>

      {/* INSTRUCTOR BIO */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* TEXT */}
            <div className="lg:col-span-9 space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-neutral-900">
                Sensei Aaron Usatch
              </h2>

              <p className="text-neutral-600 text-sm leading-relaxed">
                Sensei Aaron Usatch is the Head Instructor of the CARSA Shorinji
                Ryu Academy at the University of Victoria and an Assistant
                Instructor at the Shaolin-Tzu Martial Arts Academy. He began his
                martial arts training in 1994 and has remained a dedicated
                student and practitioner ever since.
              </p>

              <p className="text-neutral-600 text-sm leading-relaxed">
                Known as a committed teacher and lifelong learner, Sensei Usatch
                has traveled extensively throughout Canada, the United States,
                Japan, and Okinawa to study Karate and classical martial arts
                under many respected instructors. Through this experience, he
                has come to believe that Karate is not confined to rigid styles,
                but is built upon shared principles — much like music, where
                many expressions arise from the same foundation.
              </p>

              <p className="text-neutral-600 text-sm leading-relaxed">
                He holds the Shogō title of <strong>Renshi</strong> (Polished
                Teacher), a Martial Arts Title of Cardinal Honour awarded by the
                <strong> Dai Nippon Butoku Kai</strong>, along with an
                international rank of <strong>Godan</strong> (5th degree black
                belt) in Shorinji-Ryu Karate-Do and <strong>Sandan</strong> (3rd
                degree black belt) in Ryukyu Hokama Kobujutsu (Okinawan
                weaponry).
              </p>

              <p className="text-neutral-600 text-sm leading-relaxed">
                In addition to traditional martial arts, Sensei Usatch has
                trained and competed in amateur boxing and Tae Kwon Do, further
                informing his understanding of movement, timing, and practical
                application.
              </p>
            </div>

            {/* PORTRAIT */}
            <div className="flex lg:col-span-3 lg:justify-end">
              <Image
                src="/sensei-photo.jpg"
                alt="Sensei Aaron Usatch"
                width={1200}
                height={1200}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 60vw"
                className="w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[280px] h-auto rounded-2xl object-cover shadow-lg ring-1 ring-black/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING & TRAVEL GALLERY */}
      <section className="py-16 md:py-20 bg-[var(--background)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-10">
            <h2 className="text-xl md:text-2xl font-serif font-semibold text-neutral-900">
              Lifelong Study & Travel
            </h2>
            <div className="h-px w-12 bg-gold-500 mt-3 mb-4" />
            <p className="text-neutral-600 text-sm leading-relaxed">
              Training in classical Budo is a lifelong pursuit. Sensei Usatch
              continues to travel and study with instructors across Canada, the
              United States, Japan, and Okinawa, deepening his understanding of
              Karate through direct experience and instruction.
            </p>
          </div>

          <StoryGallery
            stories={[
              {
                images: ["/hanshi-mark-kyoto.jpg"],
                title: "Hanshi Richard Mark",
                intro:
                  "Hanshi Richard Mark in Kyoto, Japan — Sensei Usatch's primary instructor and mentor for over 25 years.",
              },
              {
                images: [
                  "/hanshi-pat-mccarthy.jpg",
                  "/hanshi-pat-mccarthy-hamahiga-island.jpg",
                ],
                title: "Sensei Patrick McCarthy",
                intro:
                  "Training with Hanshi Patrick McCarthy, a leading authority in classical Okinawan Karate",
              },
              {
                images: ["/meibukan-karatedo.jpg"],
                title: "Hanshi Akihito Yagi",
                intro: "Training Meibukan Karate under Hanshi Akihito Yagi",
              },
              {
                images: ["/shihan-dan-antonsen.jpg"],
                title: "Shihan Dan Antonsen",
                intro:
                  "Continuing instruction with Shihan Dan Antonsen to refine technical depth and teaching.",
              },
              {
                images: ["/sensei-receive-godan.jpg"],
                title: "Godan in Kyoto",
                intro:
                  "Receiving Godan in Kyoto, honoring a milestone of dedication and study.",
              },
              {
                images: ["/instructor-of-year.jpg"],
                title: "Instructor of the Year",
                intro:
                  "Recognized as Instructor of the Year — February 2023 at the 28th Winter Training Festival for leadership and service.",
              },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
