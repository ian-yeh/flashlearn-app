import React from 'react';
import { cn } from '@/lib/utils';

// TypeScript types for the component props
export type GradientVariant = 
  | 'default' 
  | 'primary' 
  | 'accent' 
  | 'warm' 
  | 'cool' 
  | 'reverse';

export type HeaderLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface GradientHeaderProps {
  /**
   * The semantic HTML element to render (h1, h2, h3, etc.)
   */
  level: HeaderLevel;
  
  /**
   * The gradient variant to apply
   */
  variant?: GradientVariant;
  
  /**
   * Additional CSS classes to apply
   */
  className?: string;
  
  /**
   * The content to display
   */
  children: React.ReactNode;
  
  /**
   * Additional props that can be passed to the underlying element
   */
  [key: string]: unknown;
}

// Mapping of gradient variants to their corresponding CSS classes
const gradientVariants: Record<GradientVariant, string> = {
  default: 'text-gradient',
  primary: 'text-gradient-primary',
  accent: 'text-gradient-accent',
  warm: 'text-gradient-warm',
  cool: 'text-gradient-cool',
  reverse: 'text-gradient-reverse',
};

// Mapping of header levels to their default Tailwind classes
const headerLevelClasses: Record<HeaderLevel, string> = {
  h1: 'text-4xl sm:text-5xl lg:text-6xl',
  h2: 'text-3xl sm:text-4xl lg:text-5xl',
  h3: 'text-2xl sm:text-3xl lg:text-4xl',
  h4: 'text-xl sm:text-2xl lg:text-3xl',
  h5: 'text-lg sm:text-xl lg:text-2xl',
  h6: 'text-base sm:text-lg lg:text-xl',
};

/**
 * GradientHeader Component
 * 
 * A reusable component for creating gradient text headers with semantic HTML.
 * Supports multiple gradient variants and responsive text sizing.
 * 
 * @example
 * ```tsx
 * <GradientHeader level="h1" className="text-5xl font-bold">
 *   Invisible AI That Thinks for You
 * </GradientHeader>
 * 
 * <GradientHeader level="h2" variant="accent" className="text-3xl">
 *   Modern Tech Solutions
 * </GradientHeader>
 * ```
 */
export const GradientHeader: React.FC<GradientHeaderProps> = ({
  level,
  variant = 'default',
  className = '',
  children,
  ...props
}) => {
  // Get the appropriate gradient class
  const gradientClass = gradientVariants[variant];
  
  // Get the default size classes for the header level
  const defaultSizeClass = headerLevelClasses[level];
  
  // Merge all classes together
  const combinedClassName = cn(
    'font-display font-bold leading-tight', // Base styles
    gradientClass, // Gradient variant
    defaultSizeClass, // Default responsive sizing
    className // Additional custom classes
  );

  // Create the appropriate HTML element
  const Component = level;

  return (
    <Component 
      className={combinedClassName}
      {...props}
    >
      {children}
    </Component>
  );
};

// Export a default version for convenience
export default GradientHeader;

// Export utility function for creating custom gradient classes
export const createGradientClass = (variant: GradientVariant): string => {
  return gradientVariants[variant];
};

// Export the gradient variants for external use
export { gradientVariants, headerLevelClasses };
