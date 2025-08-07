'use client'

import React from 'react'

const SignupFormSection = () => {
  return (
    <section id="signup">
      <section id="signup-section" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Start Your Free Trial Today
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join 500+ property managers who've reduced maintenance costs by 40%. No credit card
                required, setup takes less than 5 minutes.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                What you'll get with your free trial:
              </h3>
              <div className="flex items-center gap-3">
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
                  className="lucide lucide-circle-check-big w-6 h-6 text-green-500 flex-shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span className="text-gray-700">Complete access to all premium features</span>
              </div>
              <div className="flex items-center gap-3">
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
                  className="lucide lucide-circle-check-big w-6 h-6 text-green-500 flex-shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span className="text-gray-700">Unlimited work orders and properties</span>
              </div>
              <div className="flex items-center gap-3">
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
                  className="lucide lucide-circle-check-big w-6 h-6 text-green-500 flex-shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span className="text-gray-700">Mobile app for iOS and Android</span>
              </div>
              <div className="flex items-center gap-3">
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
                  className="lucide lucide-circle-check-big w-6 h-6 text-green-500 flex-shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span className="text-gray-700">Real-time analytics and reporting</span>
              </div>
              <div className="flex items-center gap-3">
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
                  className="lucide lucide-circle-check-big w-6 h-6 text-green-500 flex-shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span className="text-gray-700">Priority customer support</span>
              </div>
              <div className="flex items-center gap-3">
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
                  className="lucide lucide-circle-check-big w-6 h-6 text-green-500 flex-shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span className="text-gray-700">No setup fees or hidden costs</span>
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">🎯 Quick Setup Promise</h4>
                <p className="text-gray-600">
                  We'll have you up and running in under 5 minutes. Our onboarding team will
                  personally guide you through the setup process.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
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
                        className="lucide lucide-user absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <input
                        id="fullName"
                        className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors border-gray-300"
                        placeholder="Enter your full name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Email
                    </label>
                    <div className="relative">
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
                        className="lucide lucide-mail absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      <input
                        id="email"
                        className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors border-gray-300"
                        placeholder="you@company.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <div className="relative">
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
                        className="lucide lucide-building absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                      >
                        <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                        <path d="M9 22v-4h6v4"></path>
                        <path d="M8 6h.01"></path>
                        <path d="M16 6h.01"></path>
                        <path d="M12 6h.01"></path>
                        <path d="M12 10h.01"></path>
                        <path d="M12 14h.01"></path>
                        <path d="M16 10h.01"></path>
                        <path d="M16 14h.01"></path>
                        <path d="M8 10h.01"></path>
                        <path d="M8 14h.01"></path>
                      </svg>
                      <input
                        id="company"
                        className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors border-gray-300"
                        placeholder="Your company name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Password
                    </label>
                    <div className="relative">
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
                        className="lucide lucide-lock absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                      >
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      <input
                        id="password"
                        className="w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors border-gray-300"
                        placeholder="Create a secure password"
                        type="password"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
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
                          className="lucide lucide-eye w-5 h-5"
                        >
                          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </button>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Must be at least 8 characters long</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      id="agreeToTips"
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      type="checkbox"
                    />
                    <label htmlFor="agreeToTips" className="text-sm text-gray-600">
                      I want to receive setup tips &amp; best practices via email (you can
                      unsubscribe anytime)
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                  >
                    Create My Free Account
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    By creating an account, you agree to our{' '}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                    . No credit card required for your 14-day free trial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default SignupFormSection
