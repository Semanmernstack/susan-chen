import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, ArrowRight, Mic2, Volume2 } from "lucide-react";
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
  const [hoveredTopic, setHoveredTopic] = useState<number | null>(null);

  return (
    <section id="speaking" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      {/* Animated sound waves background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scaleX: [1, 1.5, 1],
              opacity: [0.3, 0.1, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-charcoal rounded-full"
            style={{
              width: `${200 + i * 150}px`,
              height: `${200 + i * 150}px`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px w-16 bg-gold origin-left"
              />
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-gold">Speaking</span>
            </div>
            
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: 80 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-display text-4xl md:text-5xl font-medium text-charcoal"
              >
                Speaking & <br />
                <span className="text-gradient-gold italic">Thought Leadership</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-foreground/80 mb-10 leading-relaxed"
            >
              Susan regularly shares insights on technology, investment, and building inclusive ecosystems across emerging markets.
            </motion.p>

            {/* Topics list with hover effects */}
            <div className="space-y-3 mb-10">
              {speakingTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  onMouseEnter={() => setHoveredTopic(index)}
                  onMouseLeave={() => setHoveredTopic(null)}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-3 rounded-xl cursor-pointer hover:bg-cream-dark transition-all duration-300 group"
                >
                  <motion.div
                    animate={hoveredTopic === index ? { scale: 1.2, rotate: 10 } : {}}
                    className="flex-shrink-0 w-7 h-7 rounded-full bg-gold/15 flex items-center justify-center group-hover:bg-gold/25 transition-colors"
                  >
                    <Check className="w-4 h-4 text-gold-dark" />
                  </motion.div>
                  <span className="text-foreground/85 group-hover:text-charcoal transition-colors font-medium">
                    {topic}
                  </span>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={hoveredTopic === index ? { opacity: 1, x: 0 } : {}}
                    className="ml-auto"
                  >
                    <ArrowRight className="w-4 h-4 text-gold" />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-muted-foreground mb-6">
                Interested in inviting Susan to speak at your next conference, panel, or workshop?
              </p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-charcoal px-10 py-7 text-base font-medium rounded-full shadow-gold hover:shadow-elevated transition-all duration-500 group relative overflow-hidden"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="relative z-10 flex items-center">
                    Contact Susan
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              {/* Main decorative card */}
              <div className="bg-gradient-dark rounded-3xl p-12 relative overflow-hidden">
                {/* Animated circles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute top-10 right-10 w-40 h-40"
                >
                  <div className="absolute inset-0 border border-gold/20 rounded-full" />
                  <div className="absolute inset-4 border border-gold/30 rounded-full" />
                  <div className="absolute inset-8 border border-gold/40 rounded-full" />
                </motion.div>

                {/* Sound wave animation */}
                <div className="absolute bottom-10 left-10 flex items-end gap-1">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: [20, 40 + Math.random() * 30, 20]
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                      className="w-1.5 bg-gold/40 rounded-full"
                      style={{ height: 20 }}
                    />
                  ))}
                </div>
                
                <div className="relative z-10 text-center py-12">
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        "0 0 20px hsl(38 80% 55% / 0.2)",
                        "0 0 40px hsl(38 80% 55% / 0.4)",
                        "0 0 20px hsl(38 80% 55% / 0.2)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-flex p-6 bg-gold/20 rounded-3xl mb-8"
                  >
                    <Mic2 className="w-16 h-16 text-gold" />
                  </motion.div>
                  <h3 className="font-display text-3xl text-cream mb-4">
                    Global Speaker
                  </h3>
                  <p className="text-cream/70 max-w-xs mx-auto mb-6">
                    Sharing perspectives on innovation and investment in emerging markets worldwide
                  </p>

                  {/* Animated badge */}
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full"
                  >
                    <Volume2 className="w-4 h-4 text-gold" />
                    <span className="text-sm text-gold font-medium">Available for Speaking</span>
                  </motion.div>
                </div>
              </div>

              {/* Floating accents */}
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-2xl -z-10"
              />
              <motion.div
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="absolute -top-4 -left-4 w-24 h-24 bg-charcoal/10 rounded-xl -z-10"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;