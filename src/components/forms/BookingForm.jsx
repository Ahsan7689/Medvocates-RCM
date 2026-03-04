import { useState } from 'react';
import { Button } from '@/components/ui';
import { openCalendly } from '@/utils/calendlyConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

/**
 * BookingForm Component
 * Simple button to open Calendly popup with optional prefill
 */
const BookingForm = ({ 
  userData = {}, 
  buttonText = 'Schedule Appointment',
  variant = 'primary',
  size = 'lg',
  fullWidth = false,
  className = '',
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleBooking = () => {
    setIsLoading(true);
    
    // Check if Calendly is loaded
    if (typeof window !== 'undefined' && window.Calendly) {
      openCalendly(userData);
      setIsLoading(false);
    } else {
      // Fallback: redirect to Calendly URL
      console.warn('Calendly not loaded, redirecting...');
      window.location.href = import.meta.env.VITE_CALENDLY_URL;
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={handleBooking}
      loading={isLoading}
      disabled={isLoading}
      leftIcon={<FontAwesomeIcon icon={faCalendar} />}
      className={className}
    >
      {buttonText}
    </Button>
  );
};

export default BookingForm;