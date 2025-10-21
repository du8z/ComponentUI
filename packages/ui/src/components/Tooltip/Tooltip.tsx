import { useState, useRef, cloneElement } from 'react'
import { cn } from '@/utils/cn'
import type { TooltipProps } from './types'

const positionClasses = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
}

const arrowClasses = {
  top: 'top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent',
  right: 'right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent',
  bottom: 'bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent',
  left: 'left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent',
}

export function Tooltip({
  content,
  children,
  position = 'top',
  trigger = 'hover',
  delay = 200,
  className,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const showTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay)
  }

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsVisible(false)
  }

  const toggleTooltip = () => {
    setIsVisible((prev) => !prev)
  }

  const childProps: Record<string, unknown> = {}

  if (trigger === 'hover' || trigger === 'focus') {
    childProps['onMouseEnter'] = showTooltip
    childProps['onMouseLeave'] = hideTooltip
    childProps['onFocus'] = showTooltip
    childProps['onBlur'] = hideTooltip
  }

  if (trigger === 'click') {
    childProps['onClick'] = toggleTooltip
  }

  return (
    <div className="relative inline-block">
      {cloneElement(children, childProps)}
      
      {isVisible && (
        <div
          role="tooltip"
          className={cn(
            'absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 dark:bg-gray-700 rounded-md shadow-lg',
            'whitespace-nowrap pointer-events-none',
            'animate-in fade-in-0 zoom-in-95',
            positionClasses[position],
            className
          )}
        >
          {content}
          <div
            className={cn(
              'absolute w-0 h-0 border-4 border-gray-900 dark:border-gray-700',
              arrowClasses[position]
            )}
          />
        </div>
      )}
    </div>
  )
}
