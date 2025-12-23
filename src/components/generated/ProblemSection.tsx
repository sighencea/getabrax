import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Eye, WifiOff, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const ProblemSection: React.FC = () => {
  const { t } = useTranslation('common');

  const icons = [MessageSquare, Eye, WifiOff, Clock];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('problem.title')}
          </h2>
          <p className="text-xl text-gray-400">
            {t('problem.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[0, 1, 2, 3].map((index) => {
            const IconComponent = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {t(`problem.painPoints.${index}.title`)}
                    </h3>
                    <p className="text-gray-400">
                      {t(`problem.painPoints.${index}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
