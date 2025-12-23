import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const SolutionSection: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('solution.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            {t('solution.subtitle')}
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-blue-50 px-5 py-3 rounded-lg"
              >
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 text-left">
                  {t(`solution.points.${index}`)}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
