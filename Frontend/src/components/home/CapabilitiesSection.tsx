import React from 'react';
import { motion } from 'motion/react';

const FeatureVisual = ({ type }: { type: 'analysis' | 'integrity' | 'screening' | 'matching' }) => {
  const colors = {
    analysis: '#1E90FF',
    integrity: '#00C2FF',
    screening: '#1E90FF',
    matching: '#00C2FF'
  };
  
  return (
    <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-prism-accent/5 rounded-2xl" />
      <svg className="w-full h-full opacity-40" viewBox="0 0 400 200">
        {type === 'analysis' && (
          <>
            <rect x="50" y="50" width="300" height="100" fill="none" stroke={colors.analysis} strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="3" fill={colors.analysis} className="animate-pulse" />
            <circle cx="200" cy="80" r="3" fill={colors.analysis} className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="300" cy="120" r="3" fill={colors.analysis} className="animate-pulse" style={{ animationDelay: '1s' }} />
            <path d="M100 100 L200 80 L300 120" fill="none" stroke={colors.analysis} strokeWidth="1" opacity="0.5" />
          </>
        )}
        {type === 'integrity' && (
          <>
            <path d="M50 150 L100 50 L150 120 L200 40 L250 160 L300 80 L350 140" fill="none" stroke={colors.integrity} strokeWidth="0.5" strokeDasharray="2 2" />
            <rect x="180" y="30" width="40" height="40" fill="none" stroke={colors.integrity} strokeWidth="1" className="animate-spin-slow" />
            <circle cx="200" cy="50" r="20" fill="none" stroke={colors.integrity} strokeWidth="0.5" opacity="0.3" />
          </>
        )}
        {type === 'screening' && (
          <>
            {[...Array(8)].map((_, i) => (
              <line key={i} x1={50 + i * 40} y1="20" x2={50 + i * 40} y2="180" stroke={colors.screening} strokeWidth="0.2" opacity="0.2" />
            ))}
            <rect x="100" y="60" width="200" height="80" fill="none" stroke={colors.screening} strokeWidth="1" />
            <line x1="100" y1="100" x2="300" y2="100" stroke={colors.screening} strokeWidth="0.5" className="animate-pulse" />
          </>
        )}
        {type === 'matching' && (
          <>
            <circle cx="200" cy="100" r="60" fill="none" stroke={colors.matching} strokeWidth="0.5" strokeDasharray="8 4" />
            <circle cx="200" cy="100" r="40" fill="none" stroke={colors.matching} strokeWidth="0.5" />
            <circle cx="200" cy="100" r="5" fill={colors.matching} />
            {[...Array(6)].map((_, i) => (
              <line 
                key={i} 
                x1="200" y1="100" 
                x2={200 + 80 * Math.cos(i * Math.PI / 3)} 
                y2={100 + 80 * Math.sin(i * Math.PI / 3)} 
                stroke={colors.matching} 
                strokeWidth="0.5" 
                opacity="0.3" 
              />
            ))}
          </>
        )}
      </svg>
    </div>
  );
};

const FeatureBlock = ({ label, title, description, type, reverse = false, index }: { label: string, title: string, description: string, type: any, reverse?: boolean, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: reverse ? 50 : -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 mb-32 group`}
  >
    <div className="w-full lg:w-[60%]">
      <div className="relative pl-8 border-l-2 border-prism-accent/30 group-hover:border-prism-accent transition-colors duration-500">
        <div className="absolute -left-[2px] top-0 w-[2px] h-0 bg-prism-accent group-hover:h-full transition-all duration-500" />
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-prism-accent/60 mb-4">{label}</div>
        <h3 className="text-3xl font-bold mb-6 group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
        <p className="text-lg text-white/60 max-w-xl">{description}</p>
        
        <div className="mt-8 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-prism-accent/5 border border-prism-accent/20 flex items-center justify-center backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-prism-accent animate-pulse" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-white/40">System Active</span>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-[40%]">
      <div className="relative">
        <div className="absolute inset-0 bg-prism-accent/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <FeatureVisual type={type} />
      </div>
    </div>
  </motion.div>
);

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-prism-accent mb-6">Core Capabilities</div>
          <h2 className="text-5xl font-bold mb-8 relative inline-block">
            What PRISM Actually Does
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-prism-accent rounded-full" />
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            Beyond automation — structured intelligence for research governance.
          </p>
        </div>
        
        <div className="space-y-12">
          <FeatureBlock 
            index={0}
            label="ANALYSIS"
            title="Proposal Parsing"
            description="Automated semantic extraction of key research objectives, methodologies, and expected outcomes from complex technical documents."
            type="analysis"
          />
          <FeatureBlock 
            index={1}
            label="INTEGRITY"
            title="Similarity Intelligence"
            description="Identify redundancy or potential overlaps with previously funded projects or existing literature across global databases."
            type="integrity"
            reverse
          />
          <FeatureBlock 
            index={2}
            label="SCREENING"
            title="Risk & Feasibility Modeling"
            description="Early identification of ethical concerns, logistical bottlenecks, or budget inconsistencies based on historical performance data."
            type="screening"
          />
          <FeatureBlock 
            index={3}
            label="MATCHING"
            title="Reviewer Alignment Engine"
            description="Smart recommendation of subject matter experts based on expertise alignment, previous review quality, and conflict-of-interest checks."
            type="matching"
            reverse
          />
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
