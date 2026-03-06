import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { ArrowRight, Book, Code, Shield, Terminal } from 'lucide-react';

const DocumentationPage = () => {
  return (
    <PageContainer className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-prism-accent mb-4">System.Docs</h2>
          <h1 className="text-4xl font-bold text-white tracking-tight">Technical Documentation</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { title: 'Getting Started', icon: Book, desc: 'Quick start guide for new institutional admins.' },
            { title: 'API Reference', icon: Code, desc: 'Detailed documentation for PRISM REST and GraphQL APIs.' },
            { title: 'Security Architecture', icon: Shield, desc: 'Deep dive into our zero-trust security model.' },
            { title: 'CLI Tools', icon: Terminal, desc: 'Command-line tools for automated proposal ingestion.' },
          ].map((item, i) => (
            <div key={i} className="technical-panel flex flex-col items-center text-center p-8 group cursor-pointer hover:bg-white/[0.04] transition-all">
              <div className="w-16 h-16 rounded-none border border-prism-accent/30 bg-prism-accent/5 flex items-center justify-center mb-6 group-hover:bg-prism-accent group-hover:text-white transition-all duration-500">
                <item.icon size={32} />
              </div>
              <h3 className="text-lg font-bold text-white mb-4 tracking-tight">{item.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed mb-6 font-medium uppercase tracking-widest">{item.desc}</p>
              <button className="text-prism-accent text-[10px] font-mono uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-8">Table of Contents</h3>
            <ul className="space-y-4">
              {['Introduction', 'System Architecture', 'AI Processing Pipeline', 'Security Protocols', 'Institutional Governance', 'API Integration', 'Deployment Guide'].map((item, i) => (
                <li key={i}>
                  <button className={`text-sm font-medium transition-colors ${i === 0 ? 'text-prism-accent' : 'text-white/60 hover:text-white'}`}>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="technical-panel p-10 border-white/10 bg-white/[0.02]">
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Introduction to PRISM</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                PRISM is a comprehensive infrastructure for research funding bodies and academic institutions to modernize their proposal evaluation workflows using responsible AI.
              </p>
              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">System Overview</h3>
                  <p className="text-white/50 leading-relaxed mb-6">
                    Traditional proposal evaluation is often slow, prone to administrative bottlenecks, and difficult to audit for bias or redundancy. PRISM addresses these challenges by providing a suite of AI-assisted tools that augment human evaluators.
                  </p>
                  <div className="technical-panel p-6 bg-prism-accent/5 border-prism-accent/20">
                    <h4 className="font-bold mb-2 text-prism-accent text-xs uppercase tracking-widest">Key Metric</h4>
                    <p className="text-sm text-white/70 leading-relaxed">Reduce initial screening time by up to 60% while maintaining 100% audit traceability and human-in-the-loop authority.</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default DocumentationPage;
