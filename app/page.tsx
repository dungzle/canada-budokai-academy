import CurriculumSection from "@/components/home/CurriculumSection";
import FAQSection from "@/components/home/FAQSection";
import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import TrainingSection from "@/components/home/TrainingSection";

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
