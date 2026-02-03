import FAQSection from "@/components/home/FAQSection";
import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import PracticeSection from "@/components/home/PracticeSection";
import ScheduleSection from "@/components/home/ScheduleSection";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <PhilosophySection />
        <PracticeSection />
        <ScheduleSection />
        <FAQSection />
      </main>
    </div>
  );
}
