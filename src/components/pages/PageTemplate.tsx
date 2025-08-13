import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Navigation from '../generated/Navigation';
import Footer from '../generated/Footer';
import { StickyLanguageFooter } from '../generated/StickyLanguageFooter';

interface PageTemplateProps {
  children: React.ReactNode;
  className?: string;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({ children, className = "" }) => {
  const { t } = useTranslation('common');

  const scrollToSignup = () => {
    // For pages without signup section, redirect to main page
    window.location.href = '/#signup-section';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        onGetStarted={scrollToSignup}
        onSignIn={() => window.open('https://abrax.app', '_blank')}
      />
      
      <main className={`pt-16 ${className}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </main>

      <Footer />
      <StickyLanguageFooter />
    </div>
  );
};