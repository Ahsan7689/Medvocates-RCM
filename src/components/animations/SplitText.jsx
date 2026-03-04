import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * SplitText Component — FIXED
 * ✅ Added `color` prop — when provided, sets inline color on every span
 *    This prevents CSS theme variables from overriding the text color
 * Usage: <SplitText text="Hello World" color="#ffffff" />
 */
const SplitText = ({
  text,
  className = '',
  splitBy = 'chars',   // 'chars' | 'words'
  stagger = 0.03,
  duration = 0.8,
  delay = 0,
  ease = 'power3.out',
  animateFrom = { opacity: 0, y: 20 },
  animateTo = { opacity: 1, y: 0 },
  color = null,        // ✅ NEW — force a specific color on all spans
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !text) return;

    const container = containerRef.current;
    const splits = splitBy === 'chars' ? text.split('') : text.split(' ');

    container.innerHTML = '';
    splits.forEach((item, index) => {
      const span = document.createElement('span');
      span.textContent = item;
      span.style.display = 'inline-block';

      // ✅ FIX: set color inline so theme CSS cannot override it
      if (color) {
        span.style.color = color;
      }

      if (splitBy === 'words' && index < splits.length - 1) {
        span.style.marginRight = '0.25em';
      }

      container.appendChild(span);
    });

    const spans = container.querySelectorAll('span');
    gsap.fromTo(spans, animateFrom, {
      ...animateTo,
      duration,
      delay,
      ease,
      stagger,
    });

    return () => { gsap.killTweensOf(spans); };
  }, [text, splitBy, stagger, duration, delay, ease, animateFrom, animateTo, color]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    />
  );
};

export default SplitText;