import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Shield, Eye, Users } from 'lucide-react';
import { SectionTitle } from '../../../components/ui/SectionTitle';

const principles = [
  {
    title: 'Human-in-the-loop AI',
    description: 'AI augments human expertise rather than replacing it, ensuring final authority remains with expert reviewers.',
    icon: Users,
  },
  {
    title: 'Transparency',
    description: 'Every AI-generated insight is accompanied by structured reasoning and source citations for full auditability.',
    icon: Eye,
  },
  {
    title: 'Institutional Compliance',
    description: 'Built-in governance protocols that align with international research ethics and institutional standards.',
    icon: Shield,
  },
  {
    title: 'Bias Mitigation',
    description: 'Advanced algorithms designed to identify and reduce cognitive bias in the proposal screening process.',
    icon: CheckCircle2,
  },
];

export const AboutPrism = () => {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionTitle 
              title="Human-Centered AI Governance" 
              subtitle="PRISM is built on the principle that AI should be a transparent tool for human experts, not a black-box decision maker."
              align="left"
              className="mb-12"
            />
            
            <div className="space-y-8">
              {principles.map((p, i) => (
                <motion.div 
                  key={p.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-lg bg-prism-accent/10 flex-shrink-0 flex items-center justify-center">
                    <p.icon className="text-prism-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{p.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{p.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden glass-card border-white/10 p-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-prism-accent/20 to-transparent opacity-40" />
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Research Governance" 
                className="w-full h-full object-cover rounded-2xl mix-blend-luminosity opacity-70"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-prism-accent/20 backdrop-blur-xl border border-prism-accent/40 flex items-center justify-center animate-pulse">
                  <Shield className="text-white" size={40} />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-prism-accent/10 blur-[80px] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 blur-[80px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
