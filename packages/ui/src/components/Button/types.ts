import { ButtonHTMLAttributes, ReactNode } from 'react'

/**
 * Button variant types
 */
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline'

/**
 * Button size types
 */
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/**
 * Icon position types
 */
export type IconPosition = 'left' | 'right'

/**
 * Button component props
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style variant of the button
   * @default 'primary'
   */
  variant?: ButtonVariant

  /**
   * The size of the button
   * @default 'md'
   */
  size?: ButtonSize

  /**
   * Whether the button should take full width of its container
   * @default false
   */
  fullWidth?: boolean

  /**
   * Whether the button is in a loading state
   * @default false
   */
  loading?: boolean

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean

  /**
   * Icon to display in the button
   */
  icon?: ReactNode

  /**
   * Position of the icon relative to the text
   * @default 'left'
   */
  iconPosition?: IconPosition

  /**
   * Content to be rendered inside the button
   */
  children?: ReactNode

  /**
   * Additional CSS classes to apply
   */
  className?: string

  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
