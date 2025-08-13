import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PageTemplate } from './PageTemplate';

export const GdprPage: React.FC = () => {
  const { t } = useTranslation('common');

  const renderSection = (sectionKey: string, index: number) => {
    const section = t(`pages.gdpr.sections.${sectionKey}`, { returnObjects: true }) as any;
    
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
        
        {section.categories && (
          <div className="mb-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {section.categories.map((category: any, idx: number) => (
                <li key={idx}>
                  <strong>{category.name}:</strong> {category.description}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {section.rights && (
          <div className="mb-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {section.rights.map((right: string, idx: number) => (
                <li key={idx}>{right}</li>
              ))}
            </ul>
          </div>
        )}
        
        {section.bases && (
          <div className="mb-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {section.bases.map((basis: string, idx: number) => (
                <li key={idx}>{basis}</li>
              ))}
            </ul>
          </div>
        )}
        
        {section.purposes && (
          <div className="mb-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {section.purposes.map((purpose: string, idx: number) => (
                <li key={idx}>{purpose}</li>
              ))}
            </ul>
          </div>
        )}
        
        {section.measures && (
          <div className="mb-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {section.measures.map((measure: string, idx: number) => (
                <li key={idx}>{measure}</li>
              ))}
            </ul>
          </div>
        )}
        
        {section.requirements && (
          <div className="mb-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {section.requirements.map((requirement: string, idx: number) => (
                <li key={idx}>{requirement}</li>
              ))}
            </ul>
          </div>
        )}
        
        {section.details && (
          <div className="bg-blue-50 p-4 rounded-lg">
            {section.details.map((detail: string, idx: number) => (
              <p key={idx} className="text-gray-700 mb-2 last:mb-0">{detail}</p>
            ))}
          </div>
        )}
      </motion.section>
    );
  };

  const sections = [
    'personalData',
    'dataSubjects',
    'legalBasis',
    'dataProcessing',
    'dataProtection',
    'yourRights',
    'dataBreaches',
    'compliance',
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
            {t('pages.gdpr.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm text-gray-600"
          >
            {t('pages.gdpr.lastUpdated')}
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
            {t('pages.gdpr.introduction.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('pages.gdpr.introduction.content')}
          </p>
        </motion.section>

        {/* Main Sections */}
        {sections.map((sectionKey, index) => renderSection(sectionKey, index + 1))}
      </div>
    </PageTemplate>
  );
};