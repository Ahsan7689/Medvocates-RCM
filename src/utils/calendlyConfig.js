// ============================================
// CALENDLY INTEGRATION HELPERS
// ============================================

/**
 * Calendly popup configuration
 */
export const calendlyConfig = {
  url: import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/medvocatesrcm',
  
  // Popup settings
  popup: {
    height: '700px',
    width: '100%',
  },

  // Prefill data (can be customized per user)
  prefill: (userData = {}) => ({
    name: userData.name || '',
    email: userData.email || '',
    customAnswers: {
      a1: userData.serviceInterest || '',
      a2: userData.company || '',
    },
  }),

  // UTM parameters for tracking
  utm: {
    utmSource: 'medvocates-website',
    utmMedium: 'website',
    utmCampaign: 'appointment-booking',
  },
};

/**
 * Open Calendly popup
 */
export const openCalendly = (userData = {}) => {
  if (typeof window === 'undefined' || !window.Calendly) {
    console.error('Calendly is not loaded');
    return;
  }

  window.Calendly.initPopupWidget({
    url: calendlyConfig.url,
    prefill: calendlyConfig.prefill(userData),
    utm: calendlyConfig.utm,
  });
};

/**
 * Redirect to Calendly (alternative to popup)
 */
export const redirectToCalendly = (userData = {}) => {
  const params = new URLSearchParams({
    ...calendlyConfig.utm,
    ...calendlyConfig.prefill(userData),
  });

  window.location.href = `${calendlyConfig.url}?${params.toString()}`;
};