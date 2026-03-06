import React from 'react';
import { Activity, Database, Brain, Lock, ShieldAlert } from 'lucide-react';

const ArchitectureDiagram = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-16 text-center">System Architecture</h1>
      
      <div className="relative">
        {/* Flow Diagram Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
          <div className="space-y-8">
            <div className="glass-card p-8 border-prism-accent/40">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="text-prism-accent" />
                <h3 className="font-bold uppercase tracking-widest text-sm">Frontend Layer</h3>
              </div>
              <p className="text-xs text-white/50 mb-4">React 18 + TypeScript SPA with Framer Motion for high-fidelity interactions.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded bg-prism-accent/10 text-[10px] text-prism-accent border border-prism-accent/20">Vite</span>
                <span className="px-2 py-1 rounded bg-prism-accent/10 text-[10px] text-prism-accent border border-prism-accent/20">Tailwind</span>
              </div>
            </div>
            <div className="glass-card p-8 border-prism-accent/40">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-prism-accent" />
                <h3 className="font-bold uppercase tracking-widest text-sm">Data Persistence</h3>
              </div>
              <p className="text-xs text-white/50 mb-4">PostgreSQL for structured data with Redis caching for high-performance retrieval.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="w-full glass-card p-10 border-prism-accent text-center relative glow-box">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-prism-accent text-white text-[10px] font-bold rounded-full">CORE ENGINE</div>
              <Brain size={64} className="mx-auto text-prism-accent mb-6 animate-pulse" />
              <h3 className="text-xl font-bold mb-4">AI Services Layer</h3>
              <p className="text-sm text-white/60 mb-6">Multi-model orchestration combining Gemini Pro with specialized NLP models.</p>
              <div className="space-y-2">
                <div className="text-[10px] text-white/40 uppercase tracking-widest">Processing Pipeline</div>
                <div className="flex justify-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-prism-accent animate-bounce" style={{ animationDelay: '0s' }} />
                  <div className="w-3 h-3 rounded-full bg-prism-accent animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-3 h-3 rounded-full bg-prism-accent animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8 border-prism-accent/40">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="text-prism-accent" />
                <h3 className="font-bold uppercase tracking-widest text-sm">Security Layer</h3>
              </div>
              <p className="text-xs text-white/50 mb-4">JWT-based authentication with granular Role-Based Access Control (RBAC).</p>
            </div>
            <div className="glass-card p-8 border-prism-accent/40">
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="text-prism-accent" />
                <h3 className="font-bold uppercase tracking-widest text-sm">Audit Logging</h3>
              </div>
              <p className="text-xs text-white/50 mb-4">Immutable ledger recording every AI interaction and administrative action.</p>
            </div>
          </div>
        </div>
        
        {/* Connecting Lines (SVG) - Hidden on mobile */}
        <svg className="absolute inset-0 w-full h-full -z-10 hidden lg:block" style={{ pointerEvents: 'none' }}>
          <line x1="33%" y1="30%" x2="50%" y2="50%" stroke="rgba(30,144,255,0.2)" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="33%" y1="70%" x2="50%" y2="50%" stroke="rgba(30,144,255,0.2)" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="66%" y1="30%" x2="50%" y2="50%" stroke="rgba(30,144,255,0.2)" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="66%" y1="70%" x2="50%" y2="50%" stroke="rgba(30,144,255,0.2)" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
      </div>
    </section>
  );
};

export default ArchitectureDiagram;
