import type * as React from 'react'
export type TabsVariant = 'line' | 'enclosed' | 'pills'
export type TabsOrientation = 'horizontal' | 'vertical'

export interface Tab {
  id: string
  label: string
  content: React.ReactNode
  disabled?: boolean
  icon?: React.ReactNode
}

export interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
  variant?: TabsVariant
  orientation?: TabsOrientation
  className?: string
  onChange?: (tabId: string) => void
}
