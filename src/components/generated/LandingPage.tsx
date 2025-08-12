import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import { HeroSection } from './HeroSection';
import { BenefitsGrid } from './BenefitsGrid';
import { VideoTestimonialSection } from './VideoTestimonialSection';
import { SignupFormSection } from './SignupFormSection';
import Footer from './Footer';
export const LandingPage: React.FC = () => {
  const [showStickyMobile, setShowStickyMobile] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 800;
      setShowStickyMobile(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup-section');
    signupSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation onGetStarted={scrollToSignup} />

      {/* Add padding top to account for fixed navigation */}
      <div className="pt-16">
        {/* Hero Section */}
        <HeroSection onStartTrial={scrollToSignup} />

        {/* Benefits Grid */}
        <section id="benefits">
          <BenefitsGrid />
        </section>

        {/* Video & Testimonial Section */}
        <section id="testimonials">
          <VideoTestimonialSection />
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started in minutes with our simple three-step process
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[{
              step: '01',
              title: 'Sign Up & Setup',
              description: 'Create your account and add your properties in under 5 minutes'
            }, {
              step: '02',
              title: 'Schedule & Track',
              description: 'Set up maintenance schedules and track work orders automatically'
            }, {
              step: '03',
              title: 'Optimize & Scale',
              description: 'Use insights to reduce costs and scale your operations efficiently'
            }].map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.2
            }} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>)}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-gray-600 text-lg mb-8">
                Trusted by 500+ property management companies
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              {['PropertyCorp', 'RealEstate Pro', 'BuildingMax', 'PropTech', 'ManagePlus', 'PropertyHub'].map((company, index) => <div key={index} className="text-center">
                  <div className="h-12 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500 font-medium text-sm">{company}</span>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* Signup Form Section */}
        <section id="signup">
          <SignupFormSection />
        </section>

        {/* Final CTA Banner */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Property Management?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of property managers who've reduced maintenance costs by 40%
            </p>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={scrollToSignup} className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
              Start Your Free Trial Today
            </motion.button>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        {showStickyMobile && <motion.div initial={{
        y: 100
      }} animate={{
        y: 0
      }} className="fixed bottom-0 left-0 right-0 bg-blue-600 p-4 z-50 md:hidden">
            <button onClick={scrollToSignup} className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold">
              Get Started Free
            </button>
          </motion.div>}

        {/* Footer */}
        <Footer />
      </div>
    </div>;
};