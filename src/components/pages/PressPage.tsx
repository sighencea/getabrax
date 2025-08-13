import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTemplate } from './PageTemplate';

export const PressPage: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <PageTemplate>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {t('pages.press.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('pages.press.content')}
          </p>
        </div>
      </div>
    </PageTemplate>
  );
};