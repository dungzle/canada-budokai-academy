"use client";

import HeroScene from "@/components/main/HeroScene";

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
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-budokai-dark">
      <HeroScene />
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-budokai-dark/40 via-transparent to-budokai-dark/90" />

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="inline-block mb-8 px-4 py-1.5 border border-gold-600/30 text-gold-600 text-[10px] tracking-[0.4em] uppercase font-bold rounded-full backdrop-blur-sm bg-black/40">
          Endure • Refine • Transcend
        </div>
        <h1 className="font-sans text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-10 tracking-tighter uppercase">
          CANADA <br />
          <span className="gold-gradient text-gold-600 drop-shadow-2xl block">
            BUDOKAI ACADEMY
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-400 font-light leading-relaxed mb-12">
          Comprehensive martial self-defense, history, and philosophy. Achieve
          physical strength and mental clarity through classical Budo training.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <button
            onClick={() => scrollToSection("about")}
            className="px-12 py-4 bg-gold-600 hover:bg-white text-budokai-dark rounded-full transition-all font-bold tracking-widest text-xs shadow-2xl hover:scale-105 active:scale-95 uppercase"
          >
            Explore the Systems
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-12 py-4 bg-transparent hover:bg-white/10 text-white border border-gold-600/50 rounded-full transition-all font-bold tracking-widest text-xs backdrop-blur-md uppercase"
          >
            Contact the Dojo
          </button>
        </div>
      </div>
    </div>
  );
}
