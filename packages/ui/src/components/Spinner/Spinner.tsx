import React from 'react';
import { cn } from '@/utils/cn';
import type { SpinnerProps } from './types';

/**
 * Spinner component for loading states
 *
 * @example
 * ```tsx
 * <Spinner size="md" variant="circle" color="blue-600" />
 * <Spinner variant="dots" label="Loading..." />
 * <Spinner fullscreen label="Processing your request..." />
 * ```
 */
export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  variant = 'circle',
  color = 'blue-600',
  label,
  fullscreen = false,
  className,
  'aria-label': ariaLabel = 'Loading',
  'data-testid': testId = 'spinner',
}) => {
  // Size mappings for different variants
  const sizeClasses = {
    circle: {
      xs: 'h-4 w-4 border-2',
      sm: 'h-6 w-6 border-2',
      md: 'h-8 w-8 border-2',
      lg: 'h-12 w-12 border-3',
      xl: 'h-16 w-16 border-4',
    },
    dots: {
      xs: 'h-1.5 w-1.5',
      sm: 'h-2 w-2',
      md: 'h-3 w-3',
      lg: 'h-4 w-4',
      xl: 'h-6 w-6',
    },
    pulse: {
      xs: 'h-4 w-4',
      sm: 'h-6 w-6',
      md: 'h-8 w-8',
      lg: 'h-12 w-12',
      xl: 'h-16 w-16',
    },
  };

  const labelSizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const dotGapClasses = {
    xs: 'gap-1',
    sm: 'gap-1.5',
    md: 'gap-2',
    lg: 'gap-2.5',
    xl: 'gap-3',
  };

  // Render the appropriate spinner variant
  const renderSpinner = () => {
    switch (variant) {
      case 'circle':
        return (
          <div
            className={cn(
              'rounded-full border-solid border-t-transparent animate-spin',
              `border-${color}`,
              sizeClasses.circle[size]
            )}
            data-testid={`${testId}-circle`}
            aria-hidden="true"
          />
        );

      case 'dots':
        return (
          <div
            className={cn('flex items-center', dotGapClasses[size])}
            data-testid={`${testId}-dots`}
            aria-hidden="true"
          >
            <div
              className={cn(
                'rounded-full animate-bounce',
                `bg-${color}`,
                sizeClasses.dots[size]
              )}
              style={{ animationDelay: '0ms' }}
            />
            <div
              className={cn(
                'rounded-full animate-bounce',
                `bg-${color}`,
                sizeClasses.dots[size]
              )}
              style={{ animationDelay: '150ms' }}
            />
            <div
              className={cn(
                'rounded-full animate-bounce',
                `bg-${color}`,
                sizeClasses.dots[size]
              )}
              style={{ animationDelay: '300ms' }}
            />
          </div>
        );

      case 'pulse':
        return (
          <div
            className={cn(
              'rounded-full animate-pulse',
              `bg-${color}`,
              sizeClasses.pulse[size]
            )}
            data-testid={`${testId}-pulse`}
            aria-hidden="true"
          />
        );

      default:
        return null;
    }
  };

  const spinnerContent = (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-3',
        !fullscreen && className
      )}
      role="status"
      aria-live="polite"
      aria-busy="true"
      data-testid={testId}
    >
      {renderSpinner()}
      {label && (
        <span
          className={cn(
            'font-medium text-gray-700 dark:text-gray-300',
            labelSizeClasses[size]
          )}
          data-testid={`${testId}-label`}
        >
          {label}
        </span>
      )}
      <span className="sr-only">{ariaLabel}</span>
    </div>
  );

  if (fullscreen) {
    return (
      <div
        className={cn(
          'fixed inset-0 z-50 flex items-center justify-center',
          'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm',
          className
        )}
        data-testid={`${testId}-fullscreen`}
      >
        {spinnerContent}
      </div>
    );
  }

  return spinnerContent;
};

Spinner.displayName = 'Spinner';
