import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * CountUp Component
 * Animates numbers counting up (for stats sections)
 * Usage: <CountUp end={100} suffix="+" duration={2} />
 */
const CountUp = ({ 
  start = 0,
  end,
  duration = 2,
  delay = 0,
  suffix = '',
  prefix = '',
  separator = ',',
  decimals = 0,
  className = '',
  triggerOnScroll = true,
  triggerStart = 'top 85%',
  onComplete = () => {},
}) => {
  const [count, setCount] = useState(start);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animateCount = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const obj = { value: start };
      
      gsap.to(obj, {
        value: end,
        duration,
        delay,
        ease: 'power2.out',
        onUpdate: () => {
          setCount(obj.value);
        },
        onComplete: () => {
          setCount(end);
          onComplete();
        },
      });
    };

    if (triggerOnScroll) {
      ScrollTrigger.create({
        trigger: element,
        start: triggerStart,
        onEnter: animateCount,
        once: true,
      });
    } else {
      animateCount();
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [start, end, duration, delay, triggerOnScroll, triggerStart, onComplete]);

  // Format number with separators
  const formatNumber = (num) => {
    const fixed = num.toFixed(decimals);
    const parts = fixed.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return parts.join('.');
  };

  return (
    <span ref={elementRef} className={`count-up ${className}`}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

export default CountUp;