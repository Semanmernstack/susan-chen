import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/3 rounded-full" />
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
              <div className="h-px w-12 bg-gold" />
              <span className="text-sm font-medium tracking-widest uppercase text-gold">Connect</span>
              <div className="h-px w-12 bg-gold" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-cream mb-6">
              Connect with Susan
            </h2>
            <p className="text-xl text-cream/70 flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-gold" />
              Follow her journey, insights, and latest work
            </p>
          </motion.div>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <a
              href="https://www.linkedin.com/in/susanchen9/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                size="lg"
                className="bg-cream hover:bg-cream-dark text-charcoal px-8 py-6 text-base font-medium rounded-full shadow-elevated hover:shadow-gold transition-all duration-300"
              >
                <Linkedin className="mr-2 w-5 h-5" />
                Connect on LinkedIn
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </a>

            <Button
              size="lg"
              variant="outline"
              className="border-gold/30 text-cream hover:bg-gold/10 hover:border-gold px-8 py-6 text-base font-medium rounded-full transition-all duration-300 group"
              onClick={() => window.location.href = 'mailto:contact@susanchen.com'}
            >
              <Mail className="mr-2 w-5 h-5" />
              Invite Susan to Speak
              <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-12"
          />

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p className="text-cream/50 text-sm">
              © {new Date().getFullYear()} Susan Chen. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;