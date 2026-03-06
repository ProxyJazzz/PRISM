import React from 'react';
import { motion } from 'motion/react';
import { FileText, UserCheck, AlertTriangle, MessageSquareCode } from 'lucide-react';
import { SectionTitle } from '../../../components/ui/SectionTitle';
import { Card } from '../../../components/ui/Card';

const capabilities = [
  {
    title: 'Proposal Parsing',
    description: 'Deep semantic analysis of unstructured research documents to extract key objectives, methodology, and expected outcomes.',
    icon: FileText,
  },
  {
    title: 'Reviewer Matching',
    description: 'Intelligent matching of proposals to expert reviewers based on semantic expertise alignment and conflict-of-interest detection.',
    icon: UserCheck,
  },
  {
    title: 'Risk Modeling',
    description: 'Multi-dimensional risk assessment covering ethical compliance, financial feasibility, and technical implementation risks.',
    icon: AlertTriangle,
  },
  {
    title: 'Explainability Engine',
    description: 'Transparent reasoning layer that provides human-readable justifications for every AI-generated score and recommendation.',
    icon: MessageSquareCode,
  },
];

export const CapabilitiesGrid = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Core Platform Capabilities" 
          subtitle="Advanced AI tools designed specifically for the rigorous requirements of institutional research evaluation."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col items-center text-center p-8 group">
                <div className="w-16 h-16 rounded-full bg-prism-accent/5 border border-prism-accent/20 flex items-center justify-center mb-6 group-hover:bg-prism-accent group-hover:text-white transition-all duration-500">
                  <cap.icon size={32} className="group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{cap.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
