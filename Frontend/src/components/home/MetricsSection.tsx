import React from 'react';

const MetricsSection = () => {
  return (
    <section className="py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { val: "60%", label: "Faster Screening" },
            { val: "100%", label: "Traceability" },
            { val: "0", label: "Auto Decisions" },
            { val: "AES", label: "Encryption" }
          ].map((stat, i) => (
            <div key={i} className="relative group">
              <div className="text-5xl font-bold text-prism-accent mb-4 glow-text tracking-tighter group-hover:scale-105 transition-transform duration-500">{stat.val}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">{stat.label}</div>
              <div className="absolute -bottom-4 left-0 w-0 h-[1px] bg-prism-accent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
