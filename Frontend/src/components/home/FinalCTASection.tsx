import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-48 relative overflow-hidden">
      <div className="absolute inset-0 bg-prism-accent/[0.02] -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-prism-accent/5 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="max-w-2xl">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-[1.1]">Bring Transparency to <br /><span className="text-prism-accent">Proposal Evaluation</span></h2>
          <p className="text-xl text-white/50 leading-relaxed">
            Institutional-grade AI screening with human oversight. Join leading research bodies in implementing the next generation of infrastructure.
          </p>
        </div>
        
        <div className="flex flex-col items-center lg:items-end">
          <div className="relative group">
            <div className="absolute inset-0 bg-prism-accent/20 rounded-2xl blur-2xl group-hover:bg-prism-accent/40 transition-all duration-500" />
            <Link to="/register" className="relative px-12 py-6 rounded-2xl bg-prism-accent text-white font-bold text-xl hover:bg-prism-accent/90 transition-all flex items-center gap-4 shadow-[0_0_40px_rgba(30,144,255,0.3)]">
              Request Institutional Access <ArrowRight size={24} />
            </Link>
          </div>
          <p className="mt-8 text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">No automated decisions. Humans remain in control.</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
