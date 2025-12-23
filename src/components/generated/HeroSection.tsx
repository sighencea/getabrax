import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation('common');
  const [showDemoPopup, setShowDemoPopup] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:pr-8"
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {t('hero.badge')}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {t('hero.headline')}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('hero.subheading')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a
                href="https://www.abrax.app/?view=signup"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg inline-block text-center"
              >
                {t('hero.buttons.0')}
              </motion.a>

              <motion.button
                onClick={() => setShowDemoPopup(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 transition-colors flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                {t('hero.buttons.1')}
              </motion.button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{t('hero.features.0')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{t('hero.features.1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{t('hero.features.2')}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-5"></div>

              {/* Mock Dashboard */}
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-4 text-sm text-gray-500">{t('hero.dashboard.title')}</div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <div>
                      <div className="font-semibold text-gray-900">{t('hero.dashboard.workOrders.labels.0')}</div>
                      <div className="text-sm text-gray-600">{t('hero.dashboard.workOrders.descriptions.0')}</div>
                    </div>
                    <div className="text-green-600 font-semibold text-sm">{t('hero.dashboard.workOrders.statuses.0')}</div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <div>
                      <div className="font-semibold text-gray-900">{t('hero.dashboard.workOrders.labels.1')}</div>
                      <div className="text-sm text-gray-600">{t('hero.dashboard.workOrders.descriptions.1')}</div>
                    </div>
                    <div className="text-blue-600 font-semibold text-sm">{t('hero.dashboard.workOrders.statuses.1')}</div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                    <div>
                      <div className="font-semibold text-gray-900">{t('hero.dashboard.workOrders.labels.2')}</div>
                      <div className="text-sm text-gray-600">{t('hero.dashboard.workOrders.descriptions.2')}</div>
                    </div>
                    <div className="text-yellow-600 font-semibold text-sm">{t('hero.dashboard.workOrders.statuses.2')}</div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">{t('hero.dashboard.savings')}</div>
                  <div className="text-2xl font-bold text-green-600">{t('hero.dashboard.savingsAmount')}</div>
                  <div className="text-sm text-gray-500">{t('hero.dashboard.savingsDescription')}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Demo Popup */}
      <AnimatePresence>
        {showDemoPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setShowDemoPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {t('demoPopup.title')}
                </h3>
                <button
                  onClick={() => setShowDemoPopup(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-600 mb-6">{t('demoPopup.message')}</p>
              <button
                onClick={() => setShowDemoPopup(false)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {t('demoPopup.cta')}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
