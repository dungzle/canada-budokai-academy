import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Canada Budokai Academy",
  description:
    "Frequently asked questions about training, grading, uniforms, and traditions at Canada Budokai Academy.",
};

const faqs = [
  {
    question: "I’m not in good shape; can I still start?",
    answer:
      "Yes. Everyone starts at a different level of physical fitness. When you begin you will be allowed to pace yourself and your fitness will improve over time.",
  },
  {
    question: "Do I need a uniform?",
    answer:
      "Yes. Once you start formal training you will need a dogi, which is a traditional white uniform with a white belt. The dojo does not sell dogi however we can tell you where you can buy them. Training is barefoot and you should bring water to each class.",
  },
  {
    question: "How large are the classes?",
    answer:
      "Class size is kept small (typically less than 15 students) to provide more personal attention. Students are often divided into smaller groups with assistant instructors.",
  },
  {
    question: "How do I get better?",
    answer:
      "Progress is related to time spent in class and personal practice at home. Each student progresses at their own pace based on ability and consistency.",
  },
  {
    question: "How often are gradings?",
    answer:
      "Gradings are held in the spring and fall and include technical demonstrations and written reflection.",
  },
  {
    question: "Do you participate in tournaments?",
    answer:
      "No. We do not participate in tournaments or competitive sporting events.",
  },
  {
    question: "Can I start fighting right away?",
    answer:
      "No. Sparring is introduced progressively and only when students demonstrate appropriate control and understanding.",
  },
  {
    question: "Can I just learn weapons?",
    answer:
      "Weapons training is introduced only after attaining the level of green belt.",
  },
];

export default function FAQ() {
  return (
    <main className="text-[var(--foreground)]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-budokai-dark border-b border-gold-600/20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
        <div className="relative container mx-auto px-6 py-24 md:py-28">
          <span className="inline-flex items-center mb-6 px-4 py-1.5 border border-gold-600/40 text-gold-600 text-[11px] tracking-[0.35em] uppercase font-medium rounded-full bg-black/40 backdrop-blur">
            Training • Etiquette • Progress
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[0.03em] text-gold-600 font-serif">
            Frequently Asked Questions
          </h1>

          <div className="w-24 h-1 bg-gold-600 mt-6" />

          <p className="mt-6 max-w-3xl text-stone-300 text-base md:text-lg leading-relaxed">
            Clear answers to common questions about training, uniforms, grading,
            and the traditions of Canada Budokai Academy.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-[var(--surface-muted)]">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.6fr]">
            {/* FAQ LIST */}
            <div className="space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--background)] p-6 shadow-sm transition hover:border-gold-600/40"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-medium">
                    <span>{item.question}</span>
                    <span className="mt-1 text-gold-600 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>

            {/* ASIDE */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--background)] p-8 shadow-md">
                <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-gold-600">
                  Quick Notes
                </h2>
                <ul className="mt-6 space-y-4 text-sm text-neutral-600">
                  <li>Train barefoot and bring water.</li>
                  <li>Small classes for personal instruction.</li>
                  <li>Gradings held twice per year.</li>
                  <li>Weapons training after green belt.</li>
                </ul>
              </div>

              <div className="rounded-xl border border-gold-600/30 bg-[var(--background)] p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-gold-600">
                  Still have questions?
                </p>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  Contact us and we’ll help you find the right class and
                  schedule.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
