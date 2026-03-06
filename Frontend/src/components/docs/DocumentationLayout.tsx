import React from 'react';

const DocumentationLayout = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r border-prism-border hidden md:block p-8">
        <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8">Getting Started</h3>
        <ul className="space-y-4">
          <li><button className="text-sm text-prism-accent font-bold">Introduction</button></li>
          <li><button className="text-sm text-white/60 hover:text-white transition-colors">Quick Start Guide</button></li>
          <li><button className="text-sm text-white/60 hover:text-white transition-colors">Institutional Setup</button></li>
        </ul>
        <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8 mt-12">Core Features</h3>
        <ul className="space-y-4">
          <li><button className="text-sm text-white/60 hover:text-white transition-colors">Proposal Parsing</button></li>
          <li><button className="text-sm text-white/60 hover:text-white transition-colors">Similarity Engine</button></li>
          <li><button className="text-sm text-white/60 hover:text-white transition-colors">Reviewer Matching</button></li>
        </ul>
      </aside>
      <main className="flex-1 p-8 lg:p-16 max-w-4xl">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-prism-accent text-xs font-bold uppercase tracking-widest mb-4">
            Documentation / Introduction
          </div>
          <h1 className="text-4xl font-bold mb-6">Introduction to PRISM</h1>
          <p className="text-lg text-white/70 leading-relaxed">
            PRISM is a comprehensive infrastructure for research funding bodies and academic institutions to modernize their proposal evaluation workflows using responsible AI.
          </p>
        </div>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Why PRISM?</h2>
            <p className="text-white/60 leading-relaxed mb-6">
              Traditional proposal evaluation is often slow, prone to administrative bottlenecks, and difficult to audit for bias or redundancy. PRISM addresses these challenges by providing a suite of AI-assisted tools that augment human evaluators.
            </p>
            <div className="glass-card p-6 bg-prism-accent/5 border-prism-accent/20">
              <h4 className="font-bold mb-2 text-prism-accent">Key Benefit</h4>
              <p className="text-sm text-white/70">Reduce initial screening time by up to 60% while maintaining 100% audit traceability.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DocumentationLayout;
