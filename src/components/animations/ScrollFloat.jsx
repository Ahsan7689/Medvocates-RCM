import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollFloat Component
 * Creates a floating/parallax effect on scroll
 * Usage: <ScrollFloat speed={0.5}><YourContent /></ScrollFloat>
 */
const ScrollFloat = ({ 
  children, 
  className = '',
  speed = 0.5, // negative for reverse direction
  direction = 'vertical', // 'vertical' or 'horizontal'
  triggerStart = 'top bottom',
  triggerEnd = 'bottom top',
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const moveDistance = 100 * speed;
    
    const animationProps = direction === 'vertical' 
      ? { y: moveDistance }
      : { x: moveDistance };

    gsap.to(element, {
      ...animationProps,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: triggerStart,
        end: triggerEnd,
        scrub: true,
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [speed, direction, triggerStart, triggerEnd]);

  return (
    <div 
      ref={elementRef} 
      className={className}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  );
};

export default ScrollFloat;