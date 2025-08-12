import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, BarChart3, Shield, Users, Smartphone, Calendar, FileText } from 'lucide-react';
const benefits = [{
  icon: Clock,
  title: 'Save 15+ Hours Weekly',
  description: 'Automate work order creation, scheduling, and vendor communication to focus on strategic decisions.'
}, {
  icon: DollarSign,
  title: 'Reduce Costs by 40%',
  description: 'Prevent costly emergency repairs with predictive maintenance and optimized vendor pricing.'
}, {
  icon: BarChart3,
  title: 'Real-Time Analytics',
  description: 'Get instant insights into maintenance trends, costs, and performance across all properties.'
}, {
  icon: Shield,
  title: 'Ensure Compliance',
  description: 'Stay compliant with safety regulations and maintain detailed audit trails automatically.'
}, {
  icon: Users,
  title: 'Vendor Management',
  description: 'Centralize vendor relationships, track performance, and negotiate better rates with data.'
}, {
  icon: Smartphone,
  title: 'Mobile-First Design',
  description: 'Manage properties on-the-go with our intuitive mobile app for iOS and Android.'
}, {
  icon: Calendar,
  title: 'Smart Scheduling',
  description: 'AI-powered scheduling optimizes technician routes and minimizes tenant disruption.'
}, {
  icon: FileText,
  title: 'Digital Documentation',
  description: 'Store photos, receipts, and reports in one place with automatic organization.'
}] as any[];
export const BenefitsGrid: React.FC = () => {
  return <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Property Managers Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your maintenance operations with powerful features designed 
              specifically for property management professionals.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} whileHover={{
            y: -5
          }} className="group">
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>;
        })}
        </div>

        {/* Stats Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Properties Managed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">40%</div>
              <div className="text-blue-100">Average Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">15hrs</div>
              <div className="text-blue-100">Weekly Time Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">Platform Uptime</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};