import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-black">
      <div className="container mx-auto px-6 text-white">
        <div className="relative mx-auto max-w-6xl rounded-3xl bg-black p-6 ">
          <div className="text-gold-500 absolute left-1/2 -translate-x-1/2 rounded-full border border-gold-500/70 bg-black px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.24em] md:top-6 md:px-4 md:py-1.5 md:text-[11px]">
            <span>Endure</span>
            <span className="mx-2">•</span>
            <span>Train</span>
            <span className="mx-2">•</span>
            <span>Transcend</span>
          </div>

          <div className="grid grid-cols-1 pt-12 md:pt-14">
            <div className="flex justify-center">
              <Image
                src="/dojo-logo.png"
                alt="Canada Budokai Academy Logo"
                width={1200}
                height={1200}
                className="h-40 w-auto object-contain brightness-110 drop-shadow-xl md:h-52 xl:h-64"
                priority
              />
            </div>

            <div className="rounded-2xl bg-black/30 p-5 text-center shadow-lg">
              <h1 className="text-[clamp(1.5rem,3.5vw,2.8rem)] font-black uppercase leading-[1.05] tracking-tight">
                Canada
                <span className="gold-gradient block text-gold-500">
                  Budokai Academy
                </span>
              </h1>

              <div className="w-24 h-px opacity-80 bg-gold-500 my-6 mx-auto" />

              <div className="text-[clamp(0.95rem,1.8vw,1.1rem)] font-light leading-relaxed text-stone-300">
                <p>
                  Classical martial training integrating self-defense, history,
                  and philosophy.
                </p>
                <p className="mt-2">
                  Cultivate physical strength, mental clarity, and composure
                  through traditional Budo practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
