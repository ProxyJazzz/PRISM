import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { SectionTitle } from '../../../components/ui/SectionTitle';
import { Card } from '../../../components/ui/Card';

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    designation: 'Director of Research, Global Science Foundation',
    feedback: 'PRISM has transformed our initial screening phase. The similarity intelligence is remarkably accurate, saving our team hundreds of hours in manual cross-referencing.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'Prof. James Wilson',
    designation: 'Chair of Ethics Committee, Tech University',
    feedback: 'The explainability engine is what sets PRISM apart. Being able to see the structured reasoning behind AI risk assessments gives our committee the confidence to use these tools responsibly.',
    avatar: 'https://i.pravatar.cc/150?u=james',
  },
  {
    name: 'Elena Rodriguez',
    designation: 'Head of Grants Management, Innovation Council',
    feedback: 'Institutional deployment was seamless. The security protocols and audit trails meet our highest standards for data governance and accountability.',
    avatar: 'https://i.pravatar.cc/150?u=elena',
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Trusted by Institutions" 
          subtitle="Hear from the research leaders and governance experts who are modernizing their workflows with PRISM."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col p-8 relative">
                <Quote className="absolute top-6 right-8 text-prism-accent/20" size={40} />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-prism-accent text-prism-accent" />
                  ))}
                </div>
                
                <p className="text-white/70 italic mb-8 leading-relaxed flex-grow">
                  "{t.feedback}"
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full border-2 border-prism-accent/20"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">{t.name}</h4>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mt-1">{t.designation}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
