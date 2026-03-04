import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

/**
 * Card Component
 * Dark luxury card with hover effects
 * Usage: <Card><CardHeader>Title</CardHeader><CardContent>Body</CardContent></Card>
 */
const Card = forwardRef(({ 
  children, 
  className = '',
  hoverable = true,
  padding = 'md', // 'none', 'sm', 'md', 'lg'
  ...props 
}, ref) => {
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const cardClasses = cn(
    'card-luxury',
    paddingClasses[padding],
    hoverable && 'cursor-pointer',
    className
  );

  return (
    <div ref={ref} className={cardClasses} {...props}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';

// Card sub-components
export const CardHeader = ({ children, className = '' }) => (
  <div className={cn('mb-4', className)}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h3 className={cn('text-h4 font-serif text-text-primary mb-2', className)}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={cn('text-sm text-text-secondary', className)}>
    {children}
  </p>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={cn('text-text-secondary', className)}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={cn('mt-6 pt-4 border-t border-grey', className)}>
    {children}
  </div>
);

export default Card;