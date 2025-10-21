import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import {
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
  CardVariant,
} from './types'

/**
 * Get variant-specific styles
 */
const getVariantStyles = (variant: CardVariant): string => {
  const variants: Record<CardVariant, string> = {
    elevated:
      'bg-white shadow-lg dark:bg-gray-800 dark:shadow-gray-900/30',
    outlined:
      'bg-white border-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700',
    filled:
      'bg-gray-50 dark:bg-gray-700',
  }
  return variants[variant]
}

/**
 * Get hover styles when hoverable
 */
const getHoverStyles = (hoverable: boolean, variant: CardVariant): string => {
  if (!hoverable) return ''

  const hoverVariants: Record<CardVariant, string> = {
    elevated:
      'hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200',
    outlined:
      'hover:border-gray-300 hover:shadow-md dark:hover:border-gray-600 transition-all duration-200',
    filled:
      'hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200',
  }
  return hoverVariants[variant]
}

/**
 * Card Header Component
 *
 * Header section of the card, typically used for titles and actions.
 *
 * @example
 * ```tsx
 * <Card.Header>
 *   <h2>Card Title</h2>
 * </Card.Header>
 * ```
 */
export const CardHeader = forwardRef<HTMLElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'px-6 py-4 border-b border-gray-200 dark:border-gray-700',
          className
        )}
        {...props}
      >
        {children}
      </section>
    )
  }
)

CardHeader.displayName = 'Card.Header'

/**
 * Card Body Component
 *
 * Main content section of the card.
 *
 * @example
 * ```tsx
 * <Card.Body>
 *   <p>Card content goes here</p>
 * </Card.Body>
 * ```
 */
export const CardBody = forwardRef<HTMLElement, CardBodyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('px-6 py-4', className)}
        {...props}
      >
        {children}
      </section>
    )
  }
)

CardBody.displayName = 'Card.Body'

/**
 * Card Footer Component
 *
 * Footer section of the card, typically used for actions or metadata.
 *
 * @example
 * ```tsx
 * <Card.Footer>
 *   <Button>Action</Button>
 * </Card.Footer>
 * ```
 */
export const CardFooter = forwardRef<HTMLElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'px-6 py-4 border-t border-gray-200 dark:border-gray-700',
          className
        )}
        {...props}
      >
        {children}
      </section>
    )
  }
)

CardFooter.displayName = 'Card.Footer'

/**
 * Card Component
 *
 * A flexible card component with multiple variants and composable sections.
 * Supports elevated (shadow), outlined (border), and filled (background) variants.
 * Can be made hoverable and clickable for interactive use cases.
 *
 * @example
 * ```tsx
 * // Basic card
 * <Card>
 *   <Card.Header>Title</Card.Header>
 *   <Card.Body>Content</Card.Body>
 *   <Card.Footer>Footer</Card.Footer>
 * </Card>
 *
 * // Clickable card with hover effect
 * <Card variant="outlined" hoverable clickable onClick={handleClick}>
 *   <Card.Body>Click me!</Card.Body>
 * </Card>
 *
 * // Simple card
 * <Card variant="filled">
 *   <Card.Body>Simple content</Card.Body>
 * </Card>
 * ```
 */
export const Card = forwardRef<HTMLElement, CardProps>(
  (
    {
      variant = 'elevated',
      hoverable = false,
      clickable = false,
      children,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'rounded-lg overflow-hidden'

    const variantStyles = getVariantStyles(variant)
    const hoverStyles = getHoverStyles(hoverable, variant)
    const clickableStyles = clickable
      ? 'cursor-pointer active:scale-[0.98] transition-transform duration-100'
      : ''

    const focusStyles = clickable
      ? 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900'
      : ''

    const cardClasses = cn(
      baseStyles,
      variantStyles,
      hoverStyles,
      clickableStyles,
      focusStyles,
      className
    )

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      if (clickable && onClick) {
        onClick(event)
      }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
      if (clickable && onClick && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault()
        onClick(event as unknown as React.MouseEvent<HTMLElement>)
      }
    }

    return (
      <article
        ref={ref}
        className={cardClasses}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
        aria-pressed={clickable ? false : undefined}
        {...props}
      >
        {children}
      </article>
    )
  }
)

Card.displayName = 'Card'

// Attach sub-components to Card
const CardWithSubComponents = Card as typeof Card & {
  Header: typeof CardHeader
  Body: typeof CardBody
  Footer: typeof CardFooter
}

CardWithSubComponents.Header = CardHeader
CardWithSubComponents.Body = CardBody
CardWithSubComponents.Footer = CardFooter

export default CardWithSubComponents
