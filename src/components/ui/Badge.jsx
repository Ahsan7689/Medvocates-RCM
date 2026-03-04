import { cn } from '@/lib/utils';

/**
 * Badge Component
 * Small status/category badges
 * Usage: <Badge variant="success">New</Badge>
 */
const Badge = ({ 
  children, 
  variant = 'default', // 'default', 'success', 'alert', 'gold'
  size = 'md', // 'sm', 'md', 'lg'
  className = '',
}) => {
  
  const variants = {
    default: 'bg-bg-secondary text-text-primary border border-grey',
    success: 'bg-success/10 text-success border border-success',
    alert: 'bg-alert/10 text-alert border border-alert',
    gold: 'bg-gold/10 text-gold border border-gold',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return (
    <span 
      className={cn(
        'inline-flex items-center font-medium rounded-sharp',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;