import { useState, useCallback } from 'react'

/**
 * Hook for managing disclosure state (open/close)
 * Useful for modals, dropdowns, tooltips, etc.
 */
export function useDisclosure(defaultIsOpen = false) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])

  return {
    isOpen,
    onOpen: open,
    onClose: close,
    onToggle: toggle,
  }
}

export type UseDisclosureReturn = ReturnType<typeof useDisclosure>
