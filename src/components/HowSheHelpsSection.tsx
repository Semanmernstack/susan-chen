import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Wallet, Settings, Users } from "lucide-react";

const helpItems = [
  {
    icon: TrendingUp,
    title: "Strategic Growth & Scaling",
    description: "Guiding founders to evolve early concepts into customer-centric, resilient companies that thrive in dynamic markets."
  },
  {
    icon: Wallet,
    title: "Fundraising & Investor Readiness",
    description: "Helping startups prepare for capital raises, align product and pricing strategies, and connect with global investors."
  },
  {
    icon: Settings,
    title: "Operational Excellence",
    description: "Bringing operational rigor from her time building high-growth ventures and corporate functions."
  },
  {
    icon: Users,
    title: "Mentorship & Board Leadership",
    description: "Providing ongoing guidance to founders and executive teams across multiple regions, including Ghana, Nigeria, Bangladesh, Southeast Asia, and Latin America."
  }
];

const HowSheHelpsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-cream-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-sm font-medium tracking-widest uppercase text-gold">Services</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-charcoal">
            How Susan Helps <br className="hidden md:block" />
            <span className="text-gradient-gold italic">Founders & Investors</span>
          </h2>
        </motion.div>

        {/* Help cards grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {helpItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 lg:p-10 bg-cream rounded-3xl shadow-card border border-border/50 hover:shadow-elevated hover:border-gold/20 transition-all duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl shadow-soft">
                    <item.icon className="w-8 h-8 text-gold-dark" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-medium text-charcoal mb-4 group-hover:text-gold-dark transition-colors">
                  {item.title}
                </h3>
                <p className="text-foreground/75 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-gold/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowSheHelpsSection;