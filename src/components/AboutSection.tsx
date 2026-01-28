import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Briefcase, 
  Users, 
  Building2, 
  Lightbulb, 
  GraduationCap,
  TrendingUp,
  Heart,
  BookOpen
} from "lucide-react";

const journeyItems = [
  {
    icon: Briefcase,
    text: "10 years at McKinsey & Company, advising CEOs on strategy and growth"
  },
  {
    icon: TrendingUp,
    text: "Scaled talent and operations at Jumia"
  },
  {
    icon: Building2,
    text: "Leading corporate strategy at Transsion"
  },
  {
    icon: Lightbulb,
    text: "Founding ventures including an innovation school, a B2B platform, and a crypto exchange"
  },
  {
    icon: Heart,
    text: "Supporting founders as an angel investor and board director"
  },
  {
    icon: Users,
    text: "Mentoring startups across continents"
  },
  {
    icon: GraduationCap,
    text: "Teaching entrepreneurship as a visiting lecturer at the University of Lagos"
  }
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-cream-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-40 left-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-charcoal/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-sm font-medium tracking-widest uppercase text-gold">About</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-charcoal mb-8">
            About Susan
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-foreground/85">
              With over two decades of experience in strategy, operations, and investment, Susan combines a rare mix of operator experience and investment leadership.
            </p>
            <p className="text-lg leading-relaxed text-foreground/85">
              Susan Chen is an active contributor to global conversations on technology, investment, and innovation in emerging markets. Her thought leadership reflects deep, practical experience as a founder, operator, and Managing Director at a growth-stage investment fund, and is informed by her work across Africa, Southeast Asia, and Latin America.
            </p>
            <p className="text-lg leading-relaxed text-foreground/85">
              She regularly shares insights on scaling technology businesses, investment strategy, and value creation through published articles, public commentary, and long-form research.
            </p>

            {/* Book highlight */}
            <div className="mt-10 p-6 bg-gradient-card rounded-2xl shadow-card border border-gold/10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-xl">
                  <BookOpen className="w-6 h-6 text-gold-dark" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-medium text-charcoal mb-2">
                    Upcoming Book
                  </h4>
                  <p className="text-foreground/75 leading-relaxed">
                    Susan is currently authoring a book focused on a new blueprint for artificial intelligence, technology investment, and wealth creation in the Global South.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Journey */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl font-medium text-charcoal mb-8">
              Her Journey
            </h3>
            <div className="space-y-4">
              {journeyItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-cream transition-colors duration-300 group"
                >
                  <div className="p-2 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                    <item.icon className="w-5 h-5 text-gold-dark" />
                  </div>
                  <p className="text-foreground/80 leading-relaxed pt-1">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;