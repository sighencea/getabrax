import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const TrustLogosSection: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm mb-8">
          {t('trustLogos.title')}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-10 px-6 bg-gray-100 rounded-lg flex items-center justify-center"
            >
              <span className="text-gray-500 font-medium text-sm whitespace-nowrap">
                {t(`trustLogos.companies.${index}`)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
