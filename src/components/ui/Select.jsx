import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

/**
 * Select Component
 * Styled select dropdown
 * Usage: <Select label="Service" options={[{value: '1', label: 'Option 1'}]} />
 */
const Select = forwardRef(({ 
  label = '',
  placeholder = 'Select an option',
  options = [],
  error = '',
  helperText = '',
  required = false,
  disabled = false,
  fullWidth = true,
  className = '',
  id,
  ...props 
}, ref) => {
  
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

  const selectClasses = cn(
    'w-full px-4 py-3 pr-10 bg-bg-secondary text-text-primary border border-grey rounded-sharp',
    'focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20',
    'transition-all duration-200',
    'appearance-none cursor-pointer',
    error && 'border-alert focus:border-alert focus:ring-alert',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  const containerClasses = cn(
    fullWidth ? 'w-full' : 'w-auto'
  );

  return (
    <div className={containerClasses}>
      {/* Label */}
      {label && (
        <label 
          htmlFor={selectId}
          className="block text-sm font-medium text-text-primary mb-2"
        >
          {label}
          {required && <span className="text-alert ml-1">*</span>}
        </label>
      )}

      {/* Select Container */}
      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          disabled={disabled}
          className={selectClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Chevron Icon or Error Icon */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          {error ? (
            <FontAwesomeIcon icon={faExclamationCircle} className="text-alert" />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} className="text-text-muted" />
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <p id={`${selectId}-error`} className="mt-2 text-sm text-alert">
          {error}
        </p>
      )}

      {/* Helper Text */}
      {helperText && !error && (
        <p id={`${selectId}-helper`} className="mt-2 text-sm text-text-muted">
          {helperText}
        </p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;