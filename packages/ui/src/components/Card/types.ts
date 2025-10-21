import { HTMLAttributes, ReactNode } from 'react'

/**
 * Card variant types
 */
export type CardVariant = 'elevated' | 'outlined' | 'filled'

/**
 * Base card component props
 */
export interface CardProps extends HTMLAttributes<HTMLElement> {
  /**
   * The visual style variant of the card
   * @default 'elevated'
   */
  variant?: CardVariant

  /**
   * Whether the card should have a hover effect
   * @default false
   */
  hoverable?: boolean

  /**
   * Whether the card is clickable
   * When true, adds cursor pointer and onClick handler
   * @default false
   */
  clickable?: boolean

  /**
   * Content to be rendered inside the card
   */
  children?: ReactNode

  /**
   * Additional CSS classes to apply
   */
  className?: string

  /**
   * Click handler (only works when clickable is true)
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void

  /**
   * Accessible label for the card
   */
  'aria-label'?: string
}

/**
 * Card Header component props
 */
export interface CardHeaderProps extends HTMLAttributes<HTMLElement> {
  /**
   * Content to be rendered inside the card header
   */
  children?: ReactNode

  /**
   * Additional CSS classes to apply
   */
  className?: string
}

/**
 * Card Body component props
 */
export interface CardBodyProps extends HTMLAttributes<HTMLElement> {
  /**
   * Content to be rendered inside the card body
   */
  children?: ReactNode

  /**
   * Additional CSS classes to apply
   */
  className?: string
}

/**
 * Card Footer component props
 */
export interface CardFooterProps extends HTMLAttributes<HTMLElement> {
  /**
   * Content to be rendered inside the card footer
   */
  children?: ReactNode

  /**
   * Additional CSS classes to apply
   */
  className?: string
}
