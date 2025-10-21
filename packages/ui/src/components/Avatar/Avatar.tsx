import { forwardRef, useState, Children, isValidElement, cloneElement } from 'react'
import { cn } from '@/utils/cn'
import { AvatarProps, AvatarGroupProps, AvatarSize, AvatarShape, AvatarStatus } from './types'

/**
 * Generate initials from a name
 */
const generateInitials = (name: string): string => {
  const words = name.trim().split(/\s+/)

  if (words.length === 0) return ''
  if (words.length === 1) return words[0].charAt(0).toUpperCase()

  // Take first letter of first and last word
  return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase()
}

/**
 * Get size-specific styles for avatar
 */
const getSizeStyles = (size: AvatarSize): string => {
  const sizes: Record<AvatarSize, string> = {
    xs: 'h-6 w-6 text-xs',
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg',
    xl: 'h-14 w-14 text-xl',
    '2xl': 'h-16 w-16 text-2xl',
  }
  return sizes[size]
}

/**
 * Get shape-specific styles for avatar
 */
const getShapeStyles = (shape: AvatarShape): string => {
  const shapes: Record<AvatarShape, string> = {
    circle: 'rounded-full',
    square: 'rounded-lg',
  }
  return shapes[shape]
}

/**
 * Get status-specific styles
 */
const getStatusStyles = (status: AvatarStatus): string => {
  const statuses: Record<AvatarStatus, string> = {
    online: 'bg-green-500 dark:bg-green-400',
    offline: 'bg-gray-400 dark:bg-gray-500',
    busy: 'bg-red-500 dark:bg-red-400',
    away: 'bg-yellow-500 dark:bg-yellow-400',
  }
  return statuses[status]
}

/**
 * Get status indicator size based on avatar size
 */
const getStatusIndicatorSize = (size: AvatarSize): string => {
  const sizes: Record<AvatarSize, string> = {
    xs: 'h-1.5 w-1.5',
    sm: 'h-2 w-2',
    md: 'h-2.5 w-2.5',
    lg: 'h-3 w-3',
    xl: 'h-3.5 w-3.5',
    '2xl': 'h-4 w-4',
  }
  return sizes[size]
}

/**
 * Get background color for initials
 */
const getInitialsBackground = (): string => {
  return 'bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700'
}

/**
 * Avatar component
 *
 * A flexible avatar component with support for images, initials, status indicators,
 * multiple sizes and shapes. Fully accessible with WCAG AA compliance.
 *
 * @example
 * ```tsx
 * <Avatar name="John Doe" src="/avatar.jpg" size="md" />
 * <Avatar name="Jane Smith" status="online" shape="circle" />
 * <Avatar initials="AB" status="busy" />
 * ```
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      size = 'md',
      shape = 'circle',
      name,
      src,
      alt,
      status,
      initials: customInitials,
      className,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = useState(false)

    // Determine what to display
    const showImage = src && !imageError
    const displayInitials = customInitials || (name ? generateInitials(name) : '')
    const imageAlt = alt || name || 'Avatar'

    const baseStyles = 'relative inline-flex items-center justify-center ring-2 ring-white dark:ring-gray-800'
    const sizeStyles = getSizeStyles(size)
    const shapeStyles = getShapeStyles(shape)

    const avatarClasses = cn(
      baseStyles,
      sizeStyles,
      shapeStyles,
      className
    )

    return (
      <div
        ref={ref}
        className={avatarClasses}
        role="img"
        aria-label={imageAlt}
        {...props}
      >
        <div className={cn('h-full w-full overflow-hidden', shapeStyles)}>
          {showImage ? (
            <img
              src={src}
              alt={imageAlt}
              className="h-full w-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className={cn('h-full w-full flex items-center justify-center text-white font-semibold', getInitialsBackground())}>
              {displayInitials}
            </div>
          )}
        </div>

        {status && (
          <span
            className={cn(
              'absolute bottom-0 right-0 rounded-full ring-2 ring-white dark:ring-gray-800',
              getStatusStyles(status),
              getStatusIndicatorSize(size)
            )}
            role="status"
            aria-label={`Status: ${status}`}
          />
        )}
      </div>
    )
  }
)

Avatar.displayName = 'Avatar'

/**
 * AvatarGroup component
 *
 * A component for displaying multiple avatars in an overlapping group layout.
 * Automatically limits the number of visible avatars and shows a count for remaining ones.
 *
 * @example
 * ```tsx
 * <AvatarGroup max={3} size="md">
 *   <Avatar name="John Doe" src="/avatar1.jpg" />
 *   <Avatar name="Jane Smith" src="/avatar2.jpg" />
 *   <Avatar name="Bob Johnson" src="/avatar3.jpg" />
 *   <Avatar name="Alice Williams" src="/avatar4.jpg" />
 * </AvatarGroup>
 * ```
 */
export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      size = 'md',
      shape = 'circle',
      max = 5,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const validChildren = Children.toArray(children).filter(isValidElement)
    const totalCount = validChildren.length
    const visibleChildren = validChildren.slice(0, max)
    const remainingCount = totalCount - max

    const baseStyles = 'flex items-center -space-x-2'

    const groupClasses = cn(
      baseStyles,
      className
    )

    return (
      <div
        ref={ref}
        className={groupClasses}
        role="group"
        aria-label={`Avatar group of ${totalCount} ${totalCount === 1 ? 'person' : 'people'}`}
        {...props}
      >
        {visibleChildren.map((child, index) => {
          if (!isValidElement(child)) return null

          // Clone the child and pass size and shape props
          return cloneElement(child as React.ReactElement<AvatarProps>, {
            key: index,
            size,
            shape,
            className: cn(
              'transition-transform hover:scale-110 hover:z-10',
              (child as React.ReactElement<AvatarProps>).props.className
            ),
          })
        })}

        {remainingCount > 0 && (
          <div
            className={cn(
              'relative inline-flex items-center justify-center ring-2 ring-white dark:ring-gray-800 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold transition-transform hover:scale-110 hover:z-10',
              getSizeStyles(size),
              getShapeStyles(shape)
            )}
            role="img"
            aria-label={`${remainingCount} more ${remainingCount === 1 ? 'person' : 'people'}`}
          >
            +{remainingCount}
          </div>
        )}
      </div>
    )
  }
)

AvatarGroup.displayName = 'AvatarGroup'
