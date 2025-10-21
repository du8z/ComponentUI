import type * as React from 'react'
export type CheckboxSize = 'sm' | 'md' | 'lg'

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  helperText?: string
  error?: boolean
  indeterminate?: boolean
  size?: CheckboxSize
}
