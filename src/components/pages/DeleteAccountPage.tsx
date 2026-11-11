import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageTemplate } from './PageTemplate';

/**
 * Account deletion page. Google Play's Data safety form and Apple's review
 * both want a public page that explains how a user deletes their account
 * and what happens to their data. Deletion itself is self-service inside
 * the product; this page only describes it.
 */
export const DeleteAccountPage: React.FC = () => {
  const { t } = useTranslation('common');

  const renderSection = (sectionKey: string, index: number) => {
    const section = t(`pages.deleteAccount.sections.${sectionKey}`, { returnObjects: true }) as any;

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

        {section.steps && (
          <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4 mb-6">
            {section.steps.map((step: string, idx: number) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        )}

        {section.items && (
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
            {section.items.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        {section.contactLink && (
          <p className="text-gray-700 leading-relaxed">
            <Link to="/contact" className="text-blue-600 hover:text-blue-800 underline">
              {section.contactLink}
            </Link>
          </p>
        )}
      </motion.section>
    );
  };

  const sections = [
    'howToDeleteWeb',
    'howToDeleteApp',
    'portalAccounts',
    'staffAccounts',
    'exportFirst',
    'withoutAccess',
  ];

  return (
    <PageTemplate>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            {t('pages.deleteAccount.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm text-gray-600"
          >
            {t('pages.deleteAccount.lastUpdated')}
          </motion.p>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-gray-700 leading-relaxed">
            {t('pages.deleteAccount.introduction')}
          </p>
        </motion.section>

        {sections.map((sectionKey, index) => renderSection(sectionKey, index + 1))}
      </div>
    </PageTemplate>
  );
};
