import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Cpu, Database } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const SystemPreview = () => {
  return (
    <section className="py-24 border-b border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-prism-accent mb-4">System.Architecture</h2>
            <h3 className="text-3xl font-bold text-white tracking-tight mb-8">Inside the PRISM Intelligence Engine</h3>
            <p className="text-lg text-white/50 leading-relaxed mb-10">
              Explore the multi-layered infrastructure that powers PRISM. From secure document ingestion to distributed AI processing and immutable audit ledgers.
            </p>
            <Link to="/architecture">
              <Button size="lg" className="rounded-none px-8 group">
                Explore Architecture <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="technical-panel p-12 bg-white/[0.02] border-white/10 aspect-square flex flex-col items-center justify-center gap-12">
              <div className="w-24 h-24 border border-prism-accent/30 bg-prism-accent/5 flex items-center justify-center relative">
                <div className="absolute inset-0 border border-prism-accent/10 animate-ping" />
                <Shield className="text-prism-accent" size={40} />
              </div>
              
              <div className="flex gap-12">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 border border-white/10 bg-white/5 flex items-center justify-center">
                    <Cpu className="text-white/40" size={24} />
                  </div>
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Processing</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 border border-white/10 bg-white/5 flex items-center justify-center">
                    <Database className="text-white/40" size={24} />
                  </div>
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Storage</span>
                </div>
              </div>
              
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
