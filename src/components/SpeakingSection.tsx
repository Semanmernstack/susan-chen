import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight, Mic2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const speakingTopics = [
  "Strategy, scaling, and execution",
  "Tech investment and capital flows in emerging markets",
  "Founder-investor dynamics",
  "AI, innovation, and the future of work",
  "Building inclusive ecosystems"
];

const SpeakingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="speaking" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="text-sm font-medium tracking-widest uppercase text-gold">Speaking</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-medium text-charcoal mb-8">
              Speaking & <br />
              <span className="text-gradient-gold italic">Thought Leadership</span>
            </h2>

            <p className="text-lg text-foreground/80 mb-10 leading-relaxed">
              Susan regularly shares insights on technology, investment, and building inclusive ecosystems across emerging markets.
            </p>

            {/* Topics list */}
            <div className="space-y-4 mb-10">
              {speakingTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center">
                    <Check className="w-4 h-4 text-gold-dark" />
                  </div>
                  <span className="text-foreground/85">{topic}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p className="text-muted-foreground mb-6">
                Interested in inviting Susan to speak at your next conference, panel, or workshop?
              </p>
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-dark text-charcoal px-8 py-6 text-base font-medium rounded-full shadow-gold hover:shadow-elevated transition-all duration-300 group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Susan
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main decorative card */}
              <div className="bg-gradient-dark rounded-3xl p-12 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-10 right-10 w-32 h-32 border border-gold/20 rounded-full" />
                <div className="absolute top-16 right-16 w-20 h-20 border border-gold/30 rounded-full" />
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-gold/10 rounded-full blur-2xl" />
                
                <div className="relative z-10 text-center py-12">
                  <div className="inline-flex p-6 bg-gold/20 rounded-3xl mb-8">
                    <Mic2 className="w-16 h-16 text-gold" />
                  </div>
                  <h3 className="font-display text-3xl text-cream mb-4">
                    Global Speaker
                  </h3>
                  <p className="text-cream/70 max-w-xs mx-auto">
                    Sharing perspectives on innovation and investment in emerging markets worldwide
                  </p>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-charcoal/10 rounded-xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;