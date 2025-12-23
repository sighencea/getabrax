import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const TrustLogosSection: React.FC = () => {
  const { t } = useTranslation('common');

  // Create an array of company indices for mapping
  const companies = [0, 1, 2, 3, 4, 5];
  // Duplicate for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm mb-8">
          {t('trustLogos.title')}
        </p>

        {/* Marquee container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-12"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {duplicatedCompanies.map((index, i) => (
              <div
                key={`${index}-${i}`}
                className="flex-shrink-0 h-10 px-6 bg-gray-100 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-500 font-medium text-sm whitespace-nowrap">
                  {t(`trustLogos.companies.${index}`)}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
