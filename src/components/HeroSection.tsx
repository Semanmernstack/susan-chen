import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-40 right-40 w-64 h-64 rounded-full bg-charcoal blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-px w-12 bg-gold" />
            <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
              Managing Director • Investor • Founder
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 text-charcoal"
          >
            Susan Chen
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-2xl md:text-3xl lg:text-4xl text-charcoal-light leading-snug mb-8"
          >
            Global Investor, Founder,{" "}
            <span className="text-gradient-gold italic">Operator</span> & Mentor
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground font-light mb-12 max-w-2xl"
          >
            Scaling Tech & Investment Across Emerging Markets
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-foreground/80 leading-relaxed mb-8 max-w-2xl"
          >
            Susan Chen is a Managing Director at a growth-stage investment fund focused on emerging markets. 
            A founder, angel investor, operator, and mentor, she partners with visionary entrepreneurs to build 
            real, scalable businesses that redefine what's possible beyond traditional tech hubs.
          </motion.p>

          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-3 mb-10 text-muted-foreground"
          >
            <MapPin className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium">
              Experience across Sub-Saharan Africa, Southeast Asia, Latin America & global ecosystems
            </span>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-charcoal hover:bg-charcoal-light text-cream px-8 py-6 text-base font-medium rounded-full shadow-elevated hover:shadow-gold transition-all duration-300 group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Susan
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
      />
    </section>
  );
};

export default HeroSection;