import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instructors",
  description: "Instructors",
};

export default function Instructors() {
  return (
    <main className="bg-budokai-dark text-white py-8">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
        <div className="container mx-auto px-6 py-20 relative">
          <div className="inline-flex items-center gap-2 border border-gold-600/30 text-gold-600 text-md tracking-[0.4em] uppercase font-bold rounded-full px-4 py-1.5 bg-black/40">
            Instructors
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight uppercase">
            Learn from Experienced
            <span className="block text-gold-600">
              Classical Budo Teachers.
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-stone-300 text-base md:text-lg leading-relaxed">
            Our instructors carry forward traditional lineage with discipline,
            integrity, and a commitment to personal growth for every student.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">
                Sensei Aaron Usatch
              </h2>
              <span className="text-xs uppercase tracking-[0.3em] text-gold-600">
                Renshi
              </span>
            </div>
            <p className="mt-4 text-stone-300 text-sm leading-relaxed">
              Assistant Instructor of the Shaolin-Tzu Martial Arts Academy.
              Began training in 1994 and continues active study and teaching.
            </p>
            <div className="mt-5 grid gap-3 text-sm text-stone-300">
              <div>
                <span className="text-white font-semibold">Ranks:</span> Godan
                (5th degree) in Shorinji-Ryu Karate-Do; Sandan (3rd degree) in
                Ryukyu Hokama Kobujutsu.
              </div>
              <div>
                <span className="text-white font-semibold">
                  Additional Training:
                </span>{" "}
                Amateur boxing and Tae Kwon Do.
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
