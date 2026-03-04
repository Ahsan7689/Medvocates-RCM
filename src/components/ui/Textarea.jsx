import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

/**
 * Textarea Component
 */
const Textarea = forwardRef(({
  label,
  error,
  helperText,
  maxLength,
  showCharCount = false,
  className = '',
  value = '',
  onChange,
  ...props
}, ref) => {
  const currentLength = value?.length || 0;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-text-primary mb-2">
          {label}
          {props.required && <span className="text-alert ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <textarea
          ref={ref}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          className={cn(
            'w-full px-4 py-3 bg-bg-secondary border rounded-button',
            'text-text-primary placeholder-text-muted',
            'focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold',
            'transition-all duration-200',
            'resize-vertical min-h-[100px]',
            error ? 'border-alert' : 'border-grey',
            props.disabled && 'opacity-50 cursor-not-allowed bg-bg-card',
            className
          )}
          {...props}
        />
        
        {error && (
          <div className="absolute top-3 right-3">
            <FontAwesomeIcon icon={faExclamationCircle} className="text-alert" />
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mt-1">
        <div>
          {error && (
            <p className="text-sm text-alert">{error}</p>
          )}
          {!error && helperText && (
            <p className="text-sm text-text-muted">{helperText}</p>
          )}
        </div>
        
        {showCharCount && maxLength && (
          <p className={cn(
            'text-xs',
            currentLength >= maxLength ? 'text-alert' : 'text-text-muted'
          )}>
            {currentLength} / {maxLength}
          </p>
        )}
      </div>
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;