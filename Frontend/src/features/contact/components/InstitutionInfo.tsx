import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Clock, Globe } from 'lucide-react';
import { Card } from '../../../components/ui/Card';

const infoItems = [
  {
    title: 'Email Contact',
    value: 'deploy@prism.ai',
    icon: Mail,
  },
  {
    title: 'Office Address',
    value: 'Research District, Block 42\nInnovation City, IC 90210',
    icon: MapPin,
  },
  {
    title: 'Support Availability',
    value: 'Mon - Fri, 9:00 AM - 6:00 PM EST',
    icon: Clock,
  },
  {
    title: 'Global Presence',
    value: 'Serving 40+ Research Institutions',
    icon: Globe,
  },
];

export const InstitutionInfo = () => {
  return (
    <div className="space-y-6">
      {infoItems.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <Card className="flex gap-6 p-6 items-start group">
            <div className="w-12 h-12 rounded-xl bg-prism-accent/10 border border-prism-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-prism-accent group-hover:text-white transition-all">
              <item.icon size={24} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-2">{item.title}</h4>
              <p className="text-white/50 text-sm whitespace-pre-line leading-relaxed">{item.value}</p>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
