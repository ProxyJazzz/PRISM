import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionTitle } from '../components/ui/SectionTitle';
import { CTASection } from '../features/home/components/CTASection';
import { Shield, Eye, Users, CheckCircle2, Globe, Zap } from 'lucide-react';

const AboutPage = () => {
  return (
    <PageContainer className="pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-prism-accent mb-4">System.Mission</h2>
          <h1 className="text-4xl font-bold text-white tracking-tight">Institutional Research Governance</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <div className="aspect-video rounded-none overflow-hidden technical-panel border-white/10 p-4">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Vision" 
                className="w-full h-full object-cover rounded-none mix-blend-luminosity opacity-70"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-prism-accent/30 to-transparent opacity-40" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-prism-accent/10 blur-[80px] -z-10" />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white tracking-tight">The Future of Research Intelligence</h2>
            <p className="text-lg text-white/60 leading-relaxed">
              PRISM was founded by a multi-disciplinary team of research administrators, AI ethics researchers, and software engineers who saw a critical need for better tools in the research funding ecosystem.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              We believe that AI should not be a "black box" that makes decisions, but a powerful lens that helps human experts see patterns, risks, and opportunities that were previously hidden in mountains of unstructured data.
            </p>
          </div>
        </div>

        <div className="mb-32">
          <div className="mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-prism-accent mb-4">Core.Principles</h2>
            <h3 className="text-3xl font-bold text-white tracking-tight">System Governance Values</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Human Authority', icon: Users, desc: 'AI augments human expertise; final authority always remains with expert reviewers.' },
              { title: 'Radical Transparency', icon: Eye, desc: 'Every AI insight is accompanied by structured reasoning and source citations.' },
              { title: 'Institutional Trust', icon: Shield, desc: 'Built-in governance protocols that align with international research ethics.' },
              { title: 'Bias Mitigation', icon: CheckCircle2, desc: 'Advanced algorithms designed to identify and reduce cognitive bias.' },
              { title: 'Global Collaboration', icon: Globe, desc: 'Supporting research bodies across 40+ countries with localized compliance.' },
              { title: 'Speed & Precision', icon: Zap, desc: 'Reducing administrative overhead without compromising on evaluation quality.' },
            ].map((item, i) => (
              <div key={i} className="technical-panel p-8 group hover:bg-white/[0.04] transition-all">
                <div className="w-14 h-14 rounded-none border border-prism-accent/30 bg-prism-accent/5 flex items-center justify-center mb-6 group-hover:bg-prism-accent group-hover:text-white transition-all duration-500">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </PageContainer>
  );
};

export default AboutPage;
