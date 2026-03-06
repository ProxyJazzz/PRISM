import React from 'react';
import { motion } from 'motion/react';
import { Lock, Key, Shield, Eye } from 'lucide-react';

const encryptionLayers = [
  { 
    title: 'Data at Rest', 
    icon: Lock, 
    tech: 'AES-256-GCM',
    desc: 'All institutional research data is encrypted using military-grade AES-256-GCM encryption at rest.'
  },
  { 
    title: 'Data in Transit', 
    icon: Shield, 
    tech: 'TLS 1.3 / mTLS',
    desc: 'Secure communication channels using TLS 1.3 with mutual authentication for institutional endpoints.'
  },
  { 
    title: 'Key Management', 
    icon: Key, 
    tech: 'HSM / KMS',
    desc: 'Hardware Security Modules (HSM) and cloud KMS for secure, institutional-controlled key management.'
  },
  { 
    title: 'Zero-Knowledge', 
    icon: Eye, 
    tech: 'End-to-End Encryption',
    desc: 'Optional zero-knowledge architecture ensuring that only the institution can decrypt sensitive proposal data.'
  },
];

export const EncryptionSection = () => {
  return (
    <section className="py-24 bg-white/[0.01] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-prism-accent mb-4">Security.Encryption</h2>
          <h3 className="text-3xl font-bold text-white tracking-tight">Encryption Infrastructure</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {encryptionLayers.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="technical-panel p-8 border-white/10 bg-white/[0.02] flex gap-6 items-start group hover:bg-white/[0.04] transition-all"
            >
              <div className="w-14 h-14 rounded-none border border-prism-accent/30 bg-prism-accent/5 flex items-center justify-center flex-shrink-0 group-hover:bg-prism-accent group-hover:text-white transition-all">
                <layer.icon size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3 tracking-tight tracking-tight">{layer.title}</h4>
                <p className="text-[10px] font-mono text-prism-accent uppercase tracking-widest mb-2">{layer.tech}</p>
                <p className="text-white/50 text-sm leading-relaxed">{layer.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
