import CurriculumSection from "@/components/main/CurriculumSection";
import FAQSection from "@/components/main/FAQSection";
import HeroSection from "@/components/main/HeroSection";
import PhilosophySection from "@/components/main/PhilosophySection";
import TrainingSection from "@/components/main/TrainingSection";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <PhilosophySection />
        <CurriculumSection />
        <TrainingSection />
        <FAQSection />
      </main>
    </div>
  );
}
