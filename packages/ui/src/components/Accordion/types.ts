import type * as React from 'react'
export type AccordionVariant = 'bordered' | 'filled'

export interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
  disabled?: boolean
  icon?: React.ReactNode
}

export interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
  defaultExpanded?: string[]
  variant?: AccordionVariant
  className?: string
  onChange?: (expandedItems: string[]) => void
}
