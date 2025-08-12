import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Eye, EyeOff, Lock, Mail, User, Building } from 'lucide-react';
export const SignupFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    password: '',
    agreeToTips: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    alert('Account created successfully! Check your email for next steps.');
  };
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };
  return <section id="signup-section" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Start Your Free Trial Today
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join 500+ property managers who've reduced maintenance costs by 40%. 
              No credit card required, setup takes less than 5 minutes.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits List */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              What you'll get with your free trial:
            </h3>
            
            {['Complete access to all premium features', 'Unlimited work orders and properties', 'Mobile app for iOS and Android', 'Real-time analytics and reporting', 'Priority customer support', 'No setup fees or hidden costs'].map((benefit, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -10
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.4,
            delay: index * 0.1
          }} className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>)}

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">
                🎯 Quick Setup Promise
              </h4>
              <p className="text-gray-600">
                We'll have you up and running in under 5 minutes. Our onboarding 
                team will personally guide you through the setup process.
              </p>
            </div>
          </motion.div>

          {/* Signup Form */}
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
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input type="text" id="fullName" value={formData.fullName} onChange={e => handleInputChange('fullName', e.target.value)} className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${errors.fullName ? 'border-red-300' : 'border-gray-300'}`} placeholder="Enter your full name" />
                  </div>
                  {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                </div>

                {/* Business Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input type="email" id="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${errors.email ? 'border-red-300' : 'border-gray-300'}`} placeholder="you@company.com" />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input type="text" id="company" value={formData.company} onChange={e => handleInputChange('company', e.target.value)} className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${errors.company ? 'border-red-300' : 'border-gray-300'}`} placeholder="Your company name" />
                  </div>
                  {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input type={showPassword ? 'text' : 'password'} id="password" value={formData.password} onChange={e => handleInputChange('password', e.target.value)} className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${errors.password ? 'border-red-300' : 'border-gray-300'}`} placeholder="Create a secure password" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                  <p className="mt-1 text-sm text-gray-500">
                    Must be at least 8 characters long
                  </p>
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="agreeToTips" checked={formData.agreeToTips} onChange={e => handleInputChange('agreeToTips', e.target.checked)} className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <label htmlFor="agreeToTips" className="text-sm text-gray-600">
                    I want to receive setup tips & best practices via email 
                    (you can unsubscribe anytime)
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button type="submit" disabled={isLoading} whileHover={{
                scale: isLoading ? 1 : 1.02
              }} whileTap={{
                scale: isLoading ? 1 : 0.98
              }} className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2">
                  {isLoading ? <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Creating Account...
                    </> : 'Create My Free Account'}
                </motion.button>

                {/* Microcopy */}
                <p className="text-xs text-gray-500 text-center">
                  By creating an account, you agree to our{' '}
                  <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>{' '}
                  and{' '}
                  <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                  No credit card required for your 14-day free trial.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
};