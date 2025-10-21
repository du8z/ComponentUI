import { forwardRef, useEffect, useRef } from 'react'
import { cn } from '@/utils/cn'
import type { CheckboxProps } from './types'

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, helperText, error, indeterminate, size = 'md', className, disabled, ...props }, ref) => {
    const internalRef = useRef<HTMLInputElement>(null)
    const checkboxRef = (ref as any) || internalRef

    useEffect(() => {
      if (checkboxRef.current) {
        checkboxRef.current.indeterminate = indeterminate ?? false
      }
    }, [indeterminate, checkboxRef])

    return (
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            ref={checkboxRef}
            type="checkbox"
            disabled={disabled}
            className={cn(
              sizeClasses[size],
              'rounded border-gray-300 dark:border-gray-600',
              'text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'transition-colors duration-200',
              error && 'border-red-500 focus:ring-red-500',
              className
            )}
            aria-invalid={error}
            aria-describedby={helperText ? `${props.id}-helper` : undefined}
            {...props}
          />
        </div>
        
        {(label || helperText) && (
          <div className="ml-3">
            {label && (
              <label
                htmlFor={props.id}
                className={cn(
                  'text-sm font-medium',
                  disabled ? 'text-gray-400 dark:text-gray-600' : 'text-gray-900 dark:text-gray-100',
                  error && 'text-red-600 dark:text-red-400'
                )}
              >
                {label}
              </label>
            )}
            {helperText && (
              <p
                id={`${props.id}-helper`}
                className={cn(
                  'text-sm',
                  error ? 'text-red-600 dark:text-red-400' : 'text-gray-500 dark:text-gray-400'
                )}
              >
                {helperText}
              </p>
            )}
          </div>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
