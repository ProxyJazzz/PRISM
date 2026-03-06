import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Shield, Globe, Lock } from 'lucide-react';

const complianceItems = [
  { 
    title: 'SOC2 Type II', 
    icon: Shield, 
    desc: 'PRISM infrastructure is SOC2 Type II compliant for security, availability, and confidentiality.'
  },
  { 
    title: 'GDPR Aligned', 
    icon: Globe, 
    desc: 'Strict adherence to GDPR data protection principles for institutional research data.'
  },
  { 
    title: 'HIPAA Ready', 
    icon: Lock, 
    desc: 'Optional HIPAA-compliant configurations for medical and health-related research proposals.'
  },
  { 
    title: 'ISO 27001', 
    icon: CheckCircle2, 
    desc: 'Aligned with ISO/IEC 27001 standards for information security management systems.'
  },
];

export const ComplianceSection = () => {
  return (
    <section className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-prism-accent mb-4">Security.Compliance</h2>
          <h3 className="text-3xl font-bold text-white tracking-tight">Institutional Compliance</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {complianceItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="technical-panel p-8 border-white/10 bg-white/[0.02] flex flex-col items-center text-center group hover:bg-white/[0.04] transition-all"
            >
              <div className="w-16 h-16 rounded-none border border-prism-accent/30 bg-prism-accent/5 flex items-center justify-center mb-6 group-hover:bg-prism-accent group-hover:text-white transition-all">
                <item.icon size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2 tracking-tight tracking-tight">{item.title}</h4>
              <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
