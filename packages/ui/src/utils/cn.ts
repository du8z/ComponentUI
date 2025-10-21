import clsx, { ClassValue } from 'clsx'

/**
 * Utility function to merge class names conditionally
 * Combines clsx for conditional classes
 *
 * @param inputs - Class values to merge
 * @returns Merged class string
 *
 * @example
 * cn('base-class', condition && 'conditional-class', ['array-class'])
 * // => 'base-class conditional-class array-class'
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs)
}
