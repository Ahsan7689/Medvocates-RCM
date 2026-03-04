import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '@/styles/ScrollVelocity.css';

/**
 * ScrollVelocity Component
 * Infinite scrolling text that speeds up/slows based on scroll velocity
 * Usage: <ScrollVelocity baseSpeed={1}>Your repeating text</ScrollVelocity>
 */
const ScrollVelocity = ({ 
  children, 
  className = '',
  baseSpeed = 1, // Base scroll speed
  direction = 'left', // 'left' or 'right'
  duplicates = 3, // Number of content duplicates
}) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // Calculate animation duration based on content width
    const contentWidth = content.offsetWidth;
    const duration = contentWidth / (50 * baseSpeed); // 50px per second * speed

    // Create infinite scroll animation
    const tl = gsap.timeline({ repeat: -1 });
    
    const xStart = direction === 'left' ? 0 : -contentWidth;
    const xEnd = direction === 'left' ? -contentWidth : 0;

    tl.fromTo(
      content,
      { x: xStart },
      { 
        x: xEnd, 
        duration: duration,
        ease: 'none',
      }
    );

    // Optional: Add scroll velocity effect
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;

      // Adjust animation speed based on scroll velocity
      const speedMultiplier = 1 + (scrollVelocity * 0.01);
      gsap.to(tl, { timeScale: speedMultiplier, duration: 0.3 });
      
      // Reset speed after scrolling stops
      setTimeout(() => {
        if (window.scrollY === currentScrollY) {
          gsap.to(tl, { timeScale: 1, duration: 0.5 });
        }
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      tl.kill();
    };
  }, [baseSpeed, direction]);

  return (
    <div className={`scroll-velocity-container ${className}`} ref={containerRef}>
      <div className="scroll-velocity-content" ref={contentRef}>
        {Array.from({ length: duplicates }).map((_, index) => (
          <div key={index} className="scroll-velocity-item">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollVelocity;