import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-prism-accent/10 -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-prism-accent/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 rounded-2xl bg-prism-accent/20 border border-prism-accent/40 flex items-center justify-center mx-auto mb-8">
            <Shield className="text-prism-accent" size={32} />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
            Bring Transparency to Proposal Evaluation
          </h2>
          
          <p className="text-xl text-white/60 leading-relaxed mb-12">
            PRISM helps research institutions evaluate proposals faster, reduce administrative overhead and ensure explainable decision-making.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-none px-10 bg-prism-accent hover:bg-prism-accent/90 text-white border-none group">
              Request Institutional Access <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <p className="mt-8 text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
            Trusted by over 40 global research institutions
          </p>
        </motion.div>
      </div>
    </section>
  );
};
