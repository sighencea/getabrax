"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
export interface NavigationProps {}

export default function Navigation({}: NavigationProps = {}) {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useNavigation();

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // If element exists on current page, scroll to it
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // If element doesn't exist, navigate to landing page with section state
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollToSection: sectionId } });
      }
    }
  };

  const goHome = () => {
    navigate('/');
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuClick = (item: any) => {
    if (item.isHomePage) {
      goHome();
    } else {
      scrollToSection(item.href.substring(1));
    }
    closeMobileMenu();
  };

  const menuItems = [{
    label: t('navigation.menuItems.home'),
    href: 'home',
    isHomePage: true
  }, {
    label: t('navigation.menuItems.0'),
    href: '#benefits'
  }, {
    label: t('navigation.menuItems.1'),
    href: '#offline-mode'
  }, {
    label: t('navigation.menuItems.2'),
    href: '#testimonials'
  }, {
    label: t('navigation.menuItems.3'),
    href: '#pricing'
  }] as any[];

  // Determine which menu item is active
  const getActiveMenuItem = () => {
    // Only show active states on the landing page
    if (location.pathname !== '/') {
      return null;
    }
    
    // For landing page, we could detect which section is in view
    // For now, just show Home as active when on landing page
    return 'home';
  };

  const activeItem = getActiveMenuItem();
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => navigate('/')}
                className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
              >
                {t('navigation.brand')}
              </button>
            </div>

            {/* Desktop Menu Items - Positioned to the left with spacing */}
            <div className="hidden md:block ml-16">
              <div className="flex items-baseline space-x-8">
                {menuItems.map(item => {
                  const isActive = activeItem === item.href || activeItem === item.href.substring(1);
                  return (
                    <button 
                      key={item.label} 
                      onClick={() => item.isHomePage ? goHome() : scrollToSection(item.href.substring(1))}
                      className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                        isActive 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Spacer to push CTA buttons to the right */}
            <div className="flex-1"></div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://www.abrax.app/?view=signin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
                {t('navigation.buttons.0')}
              </a>
              <motion.a href="https://www.abrax.app/?view=signup" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                {t('navigation.buttons.1')}
              </motion.a>
            </div>

            {/* Mobile hamburger button */}
            <div className="md:hidden">
              <button
                data-hamburger-button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            data-mobile-menu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-white z-30 flex flex-col"
          >
            {/* Menu content area */}
            <div className="flex-1 pt-20 px-6 overflow-y-auto">
              {/* Mobile Menu Items */}
              <div className="space-y-2">
                {menuItems.map(item => {
                  const isActive = activeItem === item.href || activeItem === item.href.substring(1);
                  return (
                    <button
                      key={item.label}
                      onClick={() => handleMobileMenuClick(item)}
                      className={`block w-full text-left px-4 py-4 text-lg font-medium transition-all duration-200 rounded-xl ${
                        isActive
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom CTA Buttons */}
            <div className="p-6 bg-gray-50/50 border-t border-gray-100">
              <div className="flex gap-3">
                <a
                  href="https://www.abrax.app/?view=signin"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="flex-1 text-center px-6 py-4 border border-gray-300 text-base font-semibold rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  {t('navigation.buttons.0')}
                </a>
                <a
                  href="https://www.abrax.app/?view=signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="flex-1 text-center px-6 py-4 border border-transparent text-base font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  {t('navigation.buttons.1')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}