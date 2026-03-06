import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain } from 'lucide-react';

const HeroAnimation = () => {
  const nodes = [
    { label: 'HUMAN REVIEW', orbit: 120, angle: -45, progress: 65 },
    { label: 'EXPLAINABILITY', orbit: 120, angle: 135, progress: 45 },
    { label: 'PROPOSAL PARSING', orbit: 200, angle: -140, progress: 85 },
    { label: 'SIMILARITY DETECTION', orbit: 200, angle: -20, progress: 75 },
    { label: 'RISK ANALYSIS', orbit: 200, angle: 40, progress: 55 },
    { label: 'REVIEWER MATCHING', orbit: 200, angle: 190, progress: 95 },
    { label: 'AI INSIGHTS', orbit: 280, angle: 220, progress: 80 },
    { label: 'AUDIT LOGS', orbit: 280, angle: 30, progress: 90 },
  ];

  return (
    <div className="relative w-full aspect-square flex items-center justify-center">
      {/* Central Hub */}
      <div className="relative z-20 w-40 h-40 rounded-full bg-prism-bg border border-prism-accent/30 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(30,144,255,0.2)]">
        <div className="absolute inset-0 rounded-full bg-prism-accent/5 animate-pulse" />
        <div className="text-xl font-bold tracking-[0.2em] text-white">PRISM</div>
        <div className="text-[10px] font-bold tracking-[0.3em] text-prism-accent/60">CORE</div>
      </div>

      {/* Orbits */}
      {[120, 200, 280].map((radius, i) => (
        <motion.div
          key={radius}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{ 
            opacity: { duration: 1, delay: i * 0.2 },
            scale: { duration: 1, delay: i * 0.2 },
            rotate: { duration: 60 + i * 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute border border-prism-accent/10 rounded-full border-dashed"
          style={{ width: radius * 2, height: radius * 2 }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => {
        const x = Math.cos((node.angle * Math.PI) / 180) * node.orbit;
        const y = Math.sin((node.angle * Math.PI) / 180) * node.orbit;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
            className="absolute z-30"
            style={{ x, y }}
          >
            <div className="glass-card p-3 min-w-[140px] border-prism-accent/20 hover:border-prism-accent/50 transition-colors group cursor-default">
              <div className="text-[9px] font-bold tracking-[0.15em] text-prism-accent mb-2 group-hover:text-prism-highlight transition-colors">
                {node.label}
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${node.progress}%` }}
                  transition={{ duration: 1.5, delay: 1.5 + i * 0.1 }}
                  className="h-full bg-prism-accent group-hover:bg-prism-highlight transition-colors" 
                />
              </div>
            </div>
            {/* Connection dot on the orbit */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-prism-accent shadow-[0_0_10px_#1E90FF]" />
          </motion.div>
        );
      })}

      {/* Background Glows */}
      <div className="absolute inset-0 bg-gradient-to-tr from-prism-accent/10 to-prism-highlight/10 rounded-full blur-[120px] -z-10 animate-pulse" />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 prism-gradient opacity-40 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-prism-accent/5 rounded-full blur-[150px] -z-10 animate-pulse" />
      
      {/* Subtle Background Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-prism-accent/10 border border-prism-accent/20 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-prism-accent animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-prism-accent">Institutional Intelligence Platform</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-10">
            Proposal Reviewing <br />
            <span className="text-prism-accent glow-text">Intelligence</span> <br />
            & Screen Machine
          </h1>
          <p className="text-xl text-white/60 mb-12 max-w-xl leading-[1.7]">
            Beyond automation — PRISM provides institutional-grade governance and explainable AI for complex proposal evaluation.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link to="/register" className="px-10 py-5 rounded-xl bg-prism-accent text-white font-bold hover:bg-prism-accent/90 transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(30,144,255,0.3)] group">
              Explore System <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/architecture" className="px-10 py-5 rounded-xl border border-prism-accent/30 text-white font-bold hover:bg-prism-accent/10 transition-all">
              System Architecture
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative"
        >
          <HeroAnimation />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
