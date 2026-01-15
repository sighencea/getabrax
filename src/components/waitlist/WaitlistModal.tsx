import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useWaitlist } from '../context/WaitlistContext';
import { WaitlistForm } from './WaitlistForm';

export const WaitlistModal: React.FC = () => {
  const { t } = useTranslation();
  const { isWaitlistOpen, closeWaitlist } = useWaitlist();

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

  return (
    <AnimatePresence>
      {isWaitlistOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={closeWaitlist}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {t('waitlist.title')}
                </h3>
                <p className="text-gray-600 mt-1">{t('waitlist.subtitle')}</p>
              </div>
              <button
                onClick={closeWaitlist}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 -mr-1 -mt-1"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <WaitlistForm onSuccess={closeWaitlist} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
