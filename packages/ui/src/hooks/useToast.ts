import { useCallback } from 'react'

export interface ToastOptions {
  title?: string
  description?: string
  type?: 'success' | 'error' | 'warning' | 'info'
  duration?: number
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
}

/**
 * Hook for showing toast notifications
 * This is a simplified version - full implementation in Toast component
 */
export function useToast() {
  const toast = useCallback((options: ToastOptions) => {
    // This will be implemented with the Toast component
    console.log('Toast:', options)
  }, [])

  const success = useCallback((message: string, options?: Omit<ToastOptions, 'type'>) => {
    toast({ ...options, description: message, type: 'success' })
  }, [toast])

  const error = useCallback((message: string, options?: Omit<ToastOptions, 'type'>) => {
    toast({ ...options, description: message, type: 'error' })
  }, [toast])

  const warning = useCallback((message: string, options?: Omit<ToastOptions, 'type'>) => {
    toast({ ...options, description: message, type: 'warning' })
  }, [toast])

  const info = useCallback((message: string, options?: Omit<ToastOptions, 'type'>) => {
    toast({ ...options, description: message, type: 'info' })
  }, [toast])

  return {
    toast,
    success,
    error,
    warning,
    info,
  }
}
