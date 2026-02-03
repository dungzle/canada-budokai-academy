import Link from "next/link";

interface CurriculumItem {
  title: string;
  desc: string;
  tags: string[];
}

function ArtCard({ title, desc, tags }: CurriculumItem) {
  return (
    <div className="group bg-white p-10 rounded-3xl shadow-lg border border-stone-200 flex flex-col h-full">
      <h3 className="font-serif text-2xl text-budokai-dark mb-5">{title}</h3>
      <p className="text-stone-500 text-sm leading-relaxed mb-8 italic">
        {desc}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-stone-100 text-[8px] font-bold text-stone-500 uppercase tracking-widest rounded-full border border-stone-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function PracticeSection() {
  return (
    <section id="practice" className="py-24 bg-[#F9F8F4] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <div className="inline-block mb-4 text-xs font-bold tracking-widest text-gold-600 uppercase">
            Our Practice
          </div>

          <h2 className="font-serif text-4xl md:text-6xl text-budokai-dark italic mb-8">
            A Complete Martial Arts System
          </h2>

          <p className="text-lg text-stone-600 leading-relaxed max-w-4xl mx-auto">
            Our practice is the structured study of classical martial arts
            integrated into a single system. Striking, grappling, weapons, and
            internal disciplines are studied together to develop adaptable skill
            and practical understanding across different ranges and contexts.
          </p>

          <div className="w-24 h-1 bg-gold-600 mx-auto mt-10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          <ArtCard
            title="Shorinji-ryu Karate-do"
            desc="The core discipline of our practice, emphasizing correct structure, timing, distancing, and judgment through classical Budo principles."
            tags={["KARATE-DO", "BUDO"]}
          />
          <ArtCard
            title="Kobujutsu"
            desc="The study of classical Okinawan and Japanese weapons, encompassing seven traditional disciplines of weaponry."
            tags={["WEAPONS", "OKINAWA"]}
          />
          <ArtCard
            title="Daito-ryu Aiki-jujutsu"
            desc="A classical system of close-range control and grappling, emphasizing balance disruption, internal connection, and efficient movement."
            tags={["JUJUTSU", "AIKI"]}
          />
          <ArtCard
            title="Tai Chi Chuan"
            desc="Internal practice cultivating alignment, sensitivity, and calm awareness in support of both health and martial understanding."
            tags={["INTERNAL PRACTICE", "TAI CHI"]}
          />
          <ArtCard
            title="Chi Kung & Bagua Zhang"
            desc="Internal disciplines focused on breath, structure, and circular movement, developing coordination, balance, and continuity."
            tags={["QI GONG", "BAGUA"]}
          />
        </div>

        <div className="text-center">
          <Link
            href="/about/our-practice"
            className="inline-flex items-center justify-center px-10 py-4 bg-budokai-dark text-gold-600 rounded-full hover:bg-gold-600 hover:text-white transition-all font-bold tracking-widest text-sm uppercase border border-gold-600/30 shadow-xl shadow-budokai-dark/10"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
