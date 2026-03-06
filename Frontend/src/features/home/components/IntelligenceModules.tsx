import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Shield, Database, Search, Users, FileText, Activity, Eye } from 'lucide-react';

const aiModules = [
  { title: 'Proposal Parsing', icon: FileText, desc: 'Structural analysis and text extraction.' },
  { title: 'Similarity Detection', icon: Search, desc: 'Cross-referencing against 12M+ documents.' },
  { title: 'Risk Analysis', icon: Activity, desc: 'AI-driven technical risk assessment.' },
  { title: 'Reviewer Matching', icon: Users, desc: 'Intelligence-based expert identification.' },
];

const governanceModules = [
  { title: 'Explainability Engine', icon: Eye, desc: 'Structured reasoning for AI insights.' },
  { title: 'Audit Logging', icon: Database, desc: 'Immutable traceability of all actions.' },
  { title: 'AI Insights', icon: Cpu, desc: 'Automated evaluation support.' },
  { title: 'Human Governance Layer', icon: Shield, desc: 'Human-in-the-loop decision support.' },
];

export const IntelligenceModules = () => {
  return (
    <section className="py-24 border-b border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-prism-accent mb-4">System.Intelligence</h2>
          <h3 className="text-3xl font-bold text-white tracking-tight">Intelligence Modules</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* AI Modules */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-8">AI Processing Modules</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aiModules.map((module, i) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="technical-panel p-6 border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
                >
                  <div className="w-10 h-10 rounded-none border border-prism-accent/30 bg-prism-accent/5 flex items-center justify-center mb-4 group-hover:bg-prism-accent group-hover:text-white transition-all">
                    <module.icon size={20} />
                  </div>
                  <h5 className="text-sm font-bold text-white mb-2 tracking-tight">{module.title}</h5>
                  <p className="text-white/40 text-xs leading-relaxed">{module.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Governance Modules */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-8">Governance & Audit Modules</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {governanceModules.map((module, i) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="technical-panel p-6 border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
                >
                  <div className="w-10 h-10 rounded-none border border-prism-accent/30 bg-prism-accent/5 flex items-center justify-center mb-4 group-hover:bg-prism-accent group-hover:text-white transition-all">
                    <module.icon size={20} />
                  </div>
                  <h5 className="text-sm font-bold text-white mb-2 tracking-tight">{module.title}</h5>
                  <p className="text-white/40 text-xs leading-relaxed">{module.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
