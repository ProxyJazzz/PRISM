import React from 'react';
import { motion } from 'motion/react';

export const ArchitectureHero = () => {
  return (
    <section className="pt-32 pb-20 border-b border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-prism-accent mb-4">Architecture.System</h2>
            <h1 className="text-5xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
              Technical <br />
              <span className="text-prism-accent">Infrastructure</span> <br />
              Specifications
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-xl mb-10 font-medium">
              PRISM is built on a modular, high-performance architecture designed for institutional research governance and automated proposal intelligence.
            </p>
          </div>

          <div className="relative">
            <div className="technical-panel p-12 bg-white/[0.01] border-white/5 min-h-[300px] flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-prism-accent" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">System.Architecture v2.4</span>
                </div>
                <div className="h-px bg-white/5 w-full" />
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-prism-accent mb-2">Uptime</div>
                    <div className="text-2xl font-bold text-white">99.99%</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-prism-accent mb-2">Latency</div>
                    <div className="text-2xl font-bold text-white">&lt; 200ms</div>
                  </div>
                </div>
                <div className="h-px bg-white/5 w-full" />
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Real-time Monitoring Active</span>
                </div>
              </div>
            </div>
            {/* Decorative Grid */}
            <div className="absolute -inset-8 border border-white/5 -z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
