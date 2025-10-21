import { forwardRef, MouseEvent, KeyboardEvent } from 'react'
import { cn } from '@/utils/cn'
import { BadgeProps, BadgeVariant, BadgeColor, BadgeSize } from './types'

/**
 * Get variant and color specific styles
 */
const getVariantColorStyles = (variant: BadgeVariant, color: BadgeColor): string => {
  const styles: Record<BadgeVariant, Record<BadgeColor, string>> = {
    solid: {
      primary:
        'bg-blue-600 text-white dark:bg-blue-500',
      secondary:
        'bg-gray-600 text-white dark:bg-gray-500',
      success:
        'bg-green-600 text-white dark:bg-green-500',
      warning:
        'bg-yellow-600 text-white dark:bg-yellow-500',
      error:
        'bg-red-600 text-white dark:bg-red-500',
      info:
        'bg-cyan-600 text-white dark:bg-cyan-500',
    },
    subtle: {
      primary:
        'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      secondary:
        'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
      success:
        'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      warning:
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
      error:
        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      info:
        'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
    },
    outline: {
      primary:
        'bg-transparent border border-blue-600 text-blue-700 dark:border-blue-400 dark:text-blue-400',
      secondary:
        'bg-transparent border border-gray-600 text-gray-700 dark:border-gray-400 dark:text-gray-300',
      success:
        'bg-transparent border border-green-600 text-green-700 dark:border-green-400 dark:text-green-400',
      warning:
        'bg-transparent border border-yellow-600 text-yellow-700 dark:border-yellow-400 dark:text-yellow-400',
      error:
        'bg-transparent border border-red-600 text-red-700 dark:border-red-400 dark:text-red-400',
      info:
        'bg-transparent border border-cyan-600 text-cyan-700 dark:border-cyan-400 dark:text-cyan-400',
    },
  }
  return styles[variant][color]
}

/**
 * Get size specific styles
 */
const getSizeStyles = (size: BadgeSize): string => {
  const sizes: Record<BadgeSize, string> = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  }
  return sizes[size]
}

/**
 * Get dot size based on badge size
 */
const getDotSize = (size: BadgeSize): string => {
  const dotSizes: Record<BadgeSize, string> = {
    sm: 'h-1.5 w-1.5',
    md: 'h-2 w-2',
    lg: 'h-2.5 w-2.5',
  }
  return dotSizes[size]
}

/**
 * Get remove button size based on badge size
 */
const getRemoveButtonSize = (size: BadgeSize): string => {
  const buttonSizes: Record<BadgeSize, string> = {
    sm: 'h-3 w-3',
    md: 'h-3.5 w-3.5',
    lg: 'h-4 w-4',
  }
  return buttonSizes[size]
}

/**
 * Get dot color based on variant and color
 */
const getDotColor = (variant: BadgeVariant, color: BadgeColor): string => {
  if (variant === 'solid') {
    return 'bg-white'
  }

  const colors: Record<BadgeColor, string> = {
    primary: 'bg-blue-600 dark:bg-blue-400',
    secondary: 'bg-gray-600 dark:bg-gray-400',
    success: 'bg-green-600 dark:bg-green-400',
    warning: 'bg-yellow-600 dark:bg-yellow-400',
    error: 'bg-red-600 dark:bg-red-400',
    info: 'bg-cyan-600 dark:bg-cyan-400',
  }
  return colors[color]
}

/**
 * Badge component
 *
 * A flexible badge component for labels, tags, and status indicators.
 * Supports multiple variants, colors, sizes, and interactive features.
 *
 * @example
 * ```tsx
 * <Badge variant="solid" color="primary">
 *   New
 * </Badge>
 *
 * <Badge variant="subtle" color="success" dot>
 *   Active
 * </Badge>
 *
 * <Badge variant="outline" color="error" removable onRemove={handleRemove}>
 *   Error
 * </Badge>
 * ```
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'solid',
      color = 'primary',
      size = 'md',
      dot = false,
      removable = false,
      onRemove,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const handleRemoveClick = (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      onRemove?.()
    }

    const handleRemoveKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        e.stopPropagation()
        onRemove?.()
      }
    }

    const baseStyles =
      'inline-flex items-center font-medium rounded-full transition-colors duration-200'

    const variantColorStyles = getVariantColorStyles(variant, color)
    const sizeStyles = getSizeStyles(size)

    const badgeClasses = cn(
      baseStyles,
      variantColorStyles,
      sizeStyles,
      className
    )

    const dotClasses = cn(
      'rounded-full',
      getDotSize(size),
      getDotColor(variant, color)
    )

    const removeButtonClasses = cn(
      'ml-1 -mr-0.5 rounded-full transition-opacity duration-200 hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-1',
      variant === 'solid' ? 'focus:ring-white' : `focus:ring-${color}-600`,
      getRemoveButtonSize(size)
    )

    // Determine spacing
    const gap = size === 'sm' ? 'gap-1' : size === 'md' ? 'gap-1.5' : 'gap-2'

    return (
      <span
        ref={ref}
        className={cn(badgeClasses, gap)}
        {...props}
      >
        {dot && (
          <span className={dotClasses} aria-hidden="true" />
        )}

        {children && <span>{children}</span>}

        {removable && onRemove && (
          <button
            type="button"
            onClick={handleRemoveClick}
            onKeyDown={handleRemoveKeyDown}
            className={removeButtonClasses}
            aria-label="Remove"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-full h-full"
              aria-hidden="true"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        )}
      </span>
    )
  }
)

Badge.displayName = 'Badge'
