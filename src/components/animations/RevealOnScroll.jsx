import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * RevealOnScroll Component
 * Reveals content with fade + slide animation when scrolling into view
 * Usage: <RevealOnScroll><YourContent /></RevealOnScroll>
 */
const RevealOnScroll = ({ 
  children, 
  className = '',
  direction = 'up', // 'up', 'down', 'left', 'right'
  distance = 60,
  duration = 1,
  delay = 0,
  ease = 'power3.out',
  triggerStart = 'top 85%',
  triggerEnd = 'top 20%',
  once = true, // Animate only once
  threshold = 0.1,
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Determine animation direction
    const directionMap = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
    };

    const fromProps = {
      opacity: 0,
      ...directionMap[direction],
    };

    const toProps = {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element,
        start: triggerStart,
        end: triggerEnd,
        toggleActions: once ? 'play none none none' : 'play none none reverse',
        markers: false, // Set to true for debugging
      },
    };

    gsap.fromTo(element, fromProps, toProps);

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [direction, distance, duration, delay, ease, triggerStart, triggerEnd, once]);

  return (
    <div 
      ref={elementRef} 
      className={`reveal-on-scroll ${className}`}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;