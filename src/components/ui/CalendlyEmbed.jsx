import { useEffect } from 'react';
import { calendlyConfig } from '@/utils/calendlyConfig';
import { cn } from '@/lib/utils';

/**
 * CalendlyEmbed Component
 * Embeds Calendly inline widget
 * Usage: <CalendlyEmbed />
 */
const CalendlyEmbed = ({ 
  className = '',
  minHeight = '700px',
  prefillData = {},
}) => {
  const containerId = 'calendly-embed-container';

  useEffect(() => {
    // Check if Calendly script is loaded
    if (typeof window === 'undefined' || !window.Calendly) {
      console.error('Calendly script not loaded');
      return;
    }

    // Initialize inline widget
    window.Calendly.initInlineWidget({
      url: calendlyConfig.url,
      parentElement: document.getElementById(containerId),
      prefill: calendlyConfig.prefill(prefillData),
      utm: calendlyConfig.utm,
    });
  }, [prefillData]);

  return (
    <div 
      id={containerId}
      className={cn('calendly-inline-widget', className)}
      style={{ minWidth: '320px', height: minHeight }}
    />
  );
};

export default CalendlyEmbed;