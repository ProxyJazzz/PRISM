import React from 'react';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export const ContactHero = () => {
  return (
    <section className="pt-32 pb-12 lg:pt-48 lg:pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(30,144,255,0.05)_0%,transparent_70%)] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-prism-accent/10 border border-prism-accent/20 flex items-center justify-center mx-auto mb-8">
            <Mail className="text-prism-accent" size={32} />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
            Contact PRISM
          </h1>
          
          <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
            Reach out for institutional deployment inquiries, system demonstrations, or technical support.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
