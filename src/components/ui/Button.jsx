import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

/**
 * Button Component
 * Variants: primary (gold), secondary (outlined), text (link-style)
 * Sizes: sm, md, lg
 * Usage: <Button variant="primary" size="lg" onClick={handleClick}>Click Me</Button>
 */
const Button = forwardRef(({ 
  children,
  variant = 'primary', // 'primary', 'secondary', 'text', 'ghost'
  size = 'md', // 'sm', 'md', 'lg'
  fullWidth = false,
  disabled = false,
  loading = false,
  leftIcon = null,
  rightIcon = null,
  className = '',
  onClick,
  type = 'button',
  href = null,
  external = false,
  ...props 
}, ref) => {
  
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  // Variant classes
  const variants = {
    primary: 'bg-gold text-charcoal hover:bg-gold-light active:bg-gold-dark shadow-luxury hover:shadow-gold-glow',
    secondary: 'bg-transparent text-text-primary border border-grey hover:border-gold hover:text-gold',
    text: 'bg-transparent text-gold hover:opacity-80 underline underline-offset-4',
    ghost: 'bg-transparent text-text-primary hover:bg-charcoal-light',
  };

  // Size classes
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-sharp',
    md: 'px-6 py-3 text-base rounded-button',
    lg: 'px-8 py-4 text-lg rounded-button',
  };

  const getButtonClasses = (variant, size, fullWidth, disabled, loading, className) => {
  const baseClasses = cn(
    'inline-flex items-center justify-center',
    'font-semibold transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'rounded-button',
    fullWidth && 'w-full'
  );

  const variants = {
    primary: 'bg-gold text-charcoal hover:bg-gold/90 border-2 border-gold',
    secondary: 'bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-charcoal',
    text: 'bg-transparent text-gold hover:underline',
    ghost: 'bg-transparent text-text-primary hover:bg-charcoal-light',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return cn(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  );
  };
  // Width classes
  const widthClass = fullWidth ? 'w-full' : '';

  // Combined classes
  const buttonClasses = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    widthClass,
    className
  );

  // Loading spinner
  const LoadingSpinner = () => (
    <svg 
      className="animate-spin h-4 w-4 mr-2" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  // If href is provided, render as anchor
  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={buttonClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </a>
    );
  }

  // Regular button
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={buttonClasses}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {leftIcon && !loading && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;