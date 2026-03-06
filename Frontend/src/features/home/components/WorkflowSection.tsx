import React from 'react';
import { motion } from 'motion/react';
import { Upload, FileSearch, Network, ShieldAlert, UserCheck, ArrowRight } from 'lucide-react';
import { SectionTitle } from '../../../components/ui/SectionTitle';

const steps = [
  {
    title: 'Proposal Upload',
    description: 'Ingest research documents in multiple formats with automated metadata extraction.',
    icon: Upload,
  },
  {
    title: 'AI Semantic Analysis',
    description: 'Deep parsing of research objectives, methodology, and expected outcomes.',
    icon: FileSearch,
  },
  {
    title: 'Similarity Detection',
    description: 'Cross-referencing global databases for research novelty and duplication.',
    icon: Network,
  },
  {
    title: 'Risk Modeling',
    description: 'Assessment of ethical, financial, and technical feasibility risks.',
    icon: ShieldAlert,
  },
  {
    title: 'Human Review',
    description: 'Final expert evaluation supported by AI-generated evidence and reasoning.',
    icon: UserCheck,
  },
];

export const WorkflowSection = () => {
  return (
    <section className="py-24 bg-white/[0.02] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-prism-accent/20 to-transparent -z-10 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Evaluation Pipeline" 
          subtitle="A structured, transparent workflow that combines AI speed with human expert judgment."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="glass-card p-8 border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl flex flex-col items-center text-center h-full group-hover:border-prism-accent/50 transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-prism-accent/10 border border-prism-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="text-prism-accent" size={28} />
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">{step.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed">{step.description}</p>
                
                {/* Step Number Badge */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-prism-bg border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/40">
                  {i + 1}
                </div>

                {/* Arrow for Desktop */}
                {i < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-6 -translate-y-1/2 text-prism-accent/20 hidden lg:block">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
