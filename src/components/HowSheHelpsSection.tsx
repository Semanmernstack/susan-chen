import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, Wallet, Settings, Users, ArrowUpRight } from "lucide-react";

const helpItems = [
  {
    icon: TrendingUp,
    title: "Strategic Growth & Scaling",
    description: "Guiding founders to evolve early concepts into customer-centric, resilient companies that thrive in dynamic markets.",
    color: "from-amber-500/20 to-orange-500/10"
  },
  {
    icon: Wallet,
    title: "Fundraising & Investor Readiness",
    description: "Helping startups prepare for capital raises, align product and pricing strategies, and connect with global investors.",
    color: "from-emerald-500/20 to-teal-500/10"
  },
  {
    icon: Settings,
    title: "Operational Excellence",
    description: "Bringing operational rigor from her time building high-growth ventures and corporate functions.",
    color: "from-blue-500/20 to-indigo-500/10"
  },
  {
    icon: Users,
    title: "Mentorship & Board Leadership",
    description: "Providing ongoing guidance to founders and executive teams across multiple regions, including Ghana, Nigeria, Bangladesh, Southeast Asia, and Latin America.",
    color: "from-purple-500/20 to-pink-500/10"
  }
];

const HowSheHelpsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 lg:py-32 bg-cream-dark relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(var(--gold) / 0.1) 0%, transparent 50%)",
          backgroundSize: "100% 100%"
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-px w-16 bg-gold origin-right"
            />
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-gold">Services</span>
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
              className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-charcoal"
            >
              How Susan Helps <br className="hidden md:block" />
              <span className="text-gradient-gold italic">Founders & Investors</span>
            </motion.h2>
          </div>
        </motion.div>

        {/* Cards grid with 3D hover effects */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 perspective-1000">
          {helpItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ 
                y: -8,
                rotateX: 2,
                rotateY: index % 2 === 0 ? 2 : -2
              }}
              className="group relative cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Gradient background on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl`}
              />
              
              <div className="relative p-8 lg:p-10 bg-cream rounded-3xl shadow-card border border-border/50 hover:shadow-elevated hover:border-gold/30 transition-all duration-500">
                {/* Floating icon */}
                <motion.div
                  animate={hoveredIndex === index ? { y: -8, rotate: 5 } : { y: 0, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-6"
                >
                  <div className="inline-flex p-4 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl shadow-soft relative">
                    <item.icon className="w-8 h-8 text-gold-dark" />
                    {/* Glow effect */}
                    <motion.div
                      animate={hoveredIndex === index ? { scale: 1.5, opacity: 0.5 } : { scale: 1, opacity: 0 }}
                      className="absolute inset-0 bg-gold/30 rounded-2xl blur-xl"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-medium text-charcoal mb-4 group-hover:text-gold-dark transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-foreground/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <motion.div
                    animate={hoveredIndex === index ? { x: 4, y: -4, opacity: 1 } : { x: 0, y: 0, opacity: 0 }}
                    className="flex-shrink-0"
                  >
                    <ArrowUpRight className="w-6 h-6 text-gold" />
                  </motion.div>
                </div>

                {/* Decorative corner */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={hoveredIndex === index ? { opacity: 1, scale: 1 } : {}}
                  className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-gold/30 rounded-tr-2xl"
                />

                {/* Bottom accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={hoveredIndex === index ? { scaleX: 1 } : {}}
                  className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowSheHelpsSection;