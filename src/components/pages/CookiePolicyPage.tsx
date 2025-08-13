import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PageTemplate } from './PageTemplate';

export const CookiePolicyPage: React.FC = () => {
  const { t } = useTranslation('common');

  const renderSection = (sectionKey: string, index: number) => {
    const section = t(`pages.cookiePolicy.sections.${sectionKey}`, { returnObjects: true }) as any;
    
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
        
        {section.types && (
          <div className="mb-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {section.types.map((type: any, idx: number) => (
                <li key={idx}>
                  <strong>{type.name}:</strong> {type.description}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {section.categories && (
          <div className="mb-6">
            {section.categories.map((category: any, idx: number) => (
              <div key={idx} className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-2">{category.description}</p>
                {category.cookies && (
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 text-sm">
                    {category.cookies.map((cookie: string, cookieIdx: number) => (
                      <li key={cookieIdx}>{cookie}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
        
        {section.methods && (
          <div className="mb-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {section.methods.map((method: string, idx: number) => (
                <li key={idx}>{method}</li>
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
        
        {section.providers && (
          <div className="mb-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {section.providers.map((provider: string, idx: number) => (
                <li key={idx}>{provider}</li>
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
      </motion.section>
    );
  };

  const sections = [
    'whatAreCookies',
    'howWeUseCookies', 
    'typesOfCookies',
    'thirdPartyServices',
    'managingCookies',
    'yourChoices',
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
            {t('pages.cookiePolicy.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm text-gray-600"
          >
            {t('pages.cookiePolicy.lastUpdated')}
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
            {t('pages.cookiePolicy.introduction.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('pages.cookiePolicy.introduction.content')}
          </p>
        </motion.section>

        {/* Main Sections */}
        {sections.map((sectionKey, index) => renderSection(sectionKey, index + 1))}
      </div>
    </PageTemplate>
  );
};