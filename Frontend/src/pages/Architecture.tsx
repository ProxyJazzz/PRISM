import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { ArchitectureHero } from '../features/architecture/components/ArchitectureHero';
import { VisualArchitectureDiagram } from '../features/architecture/components/VisualArchitectureDiagram';
import { AIPipeline } from '../features/architecture/components/AIPipeline';
import { InfrastructureLayer } from '../features/architecture/components/InfrastructureLayer';
import { TechStack } from '../features/architecture/components/TechStack';

const ArchitecturePage = () => {
  return (
    <PageContainer>
      <ArchitectureHero />
      <VisualArchitectureDiagram />
      <AIPipeline />
      <InfrastructureLayer />
      <TechStack />
    </PageContainer>
  );
};

export default ArchitecturePage;
