"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/home/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-budokai-dark via-budokai-charcoal/40 to-budokai-dark" />
  ),
});

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
}

export default function HeroSection() {
  const handleLearnMore = () => {
    // TODO: Add navigation or modal logic
    console.log("Learn More clicked");
  };
  return (
    <div className="relative h-[calc(100svh-var(--header-height))] min-h-[calc(100svh-var(--header-height))] flex items-center justify-center bg-budokai-dark">
      <HeroScene />
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-budokai-dark/40 via-transparent to-budokai-dark/90" />

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-[clamp(0.75rem,2vh,1.5rem)]">
          <div className="inline-block px-4 py-1.5 border border-gold-600/30 text-gold-600 text-[10px] tracking-[0.4em] uppercase font-bold rounded-full backdrop-blur-sm bg-black/40">
            Endure • Refine • Transcend
          </div>
          <h1 className="font-sans text-[clamp(2rem,5vw,5rem)] md:text-[clamp(3rem,6vw,6rem)] xl:text-[clamp(3.5rem,7vw,7rem)] font-black leading-[0.95] tracking-tighter uppercase">
            CANADA <br />
            <span className="gold-gradient text-gold-600 drop-shadow-2xl block">
              BUDOKAI ACADEMY
            </span>
          </h1>
          <p className="max-w-2xl text-[clamp(0.95rem,2.2vw,1.1rem)] text-stone-400 font-light leading-relaxed">
            Comprehensive martial self-defense, history, and philosophy. Achieve
            physical strength and mental clarity through classical Budo
            training.
          </p>

          <button
            onClick={() => scrollToSection("about")}
            className="px-10 py-3 md:px-12 md:py-4 bg-gold-600 hover:bg-white text-budokai-dark rounded-full transition-all font-bold tracking-widest text-xs shadow-2xl hover:scale-105 active:scale-95 uppercase"
          >
            Explore the Systems
          </button>
        </div>
      </div>
    </div>
  );
}
