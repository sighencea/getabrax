'use client'

import React from 'react'

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">Abrax</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Features
              </button>
              <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                How It Works
              </button>
              <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Testimonials
              </button>
              <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Pricing
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden sm:inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
              Sign In
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
              Get Started for Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
