import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Mail, MapPin, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <motion.div
          animate={{ 
            y: [-30, 30, -30],
            x: [-20, 20, -20],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [30, -30, 30],
            x: [20, -20, 20],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
        />

        {/* Animated circles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-[500px] h-[500px] border border-gold/5 rounded-full" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-[700px] h-[700px] border border-gold/3 rounded-full" />
        </motion.div>

        {/* Sparkle particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
              y: [-20, 20, -20]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5
            }}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`
            }}
          >
            <Sparkles className="w-4 h-4 text-gold/30" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px w-16 bg-gold origin-right"
              />
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-gold">Connect</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px w-16 bg-gold origin-left"
              />
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 80 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-cream mb-6"
              >
                Connect with Susan
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-xl text-cream/70 flex items-center justify-center gap-2"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin className="w-5 h-5 text-gold" />
              </motion.span>
              Follow her journey, insights, and latest work
            </motion.p>
          </motion.div>

          {/* Contact buttons with advanced hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            {/* LinkedIn button */}
            <motion.a
              href="https://www.linkedin.com/in/susanchen9/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredButton('linkedin')}
              onMouseLeave={() => setHoveredButton(null)}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <motion.div
                animate={hoveredButton === 'linkedin' ? { scale: 1.1, opacity: 0.5 } : { scale: 1, opacity: 0 }}
                className="absolute inset-0 bg-gold rounded-full blur-xl"
              />
              <Button
                size="lg"
                className="relative bg-cream hover:bg-cream-dark text-charcoal px-10 py-7 text-base font-medium rounded-full shadow-elevated transition-all duration-300"
              >
                <Linkedin className="mr-2 w-5 h-5" />
                Connect on LinkedIn
                <motion.span
                  animate={hoveredButton === 'linkedin' ? { x: 4, y: -4 } : {}}
                >
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </motion.span>
              </Button>
            </motion.a>

            {/* Email button */}
            <motion.div
              onMouseEnter={() => setHoveredButton('email')}
              onMouseLeave={() => setHoveredButton(null)}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <motion.div
                animate={hoveredButton === 'email' ? { scale: 1.1, opacity: 0.3 } : { scale: 1, opacity: 0 }}
                className="absolute inset-0 bg-gold rounded-full blur-xl"
              />
              <Button
                size="lg"
                variant="outline"
                className="relative border-gold/30 text-charcoal hover:bg-gold/10 hover:border-gold px-10 py-7 text-base font-medium rounded-full transition-all duration-300"
                onClick={() => window.location.href = 'mailto:susanchen.capital@gmail.com'}
              >
                <Mail className="mr-2 w-5 h-5" />
                Invite Susan to Speak
                <motion.span
                  animate={hoveredButton === 'email' ? { x: 4, y: -4 } : {}}
                >
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Decorative divider with animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-px mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-1/4 bg-gradient-to-r from-transparent via-gold to-transparent"
            />
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="text-cream/50 text-sm cursor-default"
            >
              © {new Date().getFullYear()} Susan Chen. All rights reserved.
            </motion.p>
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="flex items-center gap-2 text-gold/50 text-xs"
            >
              <Sparkles className="w-3 h-3" />
              <span>Built with passion for emerging markets</span>
              <Sparkles className="w-3 h-3" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;