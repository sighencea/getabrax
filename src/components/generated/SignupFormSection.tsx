import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useWaitlist } from '../context/WaitlistContext';

export const SignupFormSection: React.FC = () => {
  const { t } = useTranslation('common');
  const { openWaitlist } = useWaitlist();

  return (
    <section id="signup-section" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('signup.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('signup.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Benefits List */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="space-y-6 mb-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              {t('signup.benefits.title')}
            </h3>
            
            {[
              t('signup.benefits.items.0'),
              t('signup.benefits.items.1'),
              t('signup.benefits.items.2'),
              t('signup.benefits.items.3'),
              t('signup.benefits.items.4'),
              t('signup.benefits.items.5')
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -10
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1
                }}
                className="flex items-center gap-3 justify-center"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.3
            }}
            className="text-center"
          >
            <motion.button
              onClick={openWaitlist}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              {t('signup.cta.button')}
            </motion.button>
            
            <p className="text-gray-500 text-sm mt-4">
              {t('signup.cta.description')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};