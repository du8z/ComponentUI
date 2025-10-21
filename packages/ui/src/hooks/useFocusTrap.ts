import { useEffect, RefObject } from 'react'

const FOCUSABLE_ELEMENTS = [
  'a[href]',
  'area[href]',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  'iframe',
  'object',
  'embed',
  '[contenteditable]',
  '[tabindex]:not([tabindex^="-"])',
].join(',')

/**
 * Hook that traps focus within a container element
 */
export function useFocusTrap<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  isActive = true
) {
  useEffect(() => {
    if (!isActive) return

    const container = ref.current
    if (!container) return

    const focusableElements = container.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS)
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    // Focus first element on mount
    firstElement?.focus()

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault()
          lastElement?.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault()
          firstElement?.focus()
        }
      }
    }

    container.addEventListener('keydown', handleTabKey)
    return () => container.removeEventListener('keydown', handleTabKey)
  }, [ref, isActive])
}
