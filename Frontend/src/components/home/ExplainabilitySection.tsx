import React from 'react';
import { motion } from 'motion/react';

const ExplainabilitySection = () => {
  return (
    <section className="py-40 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-prism-accent/5 rounded-full blur-[120px] -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-10 leading-[1.1]">Explainable AI.<br /><span className="text-prism-accent">Human Authority.</span></h2>
          <p className="text-xl text-white/50 mb-12 leading-[1.8]">
            Every AI-generated insight includes structured reasoning, confidence signals, and audit logs. We believe in augmenting human expertise, not replacing it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: "Traceable Logic", desc: "Full decision paths" },
              { title: "Confidence Scores", desc: "Reliability metrics" },
              { title: "Audit Trails", desc: "Compliance ready" },
              { title: "Bias Mitigation", desc: "Fairness checks" }
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="text-prism-accent font-bold mb-2 group-hover:translate-x-1 transition-transform">{item.title}</div>
                <div className="text-sm text-white/40">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="glass-card p-12 relative overflow-hidden border-prism-accent/20">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-prism-accent/50 to-transparent" />
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Audit Log #8829</span>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] text-emerald-400 font-bold tracking-widest">VERIFIED</span>
                </div>
              </div>
              <div className="h-px bg-prism-border/50" />
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div className="text-sm font-bold text-white/80 tracking-tight">Similarity Score</div>
                  <div className="text-xs font-mono text-prism-accent">12.4%</div>
                </div>
                <div className="w-full h-1.5 bg-prism-bg rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '12.4%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-prism-accent shadow-[0_0_10px_#1E90FF]" 
                  />
                </div>
              </div>
              <div className="text-sm text-white/50 leading-relaxed italic font-serif">
                "The proposal demonstrates high novelty. Overlap detected with Project ID-442 (2024) is limited to foundational methodology sections only."
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card p-5 bg-white/[0.02] border-prism-accent/10">
                  <div className="text-[10px] text-white/30 uppercase tracking-widest mb-2">Confidence</div>
                  <div className="text-2xl font-bold text-prism-highlight tracking-tighter">0.94</div>
                </div>
                <div className="glass-card p-5 bg-white/[0.02] border-prism-accent/10">
                  <div className="text-[10px] text-white/30 uppercase tracking-widest mb-2">Risk Level</div>
                  <div className="text-2xl font-bold text-emerald-400 tracking-tighter">LOW</div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-prism-accent/10 rounded-full blur-[100px] -z-10" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-prism-highlight/10 rounded-full blur-[100px] -z-10" />
        </div>
      </div>
    </section>
  );
};

export default ExplainabilitySection;
