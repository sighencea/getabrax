import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Loader2 } from 'lucide-react';
import { AltchaWidget, AltchaWidgetRef } from './AltchaWidget';
import { getWaitlistSubmitUrl } from '../../lib/supabase';

const PLATFORM_OPTIONS = ['android', 'ios', 'web'] as const;
type Platform = typeof PLATFORM_OPTIONS[number];

const waitlistSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

interface WaitlistFormProps {
  onSuccess?: () => void;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({ onSuccess }) => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [altchaPayload, setAltchaPayload] = useState<string | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([]);
  const [formError, setFormError] = useState<string | null>(null);
  const altchaRef = useRef<AltchaWidgetRef>(null);

  const togglePlatform = (platform: Platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
    // Clear error when user interacts
    setFormError(null);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  // Create register handlers that also clear form errors
  const nameRegister = register('name');
  const emailRegister = register('email');

  const onSubmit = async (data: WaitlistFormData) => {
    // Clear previous errors
    setFormError(null);

    if (!altchaPayload) {
      setFormError(t('waitlist.errors.captchaRequired'));
      return;
    }

    if (selectedPlatforms.length === 0) {
      setFormError(t('waitlist.errors.platformRequired'));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(getWaitlistSubmitUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          platforms: selectedPlatforms,
          altcha: altchaPayload,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle duplicate email (409 Conflict)
        if (response.status === 409 || result.error === 'email_exists') {
          setFormError(t('waitlist.errors.emailExists'));
        } else {
          setFormError(t('waitlist.errors.generic'));
        }
        return;
      }

      reset();
      setAltchaPayload(null);
      setSelectedPlatforms([]);
      altchaRef.current?.reset();
      onSuccess?.();
    } catch (error) {
      console.error('Waitlist submission error:', error);
      setFormError(t('waitlist.errors.generic'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name Field */}
      <div>
        <label
          htmlFor="waitlist-name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {t('waitlist.form.name')} <span className="text-red-500">*</span>
        </label>
        <input
          {...nameRegister}
          onChange={(e) => {
            nameRegister.onChange(e);
            setFormError(null);
          }}
          type="text"
          id="waitlist-name"
          placeholder={t('waitlist.form.namePlaceholder')}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="waitlist-email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {t('waitlist.form.email')} <span className="text-red-500">*</span>
        </label>
        <input
          {...emailRegister}
          onChange={(e) => {
            emailRegister.onChange(e);
            setFormError(null);
          }}
          type="email"
          id="waitlist-email"
          placeholder={t('waitlist.form.emailPlaceholder')}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Platform Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t('waitlist.form.platform')} <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {PLATFORM_OPTIONS.map((platform) => (
            <button
              key={platform}
              type="button"
              onClick={() => togglePlatform(platform)}
              disabled={isSubmitting}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                selectedPlatforms.includes(platform)
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
              } disabled:opacity-50`}
            >
              {t(`waitlist.form.platforms.${platform}`)}
            </button>
          ))}
        </div>
      </div>

      {/* ALTCHA Widget */}
      <div className="py-2">
        <AltchaWidget
          ref={altchaRef}
          onVerified={(payload) => {
            setAltchaPayload(payload);
            setFormError(null);
          }}
          onError={(error) => {
            console.error('ALTCHA error:', error);
            setFormError(t('waitlist.errors.generic'));
          }}
        />
      </div>

      {/* Inline Error Message */}
      <AnimatePresence>
        {formError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3"
          >
            <p className="text-red-500 text-sm font-medium">{formError}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" />}
        {t('waitlist.form.submit')}
      </motion.button>

      <p className="text-gray-500 text-xs text-center">
        {t('waitlist.form.privacy')}
      </p>
    </form>
  );
};
