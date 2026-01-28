import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import InsightsSection from "@/components/InsightsSection";
import HowSheHelpsSection from "@/components/HowSheHelpsSection";
import SpeakingSection from "@/components/SpeakingSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <InsightsSection />
      <HowSheHelpsSection />
      <SpeakingSection />
      <ContactSection />
    </main>
  );
};

export default Index;