'use client'

import React from 'react'

const Footer = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Transform Your Property Management?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join hundreds of property managers who've reduced maintenance costs by 40%
        </p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
          Start Your Free Trial Today
        </button>
      </div>
    </section>
  )
}

export default Footer
