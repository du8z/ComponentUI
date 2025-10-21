import type * as React from 'react'

export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left'
export type TooltipTrigger = 'hover' | 'click' | 'focus'

export interface TooltipProps {
  content: React.ReactNode
  children: React.ReactElement
  position?: TooltipPosition
  trigger?: TooltipTrigger
  delay?: number
  className?: string
}
