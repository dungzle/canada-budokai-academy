"use client";

import React from "react";

interface CurriculumItem {
  title: string;
  desc: string;
  tags: string[];
}

function ArtCard({ title, desc, tags }: CurriculumItem) {
  return (
    <div className="group bg-white p-10 rounded-3xl shadow-lg border border-stone-200 hover:border-gold-600/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
      <h3 className="font-serif text-2xl text-budokai-dark mb-5 group-hover:text-gold-600 transition-colors">
        {title}
      </h3>
      <p className="text-stone-500 text-sm leading-relaxed mb-8 italic">
        {desc}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-stone-100 text-[8px] font-bold text-stone-500 uppercase tracking-widest rounded-full border border-stone-200 group-hover:bg-gold-600/5 group-hover:border-gold-600/20 group-hover:text-gold-700 transition-all"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CurriculumSection() {
  const handleLearnMore = () => {
    // TODO: Add navigation or modal logic
    console.log("Learn More clicked");
  };
  return (
    <section id="arts" className="py-24 bg-[#F9F8F4] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-block mb-4 text-xs font-bold tracking-widest text-gold-600 uppercase">
            Curriculum
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-budokai-dark italic mb-6">
            Our Systems of Mastery
          </h2>
          <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          <ArtCard
            title="Shorinji-ryu Karate-do"
            desc="A powerful blend of external mechanics and internal energy, focusing on speed and precision."
            tags={["KARATE", "BUDO"]}
          />
          <ArtCard
            title="Kobujutsu"
            desc="Traditional Okinawan weaponry. Mastery of the Bo, Sai, Tonfa, and other weapons."
            tags={["WEAPONS", "OKINAWA"]}
          />
          <ArtCard
            title="Daito-ryu Aki-jujitsu"
            desc="Predecessor of Aikido. Subtle joint manipulations and redirection of an opponent's force."
            tags={["JUJITSU"]}
          />
          <ArtCard
            title="Da Jia Tai-Chi Chuan"
            desc="Internal forms for health and self-defense. Focusing on structural alignment and flow."
            tags={["INTERNAL ENERGY", "TAI CHI"]}
          />
          <ArtCard
            title="Chi Kung & Bagua Zhang"
            desc="Energy cultivation and the circle-walking art. Developing incredible evasion and power."
            tags={["INTERNAL ENERGY", "QI GONG", "BAGUA"]}
          />
        </div>
        <div className="text-center">
          <button
            onClick={handleLearnMore}
            className="px-10 py-4 bg-budokai-dark text-gold-600 rounded-full hover:bg-gold-600 hover:text-white transition-all font-bold tracking-widest text-sm uppercase border border-gold-600/30 shadow-xl shadow-budokai-dark/10 cursor-pointer"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
