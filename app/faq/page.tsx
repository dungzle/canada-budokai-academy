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
      <section className="relative overflow-hidden bg-black border-b border-gold-600/20 py-12 md:py-16">
        <div className="container mx-auto max-w-9/10 xl:max-w-8/10 px-4">
          <h1 className="max-w-4xl text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[0.03em] text-gold-500 font-serif">
            Frequently Asked Questions
          </h1>
          <div className="w-20 h-0.5 opacity-80 bg-gold-500 my-6" />
          <p className="max-w-3xl text-stone-300 text-sm md:text-base leading-relaxed">
            Clear answers to common questions about training, uniforms, grading,
            and the traditions of Canada Budokai Academy.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-8 lg:py-16 bg-[var(--surface-muted)]">
        <div className="container mx-auto max-w-9/10 xl:max-w-8/10 px-4">
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
                <p className="text-sm font-bold uppercase tracking-[0.1em] text-gold-500">
                  Quick Notes
                </p>
                <ul className="mt-6 space-y-4 text-sm text-neutral-600">
                  <li>Train barefoot and bring water.</li>
                  <li>Small classes for personal instruction.</li>
                  <li>Grading held twice per year.</li>
                  <li>Weapons training after green belt.</li>
                </ul>
              </div>

              <div className="rounded-xl border border-gold-600/30 bg-[var(--background)] p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.1em] text-gold-500">
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
