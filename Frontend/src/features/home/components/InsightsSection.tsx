import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { SectionTitle } from '../../../components/ui/SectionTitle';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';

const insights = [
  {
    title: 'AI in Research Governance: A New Era of Transparency',
    excerpt: 'How institutional-grade AI is transforming the way research bodies evaluate and fund proposals while maintaining human authority.',
    date: 'March 12, 2026',
    category: 'Governance',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Responsible AI Evaluation: Beyond the Black Box',
    excerpt: 'The critical role of explainability engines in building trust between AI systems and expert research committees.',
    date: 'February 28, 2026',
    category: 'Ethics',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'The Future of Institutional Review: Scaling with Intelligence',
    excerpt: 'Addressing the growing volume of research proposals through automated semantic parsing and risk modeling.',
    date: 'January 15, 2026',
    category: 'Future Trends',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
  },
];

export const InsightsSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <SectionTitle 
            title="Research Insights" 
            subtitle="Expert perspectives on the intersection of AI, research governance, and institutional evaluation."
            align="left"
            className="mb-0"
          />
          <button className="flex items-center gap-2 text-prism-accent text-sm font-bold uppercase tracking-widest hover:gap-4 transition-all">
            View All Insights <ArrowRight size={18} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, i) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col p-0 overflow-hidden group">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={insight.image} 
                    alt={insight.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-luminosity opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge>{insight.category}</Badge>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-[10px] text-white/40 font-bold uppercase tracking-widest mb-4">
                    <Calendar size={12} /> {insight.date}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-prism-accent transition-colors leading-tight">
                    {insight.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow">
                    {insight.excerpt}
                  </p>
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors">
                    Read Full Post <BookOpen size={14} />
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
