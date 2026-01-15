import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useWaitlist } from '../context/WaitlistContext';
import { WaitlistForm } from './WaitlistForm';

export const WaitlistModal: React.FC = () => {
  const { t } = useTranslation();
  const { isWaitlistOpen, closeWaitlist } = useWaitlist();
  const [showSuccess, setShowSuccess] = useState(false);

  // Reset success state when modal closes
  useEffect(() => {
    if (!isWaitlistOpen) {
      // Delay reset so animation completes
      const timer = setTimeout(() => setShowSuccess(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isWaitlistOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isWaitlistOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isWaitlistOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isWaitlistOpen) {
        closeWaitlist();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isWaitlistOpen, closeWaitlist]);

  const handleSuccess = () => {
    setShowSuccess(true);
  };

  const handleClose = () => {
    closeWaitlist();
  };

  return (
    <AnimatePresence>
      {isWaitlistOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl max-w-md w-full shadow-2xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient Header */}
            <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-6 py-5 relative">
              <h3 className="text-xl font-bold text-white">
                {t('waitlist.title')}
              </h3>
              <p className="text-white/90 text-sm mt-1">{t('waitlist.subtitle')}</p>
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {showSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center py-4"
                  >
                    {/* Success Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-green-500" />
                      </div>
                    </div>

                    {/* Success Message */}
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">
                      {t('waitlist.successTitle')}
                    </h4>
                    <p className="text-gray-600 mb-6">
                      {t('waitlist.successMessage')}
                    </p>

                    {/* Got it Button */}
                    <motion.button
                      onClick={handleClose}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                    >
                      {t('waitlist.gotIt')}
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <WaitlistForm onSuccess={handleSuccess} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
