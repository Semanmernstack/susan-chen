import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Newspaper, MessageCircle, BookMarked, Sparkles } from "lucide-react";
import book from "@/assets/book.png";

const insights = [
  {
    icon: Newspaper,
    type: "Article",
    title: "How to Scale Consumer Tech Brands Across Africa and Emerging Markets",
    source: "CXO Dispatch",
    link: "https://www.cxodispatch.com/technology/susan-chen-how-to-scale-consumer-tech-brands-across-africa-and-emerging-markets/"
  },
  {
    icon: MessageCircle,
    type: "Commentary",
    title: "Public commentary and industry perspectives on founder support, equity, and inclusive investment practices",
    source: "LinkedIn",
    link: "https://www.linkedin.com/posts/consonance-investment_womeninbusiness-foundersupport-equityinaction-activity-7340669893190504451-iDtN"
  }
];

const InsightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="insights" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 right-[10%] w-20 h-20 border border-gold/20 rounded-full"
      />
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-40 left-[5%] w-32 h-32 border border-gold/10 rounded-full"
      />

      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        {/* Section header */}
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
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-gold">Insights</span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 80 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-charcoal"
            >
              Insights & Updates
            </motion.h2>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Insights cards with hover effects */}
          <div className="space-y-6">
            {insights.map((insight, index) => (
              <motion.a
                key={index}
                href={insight.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ x: 8 }}
                className="block p-6 bg-gradient-card rounded-2xl shadow-card border border-border/50 hover:shadow-elevated hover:border-gold/30 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Shimmer effect on hover */}
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={hoveredCard === index ? { x: "100%", opacity: 0.1 } : {}}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent"
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={hoveredCard === index ? { rotate: 10, scale: 1.1 } : {}}
                        className="p-2 bg-gold/10 rounded-lg"
                      >
                        <insight.icon className="w-5 h-5 text-gold-dark" />
                      </motion.div>
                      <span className="text-sm font-medium text-gold-dark uppercase tracking-wide">
                        {insight.type}
                      </span>
                    </div>
                    <motion.div
                      animate={hoveredCard === index ? { x: 4, y: -4 } : {}}
                    >
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors" />
                    </motion.div>
                  </div>
                  <h3 className="font-display text-xl font-medium text-charcoal mb-3 group-hover:text-gold-dark transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{insight.source}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Book feature with advanced animations */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-dark rounded-3xl p-8 lg:p-10 overflow-hidden relative group cursor-pointer"
            >
              {/* Animated background elements */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ 
                  y: [-20, 20, -20],
                  x: [-10, 10, -10]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-2xl"
              />

              {/* Sparkle effects */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.7
                  }}
                  className="absolute"
                  style={{
                    top: `${20 + i * 25}%`,
                    right: `${10 + i * 15}%`
                  }}
                >
                  <Sparkles className="w-4 h-4 text-gold/50" />
                </motion.div>
              ))}
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="p-2 bg-gold/20 rounded-lg"
                  >
                    <BookMarked className="w-5 h-5 text-gold" />
                  </motion.div>
                  <span className="text-sm font-medium text-gold uppercase tracking-wide">
                    Forthcoming Book
                  </span>
                </div>
                
                <h3 className="font-display text-2xl lg:text-3xl font-medium text-cream mb-4 leading-snug">
                  A New Blueprint for Artificial Intelligence, Technology Investment, and Wealth Creation in the Global South
                </h3>
                
                <p className="text-cream/75 leading-relaxed mb-8">
                  Susan's forthcoming book explores how AI and strategic investment are unlocking unprecedented opportunities in Africa and other developing regions, reshaping economic growth, industry leadership, and global innovation.
                </p>

                {/* Book cover with 3D effect */}
                <div className="max-w-lg mx-auto">
  <img 
    src={book} 
    alt="Book Cover"
    className="w-full h-auto rounded-xl shadow-lg"
  />
</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;