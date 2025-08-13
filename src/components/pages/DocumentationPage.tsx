import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Book, Play, Settings, Users, BarChart, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { PageTemplate } from './PageTemplate';

export const DocumentationPage: React.FC = () => {
  const { t } = useTranslation('common');
  const [activeSection, setActiveSection] = useState('getting-started');

  const sections = [
    {
      id: 'getting-started',
      title: t('pages.documentation.sections.gettingStarted.title'),
      icon: Play,
      content: {
        title: t('pages.documentation.sections.gettingStarted.content.title'),
        description: t('pages.documentation.sections.gettingStarted.content.description'),
        sections: [
          {
            title: t('pages.documentation.sections.gettingStarted.content.subsections.quickStart.title'),
            content: t('pages.documentation.sections.gettingStarted.content.subsections.quickStart.content')
          },
          {
            title: t('pages.documentation.sections.gettingStarted.content.subsections.systemRequirements.title'),
            content: t('pages.documentation.sections.gettingStarted.content.subsections.systemRequirements.content')
          },
          {
            title: t('pages.documentation.sections.gettingStarted.content.subsections.accountSetup.title'),
            content: t('pages.documentation.sections.gettingStarted.content.subsections.accountSetup.content')
          }
        ]
      }
    },
    {
      id: 'property-management',
      title: t('pages.documentation.sections.propertyManagement.title'),
      icon: Settings,
      content: {
        title: t('pages.documentation.sections.propertyManagement.content.title'),
        description: t('pages.documentation.sections.propertyManagement.content.description'),
        sections: [
          {
            title: t('pages.documentation.sections.propertyManagement.content.subsections.addingProperties.title'),
            content: t('pages.documentation.sections.propertyManagement.content.subsections.addingProperties.content')
          },
          {
            title: t('pages.documentation.sections.propertyManagement.content.subsections.assetManagement.title'),
            content: t('pages.documentation.sections.propertyManagement.content.subsections.assetManagement.content')
          },
          {
            title: t('pages.documentation.sections.propertyManagement.content.subsections.propertyDocumentation.title'),
            content: t('pages.documentation.sections.propertyManagement.content.subsections.propertyDocumentation.content')
          }
        ]
      }
    },
    {
      id: 'work-orders',
      title: t('pages.documentation.sections.workOrders.title'),
      icon: CheckCircle,
      content: {
        title: t('pages.documentation.sections.workOrders.content.title'),
        description: t('pages.documentation.sections.workOrders.content.description'),
        sections: [
          {
            title: t('pages.documentation.sections.workOrders.content.subsections.creatingWorkOrders.title'),
            content: t('pages.documentation.sections.workOrders.content.subsections.creatingWorkOrders.content')
          },
          {
            title: t('pages.documentation.sections.workOrders.content.subsections.vendorManagement.title'),
            content: t('pages.documentation.sections.workOrders.content.subsections.vendorManagement.content')
          },
          {
            title: t('pages.documentation.sections.workOrders.content.subsections.preventiveMaintenance.title'),
            content: t('pages.documentation.sections.workOrders.content.subsections.preventiveMaintenance.content')
          }
        ]
      }
    },
    {
      id: 'team-collaboration',
      title: t('pages.documentation.sections.teamCollaboration.title'),
      icon: Users,
      content: {
        title: t('pages.documentation.sections.teamCollaboration.content.title'),
        description: t('pages.documentation.sections.teamCollaboration.content.description'),
        sections: [
          {
            title: t('pages.documentation.sections.teamCollaboration.content.subsections.teamManagement.title'),
            content: t('pages.documentation.sections.teamCollaboration.content.subsections.teamManagement.content')
          },
          {
            title: t('pages.documentation.sections.teamCollaboration.content.subsections.tenantPortal.title'),
            content: t('pages.documentation.sections.teamCollaboration.content.subsections.tenantPortal.content')
          },
          {
            title: t('pages.documentation.sections.teamCollaboration.content.subsections.communicationTools.title'),
            content: t('pages.documentation.sections.teamCollaboration.content.subsections.communicationTools.content')
          }
        ]
      }
    },
    {
      id: 'analytics',
      title: t('pages.documentation.sections.analytics.title'),
      icon: BarChart,
      content: {
        title: t('pages.documentation.sections.analytics.content.title'),
        description: t('pages.documentation.sections.analytics.content.description'),
        sections: [
          {
            title: t('pages.documentation.sections.analytics.content.subsections.costAnalysis.title'),
            content: t('pages.documentation.sections.analytics.content.subsections.costAnalysis.content')
          },
          {
            title: t('pages.documentation.sections.analytics.content.subsections.performanceMetrics.title'),
            content: t('pages.documentation.sections.analytics.content.subsections.performanceMetrics.content')
          },
          {
            title: t('pages.documentation.sections.analytics.content.subsections.customReports.title'),
            content: t('pages.documentation.sections.analytics.content.subsections.customReports.content')
          }
        ]
      }
    },
    {
      id: 'security',
      title: t('pages.documentation.sections.security.title'),
      icon: Shield,
      content: {
        title: t('pages.documentation.sections.security.content.title'),
        description: t('pages.documentation.sections.security.content.description'),
        sections: [
          {
            title: t('pages.documentation.sections.security.content.subsections.dataSecurity.title'),
            content: t('pages.documentation.sections.security.content.subsections.dataSecurity.content')
          },
          {
            title: t('pages.documentation.sections.security.content.subsections.complianceFeatures.title'),
            content: t('pages.documentation.sections.security.content.subsections.complianceFeatures.content')
          },
          {
            title: t('pages.documentation.sections.security.content.subsections.accessControls.title'),
            content: t('pages.documentation.sections.security.content.subsections.accessControls.content')
          }
        ]
      }
    }
  ];

  const currentSection = sections.find(s => s.id === activeSection);

  return (
    <PageTemplate>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('pages.documentation.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('pages.documentation.subtitle')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 sticky top-24">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Book className="w-5 h-5 text-blue-600" />
                  {t('pages.documentation.navigation')}
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                        activeSection === section.id
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <section.icon className="w-4 h-4" />
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  {currentSection && <currentSection.icon className="w-8 h-8 text-blue-600" />}
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {currentSection?.content.title}
                    </h2>
                    <p className="text-gray-600 mt-2">
                      {currentSection?.content.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {currentSection?.content.sections.map((subsection, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="border-l-4 border-blue-200 pl-6"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <ArrowRight className="w-5 h-5 text-blue-600" />
                        {subsection.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {subsection.content}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex-1 max-w-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {t('pages.documentation.cta.title')}
                      </h4>
                      <p className="text-gray-600">
                        {t('pages.documentation.cta.description')}
                      </p>
                    </div>
                    <motion.a
                      href="https://www.abrax.app/?view=signup"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
                    >
                      {t('pages.documentation.cta.button')}
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};