import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for Intersection Observer API
 * @param {Object} options - Intersection Observer options
 * @returns {Object} { ref, isIntersecting, hasIntersected }
 */
export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px',
      ...options,
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      
      // Once intersected, keep it true
      if (entry.isIntersecting && !hasIntersected) {
        setHasIntersected(true);
      }
    }, defaultOptions);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options, hasIntersected]);

  return {
    ref: elementRef,
    isIntersecting,
    hasIntersected,
  };
};

// Usage example:
// const { ref, isIntersecting, hasIntersected } = useIntersectionObserver({
//   threshold: 0.5
// });
// <div ref={ref} className={hasIntersected ? 'fade-in' : ''}>Content</div>