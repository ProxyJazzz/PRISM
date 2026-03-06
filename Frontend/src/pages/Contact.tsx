import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { Mail, Globe, MapPin, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  return (
    <PageContainer className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-prism-accent mb-4">System.Inquiry</h2>
          <h1 className="text-4xl font-bold text-white tracking-tight">Institutional Contact</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="technical-panel p-10 border-white/10 bg-white/[0.02]">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InputField label="Institution Name" placeholder="University / Research Body" required />
                  <InputField label="Official Email" type="email" placeholder="admin@institution.edu" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Inquiry Type</label>
                  <select className="w-full bg-prism-bg border border-white/10 p-4 text-sm text-white focus:border-prism-accent outline-none appearance-none rounded-none">
                    <option>System Deployment</option>
                    <option>Technical Partnership</option>
                    <option>Security Audit Request</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Message</label>
                  <textarea 
                    className="w-full bg-prism-bg border border-white/10 p-4 text-sm text-white focus:border-prism-accent outline-none min-h-[150px] rounded-none"
                    placeholder="Describe your institutional requirements..."
                  />
                </div>
                <Button className="w-full py-4 rounded-none gap-2">
                  Submit Inquiry <ArrowRight size={18} />
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="technical-panel p-8 border-white/10 bg-white/[0.02]">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6">Deployment.Support</h4>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Mail size={18} className="text-prism-accent mt-1" />
                  <div>
                    <div className="text-xs font-bold text-white mb-1">Email</div>
                    <div className="text-sm text-white/50">deploy@prism.ai</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe size={18} className="text-prism-accent mt-1" />
                  <div>
                    <div className="text-xs font-bold text-white mb-1">Global Presence</div>
                    <div className="text-sm text-white/50">Serving 40+ Research Institutions</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-prism-accent mt-1" />
                  <div>
                    <div className="text-xs font-bold text-white mb-1">Office</div>
                    <div className="text-sm text-white/50 leading-relaxed">Research District, Block 42<br />Innovation City, IC 90210</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ContactPage;
