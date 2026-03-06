import React from 'react';
import { motion } from 'motion/react';
import { Users, Shield, Key, Eye } from 'lucide-react';

const accessControls = [
  { 
    title: 'RBAC', 
    icon: Users, 
    tech: 'Role-Based Access Control',
    desc: 'Define granular roles for institutional admins, evaluators, and proposal submitters.'
  },
  { 
    title: 'Zero-Trust', 
    icon: Shield, 
    tech: 'Identity-First Security',
    desc: 'Every request is authenticated and authorized based on institutional identity providers.'
  },
  { 
    title: 'MFA', 
    icon: Key, 
    tech: 'Multi-Factor Auth',
    desc: 'Mandatory multi-factor authentication for all administrative and evaluator accounts.'
  },
  { 
    title: 'Just-In-Time', 
    icon: Eye, 
    tech: 'JIT Access',
    desc: 'Temporary, time-bound access for external reviewers during evaluation periods.'
  },
];

export const AccessControlSection = () => {
  return (
    <section className="py-24 bg-white/[0.01] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-prism-accent mb-4">Security.Access</h2>
          <h3 className="text-3xl font-bold text-white tracking-tight">Access Control Protocols</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessControls.map((control, i) => (
            <motion.div
              key={control.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="technical-panel p-8 border-white/10 bg-white/[0.02] flex flex-col items-center text-center group hover:bg-white/[0.04] transition-all"
            >
              <div className="w-16 h-16 rounded-none border border-prism-accent/30 bg-prism-accent/5 flex items-center justify-center mb-6 group-hover:bg-prism-accent group-hover:text-white transition-all">
                <control.icon size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2 tracking-tight tracking-tight">{control.title}</h4>
              <p className="text-[10px] font-mono text-prism-accent uppercase tracking-widest mb-4">{control.tech}</p>
              <p className="text-white/50 text-xs leading-relaxed">{control.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
