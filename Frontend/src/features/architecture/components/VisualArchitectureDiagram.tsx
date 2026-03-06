import React from 'react';
import { motion } from 'motion/react';
import { Laptop, Server, Database, Cpu, Search, Shield, ArrowDown, ArrowRight } from 'lucide-react';

export const VisualArchitectureDiagram = () => {
  return (
    <section className="py-24 bg-[#050A15] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1E90FF 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 mx-auto mb-4 relative">
              <div className="absolute inset-0 bg-prism-accent blur-xl opacity-20 animate-pulse" />
              <div className="relative w-full h-full border-2 border-prism-accent flex items-center justify-center rotate-45">
                <Shield className="text-prism-accent -rotate-45" size={32} />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white tracking-tighter mb-2">PRISM</h2>
            <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40">Proposal Research Intelligence System</p>
          </motion.div>

          {/* Frontend Layer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full max-w-xl technical-panel p-6 border-prism-accent/30 bg-white/[0.02] relative group"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-prism-accent/10 border border-prism-accent/20 flex items-center justify-center">
                <Laptop className="text-prism-accent" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Frontend Layer</h3>
                <p className="text-xs font-mono text-white/40">React + TypeScript • Next.js or Vite</p>
              </div>
            </div>
          </motion.div>

          {/* Connector: REST API */}
          <div className="flex flex-col items-center py-8">
            <div className="h-12 w-px bg-gradient-to-b from-prism-accent to-transparent" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-prism-accent my-2">REST API</span>
            <ArrowDown className="text-prism-accent" size={20} />
          </div>

          {/* Backend API */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl technical-panel p-8 border-white/10 bg-white/[0.02] relative"
          >
            <h3 className="text-center text-xl font-bold text-white mb-6">Backend API</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'FastAPI or Express + Node.js',
                'JWT Authentication',
                'Role-Based Access Control',
                'Admin Dashboard',
                'Audit Logging'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                  <div className="w-1.5 h-1.5 bg-prism-accent rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Middle Section: Document Engine & Databases */}
          <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Document Processing Engine (Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-3 space-y-4"
            >
              <div className="technical-panel p-6 border-white/10 bg-white/[0.02] text-center">
                <h4 className="text-sm font-bold text-white mb-4">Document Processing Engine</h4>
                <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">PDF / Text Parsing</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-8 w-px bg-white/10" />
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest my-2">Document Ingestion</span>
                <div className="h-8 w-px bg-white/10" />
              </div>
              <div className="technical-panel p-6 border-white/10 bg-white/[0.02] flex items-center justify-center">
                <Search className="text-white/20" size={32} />
              </div>
            </motion.div>

            {/* Databases Container (Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-9 technical-panel p-8 border-white/10 bg-white/[0.01]"
            >
              <h3 className="text-center text-lg font-bold text-white mb-8">Databases</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* AI Processing Engine */}
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 border border-prism-accent/30 bg-prism-accent/5 flex items-center justify-center">
                    <Cpu className="text-prism-accent" size={24} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-4">AI Processing Engine</h4>
                  <ul className="space-y-2 text-[10px] text-white/40 text-left">
                    <li>• Document Parsing</li>
                    <li>• Embedding Generation</li>
                    <li>• Similarity Detection</li>
                    <li>• Risk Analysis</li>
                  </ul>
                </div>

                {/* Vector Database */}
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 border border-prism-accent/30 bg-prism-accent/5 flex items-center justify-center">
                    <Database className="text-prism-accent" size={24} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-4">Vector Database</h4>
                  <ul className="space-y-2 text-[10px] text-white/40 text-left">
                    <li>• Pinecone</li>
                    <li>• Weaviate</li>
                    <li>• Supabase</li>
                  </ul>
                </div>

                {/* PostgreSQL Database */}
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 border border-prism-accent/30 bg-prism-accent/5 flex items-center justify-center">
                    <Server className="text-prism-accent" size={24} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-4">PostgreSQL Database</h4>
                  <ul className="space-y-2 text-[10px] text-white/40 text-left">
                    <li>• Users</li>
                    <li>• Proposals</li>
                    <li>• Reviewers</li>
                    <li>• Audit Logs</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Infrastructure Boxes */}
          <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="technical-panel p-6 border-white/10 bg-white/[0.02] flex items-center justify-between group"
            >
              <div>
                <h4 className="text-sm font-bold text-white mb-2">Vector Database</h4>
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Pinecone / Weaviate</p>
              </div>
              <Database className="text-prism-accent/40 group-hover:text-prism-accent transition-colors" size={24} />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="technical-panel p-6 border-white/10 bg-white/[0.02] flex items-center justify-between group"
            >
              <div>
                <h4 className="text-sm font-bold text-white mb-2">PostgreSQL Database</h4>
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Structured Data Storage</p>
              </div>
              <Server className="text-prism-accent/40 group-hover:text-prism-accent transition-colors" size={24} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
