import { HTMLAttributes, ReactNode } from 'react'

/**
 * Badge variant types
 */
export type BadgeVariant = 'solid' | 'subtle' | 'outline'

/**
 * Badge color types
 */
export type BadgeColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'

/**
 * Badge size types
 */
export type BadgeSize = 'sm' | 'md' | 'lg'

/**
 * Badge component props
 */
export interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  /**
   * The visual style variant of the badge
   * @default 'solid'
   */
  variant?: BadgeVariant

  /**
   * The color scheme of the badge
   * @default 'primary'
   */
  color?: BadgeColor

  /**
   * The size of the badge
   * @default 'md'
   */
  size?: BadgeSize

  /**
   * Whether to show a dot indicator
   * @default false
   */
  dot?: boolean

  /**
   * Whether the badge is removable (shows X button)
   * @default false
   */
  removable?: boolean

  /**
   * Callback fired when the remove button is clicked
   */
  onRemove?: () => void

  /**
   * Content to be rendered inside the badge
   */
  children?: ReactNode

  /**
   * Additional CSS classes to apply
   */
  className?: string
}
