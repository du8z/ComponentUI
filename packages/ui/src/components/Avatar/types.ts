import type * as React from 'react'
import { HTMLAttributes } from 'react'

/**
 * Avatar size types
 */
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

/**
 * Avatar shape types
 */
export type AvatarShape = 'circle' | 'square'

/**
 * Avatar status types
 */
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away'

/**
 * Avatar component props
 */
export interface AvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * The size of the avatar
   * @default 'md'
   */
  size?: AvatarSize

  /**
   * The shape of the avatar
   * @default 'circle'
   */
  shape?: AvatarShape

  /**
   * Name of the person - used for initials generation and alt text
   */
  name?: string

  /**
   * Image source URL
   */
  src?: string

  /**
   * Alt text for the image
   */
  alt?: string

  /**
   * Status indicator
   */
  status?: AvatarStatus

  /**
   * Custom initials override (max 2 characters)
   */
  initials?: string

  /**
   * Additional CSS classes to apply
   */
  className?: string
}

/**
 * Avatar group component props
 */
export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The size of avatars in the group
   * @default 'md'
   */
  size?: AvatarSize

  /**
   * The shape of avatars in the group
   * @default 'circle'
   */
  shape?: AvatarShape

  /**
   * Maximum number of avatars to display before showing count
   * @default 5
   */
  max?: number

  /**
   * Avatar components to display
   */
  children: React.ReactNode

  /**
   * Additional CSS classes to apply
   */
  className?: string
}
