import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { SecurityHero } from '../features/security/components/SecurityHero';
import { SecurityArchitectureDiagram } from '../features/security/components/SecurityArchitectureDiagram';
import { EncryptionSection } from '../features/security/components/EncryptionSection';
import { AccessControlSection } from '../features/security/components/AccessControlSection';
import { AuditLogSection } from '../features/security/components/AuditLogSection';
import { ComplianceSection } from '../features/security/components/ComplianceSection';

const SecurityPage = () => {
  return (
    <PageContainer>
      <SecurityHero />
      <SecurityArchitectureDiagram />
      <EncryptionSection />
      <AccessControlSection />
      <AuditLogSection />
      <ComplianceSection />
    </PageContainer>
  );
};

export default SecurityPage;
