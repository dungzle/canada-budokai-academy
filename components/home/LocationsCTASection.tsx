import ActionButton from "@/components/ui/ActionButton";

export default function LocationsCTASection() {
  return (
    <section className="bg-[var(--surface-muted)] py-10 lg:py-14 border-y border-[var(--border-subtle)]">
      <div className="container mx-auto max-w-9/10 xl:max-w-8/10 px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-serif font-semibold text-neutral-900">
          Begin Your Budo Journey
        </h2>

        <div className="my-8 text-sm md:text-base text-neutral-700 leading-relaxed max-w-3xl mx-auto">
          <p className="mb-4">
            Canada Budokai Academy dojos are certified by the Dai Nippon Butoku
            Kai, reflecting our dedication to traditional Karate and classical
            martial arts grounded in the principles of Budo. This lifelong path
            encourages discipline, resilience, self-discovery, and character
            development.
          </p>

          <p>
            Youth and adult students of all experience levels are welcome at our
            Victoria and Duncan dojos.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <ActionButton href="/locations" variant="dark" className="px-6 py-3">
            View Locations & Schedule
          </ActionButton>
          <ActionButton href="/contact" className="px-6 py-3">
            Schedule a Free Trial Class
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
