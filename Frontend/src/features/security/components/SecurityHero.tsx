import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, Key, Database, Globe } from 'lucide-react';

const securityLayers = [
  { 
    title: 'Authentication Layer', 
    icon: Key, 
    tech: 'OAuth 2.0 / SAML / 2FA',
    desc: 'Institutional identity management with multi-factor authentication and role-based access control.'
  },
  { 
    title: 'Encryption Layer', 
    icon: Lock, 
    tech: 'AES-256 / TLS 1.3',
    desc: 'End-to-end encryption for all research data at rest and in transit across the infrastructure.'
  },
  { 
    title: 'Access Control Layer', 
    icon: Shield, 
    tech: 'Zero-Trust Architecture',
    desc: 'Granular permission systems ensuring that only authorized evaluators can access specific proposal data.'
  },
  { 
    title: 'Audit Layer', 
    icon: Eye, 
    tech: 'Immutable System Logs',
    desc: 'Cryptographically signed audit trails for every AI-assisted evaluation and administrative action.'
  },
];

export const SecurityHero = () => {
  return (
    <section className="pt-32 pb-20 border-b border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-prism-accent mb-4">Security.Infrastructure</h2>
            <h1 className="text-5xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
              Zero-Trust <br />
              <span className="text-prism-accent">Research</span> <br />
              Governance
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-xl mb-10 font-medium">
              PRISM is built on a defense-grade security architecture designed to protect institutional research intellectual property and maintain absolute evaluation integrity.
            </p>
          </div>

          <div className="relative">
            <div className="flex flex-col gap-4">
              {securityLayers.map((layer, i) => (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="technical-panel p-6 border-white/10 bg-white/[0.02] flex items-center gap-6 group hover:bg-white/[0.04] transition-all"
                >
                  <div className="w-12 h-12 rounded-none border border-prism-accent/30 bg-prism-accent/5 flex items-center justify-center text-prism-accent group-hover:bg-prism-accent group-hover:text-white transition-all">
                    <layer.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-widest">{layer.title}</h4>
                    <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">{layer.tech}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Decorative Grid */}
            <div className="absolute -inset-8 border border-white/5 -z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
