import ActionButton from "@/components/ui/ActionButton";

export default function HeroSection() {
  return (
    <section className="bg-black pt-4">
      <div className="container relative mx-auto px-6 text-white max-w-6xl rounded-3xl p-6">
        <div className="flex justify-center">
          <img
            src="/dojo-logo.webp"
            alt="Canada Budokai Academy Logo"
            className="h-40 w-auto object-contain brightness-110 drop-shadow-xl md:h-52 xl:h-64"
          />
        </div>

        <div className="rounded-2xl bg-black/30 p-5 text-center shadow-lg mt-2">
          <h1 className="text-[clamp(1.5rem,3.5vw,2.8rem)] font-black uppercase leading-[1.05] tracking-tight">
            Canada
            <span className="gold-gradient block text-gold-500 pt-2">
              Budokai Academy
            </span>
          </h1>

          <div className="my-8 text-base lg:text-lg text-stone-300">
            <p className="mb-2">
              Dedicated to the preservation of classical martial arts in modern
              society.
            </p>
            <p>
              Traditional Karate and classical martial arts training in Victoria
              BC and Duncan BC.
            </p>
          </div>

          <ActionButton href="/contact" className="px-6 py-3">
            Schedule a Free Trial Class
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
