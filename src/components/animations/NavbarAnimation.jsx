import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * NavbarAnimation Component
 * One-time slide-down animation for navbar on page load
 * Usage: Wrap your Navbar component with this
 */
const NavbarAnimation = ({ children, delay = 0.2, duration = 1.2 }) => {
  const navRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav || hasAnimatedRef.current) return;

    // One-time animation
    gsap.fromTo(
      nav,
      { 
        y: -100, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1,
        duration,
        delay,
        ease: 'power3.out',
        onComplete: () => {
          hasAnimatedRef.current = true;
        }
      }
    );

    // Cleanup
    return () => {
      gsap.killTweensOf(nav);
    };
  }, [delay, duration]);

  return (
    <div 
      ref={navRef} 
      className="navbar-animated"
      style={{ 
        willChange: 'transform, opacity',
        transform: 'translateY(-100px)',
        opacity: 0,
      }}
    >
      {children}
    </div>
  );
};

export default NavbarAnimation;