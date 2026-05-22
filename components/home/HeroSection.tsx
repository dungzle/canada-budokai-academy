import Image from "next/image";

import ActionButton from "@/components/ui/ActionButton";

export default function HeroSection() {
  return (
    <section className="bg-black pt-4">
      <div className="container relative mx-auto px-6 text-white max-w-6xl rounded-3xl p-6">
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

        <div className="rounded-2xl bg-black/30 p-5 text-center shadow-lg mt-2">
          <h1 className="text-[clamp(1.5rem,3.5vw,2.8rem)] font-black uppercase leading-[1.05] tracking-tight">
            Canada
            <span className="gold-gradient block text-gold-500 pt-2">
              Budokai Academy
            </span>
          </h1>

          <p className="my-8 text-sm lg:text-base text-stone-300">
            Dedicated to the preservation of classical martial arts in modern
            society.
          </p>

          <ActionButton href="/contact" className="px-6 py-3">
            Schedule a Free Trial Class
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
