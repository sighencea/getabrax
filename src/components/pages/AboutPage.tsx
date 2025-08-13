import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Building2, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { PageTemplate } from './PageTemplate';

export const AboutPage: React.FC = () => {
  const { t } = useTranslation('common');

  const features = [
    {
      icon: Building2,
      title: t('pages.about.features.propertyManagement.title'),
      description: t('pages.about.features.propertyManagement.description')
    },
    {
      icon: Users,
      title: t('pages.about.features.teamCoordination.title'), 
      description: t('pages.about.features.teamCoordination.description')
    },
    {
      icon: CheckCircle,
      title: t('pages.about.features.taskManagement.title'),
      description: t('pages.about.features.taskManagement.description')
    }
  ];

  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                {t('pages.about.title')}
              </h1>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-2xl md:text-3xl text-blue-600 font-medium mb-8 leading-relaxed">
                  {t('pages.about.headline')}
                </p>
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  {t('pages.about.description')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pain Points Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-500/20 rounded-full blur-xl"></div>
                <div className="relative">
                  <h2 className="text-3xl font-bold mb-8">{t('pages.about.oldWay.title')}</h2>
                  <div className="space-y-4">
                    {[
                      t('pages.about.oldWay.items.0'),
                      t('pages.about.oldWay.items.1'), 
                      t('pages.about.oldWay.items.2'),
                      t('pages.about.oldWay.items.3')
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-red-300">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span className="text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/20 rounded-full blur-xl"></div>
                <div className="relative">
                  <h2 className="text-3xl font-bold mb-8">{t('pages.about.abraxWay.title')}</h2>
                  <div className="space-y-4">
                    {[
                      t('pages.about.abraxWay.items.0'),
                      t('pages.about.abraxWay.items.1'),
                      t('pages.about.abraxWay.items.2'),
                      t('pages.about.abraxWay.items.3')
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-green-300">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t('pages.about.painPoints')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Closing Section */}
      <div className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
              {t('pages.about.brand')}
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-200 mb-12 font-medium">
              {t('pages.about.tagline')}
            </p>
            
            <motion.a
              href="https://www.abrax.app/?view=signup"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              {t('pages.about.cta')}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </PageTemplate>
  );
};