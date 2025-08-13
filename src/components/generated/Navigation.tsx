"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
export interface NavigationProps {
  onGetStarted?: () => void;
  onSignIn?: () => void;
}
export default function Navigation({
  onGetStarted,
  onSignIn
}: NavigationProps) {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const location = useLocation();
  
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

  const menuItems = [{
    label: t('navigation.menuItems.home'),
    href: 'home',
    isHomePage: true
  }, {
    label: t('navigation.menuItems.0'),
    href: '#benefits'
  }, {
    label: t('navigation.menuItems.1'),
    href: '#how-it-works'
  }, {
    label: t('navigation.menuItems.2'),
    href: '#testimonials'
  }, {
    label: t('navigation.menuItems.3'),
    href: '#signup'
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
  return <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
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

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <button onClick={onSignIn} className="hidden sm:inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
              {t('navigation.buttons.0')}
            </button>
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} onClick={onGetStarted} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
              {t('navigation.buttons.1')}
            </motion.button>
          </div>
        </div>
      </div>
    </nav>;
}