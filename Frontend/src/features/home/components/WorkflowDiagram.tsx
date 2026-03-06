import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle } from '../../../components/ui/SectionTitle';

const stages = [
  { id: '01', title: 'Proposal Submission', desc: 'Secure institutional portal ingestion.' },
  { id: '02', title: 'Document Parsing', desc: 'Semantic structure extraction.' },
  { id: '03', title: 'AI Feature Extraction', desc: 'Multi-dimensional data vectorization.' },
  { id: '04', title: 'Similarity Detection', desc: 'Cross-repository redundancy check.' },
  { id: '05', title: 'Risk Assessment', desc: 'Feasibility and compliance audit.' },
  { id: '06', title: 'Reviewer Assignment', desc: 'Expert alignment and COI check.' },
  { id: '07', title: 'Human Decision', desc: 'Expert-led final evaluation.' },
];

export const WorkflowDiagram = () => {
  return (
    <section className="py-24 border-b border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="How PRISM Evaluates Research Proposals" 
          subtitle="A multi-stage intelligence workflow designed for institutional research governance."
        />

        <div className="relative mt-20">
          <div className="grid grid-cols-1 gap-4">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse text-right'}`}
              >
                <div className="flex-1 hidden md:block" />
                
                <div className="relative flex flex-col items-center">
                  <div className="w-12 h-12 rounded-none border border-prism-accent bg-prism-accent/10 flex items-center justify-center text-prism-accent font-mono text-sm z-10">
                    {stage.id}
                  </div>
                  {i < stages.length - 1 && (
                    <div className="w-px h-24 bg-gradient-to-b from-prism-accent to-white/5" />
                  )}
                </div>

                <div className="flex-1 pb-12">
                  <div className="technical-panel p-6 border-white/10 bg-white/[0.02]">
                    <h4 className="text-lg font-bold text-white mb-2">{stage.title}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{stage.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
