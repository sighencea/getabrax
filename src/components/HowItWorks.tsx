'use client'

import React from 'react'

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with our simple three-step process
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
              01
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Sign Up &amp; Setup</h3>
            <p className="text-gray-600">
              Create your account and add your properties in under 5 minutes
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
              02
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Schedule &amp; Track</h3>
            <p className="text-gray-600">
              Set up maintenance schedules and track work orders automatically
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
              03
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Optimize &amp; Scale</h3>
            <p className="text-gray-600">
              Use insights to reduce costs and scale your operations efficiently
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
