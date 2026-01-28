import { motion } from "framer-motion";
import ScrollProgress from "@/components/ScrollProgress";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import InsightsSection from "@/components/InsightsSection";
import HowSheHelpsSection from "@/components/HowSheHelpsSection";
import SpeakingSection from "@/components/SpeakingSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background overflow-x-hidden"
    >
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <InsightsSection />
      <HowSheHelpsSection />
      <SpeakingSection />
      <ContactSection />
    </motion.main>
  );
};

export default Index;