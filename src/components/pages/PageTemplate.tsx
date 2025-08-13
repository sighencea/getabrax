import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Navigation from '../generated/Navigation';
import Footer from '../generated/Footer';
import { StickyLanguageFooter } from '../generated/StickyLanguageFooter';
import { BackToTop } from '../utils/BackToTop';

interface PageTemplateProps {
  children: React.ReactNode;
  className?: string;
  stickyFooter?: boolean;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({ children, className = "", stickyFooter = false }) => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();

  const scrollToSignup = () => {
    // Navigate to landing page and scroll to signup section
    navigate('/', { state: { scrollToSection: 'signup' } });
  };

  if (stickyFooter) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation 
          onGetStarted={scrollToSignup}
          onSignIn={() => window.open('https://abrax.app', '_blank')}
        />
        
        <main className={`pt-16 flex-1 ${className}`}>
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
        <BackToTop />
      </div>
    );
  }

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
      <BackToTop />
    </div>
  );
};