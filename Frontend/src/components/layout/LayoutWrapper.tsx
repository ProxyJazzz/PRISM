import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-prism-bg">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
