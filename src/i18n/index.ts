import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './en';
import deTranslations from './de';

const isProduction = import.meta.env.PROD;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: !isProduction,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false, // React already handles XSS protection
    },

    resources: {
      en: {
        common: enTranslations
      },
      de: {
        common: deTranslations
      }
    },

    ns: ['common'],
    defaultNS: 'common',

    react: {
      useSuspense: false,
    }
  });

// Debug logging (only in development)
if (!isProduction) {
  i18n.on('initialized', () => {
    console.log('i18n initialized, current language:', i18n.language);
    console.log('Available languages:', Object.keys(i18n.options.resources || {}));
  });

  i18n.on('languageChanged', (lng) => {
    console.log('Language changed to:', lng);
  });
}

// Enhanced language detection with geolocation
const detectLanguageFromLocation = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    if (data.country_code === 'DE') {
      return 'de';
    }
    
    // Check for other German-speaking countries
    if (['AT', 'CH'].includes(data.country_code)) {
      return 'de';
    }
    
  } catch (error) {
    console.log('Geolocation detection failed, using browser language');
  }
  
  return null;
};

// Initialize enhanced language detection
const initLanguageDetection = async () => {
  // Only detect location if no language is stored in localStorage
  if (!localStorage.getItem('i18nextLng')) {
    const locationLang = await detectLanguageFromLocation();
    if (locationLang) {
      i18n.changeLanguage(locationLang);
    }
  }
};

// Call enhanced detection on initialization
initLanguageDetection();

export default i18n;