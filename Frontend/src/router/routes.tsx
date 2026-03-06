import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import ArchitecturePage from '../pages/Architecture';
import SecurityPage from '../pages/Security';
import ContactPage from '../pages/Contact';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import DocumentationPage from '../pages/Documentation';
import AboutPage from '../pages/About';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/architecture" element={<ArchitecturePage />} />
      <Route path="/security" element={<SecurityPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/docs" element={<DocumentationPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};
