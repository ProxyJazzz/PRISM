import React from 'react';
import { motion } from 'motion/react';
import { Server, Share2, Database, History } from 'lucide-react';

const infraItems = [
  {
    title: 'Robust APIs',
    description: 'RESTful and GraphQL endpoints for seamless institutional integration.',
    icon: Share2,
  },
  {
    title: 'Model Orchestration',
    description: 'Dynamic routing between specialized LLMs and custom NLP models.',
    icon: Server,
  },
  {
    title: 'Data Storage',
    description: 'Hybrid storage strategy combining relational and vector databases.',
    icon: Database,
  },
  {
    title: 'Audit Logging',
    description: 'Immutable ledger recording every AI interaction and system action.',
    icon: History,
  },
];

export const InfrastructureLayer = () => {
  return (
    <section className="py-24 bg-white/[0.01] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-prism-accent mb-4">Infrastructure.Layer</h2>
          <h3 className="text-3xl font-bold text-white tracking-tight">System Foundation</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {infraItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="technical-panel p-8 border-white/10 bg-white/[0.02] flex gap-6 items-start group hover:bg-white/[0.04] transition-all"
            >
              <div className="w-14 h-14 rounded-none border border-prism-accent/30 bg-prism-accent/5 flex items-center justify-center flex-shrink-0 group-hover:bg-prism-accent group-hover:text-white transition-all">
                <item.icon size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
