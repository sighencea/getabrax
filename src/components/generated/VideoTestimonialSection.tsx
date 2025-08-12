import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const VideoTestimonialSection: React.FC = () => {
  const { t } = useTranslation('common');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [{
    name: t('testimonials.testimonials.0.name'),
    title: t('testimonials.testimonials.0.title'),
    company: t('testimonials.testimonials.0.company'),
    image: '/api/placeholder/64/64',
    quote: t('testimonials.testimonials.0.quote'),
    rating: 5
  }, {
    name: t('testimonials.testimonials.1.name'),
    title: t('testimonials.testimonials.1.title'),
    company: t('testimonials.testimonials.1.company'),
    image: '/api/placeholder/64/64',
    quote: t('testimonials.testimonials.1.quote'),
    rating: 5
  }, {
    name: t('testimonials.testimonials.2.name'),
    title: t('testimonials.testimonials.2.title'),
    company: t('testimonials.testimonials.2.company'),
    image: '/api/placeholder/64/64',
    quote: t('testimonials.testimonials.2.quote'),
    rating: 5
  }] as any[];
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
                  <img src="/api/placeholder/600/400" alt={t('testimonials.video.altText')} className="w-full h-80 object-cover" />
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
                        {t('testimonials.video.title')}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {t('testimonials.video.description')}
                      </p>
                    </div>
                  </div>
                </div> : <div className="w-full h-80 bg-gray-800 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p>{t('testimonials.video.loading')}</p>
                  </div>
                </div>}
            </div>
            
            {/* Video Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-blue-600">{t('testimonials.video.stats.0.value')}</div>
                <div className="text-sm text-gray-600">{t('testimonials.video.stats.0.label')}</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-green-600">{t('testimonials.video.stats.1.value')}</div>
                <div className="text-sm text-gray-600">{t('testimonials.video.stats.1.label')}</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-purple-600">{t('testimonials.video.stats.2.value')}</div>
                <div className="text-sm text-gray-600">{t('testimonials.video.stats.2.label')}</div>
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
                {t('testimonials.section.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('testimonials.section.subtitle')}
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
                  <div className="text-2xl font-bold text-blue-600">{t('testimonials.trustIndicators.0.value')}</div>
                  <div className="text-sm text-gray-600">{t('testimonials.trustIndicators.0.label')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{t('testimonials.trustIndicators.1.value')}</div>
                  <div className="text-sm text-gray-600">{t('testimonials.trustIndicators.1.label')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{t('testimonials.trustIndicators.2.value')}</div>
                  <div className="text-sm text-gray-600">{t('testimonials.trustIndicators.2.label')}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};