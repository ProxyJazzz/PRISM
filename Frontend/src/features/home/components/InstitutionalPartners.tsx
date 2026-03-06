import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Building2, Landmark, Briefcase, FlaskConical } from 'lucide-react';

const categories = [
  { name: 'Universities', icon: GraduationCap },
  { name: 'Research Councils', icon: Building2 },
  { name: 'Government Innovation Programs', icon: Landmark },
  { name: 'Grant Funding Agencies', icon: Briefcase },
  { name: 'Academic Research Labs', icon: FlaskConical },
];

export const InstitutionalPartners = () => {
  return (
    <section className="py-32 border-b border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-prism-accent mb-4">System.Trust</h2>
          <h3 className="text-4xl font-bold text-white tracking-tight">Designed for Research Institutions</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="technical-panel p-10 flex flex-col items-center justify-center text-center group hover:border-prism-accent/30 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-none mb-6 flex items-center justify-center group-hover:bg-prism-accent/10 group-hover:border-prism-accent/20 transition-all duration-500">
                <category.icon size={32} className="text-white/20 group-hover:text-prism-accent transition-colors duration-500" />
              </div>
              <span className="text-sm font-bold text-white tracking-tight leading-tight uppercase">{category.name}</span>
              <div className="mt-4 w-6 h-0.5 bg-prism-accent/20 group-hover:w-10 group-hover:bg-prism-accent transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
