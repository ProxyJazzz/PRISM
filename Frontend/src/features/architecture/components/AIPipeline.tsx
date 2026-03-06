import React from 'react';
import { motion } from 'motion/react';
import { FileText, Search, Brain, AlertTriangle, UserCheck, CheckCircle } from 'lucide-react';

const pipelineSteps = [
  { icon: FileText, label: 'Ingestion', tech: 'Secure S3 / TLS 1.3' },
  { icon: Search, label: 'Parsing', tech: 'Semantic NLP Engine' },
  { icon: Brain, label: 'Embedding', tech: 'Vector Space Mapping' },
  { icon: AlertTriangle, label: 'Risk Audit', tech: 'Feasibility Models' },
  { icon: UserCheck, label: 'Matching', tech: 'Expert Alignment' },
  { icon: CheckCircle, label: 'Validation', tech: 'Human-in-the-loop' },
];

export const AIPipeline = () => {
  return (
    <section className="py-24 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-prism-accent mb-4">Pipeline.Technical</h2>
          <h3 className="text-3xl font-bold text-white tracking-tight">AI Processing Pipeline</h3>
        </div>

        <div className="technical-panel p-12 bg-white/[0.01] border-white/5">
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Background Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 hidden lg:block" />
            
            {pipelineSteps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-none border border-white/10 bg-prism-bg flex flex-col items-center justify-center mb-6 group-hover:border-prism-accent transition-colors">
                  <step.icon size={28} className="text-white/40 group-hover:text-prism-accent transition-colors mb-1" />
                  <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Step 0{i+1}</span>
                </div>
                
                <h4 className="text-sm font-bold text-white mb-2">{step.label}</h4>
                <p className="text-[9px] font-mono text-prism-accent uppercase tracking-widest">{step.tech}</p>
                
                {i < pipelineSteps.length - 1 && (
                  <div className="h-8 w-px bg-white/10 my-4 lg:hidden" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
