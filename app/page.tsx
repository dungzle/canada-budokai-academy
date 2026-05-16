import FAQSection from "@/components/home/FAQSection";
import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import PracticeSection from "@/components/home/PracticeSection";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <PhilosophySection />
        <PracticeSection />
        <FAQSection />
      </main>
    </div>
  );
}
