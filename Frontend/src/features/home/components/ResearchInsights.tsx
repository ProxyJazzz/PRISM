import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle } from '../../../components/ui/SectionTitle';
import { ArrowRight, Calendar, FileText } from 'lucide-react';

const insights = [
  {
    date: 'March 2026',
    title: 'AI Governance in Research Funding',
    desc: 'A comprehensive report on the ethical implications of AI-assisted proposal evaluation in institutional settings.',
    category: 'Research Report',
  },
  {
    date: 'February 2026',
    title: 'Semantic Analysis Performance Benchmarks',
    desc: 'Technical analysis of PRISM NLP Engine v4.2 performance across multi-disciplinary research domains.',
    category: 'Technical Paper',
  },
  {
    date: 'January 2026',
    title: 'Bias Mitigation in Peer Review',
    desc: 'Case study on identifying and flagging cognitive bias in large-scale research evaluation workflows.',
    category: 'Case Study',
  },
  {
    date: 'December 2025',
    title: 'Zero-Trust Security for Research Data',
    desc: 'Deep dive into the PRISM security architecture for protecting institutional research intellectual property.',
    category: 'Security Brief',
  },
];

export const ResearchInsights = () => {
  return (
    <section className="py-24 border-b border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Research Insights" 
          subtitle="Technical reports, case studies, and research articles from the PRISM system team."
          align="left"
        />

        <div className="relative mt-16">
          <div className="absolute top-0 left-0 w-px h-full bg-white/5 hidden md:block" />
          
          <div className="space-y-12">
            {insights.map((insight, i) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-0 md:pl-12 group"
              >
                {/* Timeline Dot */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-prism-accent rounded-none -translate-x-1/2 hidden md:block group-hover:scale-150 transition-transform" />
                
                <div className="technical-panel p-8 border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                  <div className="flex flex-wrap items-center gap-6 mb-4">
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-prism-accent">
                      <Calendar size={12} /> {insight.date}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/40">
                      <FileText size={12} /> {insight.category}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-prism-accent transition-colors">{insight.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed max-w-2xl mb-6">{insight.desc}</p>
                  
                  <button className="text-prism-accent text-[10px] font-mono uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Report <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
