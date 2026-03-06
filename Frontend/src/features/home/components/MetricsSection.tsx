import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, animate } from 'motion/react';

const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [value]);

  return <span>{displayValue}{suffix}</span>;
};

const metrics = [
  { value: 60, suffix: '%', label: 'reduction in screening time' },
  { value: 12, suffix: 'M+', label: 'research papers indexed' },
  { value: 91, suffix: '%', label: 'risk detection accuracy' },
  { value: 37, suffix: '%', label: 'reviewer matching improvement' },
  { value: 100, suffix: '%', label: 'audit traceability' },
];

export const MetricsSection = () => {
  return (
    <section className="py-20 border-b border-white/5 bg-prism-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {metrics.map((metric, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center lg:text-left"
            >
              <div className="text-4xl font-bold text-white mb-2 tracking-tighter">
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 leading-tight max-w-[140px] mx-auto lg:mx-0">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
