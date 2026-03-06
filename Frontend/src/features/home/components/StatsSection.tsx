import React from 'react';
import { motion, useSpring, useTransform, animate } from 'motion/react';
import { Shield, Zap, Eye, Lock } from 'lucide-react';

const StatCounter = ({ value, suffix = '', duration = 2 }: { value: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const controls = animate(0, value, {
      duration,
      onUpdate: (latest) => setCount(Math.floor(latest)),
      ease: 'easeOut',
    });
    return controls.stop;
  }, [value, duration]);

  return <span>{count}{suffix}</span>;
};

const stats = [
  { label: 'Faster Screening', value: 60, suffix: '%', icon: Zap },
  { label: 'Traceability', value: 100, suffix: '%', icon: Eye },
  { label: 'Automated Decisions', value: 0, suffix: '', icon: Shield },
  { label: 'Encryption Standard', value: 256, suffix: '-bit', icon: Lock },
];

export const StatsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-prism-accent/5 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-prism-accent/10 flex items-center justify-center mb-6">
                <stat.icon className="text-prism-accent" size={24} />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tighter">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
