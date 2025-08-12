"use client";

import * as React from "react";
import { motion } from "framer-motion";
export interface NavigationProps {
  onGetStarted?: () => void;
  onSignIn?: () => void;
}
export default function Navigation({
  onGetStarted,
  onSignIn
}: NavigationProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  const menuItems = [{
    label: 'Features',
    href: '#benefits'
  }, {
    label: 'How It Works',
    href: '#how-it-works'
  }, {
    label: 'Testimonials',
    href: '#testimonials'
  }, {
    label: 'Pricing',
    href: '#signup'
  }] as any[];
  return <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">
              Abrax
            </h1>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map(item => <button key={item.label} onClick={() => scrollToSection(item.href.substring(1))} className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  {item.label}
                </button>)}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <button onClick={onSignIn} className="hidden sm:inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
              Sign In
            </button>
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} onClick={onGetStarted} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
              Get Started for Free
            </motion.button>
          </div>
        </div>
      </div>
    </nav>;
}