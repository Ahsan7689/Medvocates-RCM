import { forwardRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

/**
 * Input Component
 * Styled input with validation states
 * Usage: <Input label="Email" error="Invalid email" />
 */
const Input = forwardRef(({ 
  type = 'text',
  label = '',
  placeholder = '',
  error = '',
  helperText = '',
  required = false,
  disabled = false,
  fullWidth = true,
  className = '',
  leftIcon = null,
  rightIcon = null,
  id,
  ...props 
}, ref) => {
  
  const [showPassword, setShowPassword] = useState(false);
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

  const inputClasses = cn(
    'w-full px-4 py-3 bg-bg-secondary text-text-primary border border-grey rounded-sharp',
    'focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20',
    'transition-all duration-200',
    'placeholder:text-text-muted',
    error && 'border-alert focus:border-alert focus:ring-alert',
    disabled && 'opacity-50 cursor-not-allowed',
    leftIcon && 'pl-12',
    (rightIcon || isPassword) && 'pr-12',
    className
  );

  const containerClasses = cn(
    fullWidth ? 'w-full' : 'w-auto',
    'relative'
  );

  return (
    <div className={containerClasses}>
      {/* Label */}
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-text-primary mb-2"
        >
          {label}
          {required && <span className="text-alert ml-1">*</span>}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        {/* Left Icon */}
        {leftIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
            {leftIcon}
          </div>
        )}

        {/* Input */}
        <input
          ref={ref}
          id={inputId}
          type={inputType}
          placeholder={placeholder}
          disabled={disabled}
          className={inputClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />

        {/* Right Icon / Password Toggle / Error Icon */}
        {(rightIcon || isPassword || error) && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            {error ? (
              <FontAwesomeIcon icon={faExclamationCircle} className="text-alert" />
            ) : isPassword ? (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-text-muted hover:text-text-primary transition-colors"
                tabIndex={-1}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            ) : rightIcon ? (
              <div className="text-text-muted">{rightIcon}</div>
            ) : null}
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p id={`${inputId}-error`} className="mt-2 text-sm text-alert">
          {error}
        </p>
      )}

      {/* Helper Text */}
      {helperText && !error && (
        <p id={`${inputId}-helper`} className="mt-2 text-sm text-text-muted">
          {helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;