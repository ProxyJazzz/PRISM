import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { HeroSection } from '../features/home/components/HeroSection';
import { MetricsSection } from '../features/home/components/MetricsSection';
import { HowPrismWorks } from '../features/home/components/HowPrismWorks';
import { SystemArchitecture } from '../features/home/components/SystemArchitecture';
import { InstitutionalPartners } from '../features/home/components/InstitutionalPartners';
import { CTASection } from '../features/home/components/CTASection';

const Home = () => {
  return (
    <PageContainer>
      <HeroSection />
      <MetricsSection />
      <HowPrismWorks />
      <SystemArchitecture />
      <InstitutionalPartners />
      <CTASection />
    </PageContainer>
  );
};

export default Home;
