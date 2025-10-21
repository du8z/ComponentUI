import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/utils/cn'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import type { ModalProps, ModalHeaderProps, ModalBodyProps, ModalFooterProps } from './types'

const sizeClasses = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'max-w-full mx-4',
}

/**
 * Modal component with backdrop, animations, and focus management
 */
export function Modal({
  isOpen,
  onClose,
  size = 'md',
  closeOnBackdrop = true,
  closeOnEsc = true,
  title,
  className,
  children,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  // Focus trap
  useFocusTrap(modalRef, isOpen)

  // Handle ESC key
  useEffect(() => {
    if (!isOpen || !closeOnEsc) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, closeOnEsc, onClose])

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      previousActiveElement.current?.focus()
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdrop && e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" />

      {/* Modal */}
      <div
        ref={modalRef}
        className={cn(
          'relative w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl',
          'transform transition-all',
          'max-h-[90vh] flex flex-col',
          sizeClasses[size],
          className
        )}
      >
        {children}
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}

/**
 * Modal Header component
 */
function ModalHeader({ children, className }: ModalHeaderProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700',
        className
      )}
    >
      <h2
        id="modal-title"
        className="text-xl font-semibold text-gray-900 dark:text-gray-100"
      >
        {children}
      </h2>
    </div>
  )
}

/**
 * Modal Body component - scrollable content area
 */
function ModalBody({ children, className }: ModalBodyProps) {
  return (
    <div
      className={cn(
        'p-6 overflow-y-auto flex-1',
        'text-gray-700 dark:text-gray-300',
        className
      )}
    >
      {children}
    </div>
  )
}

/**
 * Modal Footer component
 */
function ModalFooter({ children, className }: ModalFooterProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700',
        className
      )}
    >
      {children}
    </div>
  )
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter
