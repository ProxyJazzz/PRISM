import React from 'react';
import { motion } from 'motion/react';
import { FileSearch, Network, ShieldAlert } from 'lucide-react';
import { Card } from '../../../components/ui/Card';

const features = [
  {
    title: 'Proposal Parsing',
    description: 'Automated semantic extraction of research objectives and methodology using advanced NLP models.',
    icon: FileSearch,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    title: 'Similarity Intelligence',
    description: 'Detect overlap with global research literature and funded projects to ensure novelty and prevent duplication.',
    icon: Network,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
  {
    title: 'Risk Analysis',
    description: 'Identify ethical, financial, and feasibility concerns early in the evaluation cycle with predictive modeling.',
    icon: ShieldAlert,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
  },
];

export const FeatureCards = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full group">
                <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className={feature.color} size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
