import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge tailwind classes
 * Combines clsx (for conditional classes) and tailwind-merge (for resolving conflicts)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
