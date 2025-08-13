import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PageTemplate } from './PageTemplate';

export const PrivacyPolicyPage: React.FC = () => {
  const { t } = useTranslation('common');

  const renderSection = (sectionKey: string, index: number) => {
    const section = t(`pages.privacyPolicy.sections.${sectionKey}`, { returnObjects: true }) as any;
    
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
        
        {section.personalInfo && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.personalInfo.title}</h3>
            <p className="text-gray-700 leading-relaxed">{section.personalInfo.content}</p>
          </div>
        )}
        
        {section.technicalInfo && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.technicalInfo.title}</h3>
            <p className="text-gray-700 leading-relaxed">{section.technicalInfo.content}</p>
          </div>
        )}
        
        {section.localStorage && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.localStorage.title}</h3>
            <p className="text-gray-700 leading-relaxed">{section.localStorage.content}</p>
          </div>
        )}
        
        {section.purposes && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.purposes.title}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {section.purposes.items.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        
        {section.circumstances && (
          <div className="mb-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {section.circumstances.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        
        {section.serviceProviders && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.serviceProviders.title}</h3>
            <p className="text-gray-700 leading-relaxed mb-3">{section.serviceProviders.content}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-3">
              {section.serviceProviders.providers.map((provider: string, idx: number) => (
                <li key={idx}>{provider}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 italic">{section.serviceProviders.note}</p>
          </div>
        )}
        
        {section.measures && (
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            {section.measures.map((measure: string, idx: number) => (
              <li key={idx}>{measure}</li>
            ))}
          </ul>
        )}
        
        {section.rights && (
          <div className="mb-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-3">
              {section.rights.map((right: string, idx: number) => (
                <li key={idx}>{right}</li>
              ))}
            </ul>
            <p className="text-gray-700">{section.contact}</p>
          </div>
        )}
        
        {section.details && (
          <div className="bg-gray-50 p-4 rounded-lg">
            {section.details.map((detail: string, idx: number) => (
              <p key={idx} className="text-gray-700 mb-2 last:mb-0">{detail}</p>
            ))}
          </div>
        )}
      </motion.section>
    );
  };

  const sections = [
    'informationWeCollect',
    'howWeUseInformation', 
    'dataSharing',
    'dataRetention',
    'dataSecurity',
    'yourRights',
    'internationalTransfers',
    'children',
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
            {t('pages.privacyPolicy.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm text-gray-600"
          >
            {t('pages.privacyPolicy.lastUpdated')}
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
            {t('pages.privacyPolicy.introduction.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('pages.privacyPolicy.introduction.content')}
          </p>
        </motion.section>

        {/* Main Sections */}
        {sections.map((sectionKey, index) => renderSection(sectionKey, index + 1))}
      </div>
    </PageTemplate>
  );
};