import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * FadeIn Component
 * Simple fade-in animation on mount
 * Usage: <FadeIn><YourContent /></FadeIn>
 */
const FadeIn = ({ 
  children, 
  className = '',
  duration = 0.8,
  delay = 0,
  ease = 'power2.out',
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration,
        delay,
        ease,
      }
    );

    return () => {
      gsap.killTweensOf(element);
    };
  }, [duration, delay, ease]);

  return (
    <div 
      ref={elementRef} 
      className={className}
      style={{ opacity: 0, willChange: 'opacity' }}
    >
      {children}
    </div>
  );
};

export default FadeIn;