import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Newspaper, MessageCircle, BookMarked } from "lucide-react";
import bookCover from "@/assets/book-cover.jpg";

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

  return (
    <section id="insights" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-sm font-medium tracking-widest uppercase text-gold">Insights</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-charcoal">
            Insights & Updates
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Insights cards */}
          <div className="space-y-6">
            {insights.map((insight, index) => (
              <motion.a
                key={index}
                href={insight.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="block p-6 bg-gradient-card rounded-2xl shadow-card border border-border/50 hover:shadow-elevated hover:border-gold/20 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gold/10 rounded-lg">
                      <insight.icon className="w-5 h-5 text-gold-dark" />
                    </div>
                    <span className="text-sm font-medium text-gold-dark uppercase tracking-wide">
                      {insight.type}
                    </span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors" />
                </div>
                <h3 className="font-display text-xl font-medium text-charcoal mb-3 group-hover:text-gold-dark transition-colors">
                  {insight.title}
                </h3>
                <p className="text-sm text-muted-foreground">{insight.source}</p>
              </motion.a>
            ))}
          </div>

          {/* Book feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-dark rounded-3xl p-8 lg:p-10 overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gold/20 rounded-lg">
                    <BookMarked className="w-5 h-5 text-gold" />
                  </div>
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

                {/* Book cover image */}
                <div className="relative">
                  <div className="aspect-[3/4] max-w-xs mx-auto rounded-xl overflow-hidden shadow-elevated">
                    <img 
                      src={bookCover} 
                      alt="Book Cover - A New Blueprint for AI and Investment in the Global South"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -inset-4 bg-gold/20 rounded-2xl blur-xl -z-10" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;