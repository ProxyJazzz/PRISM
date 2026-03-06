import React from 'react';
import { motion } from 'motion/react';
import { Upload, FileSearch, Brain, Fingerprint, AlertTriangle, UserCheck, CheckCircle } from 'lucide-react';

const steps = [
  { icon: Upload, label: 'Proposal Upload', desc: 'Secure ingestion' },
  { icon: FileSearch, label: 'Parsing Engine', desc: 'Semantic extraction' },
  { icon: Brain, label: 'Semantic Analysis', desc: 'Contextual mapping' },
  { icon: Fingerprint, label: 'Similarity Detection', desc: 'Redundancy check' },
  { icon: AlertTriangle, label: 'Risk Modeling', desc: 'Feasibility audit' },
  { icon: UserCheck, label: 'Reviewer Matching', desc: 'Expert alignment' },
  { icon: CheckCircle, label: 'Human Review', desc: 'Final authority' },
];

export const SystemCapabilityMap = () => {
  return (
    <section className="py-24 border-b border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-prism-accent mb-4">System.Pipeline</h2>
          <h3 className="text-3xl font-bold text-white tracking-tight">End-to-End Proposal Intelligence</h3>
        </div>

        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-none border border-white/10 bg-prism-bg flex items-center justify-center mb-6 group-hover:border-prism-accent/50 transition-colors relative">
                  <div className="absolute inset-0 bg-prism-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <step.icon size={24} className="text-white/40 group-hover:text-prism-accent transition-colors" />
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-white/5 border border-white/10 flex items-center justify-center text-[8px] font-mono text-white/40">
                    0{i + 1}
                  </div>
                </div>
                
                <h4 className="text-sm font-bold text-white mb-2 group-hover:text-prism-accent transition-colors">{step.label}</h4>
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-medium">{step.desc}</p>
                
                {/* Mobile Connector */}
                {i < steps.length - 1 && (
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
