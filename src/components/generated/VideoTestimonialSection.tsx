import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Import testimonial images
import testimonial1 from '../../assets/images/testimonials/Testimonial_01.png';
import testimonial2 from '../../assets/images/testimonials/Testimonial_02.png';
import testimonial3 from '../../assets/images/testimonials/Testimonial_03.png';

export const VideoTestimonialSection: React.FC = () => {
  const { t } = useTranslation('common');

  const testimonialImages = [testimonial1, testimonial2, testimonial3];

  const testimonials = [
    {
      name: t('testimonials.testimonials.0.name'),
      title: t('testimonials.testimonials.0.title'),
      company: t('testimonials.testimonials.0.company'),
      image: testimonialImages[0],
      quote: t('testimonials.testimonials.0.quote'),
      rating: 5,
    },
    {
      name: t('testimonials.testimonials.1.name'),
      title: t('testimonials.testimonials.1.title'),
      company: t('testimonials.testimonials.1.company'),
      image: testimonialImages[1],
      quote: t('testimonials.testimonials.1.quote'),
      rating: 5,
    },
    {
      name: t('testimonials.testimonials.2.name'),
      title: t('testimonials.testimonials.2.title'),
      company: t('testimonials.testimonials.2.company'),
      image: testimonialImages[2],
      quote: t('testimonials.testimonials.2.quote'),
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.section.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.section.subtitle')}
          </p>
        </motion.div>

        {/* Testimonials - Grid on desktop, horizontal scroll on mobile */}
        <div
          className="testimonials-scroll flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[300px] md:w-auto snap-center"
            >
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} profile`}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-gray-700 mb-4 relative">
                      <Quote className="w-6 h-6 text-blue-200 absolute -top-2 -left-2" />
                      <p className="relative z-10 italic text-sm leading-relaxed">
                        {testimonial.quote}
                      </p>
                    </blockquote>

                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.title}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-blue-50 rounded-xl"
        >
          <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {t('testimonials.trustIndicators.0.value')}
              </div>
              <div className="text-sm text-gray-600">
                {t('testimonials.trustIndicators.0.label')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {t('testimonials.trustIndicators.1.value')}
              </div>
              <div className="text-sm text-gray-600">
                {t('testimonials.trustIndicators.1.label')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {t('testimonials.trustIndicators.2.value')}
              </div>
              <div className="text-sm text-gray-600">
                {t('testimonials.trustIndicators.2.label')}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
