import type * as React from 'react'
export type AlertType = 'success' | 'error' | 'warning' | 'info'
export type AlertVariant = 'filled' | 'outlined' | 'subtle'

export interface AlertProps {
  type?: AlertType
  variant?: AlertVariant
  title?: string
  children: React.ReactNode
  dismissible?: boolean
  onDismiss?: () => void
  icon?: React.ReactNode
  actions?: React.ReactNode
  className?: string
}
