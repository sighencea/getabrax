import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PageTemplate } from './PageTemplate';

export const TermsOfServicePage: React.FC = () => {
  const { t } = useTranslation('common');

  const renderSection = (sectionKey: string, index: number) => {
    const section = t(`pages.termsOfService.sections.${sectionKey}`, { returnObjects: true }) as any;
    
    return (
      <motion.section
        key={sectionKey}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
        
        {section.content && (
          <p className="text-gray-700 leading-relaxed mb-6">{section.content}</p>
        )}
        
        {section.registration && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.registration.title}</h3>
            <p className="text-gray-700 leading-relaxed">{section.registration.content}</p>
          </div>
        )}
        
        {section.responsibilities && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.responsibilities.title}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {section.responsibilities.items.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        
        {section.permitted && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.permitted.title}</h3>
            <p className="text-gray-700 leading-relaxed">{section.permitted.content}</p>
          </div>
        )}
        
        {section.prohibited && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.prohibited.title}</h3>
            <p className="text-gray-700 leading-relaxed mb-3">{section.prohibited.content}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {section.prohibited.items.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        
        {section.plans && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.plans.title}</h3>
            <p className="text-gray-700 leading-relaxed">{section.plans.content}</p>
          </div>
        )}
        
        {section.billing && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.billing.title}</h3>
            <p className="text-gray-700 leading-relaxed">{section.billing.content}</p>
          </div>
        )}
        
        {section.cancellation && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.cancellation.title}</h3>
            <p className="text-gray-700 leading-relaxed">{section.cancellation.content}</p>
          </div>
        )}
        
        {section.ourRights && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.ourRights.title}</h3>
            <p className="text-gray-700 leading-relaxed">{section.ourRights.content}</p>
          </div>
        )}
        
        {section.yourContent && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.yourContent.title}</h3>
            <p className="text-gray-700 leading-relaxed">{section.yourContent.content}</p>
          </div>
        )}
      </motion.section>
    );
  };

  const sections = [
    'acceptanceOfTerms',
    'description',
    'eligibility',
    'accounts',
    'useOfService',
    'subscriptionAndBilling',
    'dataAndPrivacy',
    'intellectualProperty',
    'disclaimers',
    'limitation',
    'indemnification',
    'termination',
    'governingLaw',
    'changes',
    'contact'
  ];

  return (
    <PageTemplate>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            {t('pages.termsOfService.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm text-gray-600"
          >
            {t('pages.termsOfService.lastUpdated')}
          </motion.p>
        </div>

        {/* Introduction */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {t('pages.termsOfService.introduction.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('pages.termsOfService.introduction.content')}
          </p>
        </motion.section>

        {/* Main Sections */}
        {sections.map((sectionKey, index) => renderSection(sectionKey, index + 1))}
      </div>
    </PageTemplate>
  );
};