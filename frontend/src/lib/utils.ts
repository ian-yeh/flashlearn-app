import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes and tailwind-merge for deduplication
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Utility function to create responsive text gradient classes
 */
export function createResponsiveGradient(
  baseClass: string,
  smClass?: string,
  lgClass?: string
): string {
  const classes = [baseClass];
  if (smClass) classes.push(`sm:${smClass}`);
  if (lgClass) classes.push(`lg:${lgClass}`);
  return classes.join(' ');
}

/**
 * Utility function to create gradient text with fallback
 */
export function createGradientText(
  gradientClass: string,
  fallbackColor: string
): string {
  return `${gradientClass} [color:${fallbackColor}] supports-[background-clip:text]:[color:transparent]`;
}
