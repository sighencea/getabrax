'use client'

import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-8" style={{ opacity: 1, transform: 'none' }}>
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                🚀 Trusted by 500+ Property Managers
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Cut Property<span className="text-blue-600"> Maintenance</span>
              <br />
              Costs by 40%
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Streamline work orders, automate scheduling, and gain complete visibility into your
              property maintenance operations with our all-in-one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 transition-colors flex items-center gap-2">
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
                  className="lucide lucide-play w-5 h-5"
                >
                  <polygon points="6 3 20 12 6 21 6 3"></polygon>
                </svg>
                Book a Demo
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
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
                  className="lucide lucide-circle-check-big w-5 h-5 text-green-500"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
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
                  className="lucide lucide-circle-check-big w-5 h-5 text-green-500"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
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
                  className="lucide lucide-circle-check-big w-5 h-5 text-green-500"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </div>
          <div className="relative" style={{ opacity: 1, transform: 'none' }}>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-10"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-4 text-sm text-gray-500">PropertyMaintenance Pro</div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <div>
                      <div className="font-semibold text-gray-900">Work Order #1247</div>
                      <div className="text-sm text-gray-600">HVAC Maintenance - Unit 4B</div>
                    </div>
                    <div className="text-green-600 font-semibold">Completed</div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <div>
                      <div className="font-semibold text-gray-900">Work Order #1248</div>
                      <div className="text-sm text-gray-600">Plumbing Repair - Unit 2A</div>
                    </div>
                    <div className="text-blue-600 font-semibold">In Progress</div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                    <div>
                      <div className="font-semibold text-gray-900">Work Order #1249</div>
                      <div className="text-sm text-gray-600">Electrical Check - Unit 1C</div>
                    </div>
                    <div className="text-yellow-600 font-semibold">Scheduled</div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">Monthly Savings</div>
                  <div className="text-2xl font-bold text-green-600">$12,450</div>
                  <div className="text-sm text-gray-500">↑ 40% reduction in costs</div>
                </div>
              </div>
            </div>
            <div
              className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 border"
              style={{ transform: 'translateY(-9.72342px)' }}
            >
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div
              className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border"
              style={{ transform: 'translateY(0.276582px)' }}
            >
              <div className="text-2xl font-bold text-green-600">40%</div>
              <div className="text-sm text-gray-600">Cost Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
