import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Wrench, Building } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const UseCasesSection: React.FC = () => {
  const { t } = useTranslation('common');

  const icons = [Building2, Wrench, Building];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('useCases.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('useCases.subtitle')}
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
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7 text-blue-600" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(`useCases.personas.${index}.title`)}
                </h3>

                <p className="text-gray-600 mb-6">
                  {t(`useCases.personas.${index}.description`)}
                </p>

                <ul className="space-y-3">
                  {[0, 1, 2].map((benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      {t(`useCases.personas.${index}.benefits.${benefitIndex}`)}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
