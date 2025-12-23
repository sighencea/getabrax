import React from 'react';
import { motion } from 'framer-motion';
import { WifiOff, RefreshCw, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const OfflineModeSection: React.FC = () => {
  const { t } = useTranslation('common');

  const icons = [WifiOff, RefreshCw, Shield];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
            {t('offlineMode.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('offlineMode.title')}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('offlineMode.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[0, 1, 2].map((index) => {
            const IconComponent = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t(`offlineMode.features.${index}.title`)}
                </h3>
                <p className="text-blue-100">
                  {t(`offlineMode.features.${index}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
