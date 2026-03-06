import React from 'react';
import { motion } from 'motion/react';
import { Eye, Shield, Users, Search, History } from 'lucide-react';

const features = [
  { 
    title: 'Explainable AI Decision Support', 
    icon: Eye, 
    desc: 'Every AI insight is accompanied by structured reasoning and source citations for full transparency.' 
  },
  { 
    title: 'Institution-Grade Governance', 
    icon: Shield, 
    desc: 'Built-in protocols that align with international research ethics and institutional compliance standards.' 
  },
  { 
    title: 'Human-in-the-Loop Evaluation', 
    icon: Users, 
    desc: 'AI augments human expertise; final authority always remains with expert reviewers and administrators.' 
  },
  { 
    title: 'AI-Augmented Proposal Screening', 
    icon: Search, 
    desc: 'Automated identification of technical risks, budget anomalies, and research redundancies.' 
  },
  { 
    title: 'Audit-Ready Decision Traceability', 
    icon: History, 
    desc: 'Immutable ledger recording every step of the evaluation process for complete accountability.' 
  },
];

export const WhyPrism = () => {
  return (
    <section className="py-24 border-b border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-prism-accent mb-4">System.Value</h2>
          <h3 className="text-3xl font-bold text-white tracking-tight">Why PRISM</h3>
        </div>

        <div className="space-y-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="technical-panel p-8 border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="w-16 h-16 rounded-none border border-prism-accent/30 bg-prism-accent/5 flex items-center justify-center flex-shrink-0 group-hover:bg-prism-accent group-hover:text-white transition-all duration-500">
                  <feature.icon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 tracking-tight">{feature.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed max-w-3xl">{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
