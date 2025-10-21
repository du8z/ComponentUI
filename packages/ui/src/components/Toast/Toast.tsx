import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/utils/cn'
import type { ToastProps } from './types'

const typeStyles = {
  success: 'bg-green-600 text-white dark:bg-green-500',
  error: 'bg-red-600 text-white dark:bg-red-500',
  warning: 'bg-yellow-600 text-white dark:bg-yellow-500',
  info: 'bg-blue-600 text-white dark:bg-blue-500',
}

const typeIcons = {
  success: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  ),
  error: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
  ),
  warning: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  ),
  info: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
  ),
}

export function Toast({
  type = 'info',
  title,
  message,
  duration = 5000,
  action,
  onClose,
  showProgress = true,
  className,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    if (duration <= 0) return

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.max(0, prev - (100 / (duration / 100))))
    }, 100)

    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose?.()
    }, duration)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [duration, onClose])

  const handleClose = () => {
    setIsVisible(false)
    onClose?.()
  }

  if (!isVisible) return null

  const toast = (
    <div
      role="alert"
      aria-live="polite"
      className={cn(
        'min-w-[320px] max-w-md rounded-lg shadow-lg overflow-hidden',
        'transform transition-all duration-300',
        'animate-in slide-in-from-top-2 fade-in-0',
        typeStyles[type],
        className
      )}
    >
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0" aria-hidden="true">
            {typeIcons[type]}
          </div>
          
          <div className="flex-1 min-w-0">
            {title && <p className="font-semibold text-sm mb-1">{title}</p>}
            <p className="text-sm opacity-90">{message}</p>
            
            {action && (
              <button
                onClick={() => {
                  action.onClick()
                  handleClose()
                }}
                className="mt-2 text-sm font-medium underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                {action.label}
              </button>
            )}
          </div>

          <button
            onClick={handleClose}
            className="flex-shrink-0 inline-flex rounded-md hover:bg-white/20 p-1.5 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {showProgress && duration > 0 && (
        <div className="h-1 bg-black/20">
          <div
            className="h-full bg-white/50 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  )

  return createPortal(toast, document.body)
}
