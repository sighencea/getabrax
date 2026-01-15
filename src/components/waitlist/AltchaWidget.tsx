import React, { forwardRef, useEffect, useRef, useImperativeHandle } from 'react';
import 'altcha';
import { getAltchaChallengeUrl } from '../../lib/supabase';

interface AltchaWidgetProps {
  onVerified: (payload: string) => void;
  onError?: (error: Error) => void;
}

export interface AltchaWidgetRef {
  reset: () => void;
}

export const AltchaWidget = forwardRef<AltchaWidgetRef, AltchaWidgetProps>(
  ({ onVerified, onError }, ref) => {
    const widgetRef = useRef<HTMLElement>(null);

    useImperativeHandle(ref, () => ({
      reset: () => {
        // Reset ALTCHA widget if needed
        if (widgetRef.current) {
          // The widget may have a reset method in future versions
        }
      },
    }));

    useEffect(() => {
      const widget = widgetRef.current;
      if (!widget) return;

      const handleVerified = (event: Event) => {
        const customEvent = event as CustomEvent<{ payload: string }>;
        if (customEvent.detail?.payload) {
          onVerified(customEvent.detail.payload);
        }
      };

      const handleError = (event: Event) => {
        const customEvent = event as CustomEvent<{ error: Error }>;
        if (onError && customEvent.detail?.error) {
          onError(customEvent.detail.error);
        }
      };

      widget.addEventListener('verified', handleVerified);
      widget.addEventListener('error', handleError);

      return () => {
        widget.removeEventListener('verified', handleVerified);
        widget.removeEventListener('error', handleError);
      };
    }, [onVerified, onError]);

    return (
      <altcha-widget
        ref={widgetRef}
        challengeurl={getAltchaChallengeUrl()}
        hidelogo
        hidefooter
        style={{ width: '100%' }}
      />
    );
  }
);

AltchaWidget.displayName = 'AltchaWidget';
