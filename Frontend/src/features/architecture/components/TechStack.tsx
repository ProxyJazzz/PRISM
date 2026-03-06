import React from 'react';
import { motion } from 'motion/react';

const techStack = [
  { name: 'React Framework', category: 'Frontend Infrastructure', tech: 'React 18 / Vite' },
  { name: 'Type Safety', category: 'System Language', tech: 'TypeScript 5.x' },
  { name: 'Relational Data', category: 'Storage Layer', tech: 'PostgreSQL / Prisma' },
  { name: 'Vector Intelligence', category: 'AI Infrastructure', tech: 'Pinecone / pgvector' },
  { name: 'Intelligence Core', category: 'AI Models', tech: 'Gemini 2.5 / Custom NLP' },
  { name: 'Security Protocol', category: 'Auth Layer', tech: 'OAuth 2.0 / SAML' },
];

export const TechStack = () => {
  return (
    <section className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-prism-accent mb-4">System.Stack</h2>
          <h3 className="text-3xl font-bold text-white tracking-tight">Technical Specifications</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="technical-panel p-6 border-white/10 bg-white/[0.02] group hover:bg-white/[0.04] transition-all"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{tech.category}</span>
                  <div className="w-2 h-2 bg-prism-accent/30 group-hover:bg-prism-accent transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 tracking-tight">{tech.name}</h4>
                  <p className="text-xs font-mono text-prism-accent uppercase tracking-widest">{tech.tech}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
