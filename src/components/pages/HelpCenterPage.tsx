import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  LifeBuoy, 
  CreditCard, 
  Wrench, 
  Building2, 
  CheckCircle, 
  Users, 
  Mail, 
  Phone, 
  MessageCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { PageTemplate } from './PageTemplate';

export const HelpCenterPage: React.FC = () => {
  const { t } = useTranslation('common');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [feedbackGiven, setFeedbackGiven] = useState<string | null>(null);

  const helpCategories = [
    {
      id: 'gettingHelp',
      icon: LifeBuoy,
      title: t('pages.helpCenter.quickHelp.categories.gettingHelp.title'),
      description: t('pages.helpCenter.quickHelp.categories.gettingHelp.description'),
      color: 'blue'
    },
    {
      id: 'accountBilling',
      icon: CreditCard,
      title: t('pages.helpCenter.quickHelp.categories.accountBilling.title'),
      description: t('pages.helpCenter.quickHelp.categories.accountBilling.description'),
      color: 'green'
    },
    {
      id: 'technicalIssues',
      icon: Wrench,
      title: t('pages.helpCenter.quickHelp.categories.technicalIssues.title'),
      description: t('pages.helpCenter.quickHelp.categories.technicalIssues.description'),
      color: 'red'
    },
    {
      id: 'propertySetup',
      icon: Building2,
      title: t('pages.helpCenter.quickHelp.categories.propertySetup.title'),
      description: t('pages.helpCenter.quickHelp.categories.propertySetup.description'),
      color: 'purple'
    },
    {
      id: 'workOrders',
      icon: CheckCircle,
      title: t('pages.helpCenter.quickHelp.categories.workOrders.title'),
      description: t('pages.helpCenter.quickHelp.categories.workOrders.description'),
      color: 'yellow'
    },
    {
      id: 'teamManagement',
      icon: Users,
      title: t('pages.helpCenter.quickHelp.categories.teamManagement.title'),
      description: t('pages.helpCenter.quickHelp.categories.teamManagement.description'),
      color: 'indigo'
    }
  ];

  const faqCategories = [
    'gettingHelp',
    'accountBilling', 
    'technicalIssues',
    'propertySetup',
    'workOrders',
    'teamManagement'
  ];

  const supportChannels = [
    {
      icon: Mail,
      title: t('pages.helpCenter.support.email.title'),
      description: t('pages.helpCenter.support.email.description'),
      detail: t('pages.helpCenter.support.email.detail'),
      responseTime: t('pages.helpCenter.support.email.responseTime'),
      color: 'blue'
    },
    {
      icon: Phone,
      title: t('pages.helpCenter.support.phone.title'),
      description: t('pages.helpCenter.support.phone.description'),
      detail: t('pages.helpCenter.support.phone.detail'),
      responseTime: t('pages.helpCenter.support.phone.responseTime'),
      color: 'green'
    },
    {
      icon: MessageCircle,
      title: t('pages.helpCenter.support.community.title'),
      description: t('pages.helpCenter.support.community.description'),
      detail: t('pages.helpCenter.support.community.detail'),
      responseTime: t('pages.helpCenter.support.community.responseTime'),
      color: 'purple'
    }
  ];


  const handleFaqToggle = (faqId: string) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  const handleFeedback = (helpful: boolean, faqId: string) => {
    setFeedbackGiven(faqId);
    // Here you would normally send feedback to analytics
    setTimeout(() => setFeedbackGiven(null), 2000);
  };

  const scrollToFaqSection = (categoryId: string) => {
    const element = document.getElementById(`faq-${categoryId}`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
      green: 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100',
      red: 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100',
      purple: 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100',
      yellow: 'bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100',
      indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <PageTemplate>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('pages.helpCenter.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('pages.helpCenter.subtitle')}
          </p>

          {/* TODO: Add search functionality here when we have dedicated articles to search through
              - Import Search icon from lucide-react
              - Add searchQuery state: const [searchQuery, setSearchQuery] = useState('');
              - Implement search bar with: {t('pages.helpCenter.searchPlaceholder')}
              - Add search logic to filter FAQ content
          */}
        </div>

        {/* Main Content */}
        <div>
            {/* Quick Help Categories */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t('pages.helpCenter.quickHelp.title')}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {helpCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => scrollToFaqSection(category.id)}
                    className={`p-6 rounded-lg border-2 cursor-pointer transition-colors hover:scale-105 ${getColorClasses(category.color)}`}
                  >
                    <category.icon className="w-8 h-8 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                    <p className="text-sm opacity-80">{category.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t('pages.helpCenter.faq.title')}
              </h2>
              
              {faqCategories.map((categoryKey) => (
                <div key={categoryKey} id={`faq-${categoryKey}`} className="mb-8 scroll-mt-24">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {t(`pages.helpCenter.faq.categories.${categoryKey}.title`)}
                  </h3>
                  <div className="space-y-4">
                    {['q1', 'q2', 'q3'].map((questionKey) => {
                      const faqId = `${categoryKey}-${questionKey}`;
                      const isExpanded = expandedFaq === faqId;
                      
                      return (
                        <motion.div
                          key={faqId}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="bg-white rounded-lg border border-gray-200 shadow-sm"
                        >
                          <button
                            onClick={() => handleFaqToggle(faqId)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-medium text-gray-900">
                              {t(`pages.helpCenter.faq.categories.${categoryKey}.questions.${questionKey}.question`)}
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-500" />
                            )}
                          </button>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-6 pb-4"
                            >
                              <div className="pt-2 border-t border-gray-100">
                                <p className="text-gray-700 mb-4">
                                  {t(`pages.helpCenter.faq.categories.${categoryKey}.questions.${questionKey}.answer`)}
                                </p>
                                
                                {/* Feedback */}
                                {feedbackGiven === faqId ? (
                                  <div className="flex items-center text-green-600 text-sm">
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    {t('pages.helpCenter.feedback.thanks')}
                                  </div>
                                ) : (
                                  <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <span>{t('pages.helpCenter.feedback.helpful')}</span>
                                    <div className="flex gap-2">
                                      <button
                                        onClick={() => handleFeedback(true, faqId)}
                                        className="px-3 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
                                      >
                                        {t('pages.helpCenter.feedback.yes')}
                                      </button>
                                      <button
                                        onClick={() => handleFeedback(false, faqId)}
                                        className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
                                      >
                                        {t('pages.helpCenter.feedback.no')}
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </section>

            {/* Contact Support */}
            <section className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('pages.helpCenter.support.title')}
                </h2>
                <p className="text-gray-600">
                  {t('pages.helpCenter.support.subtitle')}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {supportChannels.map((channel, index) => (
                  <motion.div
                    key={channel.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(channel.color)}`}>
                      <channel.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {channel.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {channel.description}
                    </p>
                    <p className="font-medium text-gray-900 mb-2">
                      {channel.detail}
                    </p>
                    <p className="text-sm text-gray-500">
                      {channel.responseTime}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>
        </div>
      </div>
    </PageTemplate>
  );
};