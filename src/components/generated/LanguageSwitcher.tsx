import React from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  variant?: 'footer' | 'sticky';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'footer' }) => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const getButtonClasses = (isActive: boolean) => {
    if (variant === 'sticky') {
      return `px-3 py-2 text-sm rounded-lg transition-colors ${
        isActive 
          ? 'bg-blue-600 text-white' 
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      }`;
    }
    
    // Footer variant (original styling)
    return `px-2 py-1 text-xs rounded transition-colors ${
      isActive 
        ? 'bg-gray-600 text-white' 
        : 'text-gray-400 hover:text-gray-300'
    }`;
  };

  const getSeparatorClasses = () => {
    return variant === 'sticky' 
      ? 'text-gray-300 text-sm' 
      : 'text-gray-500 text-xs';
  };

  return (
    <div className="flex items-center space-x-2">
      <button 
        onClick={() => changeLanguage('en')}
        className={getButtonClasses(i18n.language === 'en')}
      >
        {t('languageSwitcher.languages.en')}
      </button>
      <span className={getSeparatorClasses()}>|</span>
      <button 
        onClick={() => changeLanguage('de')}
        className={getButtonClasses(i18n.language === 'de')}
      >
        {t('languageSwitcher.languages.de')}
      </button>
    </div>
  );
};