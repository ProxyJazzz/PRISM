import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1E90FF 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
      
      {/* Slow Data Pulse */}
      <motion.div 
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-b from-prism-accent/10 to-transparent pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-prism-accent/5 border border-white/10 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-prism-accent animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">AI-Assisted Research Evaluation Platform</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-[48px] lg:text-[80px] font-bold text-white tracking-tighter leading-[1.05] mb-8 max-w-[1000px] mx-auto">
              Proposal Reviewing Intelligence <br />
              & Screening Machine
            </h1>
            
            {/* Description Text */}
            <p className="text-lg text-white/50 leading-relaxed max-w-[720px] mx-auto mb-12 font-medium">
              PRISM enables institutions to evaluate research proposals faster and more transparently using AI-assisted screening, similarity detection, risk analysis and reviewer intelligence while keeping humans in full control.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="rounded-none px-10 group bg-prism-accent hover:bg-prism-accent/90 text-white border-none">
                  Explore System <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/architecture">
                <Button variant="outline" size="lg" className="rounded-none px-10 border-white/10 hover:bg-white/5 group text-white/60 hover:text-white">
                  View System Architecture <ArrowRight size={18} className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
