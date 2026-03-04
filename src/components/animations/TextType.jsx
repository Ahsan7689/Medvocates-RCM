import { useEffect, useRef, useState } from 'react';
import '@/styles/TextType.css';

/**
 * TextType Component
 * Typewriter effect for text
 * Usage: <TextType text="Hello World" speed={50} showCursor={true} />
 */
const TextType = ({ 
  text, 
  className = '',
  speed = 50, // milliseconds per character
  delay = 0, // delay before starting (ms)
  showCursor = true,
  cursorChar = '|',
  onComplete = () => {},
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Reset when text changes
    setDisplayText('');
    setCurrentIndex(0);
    setIsComplete(false);

    // Initial delay
    const startTimeout = setTimeout(() => {
      startTyping();
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed, delay]);

  const startTyping = () => {
    if (currentIndex < text.length) {
      setDisplayText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
      
      timeoutRef.current = setTimeout(() => {
        startTyping();
      }, speed);
    } else {
      setIsComplete(true);
      onComplete();
    }
  };

  return (
    <span className={`typewriter-text ${className}`}>
      {displayText}
      {showCursor && !isComplete && (
        <span className="typewriter-cursor">{cursorChar}</span>
      )}
    </span>
  );
};

export default TextType;