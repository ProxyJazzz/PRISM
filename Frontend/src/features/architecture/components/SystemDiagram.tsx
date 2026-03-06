import React from 'react';
import { motion } from 'motion/react';
import { Database, Shield, Cpu, Network, Server, Lock } from 'lucide-react';

const layers = [
  { 
    title: 'Interface Layer', 
    icon: Network, 
    tech: ['Institutional Portal', 'Admin Dashboard', 'API Gateway'],
    desc: 'Secure entry points for institutional administrators and proposal submitters.'
  },
  { 
    title: 'Intelligence Layer', 
    icon: Cpu, 
    tech: ['Semantic Engine', 'Vector Search', 'Risk Modeling'],
    desc: 'Core AI processing pipeline for proposal evaluation and intelligence extraction.'
  },
  { 
    title: 'Governance Layer', 
    icon: Shield, 
    tech: ['Audit Logging', 'Policy Enforcement', 'Reviewer Matching'],
    desc: 'Institutional protocols and human-in-the-loop decision support systems.'
  },
  { 
    title: 'Data Layer', 
    icon: Database, 
    tech: ['Encrypted Storage', 'Vector Database', 'Immutable Ledger'],
    desc: 'Secure, high-performance storage for research data and evaluation logs.'
  },
];

export const SystemDiagram = () => {
  return (
    <section className="py-24 border-b border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-prism-accent mb-4">Architecture.Overview</h2>
          <h3 className="text-3xl font-bold text-white tracking-tight">Layered Infrastructure Architecture</h3>
        </div>

        <div className="space-y-4">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="technical-panel p-8 border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-none border border-prism-accent/30 bg-prism-accent/5 flex items-center justify-center text-prism-accent">
                    <layer.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white">{layer.title}</h4>
                </div>
                
                <div className="lg:col-span-2">
                  <p className="text-sm text-white/50 leading-relaxed">{layer.desc}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
                  {layer.tech.map((t) => (
                    <span key={t} className="text-[9px] font-mono text-white/30 border border-white/10 px-2 py-1 uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
