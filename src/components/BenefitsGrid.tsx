'use client'

import React from 'react'

const BenefitsGrid = () => {
  return (
    <section id="benefits">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Property Managers Choose Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your maintenance operations with powerful features designed specifically
                for property management professionals.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-clock w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Save 15+ Hours Weekly
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Automate work order creation, scheduling, and vendor communication to focus on
                  strategic decisions.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-dollar-sign w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
                  >
                    <line x1="12" x2="12" y1="2" y2="22"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Reduce Costs by 40%
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Prevent costly emergency repairs with predictive maintenance and optimized vendor
                  pricing.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chart-column w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Analytics</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get instant insights into maintenance trends, costs, and performance across all
                  properties.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ensure Compliance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Stay compliant with safety regulations and maintain detailed audit trails
                  automatically.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-users w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vendor Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  Centralize vendor relationships, track performance, and negotiate better rates
                  with data.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-smartphone w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
                  >
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                    <path d="M12 18h.01"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile-First Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  Manage properties on-the-go with our intuitive mobile app for iOS and Android.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-calendar w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Scheduling</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI-powered scheduling optimizes technician routes and minimizes tenant disruption.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-file-text w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Digital Documentation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Store photos, receipts, and reports in one place with automatic organization.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
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
          </div>
        </div>
      </section>
    </section>
  )
}

export default BenefitsGrid
