import ActionButton from "@/components/ui/ActionButton";

interface CurriculumItem {
  title: string;
  desc: string;
}

function CurriculumCard({ title, desc }: CurriculumItem) {
  return (
    <div className="group bg-white p-10 rounded-3xl shadow-lg border border-stone-200 flex flex-col h-full">
      <h3 className="font-serif text-2xl mb-4">{title}</h3>
      <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default function PracticeSection() {
  return (
    <section id="practice" className="py-24 bg-[#F9F8F4] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-block mb-4 text-xs md:text-sm font-bold tracking-widest text-gold-600 uppercase">
            Our Practice
          </div>

          <h2 className="font-serif text-4xl md:text-6xl text-budokai-dark italic mb-8">
            A Complete Martial Arts System
          </h2>

          <p className="text-lg text-stone-600 leading-relaxed max-w-4xl mx-auto">
            Our practice is the structured study of classical martial arts
            integrated into a single system. Striking, grappling, weapons, and
            internal disciplines are studied together to develop adaptable
            skills and practical understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          <CurriculumCard
            title="Shorinji-ryu Karate-do"
            desc="Founded by O’Sensei Richard Kim, Shorinji-ryu Karate-do is the core discipline of our practice, emphasizing correct structure, timing, distancing, and judgment through classical Budo principles."
          />
          <CurriculumCard
            title="Meibukan Goju-ryu Karate-do"
            desc="A traditional Okinawan Karate style founded by O’Sensei Meitoku Yagi, a direct student of Goju-ryu creator O’Sensei Chojun Miyagi. It blends hard external techniques with soft internal methods to create a close-range, highly efficient system of self-defense."
          />
          <CurriculumCard
            title="Kobujutsu"
            desc="The study of classical Okinawan and Japanese weapons, encompassing seven traditional disciplines of weaponry."
          />
          <CurriculumCard
            title="Daito-ryu Aiki-jujutsu"
            desc="A classical system of close-range control and grappling, emphasizing balance disruption, internal connection, and efficient movement."
          />
          <CurriculumCard
            title="Tai Chi Chuan"
            desc="Internal practice cultivating alignment, sensitivity, and calm awareness in support of both health and martial understanding."
          />
          <CurriculumCard
            title="Chi Kung & Bagua Zhang"
            desc="Internal disciplines focused on breath, structure, and circular movement, developing coordination, balance, and continuity."
          />
        </div>

        <div className="text-center">
          <ActionButton href="/about/our-practice" variant="dark">
            Learn More About Our Practice
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
