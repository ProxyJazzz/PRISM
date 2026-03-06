import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle } from '../../../components/ui/SectionTitle';

const capabilities = [
  { 
    capability: 'Proposal Parsing', 
    description: 'Extracts semantic structure from unstructured documents including text, tables, and citations.', 
    technology: 'NLP Engine v4.2' 
  },
  { 
    capability: 'Similarity Detection', 
    description: 'Identifies potential research overlaps and redundancies across internal and external repositories.', 
    technology: 'Vector Search / Embeddings' 
  },
  { 
    capability: 'Risk Analysis', 
    description: 'Detects feasibility issues, ethical risks, and administrative non-compliance in real-time.', 
    technology: 'Explainable AI Models' 
  },
  { 
    capability: 'Reviewer Matching', 
    description: 'Aligns expert reviewers with proposals based on semantic expertise and conflict-of-interest checks.', 
    technology: 'Embedding Similarity' 
  },
  { 
    capability: 'Governance Audit', 
    description: 'Maintains an immutable, cryptographically signed log of every AI-assisted evaluation step.', 
    technology: 'Distributed Ledger / Audit Layer' 
  },
  { 
    capability: 'Bias Mitigation', 
    description: 'Identifies and flags potential cognitive bias in reviewer comments and scoring patterns.', 
    technology: 'Statistical Bias Detection' 
  },
];

export const CapabilityMatrix = () => {
  return (
    <section className="py-24 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="System Capability Matrix" 
          subtitle="Technical specifications of the PRISM intelligence infrastructure layers."
          align="left"
        />

        <div className="technical-panel border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/10">
                  <th className="px-8 py-6 text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Capability</th>
                  <th className="px-8 py-6 text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Description</th>
                  <th className="px-8 py-6 text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Technology Layer</th>
                </tr>
              </thead>
              <tbody>
                {capabilities.map((item, i) => (
                  <motion.tr 
                    key={item.capability}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors group"
                  >
                    <td className="px-8 py-8">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-prism-accent group-hover:scale-150 transition-transform" />
                        <span className="text-sm font-bold text-white tracking-tight">{item.capability}</span>
                      </div>
                    </td>
                    <td className="px-8 py-8">
                      <p className="text-sm text-white/50 leading-relaxed max-w-md">{item.description}</p>
                    </td>
                    <td className="px-8 py-8">
                      <span className="text-[10px] font-mono text-prism-accent bg-prism-accent/10 px-3 py-1 border border-prism-accent/20">
                        {item.technology}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
