import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Instructors | Canada Budokai Academy",
  description:
    "Meet our instructors—dedicated teachers rooted in classical Budo and lifelong study.",
};

export default function Instructors() {
  return (
    <main className="text-[var(--foreground)]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black border-b border-gold-600/20 py-12 md:py-16">
        <div className="container mx-auto max-w-9/10 xl:max-w-8/10 px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[0.03em] text-gold-500 font-serif">
            Instructors
          </h1>
          <div className="w-20 h-0.5 opacity-80 bg-gold-500 my-6" />
          <p className="max-w-3xl text-stone-300 text-sm md:text-base leading-relaxed">
            Our instructors are dedicated teachers and lifelong students,
            committed to preserving classical Budo through disciplined training,
            study, and personal example.
          </p>
        </div>
      </section>

      {/* INSTRUCTOR BIO */}
      <section className="py-8 lg:py-16 bg-[var(--surface-muted)]">
        <div className="container mx-auto max-w-9/10 xl:max-w-8/10 px-4">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-9 space-y-4 leading-relaxed text-neutral-600">
              <h2 className="text-2xl font-serif font-semibold text-neutral-900">
                Sensei Aaron Usatch
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Sensei Aaron Usatch is the Founder and Head Instructor of the Canada Budokai
                Academy. He began his martial arts training in 1994 and has
                remained a dedicated student and practitioner ever since.
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
                belt) in Shorinji-ryu Karate-do and <strong>Sandan</strong> (3rd
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

            <div className="flex lg:col-span-3 lg:justify-end">
              <Image
                src="/sensei-photo.png"
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

      <section className="py-8 lg:py-16">
        <div className="container mx-auto max-w-9/10 xl:max-w-8/10 px-4">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* TEXT */}
            <div className="lg:col-span-9 space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-neutral-900">
                Senpai Viet Le
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Senpai Viet Le is the Assistant Instructor of the CARSA Honbu
                Dojo. He began his martial arts training in 2017 as part of the
                first generation of students under Sensei Usatch and has
                remained a dedicated student and practitioner ever since.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                He currently holds the an international rank of Nidan (2nd
                degree black belt) in Shorinji-ryu Karate-do.
              </p>
            </div>

            <div className="flex lg:col-span-3 lg:justify-end">
              Photo to be added
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-16 bg-[var(--surface-muted)]">
        <div className="container mx-auto max-w-9/10 xl:max-w-8/10 px-4">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-9 space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-neutral-900">
                Senpai Lucas Boas
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Senpai Lucas Boas is the Assistant Instructor for the Vimy Dojo.
                He began his martial arts journey at a young age, growing up
                with his father serving as a Judo Sensei, which instilled in him
                an early appreciation for discipline, respect, and traditional
                martial arts training.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Senpai Boas began training in Shorinji-ryu Karate-do in the
                1990s and has remained dedicated to the discipline, structure,
                and lifelong study of preserving traditional Karate. He is
                deeply passionate about classical martial arts training and
                values the philosophy, technical precision, and personal
                development that accompany authentic traditional practice.
                Through his continued training and instruction, he strives to
                uphold the spirit and standards of traditional Budo while
                supporting the growth and development of students within the
                dojo.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                He currently holds the an international rank of Shodan (1st
                degree black belt) in Shorinji-ryu Karate-do.
              </p>
            </div>

            <div className="flex lg:col-span-3 lg:justify-end">
              <Image
                src="/senpai-luke.jpeg"
                alt="Senpai Lucas Boas"
                width={1200}
                height={1200}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 60vw"
                className="w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[280px] h-auto rounded-2xl object-cover shadow-lg ring-1 ring-black/5"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
