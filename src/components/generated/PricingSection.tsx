import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Clock, CreditCard } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useWaitlist } from '../context/WaitlistContext';

export const PricingSection: React.FC = () => {
  const { t } = useTranslation('common');
  const { openWaitlist } = useWaitlist();

  const betaBenefits = [
    t('pricing.beta.benefits.0'),
    t('pricing.beta.benefits.1'),
    t('pricing.beta.benefits.2'),
    t('pricing.beta.benefits.3'),
    t('pricing.beta.benefits.4'),
    t('pricing.beta.benefits.5'),
  ];

  const proBenefits = [
    t('pricing.pro.benefits.0'),
    t('pricing.pro.benefits.1'),
    t('pricing.pro.benefits.2'),
    t('pricing.pro.benefits.3'),
    t('pricing.pro.benefits.4'),
  ];

  const trustSignals = [
    { icon: CreditCard, text: t('pricing.trustSignals.0') },
    { icon: Clock, text: t('pricing.trustSignals.1') },
    { icon: Shield, text: t('pricing.trustSignals.2') },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Beta Free Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-white rounded-2xl shadow-lg border-2 border-blue-500 overflow-hidden"
          >
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
              {t('pricing.beta.badge')}
            </div>

            <div className="p-8">
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900">
                    {t('pricing.beta.price')}
                  </span>
                </div>
                <p className="text-gray-500 mt-1">
                  {t('pricing.beta.duration')}
                </p>
              </div>

              {/* Benefits List */}
              <ul className="space-y-4 mb-8">
                {betaBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                onClick={openWaitlist}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                {t('pricing.beta.cta')}
              </motion.button>
            </div>
          </motion.div>

          {/* Pro Tier (Coming Soon) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
          >
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-gray-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
              {t('pricing.pro.badge')}
            </div>

            <div className="p-8">
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900">
                    {t('pricing.pro.price')}
                  </span>
                </div>
                <p className="text-gray-500 mt-1">
                  {t('pricing.pro.duration')}
                </p>
              </div>

              {/* Benefits List */}
              <ul className="space-y-4 mb-8">
                {proBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button (Disabled) */}
              <button
                disabled
                className="flex items-center justify-center gap-2 w-full bg-gray-200 text-gray-500 py-4 rounded-xl font-semibold text-lg cursor-not-allowed"
              >
                {t('pricing.pro.cta')}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-600">
              <signal.icon className="w-5 h-5 text-green-500" />
              <span>{signal.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
