import React from 'react';
import { motion } from 'motion/react';
import { Server, Database, Cpu, Layout, Globe } from 'lucide-react';

const layers = [
  { title: 'Frontend Layer', icon: Layout, desc: 'React-based institutional interface' },
  { title: 'Backend API', icon: Globe, desc: 'Secure Express.js orchestration' },
  { title: 'AI Processing Engine', icon: Cpu, desc: 'Gemini-powered research intelligence' },
  { title: 'Vector Database', icon: Database, desc: 'High-dimensional research indexing' },
  { title: 'PostgreSQL Database', icon: Server, desc: 'Relational audit and user records' },
];

export const SystemArchitecture = () => {
  return (
    <section className="py-32 border-b border-white/5 bg-prism-bg relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-prism-accent/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-prism-accent mb-4">System.Architecture</h2>
          <h3 className="text-4xl font-bold text-white tracking-tight">PRISM System Architecture</h3>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="technical-panel p-6 flex items-center justify-between group hover:border-prism-accent/30 transition-all duration-500"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-prism-accent/10 group-hover:border-prism-accent/20 transition-all duration-500">
                  <layer.icon size={24} className="text-white/40 group-hover:text-prism-accent transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white tracking-tight">{layer.title}</h4>
                  <p className="text-xs text-white/40 font-mono uppercase tracking-widest">{layer.desc}</p>
                </div>
              </div>
              
              <div className="hidden md:flex items-center gap-2">
                <div className="w-1 h-1 bg-prism-accent/20 rounded-full" />
                <div className="w-1 h-1 bg-prism-accent/40 rounded-full" />
                <div className="w-1 h-1 bg-prism-accent/60 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
