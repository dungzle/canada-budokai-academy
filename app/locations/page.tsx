import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Locations | Canada Budokai Academy",
  description:
    "Discover our dojo locations and class schedules, dedicated to preserving classical Budo through disciplined training and study.",
};

export default function Locations() {
  return (
    <main className="text-[var(--foreground)]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-budokai-dark border-b border-gold-600/20">
        <div className="container mx-auto px-6 py-16 md:py-20 relative">
          <div className="max-w-5xl mx-auto">
            <h1 className="max-w-4xl text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[0.03em] text-gold-500 font-serif">
              Locations
            </h1>

            <div className="w-20 h-1 bg-gold-500 my-6" />

            <p className="max-w-3xl text-stone-300 text-sm md:text-base leading-relaxed">
              Our locations are designed to provide a safe and welcoming
              environment for students of all levels, focusing on the principles
              of classical Budo and practical application. Whether you are a
              beginner or an experienced practitioner, our instructors provide
              personalized guidance to help you achieve your martial arts goals.
            </p>
          </div>
        </div>
      </section>

      {/* INSTRUCTOR BIO */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              {/* TEXT */}
              <div className="lg:col-span-9 space-y-4 leading-relaxed text-neutral-600">
                <h2 className="text-2xl font-serif font-semibold text-neutral-900">
                  Adult Classes
                </h2>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Our adult classes are designed for students of all levels,
                  focusing on the principles of classical Budo and practical
                  application. Whether you are a beginner or an experienced
                  practitioner, our instructors provide personalized guidance to
                  help you achieve your martial arts goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              {/* TEXT */}
              <div className="lg:col-span-9 space-y-4">
                <h2 className="text-2xl font-serif font-semibold text-neutral-900">
                  Children's Classes
                </h2>

                <p className="text-neutral-600 text-sm leading-relaxed">
                  Our children's classes are designed for students of all
                  levels, focusing on the principles of classical Budo and
                  practical application. Whether you are a beginner or an
                  experienced practitioner, our instructors provide personalized
                  guidance to help you achieve your martial arts goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
