import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Quote } from 'lucide-react';
const testimonials = [{
  name: 'Sarah Johnson',
  title: 'Property Manager',
  company: 'Metro Properties',
  image: '/api/placeholder/64/64',
  quote: 'This platform has revolutionized how we handle maintenance. We\'ve cut our response time by 60% and our tenants are happier than ever.',
  rating: 5
}, {
  name: 'Michael Chen',
  title: 'Operations Director',
  company: 'Urban Living Group',
  image: '/api/placeholder/64/64',
  quote: 'The cost savings have been incredible. We\'ve reduced our maintenance budget by 40% while actually improving service quality.',
  rating: 5
}, {
  name: 'Lisa Rodriguez',
  title: 'Portfolio Manager',
  company: 'Residential Plus',
  image: '/api/placeholder/64/64',
  quote: 'The mobile app is a game-changer. I can manage work orders from anywhere and keep track of all our properties in real-time.',
  rating: 5
}] as any[];
export const VideoTestimonialSection: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  return <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Section */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} className="relative">
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              {!isVideoPlaying ? <div className="relative">
                  <img src="/api/placeholder/600/400" alt="Property maintenance dashboard demo" className="w-full h-80 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <motion.button whileHover={{
                  scale: 1.1
                }} whileTap={{
                  scale: 0.9
                }} onClick={() => setIsVideoPlaying(true)} className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-gray-900 ml-1" />
                    </motion.button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white bg-opacity-90 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        See How It Works
                      </h3>
                      <p className="text-sm text-gray-600">
                        Watch a 2-minute demo of our platform in action
                      </p>
                    </div>
                  </div>
                </div> : <div className="w-full h-80 bg-gray-800 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p>Loading demo video...</p>
                  </div>
                </div>}
            </div>
            
            {/* Video Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-blue-600">2min</div>
                <div className="text-sm text-gray-600">Quick Demo</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-green-600">5min</div>
                <div className="text-sm text-gray-600">Setup Time</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600">
                Join hundreds of property managers who've transformed their operations
              </p>
            </div>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} className={`bg-white rounded-xl p-6 shadow-sm border-2 transition-all duration-300 cursor-pointer ${activeTestimonial === index ? 'border-blue-300 shadow-lg' : 'border-gray-200 hover:border-gray-300'}`} onClick={() => setActiveTestimonial(index)}>
                  <div className="flex items-start gap-4">
                    <img src={testimonial.image} alt={`${testimonial.name} profile`} className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                      </div>
                      
                      <blockquote className="text-gray-700 mb-4 relative">
                        <Quote className="w-6 h-6 text-blue-200 absolute -top-2 -left-2" />
                        <p className="relative z-10 italic">
                          {testimonial.quote}
                        </p>
                      </blockquote>
                      
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.title} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>)}
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">4.9/5</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">99%</div>
                  <div className="text-sm text-gray-600">Would Recommend</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};