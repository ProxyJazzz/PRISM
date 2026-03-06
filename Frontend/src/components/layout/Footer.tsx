import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const Footer = () => {
  return (
    <footer className="bg-prism-bg border-t border-prism-border pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-prism-accent/5 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-prism-accent rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(30,144,255,0.4)]">
                <Shield className="text-white" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tighter text-white leading-none">PRISM</span>
                <span className="text-[9px] uppercase tracking-[0.15em] text-white/50 font-medium mt-1">Proposal Intelligence System</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Institutional-grade AI infrastructure for transparent research proposal evaluation and governance.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white/50 hover:text-prism-accent text-sm transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" /> Home</Link></li>
              <li><Link to="/architecture" className="text-white/50 hover:text-prism-accent text-sm transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" /> Architecture</Link></li>
              <li><Link to="/security" className="text-white/50 hover:text-prism-accent text-sm transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" /> Security</Link></li>
              <li><Link to="/contact" className="text-white/50 hover:text-prism-accent text-sm transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" /> Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <Mail size={16} className="text-prism-accent mt-0.5" />
                <span>deploy@prism.ai</span>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin size={16} className="text-prism-accent mt-0.5" />
                <span>Research District, Block 42<br />Innovation City, IC 90210</span>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <Phone size={16} className="text-prism-accent mt-0.5" />
                <span>+1 (555) 012-3456</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Newsletter</h4>
            <p className="text-white/50 text-sm mb-6">Stay updated on institutional AI governance.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-white/5 border border-prism-border rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-prism-accent w-full"
              />
              <Button size="sm" className="px-4">Join</Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-white/30 text-[11px] uppercase tracking-widest font-medium">© 2026 PRISM. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="text-white/30 hover:text-white text-[11px] uppercase tracking-widest font-medium transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white/30 hover:text-white text-[11px] uppercase tracking-widest font-medium transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
