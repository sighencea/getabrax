import React from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
interface HeroSectionProps {
  onStartTrial: () => void;
}
export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartTrial
}) => {
  const { t } = useTranslation('common');
  
  return <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} className="lg:pr-8">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {t('hero.badge')}
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {t('hero.headlinePart1')} 
              <span className="text-blue-600"> {t('hero.headlinePart2')}</span>
              <br />
              {t('hero.headlinePart3')}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('hero.subheading')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} onClick={onStartTrial} className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg">
                {t('hero.buttons.0')}
              </motion.button>
              
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 transition-colors flex items-center gap-2">
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
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-10"></div>
              
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
                    <div className="text-green-600 font-semibold">{t('hero.dashboard.workOrders.statuses.0')}</div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <div>
                      <div className="font-semibold text-gray-900">{t('hero.dashboard.workOrders.labels.1')}</div>
                      <div className="text-sm text-gray-600">{t('hero.dashboard.workOrders.descriptions.1')}</div>
                    </div>
                    <div className="text-blue-600 font-semibold">{t('hero.dashboard.workOrders.statuses.1')}</div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                    <div>
                      <div className="font-semibold text-gray-900">{t('hero.dashboard.workOrders.labels.2')}</div>
                      <div className="text-sm text-gray-600">{t('hero.dashboard.workOrders.descriptions.2')}</div>
                    </div>
                    <div className="text-yellow-600 font-semibold">{t('hero.dashboard.workOrders.statuses.2')}</div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">{t('hero.dashboard.savings')}</div>
                  <div className="text-2xl font-bold text-green-600">{t('hero.dashboard.savingsAmount')}</div>
                  <div className="text-sm text-gray-500">{t('hero.dashboard.savingsDescription')}</div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <motion.div animate={{
            y: [0, -10, 0]
          }} transition={{
            duration: 3,
            repeat: Infinity
          }} className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
              <div className="text-2xl font-bold text-blue-600">{t('hero.floatingStats.0.value')}</div>
              <div className="text-sm text-gray-600">{t('hero.floatingStats.0.label')}</div>
            </motion.div>
            
            <motion.div animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1.5
          }} className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
              <div className="text-2xl font-bold text-green-600">{t('hero.floatingStats.1.value')}</div>
              <div className="text-sm text-gray-600">{t('hero.floatingStats.1.label')}</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};