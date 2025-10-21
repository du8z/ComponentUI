import type * as React from 'react'
export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface ModalProps {
  /**
   * Whether the modal is open
   */
  isOpen: boolean

  /**
   * Callback when modal should close
   */
  onClose: () => void

  /**
   * Modal size
   * @default 'md'
   */
  size?: ModalSize

  /**
   * Whether clicking the backdrop closes the modal
   * @default true
   */
  closeOnBackdrop?: boolean

  /**
   * Whether pressing ESC closes the modal
   * @default true
   */
  closeOnEsc?: boolean

  /**
   * Modal title for accessibility
   */
  title?: string

  /**
   * Custom className for modal container
   */
  className?: string

  /**
   * Children content
   */
  children?: React.ReactNode
}

export interface ModalHeaderProps {
  children: React.ReactNode
  className?: string
}

export interface ModalBodyProps {
  children: React.ReactNode
  className?: string
}

export interface ModalFooterProps {
  children: React.ReactNode
  className?: string
}
