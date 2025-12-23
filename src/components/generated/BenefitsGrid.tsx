import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckSquare, WifiOff, BarChart3, Zap, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const BenefitsGrid: React.FC = () => {
  const { t } = useTranslation('common');

  const benefits = [
    { icon: Clock, title: t('benefits.items.0.title'), description: t('benefits.items.0.description') },
    { icon: CheckSquare, title: t('benefits.items.1.title'), description: t('benefits.items.1.description') },
    { icon: WifiOff, title: t('benefits.items.2.title'), description: t('benefits.items.2.description') },
    { icon: BarChart3, title: t('benefits.items.3.title'), description: t('benefits.items.3.description') },
    { icon: Zap, title: t('benefits.items.4.title'), description: t('benefits.items.4.description') },
    { icon: MessageSquare, title: t('benefits.items.5.title'), description: t('benefits.items.5.description') },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('benefits.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('benefits.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">{t('benefits.stats.0.value')}</div>
              <div className="text-blue-100">{t('benefits.stats.0.label')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">{t('benefits.stats.1.value')}</div>
              <div className="text-blue-100">{t('benefits.stats.1.label')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">{t('benefits.stats.2.value')}</div>
              <div className="text-blue-100">{t('benefits.stats.2.label')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">{t('benefits.stats.3.value')}</div>
              <div className="text-blue-100">{t('benefits.stats.3.label')}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
