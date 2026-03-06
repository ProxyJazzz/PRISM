import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { SectionTitle } from '../../../components/ui/SectionTitle';

const faqs = [
  {
    question: 'How does PRISM ensure AI decision transparency?',
    answer: 'PRISM uses an Explainability Engine that provides structured reasoning for every score. It cites specific sections of the proposal and cross-references them with evaluation criteria, ensuring reviewers understand the "why" behind every AI insight.',
  },
  {
    question: 'How is institutional data privacy handled?',
    answer: 'All data is encrypted using AES-256 at rest and TLS 1.3 in transit. PRISM supports logical data isolation for each institution and adheres to strict SOC2 and GDPR-aligned governance standards.',
  },
  {
    question: 'What is the extent of human oversight in the system?',
    answer: 'PRISM is strictly a decision-support tool. It identifies risks and patterns, but it never makes final funding or approval decisions. Final authority always rests with human expert reviewers.',
  },
  {
    question: 'How difficult is it to integrate PRISM with existing systems?',
    answer: 'PRISM is designed with a modular architecture and robust API layer, allowing for seamless integration with existing institutional management systems and proposal submission portals.',
  },
];

const FAQItem = ({ faq, isOpen, onClick }: { faq: typeof faqs[0], isOpen: boolean, onClick: () => void, key?: any }) => {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-prism-accent' : 'text-white/80 group-hover:text-white'}`}>
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${isOpen ? 'bg-prism-accent border-prism-accent text-white rotate-180' : 'text-white/40'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-white/50 leading-relaxed text-sm">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Frequently Asked Questions" 
          subtitle="Common inquiries about PRISM's AI governance, security, and institutional integration."
        />
        
        <div className="glass-card p-4 md:p-8 border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl">
          {faqs.map((faq, i) => (
            <FAQItem 
              key={i} 
              faq={faq} 
              isOpen={openIndex === i} 
              onClick={() => setOpenIndex(openIndex === i ? null : i)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
