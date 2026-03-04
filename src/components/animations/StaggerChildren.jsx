import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * StaggerChildren Component
 * Stagger animation for child elements
 * Usage: <StaggerChildren><div>Item 1</div><div>Item 2</div></StaggerChildren>
 */
const StaggerChildren = ({ 
  children, 
  className = '',
  stagger = 0.1,
  duration = 0.6,
  delay = 0,
  direction = 'up',
  distance = 30,
  ease = 'power3.out',
  triggerOnScroll = true,
  triggerStart = 'top 85%',
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const childElements = container.children;
    if (!childElements.length) return;

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
      stagger: stagger,
    };

    if (triggerOnScroll) {
      toProps.scrollTrigger = {
        trigger: container,
        start: triggerStart,
        toggleActions: 'play none none none',
      };
    }

    gsap.fromTo(childElements, fromProps, toProps);

    // Cleanup
    return () => {
      gsap.killTweensOf(childElements);
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [stagger, duration, delay, direction, distance, ease, triggerOnScroll, triggerStart]);

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </div>
  );
};

export default StaggerChildren;