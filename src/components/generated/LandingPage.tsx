import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useNavigation } from '../context/NavigationContext';
import { useWaitlist } from '../context/WaitlistContext';
import Navigation from './Navigation';
import { HeroSection } from './HeroSection';
import { TrustLogosSection } from './TrustLogosSection';
import { ProblemSection } from './ProblemSection';
import { SolutionSection } from './SolutionSection';
import { BenefitsGrid } from './BenefitsGrid';
import { UseCasesSection } from './UseCasesSection';
import { OfflineModeSection } from './OfflineModeSection';
import { VideoTestimonialSection } from './VideoTestimonialSection';
import { PricingSection } from './PricingSection';
import Footer from './Footer';
import { StickyLanguageFooter } from './StickyLanguageFooter';
import { BackToTop } from '../utils/BackToTop';

export const LandingPage: React.FC = () => {
  const { t } = useTranslation('common');
  const location = useLocation();
  const { isMobileMenuOpen } = useNavigation();
  const { openWaitlist } = useWaitlist();
  const [showStickyMobile, setShowStickyMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 800;
      setShowStickyMobile(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle navigation state for section scrolling
  useEffect(() => {
    const state = location.state as { scrollToSection?: string } | null;
    const targetSection = state?.scrollToSection;
    if (targetSection) {
      const timer = setTimeout(() => {
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Add padding top to account for fixed navigation */}
      <div className="pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Trust Logos */}
        <TrustLogosSection />

        {/* Problem Section */}
        <ProblemSection />

        {/* Solution Section */}
        <SolutionSection />

        {/* Benefits Grid */}
        <section id="benefits">
          <BenefitsGrid />
        </section>

        {/* Use Cases Section */}
        <UseCasesSection />

        {/* Offline Mode Section */}
        <section id="offline-mode">
          <OfflineModeSection />
        </section>

        {/* Video & Testimonial Section */}
        <section id="testimonials">
          <VideoTestimonialSection />
        </section>

        {/* Pricing Section */}
        <section id="pricing">
          <PricingSection />
        </section>

        {/* Final CTA Banner */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t('finalCta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {t('finalCta.subtitle')}
            </p>
            <motion.button
              onClick={openWaitlist}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors"
            >
              {t('finalCta.button')}
            </motion.button>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        {showStickyMobile && !isMobileMenuOpen && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-blue-600 p-4 z-50 md:hidden"
          >
            <button
              onClick={openWaitlist}
              className="block w-full bg-white text-blue-600 py-3 rounded-lg font-semibold text-center"
            >
              {t('stickyMobile.button')}
            </button>
          </motion.div>
        )}

        {/* Footer */}
        <Footer />

        {/* Sticky Language Footer */}
        <StickyLanguageFooter />

        {/* Back to Top */}
        <BackToTop />
      </div>
    </div>
  );
};
