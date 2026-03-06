import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileText, Search, Activity, Users, Shield } from 'lucide-react';

const steps = [
  { id: '01', title: 'Proposal Parsing', icon: FileText },
  { id: '02', title: 'Similarity Detection', icon: Search },
  { id: '03', title: 'Risk & Feasibility Analysis', icon: Activity },
  { id: '04', title: 'Reviewer Matching', icon: Users },
  { id: '05', title: 'Human Decision Layer', icon: Shield },
];

export const HowPrismWorks = () => {
  return (
    <section className="py-32 border-b border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-prism-accent mb-4">System.Engine</h2>
          <h3 className="text-4xl font-bold text-white tracking-tight">How PRISM Works</h3>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          {steps.map((step, i) => (
            <React.Fragment key={step.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative z-10 flex flex-col items-center group w-full lg:w-auto"
              >
                <div className="w-20 h-20 rounded-none border border-white/10 bg-prism-bg flex items-center justify-center relative transition-all duration-500 group-hover:border-prism-accent/50 group-hover:shadow-[0_0_30px_rgba(30,144,255,0.1)]">
                  <div className="absolute inset-0 bg-prism-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <step.icon size={32} className="text-white/40 group-hover:text-prism-accent transition-colors duration-500" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-prism-accent text-white font-mono text-[10px] flex items-center justify-center">
                    {step.id}
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <h4 className="text-sm font-bold text-white mb-1 tracking-tight uppercase">{step.title}</h4>
                  <div className="w-8 h-0.5 bg-prism-accent/20 mx-auto group-hover:w-12 group-hover:bg-prism-accent transition-all duration-500" />
                </div>
              </motion.div>

              {i < steps.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.1, duration: 0.8 }}
                  className="hidden lg:flex items-center text-white/5 flex-grow origin-left"
                >
                  <div className="h-px bg-gradient-to-r from-prism-accent/20 to-transparent flex-grow" />
                  <ArrowRight size={16} className="mx-2" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
