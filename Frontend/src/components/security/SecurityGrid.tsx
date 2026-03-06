import React from 'react';

const SecurityGrid = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold mb-6">Security & Compliance</h1>
        <p className="text-white/60 max-w-2xl mx-auto">Institutional-grade protection for sensitive research data and intellectual property.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "JWT Authentication", desc: "Secure, stateless session management with automatic token rotation and multi-factor support." },
          { title: "Role-Based Access", desc: "Granular permissions ensuring that only authorized evaluators can access specific proposal data." },
          { title: "Data Encryption", desc: "AES-256 encryption at rest and TLS 1.3 in transit for all institutional data." },
          { title: "Data Isolation", desc: "Logical separation of institutional datasets to prevent cross-contamination or unauthorized access." },
          { title: "Audit Logging", desc: "Comprehensive, tamper-proof logs of all system activities for compliance and oversight." },
          { title: "SOC2 Ready", desc: "Designed from the ground up to meet the most rigorous enterprise security standards." }
        ].map((item, i) => (
          <div key={i} className="glass-card p-8">
            <h3 className="text-lg font-bold mb-4 text-prism-accent">{item.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecurityGrid;
