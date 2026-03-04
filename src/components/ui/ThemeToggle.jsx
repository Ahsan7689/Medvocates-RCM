import { useTheme } from '@/hooks/useTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { cn } from '@/lib/utils';

/**
 * ThemeToggle Component
 * Toggle between dark and light mode
 * Usage: <ThemeToggle />
 */
const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'relative w-14 h-7 bg-bg-secondary border border-grey rounded-full',
        'transition-all duration-200',
        'hover:border-gold',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2',
        className
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
    >
      {/* Toggle Circle */}
      <div
        className={cn(
          'absolute top-1 w-5 h-5 bg-gold rounded-full',
          'transition-all duration-200',
          'flex items-center justify-center',
          isDark ? 'left-[26px]' : 'left-1'
        )}
      >
        <FontAwesomeIcon 
          icon={isDark ? faMoon : faSun} 
          className="text-charcoal text-xs"
        />
      </div>
    </button>
  );
};

export default ThemeToggle;