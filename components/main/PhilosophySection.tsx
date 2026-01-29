"use client";

export default function PhilosophySection() {
  const handleLearnMore = () => {
    // TODO: Add navigation or modal logic
    console.log("Learn More clicked");
  };
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 text-xs font-bold tracking-widest text-gold-600 uppercase">
            Our Philosophy
          </div>
          <h2 className="font-serif text-4xl md:text-6xl mb-10 leading-tight text-budokai-dark italic">
            The Spirit of Budo
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto">
            At Canada Budokai Academy, our training is a journey of
            self-discovery. We utilize the ancient principles of{" "}
            <strong>Nin, Shu, and Cho</strong> to guide students from physical
            proficiency to spiritual enlightenment.
          </p>
        </div>

        <div className="space-y-12 border-t border-stone-10 pt-12">
          <div className="flex flex-col md:flex-row items-center gap-8 group">
            <div className="text-8xl kanji-soft text-gold-600 min-w-[140px] text-center transition-transform duration-500">
              忍
            </div>
            <div>
              <h4 className="text-xs uppercase font-bold tracking-[0.3em] text-budokai-dark mb-2">
                Nin • Endurance
              </h4>
              <p className="text-base text-stone-500 leading-relaxed max-w-2xl">
                To endure hardships with a calm heart; developing unshakeable
                inner strength and character. It is the core of our resilience
                in both combat and life.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 group">
            <div className="text-8xl kanji-soft text-gold-600 min-w-[140px] text-center transition-transform duration-500">
              修
            </div>
            <div>
              <h4 className="text-xs uppercase font-bold tracking-[0.3em] text-budokai-dark mb-2">
                Shu • Discipline
              </h4>
              <p className="text-base text-stone-500 leading-relaxed max-w-2xl">
                To cultivate the self through rigorous practice, refining both
                the spirit and the flesh. Mastery is not a destination, but a
                continuous process of polish.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 group">
            <div className="text-8xl kanji-soft text-gold-600 min-w-[140px] text-center transition-transform duration-500">
              超
            </div>
            <div>
              <h4 className="text-xs uppercase font-bold tracking-[0.3em] text-budokai-dark mb-2">
                Cho • Transcendence
              </h4>
              <p className="text-base text-stone-500 leading-relaxed max-w-2xl">
                To transcend one's own limitations, rising above the ego to find
                the higher self. The ultimate goal where art and life become
                indistinguishable.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <button
            onClick={handleLearnMore}
            className="px-10 py-4 bg-budokai-dark text-gold-600 rounded-full hover:bg-gold-600 hover:text-white transition-all font-bold tracking-widest text-sm uppercase border border-gold-600/30"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
