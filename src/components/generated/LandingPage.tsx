import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useNavigation } from '../context/NavigationContext';
import Navigation from './Navigation';
import { HeroSection } from './HeroSection';
import { BenefitsGrid } from './BenefitsGrid';
import { VideoTestimonialSection } from './VideoTestimonialSection';
import { PricingSection } from './PricingSection';
import Footer from './Footer';
import { StickyLanguageFooter } from './StickyLanguageFooter';
import { BackToTop } from '../utils/BackToTop';
export const LandingPage: React.FC = () => {
  const { t } = useTranslation('common');
  const location = useLocation();
  const { isMobileMenuOpen } = useNavigation();
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
      // Wait a bit for the page to render, then scroll to the section
      const timer = setTimeout(() => {
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 300); // Slightly longer delay to ensure components are mounted
      
      return () => clearTimeout(timer);
    }
  }, [location.state]);
  return <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Add padding top to account for fixed navigation */}
      <div className="pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Benefits Grid */}
        <section id="benefits">
          <BenefitsGrid />
        </section>

        {/* Video & Testimonial Section */}
        <section id="testimonials">
          <VideoTestimonialSection />
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('howItWorks.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('howItWorks.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[0, 1, 2].map((index) => 
                <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.2
            }} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {t(`howItWorks.steps.${index}.step`)}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t(`howItWorks.steps.${index}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`howItWorks.steps.${index}.description`)}
                </p>
              </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-gray-600 text-lg mb-8">
                {t('socialProof.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              {[0, 1, 2, 3, 4, 5].map((index) => <div key={index} className="text-center">
                  <div className="h-12 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500 font-medium text-sm">{t(`socialProof.companies.${index}`)}</span>
                  </div>
                </div>)}
            </div>
          </div>
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
            <motion.a 
              href="https://www.abrax.app/?view=signup"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors inline-block">
              {t('finalCta.button')}
            </motion.a>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        {showStickyMobile && !isMobileMenuOpen && <motion.div initial={{
        y: 100
      }} animate={{
        y: 0
      }} className="fixed bottom-0 left-0 right-0 bg-blue-600 p-4 z-50 md:hidden">
            <a 
              href="https://www.abrax.app/?view=signup"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white text-blue-600 py-3 rounded-lg font-semibold text-center">
              {t('stickyMobile.button')}
            </a>
          </motion.div>}

        {/* Footer */}
        <Footer />

        {/* Sticky Language Footer */}
        <StickyLanguageFooter />

        {/* Back to Top */}
        <BackToTop />
      </div>
    </div>;
};