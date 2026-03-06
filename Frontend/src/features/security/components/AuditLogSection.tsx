import React from 'react';
import { motion } from 'motion/react';
import { History, Shield, FileText, Activity } from 'lucide-react';

const auditFeatures = [
  { 
    title: 'Immutable Logs', 
    icon: History, 
    desc: 'Every system action and AI evaluation is recorded in an immutable, cryptographically signed ledger.'
  },
  { 
    title: 'Real-time Alerts', 
    icon: Activity, 
    desc: 'Automated monitoring and alerting for suspicious access patterns or governance violations.'
  },
  { 
    title: 'Compliance Reports', 
    icon: FileText, 
    desc: 'Automated generation of institutional compliance and security audit reports.'
  },
  { 
    title: 'Integrity Checks', 
    icon: Shield, 
    desc: 'Periodic automated integrity checks of the audit ledger to ensure data non-repudiation.'
  },
];

export const AuditLogSection = () => {
  return (
    <section className="py-24 bg-white/[0.01] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-prism-accent mb-4">Security.Audit</h2>
          <h3 className="text-3xl font-bold text-white tracking-tight">Audit & Traceability</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {auditFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="technical-panel p-8 border-white/10 bg-white/[0.02] flex gap-6 items-start group hover:bg-white/[0.04] transition-all"
            >
              <div className="w-14 h-14 rounded-none border border-prism-accent/30 bg-prism-accent/5 flex items-center justify-center flex-shrink-0 group-hover:bg-prism-accent group-hover:text-white transition-all">
                <feature.icon size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3 tracking-tight tracking-tight">{feature.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
