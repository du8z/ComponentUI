import { InputHTMLAttributes, ReactNode } from 'react'

/**
 * Input type variants
 */
export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'

/**
 * Input state variants
 */
export type InputState = 'default' | 'error' | 'success'

/**
 * Input component props
 */
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /**
   * The type of input
   * @default 'text'
   */
  type?: InputType

  /**
   * The visual state of the input
   * @default 'default'
   */
  state?: InputState

  /**
   * Label text for the input
   */
  label?: string

  /**
   * Helper text displayed below the input
   */
  helperText?: string

  /**
   * Error message displayed below the input (overrides helperText)
   */
  errorMessage?: string

  /**
   * Icon to display at the start (left) of the input
   */
  prefixIcon?: ReactNode

  /**
   * Icon to display at the end (right) of the input
   */
  suffixIcon?: ReactNode

  /**
   * Whether to show a clear button when the input has a value
   * @default false
   */
  clearable?: boolean

  /**
   * Callback when the clear button is clicked
   */
  onClear?: () => void

  /**
   * Whether the input is disabled
   * @default false
   */
  disabled?: boolean

  /**
   * Whether the input is required
   * @default false
   */
  required?: boolean

  /**
   * Whether the input should take full width of its container
   * @default false
   */
  fullWidth?: boolean

  /**
   * Additional CSS classes to apply to the input wrapper
   */
  className?: string

  /**
   * Additional CSS classes to apply to the input element
   */
  inputClassName?: string

  /**
   * ID for the input element (used for label association)
   */
  id?: string

  /**
   * Name attribute for the input element
   */
  name?: string

  /**
   * Placeholder text for the input
   */
  placeholder?: string

  /**
   * Current value of the input
   */
  value?: string | number

  /**
   * Default value of the input (for uncontrolled usage)
   */
  defaultValue?: string | number

  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void

  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void

  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void

  /**
   * Key down handler
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}
