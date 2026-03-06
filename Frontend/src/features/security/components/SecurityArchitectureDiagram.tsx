import React from 'react';
import { motion } from 'motion/react';
import { Lock, Shield, Settings, Database, Server, ArrowDown, ArrowRight } from 'lucide-react';

export const SecurityArchitectureDiagram = () => {
  return (
    <section className="py-24 bg-[#050A15] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1E90FF 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
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
            <h2 className="text-4xl font-bold text-white tracking-tighter mb-2">SECURITY ARCHITECTURE</h2>
            <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40">Proposal Research Intelligence System</p>
          </motion.div>

          {/* Authentication Layer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full max-w-xl technical-panel p-8 border-prism-accent/30 bg-white/[0.02] relative group mb-8"
          >
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 bg-prism-accent/10 border border-prism-accent/20 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-prism-accent/5 animate-pulse" />
                <Lock className="text-prism-accent" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Authentication Layer</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-white/60 flex items-center gap-2">
                    <div className="w-1 h-1 bg-prism-accent rounded-full" />
                    JWT Authentication
                  </li>
                  <li className="text-sm text-white/60 flex items-center gap-2">
                    <div className="w-1 h-1 bg-prism-accent rounded-full" />
                    Secure Login Protocols
                  </li>
                  <li className="text-sm text-white/60 flex items-center gap-2">
                    <div className="w-1 h-1 bg-prism-accent rounded-full" />
                    Multi-Factor Authentication
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Arrow */}
          <div className="py-4">
            <ArrowDown className="text-prism-accent animate-bounce" size={24} />
          </div>

          {/* Encryption Layer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full max-w-xl technical-panel p-8 border-prism-accent/30 bg-white/[0.02] relative group mb-8"
          >
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 bg-prism-accent/10 border border-prism-accent/20 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-prism-accent/5 animate-pulse" />
                <Shield className="text-prism-accent" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Encryption Layer</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-white/60 flex items-center gap-2">
                    <div className="w-1 h-1 bg-prism-accent rounded-full" />
                    AES-256 Data Encryption
                  </li>
                  <li className="text-sm text-white/60 flex items-center gap-2">
                    <div className="w-1 h-1 bg-prism-accent rounded-full" />
                    TLS 1.3 Secure Transport
                  </li>
                  <li className="text-sm text-white/60 flex items-center gap-2">
                    <div className="w-1 h-1 bg-prism-accent rounded-full" />
                    Advanced Key Management
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Arrow */}
          <div className="py-4">
            <ArrowDown className="text-prism-accent animate-bounce" size={24} />
          </div>

          {/* Access Control Layer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full max-w-xl technical-panel p-8 border-prism-accent/30 bg-white/[0.02] relative group mb-12"
          >
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 bg-prism-accent/10 border border-prism-accent/20 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-prism-accent/5 animate-pulse" />
                <Settings className="text-prism-accent" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Access Control Layer</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-white/60 flex items-center gap-2">
                    <div className="w-1 h-1 bg-prism-accent rounded-full" />
                    Role-Based Access Control
                  </li>
                  <li className="text-sm text-white/60 flex items-center gap-2">
                    <div className="w-1 h-1 bg-prism-accent rounded-full" />
                    Granular Permissions
                  </li>
                  <li className="text-sm text-white/60 flex items-center gap-2">
                    <div className="w-1 h-1 bg-prism-accent rounded-full" />
                    Institutional Governance
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Audit Layer Container */}
          <div className="w-full technical-panel p-8 border-white/10 bg-white/[0.01] relative">
            <h3 className="text-center text-lg font-bold text-white mb-8 uppercase tracking-widest">Audit Layer</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* University / Vector DBs */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="technical-panel p-6 border-white/10 bg-white/[0.02]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-prism-accent/10 flex items-center justify-center">
                    <Database className="text-prism-accent" size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-white">University</h4>
                </div>
                <ul className="space-y-2 text-xs text-white/40">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-prism-accent/40 rounded-full" />
                    Pinecone
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-prism-accent/40 rounded-full" />
                    Weaviate
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-prism-accent/40 rounded-full" />
                    Supabase
                  </li>
                </ul>
              </motion.div>

              {/* PostgreSQL Database */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="technical-panel p-6 border-white/10 bg-white/[0.02]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-prism-accent/10 flex items-center justify-center">
                    <Server className="text-prism-accent" size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-white">PostgreSQL Database</h4>
                </div>
                <ul className="space-y-2 text-xs text-white/40">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-prism-accent/40 rounded-full" />
                    Users
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-prism-accent/40 rounded-full" />
                    Proposals
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-prism-accent/40 rounded-full" />
                    Reviewers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-prism-accent/40 rounded-full" />
                    Audit Logs
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
