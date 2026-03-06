import React from 'react';
import { motion } from 'motion/react';

const AboutContent = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h1 className="text-5xl font-bold mb-8">The PRISM Philosophy</h1>
          <p className="text-xl text-white/60 leading-relaxed">
            We believe that AI should serve as a powerful lens for human intelligence, providing clarity and speed without compromising on accountability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "Human-in-the-loop AI",
              desc: "Our system is designed to provide evaluators with the best possible data, but final decisions always rest with qualified human experts."
            },
            {
              title: "Bias Reduction Framework",
              desc: "PRISM uses advanced algorithmic checks to identify and mitigate potential biases in proposal language or reviewer selection."
            },
            {
              title: "Explainability Engine",
              desc: "Every score and recommendation is backed by a clear, human-readable justification that can be audited at any time."
            },
            {
              title: "Institutional Governance",
              desc: "Built to integrate seamlessly with existing institutional policies, ensuring that AI adoption follows established ethical guidelines."
            }
          ].map((item, i) => (
            <div key={i} className="glass-card p-10 border-l-4 border-l-prism-accent">
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
