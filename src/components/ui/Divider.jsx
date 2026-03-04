import { cn } from '@/lib/utils';

/**
 * Divider Component
 * Horizontal or vertical divider
 * Usage: <Divider variant="gold" />
 */
const Divider = ({ 
  variant = 'default', // 'default', 'gold'
  orientation = 'horizontal', // 'horizontal', 'vertical'
  className = '',
}) => {
  
  const variants = {
    default: 'bg-grey',
    gold: 'bg-gold',
  };

  const orientations = {
    horizontal: 'w-full h-px my-6',
    vertical: 'h-full w-px mx-6',
  };

  return (
    <div 
      className={cn(
        variants[variant],
        orientations[orientation],
        className
      )}
      role="separator"
    />
  );
};

export default Divider;