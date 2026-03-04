import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for GSAP scroll animations
 * @param {Object} options - Animation options
 * @returns {Object} Ref to attach to element
 */
export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const defaultOptions = {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    };

    const animationOptions = { ...defaultOptions, ...options };

    gsap.from(element, animationOptions);

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [options]);

  return elementRef;
};

// Usage example:
// const ref = useScrollAnimation({ y: 80, duration: 1.2 });
// <div ref={ref}>Content</div>