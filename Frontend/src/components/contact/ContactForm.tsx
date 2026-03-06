import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="max-w-xl w-full text-center">
      <h1 className="text-4xl font-bold mb-6">Contact PRISM</h1>
      <p className="text-white/60 mb-12">Have questions about institutional deployment? Our team is here to help.</p>
      
      <form className="glass-card p-8 lg:p-10 text-left space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Name</label>
            <input 
              type="text" 
              className="w-full bg-white/5 border border-prism-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-prism-accent transition-colors"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Institution</label>
            <input 
              type="text" 
              className="w-full bg-white/5 border border-prism-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-prism-accent transition-colors"
              placeholder="University / Body"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Email</label>
          <input 
            type="email" 
            className="w-full bg-white/5 border border-prism-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-prism-accent transition-colors"
            placeholder="official@email.com"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Message</label>
          <textarea 
            rows={4}
            className="w-full bg-white/5 border border-prism-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-prism-accent transition-colors resize-none"
            placeholder="How can we assist you?"
          />
        </div>
        <button className="w-full py-4 bg-prism-accent text-white font-bold rounded-lg hover:bg-prism-accent/90 transition-all shadow-[0_0_20px_rgba(30,144,255,0.3)] flex items-center justify-center gap-2">
          Send Inquiry <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
