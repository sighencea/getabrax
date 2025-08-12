"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
export interface FooterProps {}
export default function Footer({}: FooterProps) {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    product: [{
      label: t('footer.sections.product.items.0'),
      href: "#benefits"
    }, {
      label: t('footer.sections.product.items.1'),
      href: "#how-it-works"
    }, {
      label: t('footer.sections.product.items.2'),
      href: "#signup"
    }, {
      label: t('footer.sections.product.items.3'),
      href: "#"
    }],
    company: [{
      label: t('footer.sections.company.items.0'),
      href: "#"
    }, {
      label: t('footer.sections.company.items.1'),
      href: "#"
    }, {
      label: t('footer.sections.company.items.2'),
      href: "#"
    }, {
      label: t('footer.sections.company.items.3'),
      href: "#"
    }],
    resources: [{
      label: t('footer.sections.resources.items.0'),
      href: "#"
    }, {
      label: t('footer.sections.resources.items.1'),
      href: "#"
    }, {
      label: t('footer.sections.resources.items.2'),
      href: "#"
    }, {
      label: t('footer.sections.resources.items.3'),
      href: "#"
    }],
    legal: [{
      label: t('footer.sections.legal.items.0'),
      href: "#"
    }, {
      label: t('footer.sections.legal.items.1'),
      href: "#"
    }, {
      label: t('footer.sections.legal.items.2'),
      href: "#"
    }, {
      label: t('footer.sections.legal.items.3'),
      href: "#"
    }]
  };
  const socialLinks = [{
    label: t('footer.social.0.label'),
    href: "#",
    icon: "𝕏"
  }, {
    label: t('footer.social.1.label'),
    href: "#",
    icon: "in"
  }, {
    label: t('footer.social.2.label'),
    href: "#",
    icon: "⚡"
  }, {
    label: t('footer.social.3.label'),
    href: "#",
    icon: "▶"
  }] as any[];
  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1));
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }}>
                <h2 className="text-2xl font-bold mb-4">
                  {t('footer.brand')}
                </h2>
                <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
                  {t('footer.description')}
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => <motion.a key={social.label} href={social.href} whileHover={{
                  scale: 1.1
                }} whileTap={{
                  scale: 0.95
                }} className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200" aria-label={social.label}>
                      <span className="text-sm font-medium">
                        {social.icon}
                      </span>
                    </motion.a>)}
                </div>
              </motion.div>
            </div>

            {/* Product Links */}
            <div>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }}>
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                  {t('footer.sections.product.title')}
                </h3>
                <ul className="space-y-3">
                  {footerLinks.product.map((link, index) => <li key={index}>
                      <button onClick={() => scrollToSection(link.href)} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                        {link.label}
                      </button>
                    </li>)}
                </ul>
              </motion.div>
            </div>

            {/* Company Links */}
            <div>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }}>
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                  {t('footer.sections.company.title')}
                </h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => <li key={index}>
                      <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                        {link.label}
                      </a>
                    </li>)}
                </ul>
              </motion.div>
            </div>

            {/* Resources Links */}
            <div>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }}>
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                  {t('footer.sections.resources.title')}
                </h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => <li key={index}>
                      <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                        {link.label}
                      </a>
                    </li>)}
                </ul>
              </motion.div>
            </div>

            {/* Legal Links */}
            <div>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }}>
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                  {t('footer.sections.legal.title')}
                </h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => <li key={index}>
                      <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                        {link.label}
                      </a>
                    </li>)}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }} className="text-gray-400 text-sm">
              {t('footer.copyright', { year: currentYear })}
            </motion.div>
            
            <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <LanguageSwitcher />
              <span className="text-gray-400 text-sm text-center sm:text-left">
                {t('footer.tagline')}
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-sm">
                  {t('footer.status')}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>;
}