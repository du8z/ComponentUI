/**
 * Size options for the Spinner component
 */
export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Visual variant options for the Spinner component
 */
export type SpinnerVariant = 'circle' | 'dots' | 'pulse';

/**
 * Props for the Spinner component
 */
export interface SpinnerProps {
  /**
   * Size of the spinner
   * @default 'md'
   */
  size?: SpinnerSize;

  /**
   * Visual variant of the spinner
   * @default 'circle'
   */
  variant?: SpinnerVariant;

  /**
   * Color of the spinner (Tailwind color class)
   * @default 'blue-600'
   * @example 'red-500', 'green-600', 'purple-500'
   */
  color?: string;

  /**
   * Optional label for accessibility and display
   */
  label?: string;

  /**
   * If true, shows the spinner in a fullscreen overlay
   * @default false
   */
  fullscreen?: boolean;

  /**
   * Additional CSS classes to apply to the spinner container
   */
  className?: string;

  /**
   * ARIA label for screen readers when no label is provided
   * @default 'Loading'
   */
  'aria-label'?: string;

  /**
   * Test ID for testing purposes
   */
  'data-testid'?: string;
}
