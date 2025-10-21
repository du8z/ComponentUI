import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import { ButtonProps, ButtonVariant, ButtonSize } from './types'

/**
 * Spinner component for loading state
 */
const Spinner = ({ className }: { className?: string }) => (
  <svg
    className={cn('animate-spin', className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
)

/**
 * Get variant-specific styles
 */
const getVariantStyles = (variant: ButtonVariant): string => {
  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700',
    secondary:
      'bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800 dark:bg-gray-500 dark:hover:bg-gray-600 dark:active:bg-gray-700',
    danger:
      'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 dark:bg-red-500 dark:hover:bg-red-600 dark:active:bg-red-700',
    ghost:
      'bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800 dark:active:bg-gray-700',
    outline:
      'bg-transparent border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 active:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:border-gray-500',
  }
  return variants[variant]
}

/**
 * Get size-specific styles
 */
const getSizeStyles = (size: ButtonSize): string => {
  const sizes: Record<ButtonSize, string> = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-5 py-3 text-lg',
    xl: 'px-6 py-3.5 text-xl',
  }
  return sizes[size]
}

/**
 * Get icon size based on button size
 */
const getIconSize = (size: ButtonSize): string => {
  const iconSizes: Record<ButtonSize, string> = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
    xl: 'h-7 w-7',
  }
  return iconSizes[size]
}

/**
 * Button component
 *
 * A flexible button component with multiple variants, sizes, and states.
 * Supports loading states, icons, and full accessibility features.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Click me
 * </Button>
 *
 * <Button variant="danger" loading>
 *   Processing...
 * </Button>
 *
 * <Button variant="outline" icon={<Icon />} iconPosition="left">
 *   With Icon
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled = false,
      icon,
      iconPosition = 'left',
      children,
      className,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900'

    const disabledStyles = isDisabled
      ? 'opacity-50 cursor-not-allowed pointer-events-none'
      : 'cursor-pointer'

    const widthStyles = fullWidth ? 'w-full' : ''

    const variantStyles = getVariantStyles(variant)
    const sizeStyles = getSizeStyles(size)

    const buttonClasses = cn(
      baseStyles,
      variantStyles,
      sizeStyles,
      disabledStyles,
      widthStyles,
      className
    )

    const iconClasses = cn(getIconSize(size))
    const spinnerClasses = cn(getIconSize(size))

    // Determine spacing between icon and text
    const iconSpacing = children ? (size === 'xs' ? 'gap-1' : 'gap-2') : ''

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={cn(buttonClasses, iconSpacing)}
        aria-disabled={isDisabled}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <Spinner className={spinnerClasses} />
        )}

        {!loading && icon && iconPosition === 'left' && (
          <span className={iconClasses} aria-hidden="true">
            {icon}
          </span>
        )}

        {children && <span>{children}</span>}

        {!loading && icon && iconPosition === 'right' && (
          <span className={iconClasses} aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
