import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Briefcase, 
  Users, 
  Building2, 
  Lightbulb, 
  GraduationCap,
  TrendingUp,
  Heart,
  BookOpen,
  ArrowRight
} from "lucide-react";

const journeyItems = [
  {
    icon: Briefcase,
    text: "10 years at McKinsey & Company, advising CEOs on strategy and growth",
    highlight: "McKinsey"
  },
  {
    icon: TrendingUp,
    text: "Scaled talent and operations at Jumia",
    highlight: "Jumia"
  },
  {
    icon: Building2,
    text: "Leading corporate strategy at Transsion",
    highlight: "Transsion"
  },
  {
    icon: Lightbulb,
    text: "Founding ventures including an innovation school, a B2B platform, and a crypto exchange",
    highlight: "Founding"
  },
  {
    icon: Heart,
    text: "Supporting founders as an angel investor and board director",
    highlight: "angel investor"
  },
  {
    icon: Users,
    text: "Mentoring startups across continents",
    highlight: "Mentoring"
  },
  {
    icon: GraduationCap,
    text: "Teaching entrepreneurship as a visiting lecturer at the University of Lagos",
    highlight: "University of Lagos"
  }
];

const AboutSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="py-24 lg:py-32 bg-cream-dark relative overflow-hidden"
    >
      {/* Parallax background decoration */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-charcoal/5 blur-3xl" />
      </motion.div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 right-1/3 w-px h-40 bg-gradient-to-t from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Section header with animated reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-px w-16 bg-gold origin-left"
            />
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-gold">About</span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 80 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-charcoal"
            >
              About Susan
            </motion.h2>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column - Bio with staggered paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              "With over two decades of experience in strategy, operations, and investment, Susan combines a rare mix of operator experience and investment leadership.",
              "Susan Chen is an active contributor to global conversations on technology, investment, and innovation in emerging markets. Her thought leadership reflects deep, practical experience as a founder, operator, and Managing Director at a growth-stage investment fund.",
              "She regularly shares insights on scaling technology businesses, investment strategy, and value creation through published articles, public commentary, and long-form research."
            ].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="text-lg leading-relaxed text-foreground/85"
              >
                {text}
              </motion.p>
            ))}

            {/* Book highlight with hover effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="mt-10 p-6 bg-gradient-card rounded-2xl shadow-card border border-gold/10 cursor-pointer group transition-all duration-300 hover:shadow-elevated hover:border-gold/30"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  whileHover={{ rotate: 5 }}
                  className="p-3 bg-gold/10 rounded-xl group-hover:bg-gold/20 transition-colors"
                >
                  <BookOpen className="w-6 h-6 text-gold-dark" />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-display text-xl font-medium text-charcoal">
                      Upcoming Book
                    </h4>
                    <ArrowRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-foreground/75 leading-relaxed">
                    Susan is currently authoring a book focused on a new blueprint for artificial intelligence, technology investment, and wealth creation in the Global South.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Journey with timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl font-medium text-charcoal mb-8">
              Her Journey
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/50 to-transparent origin-top"
              />

              <div className="space-y-3">
                {journeyItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-cream transition-all duration-300 group cursor-pointer relative"
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="p-2 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors relative"
                      >
                        <item.icon className="w-5 h-5 text-gold-dark" />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-gold rounded-full"
                        />
                      </motion.div>
                    </div>
                    <p className="text-foreground/80 leading-relaxed pt-1 group-hover:text-foreground transition-colors">
                      {item.text.split(item.highlight).map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="text-gold-dark font-medium">{item.highlight}</span>
                          )}
                        </span>
                      ))}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;