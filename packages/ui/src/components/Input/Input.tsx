import { forwardRef, useId, useState } from 'react'
import { cn } from '@/utils/cn'
import { InputProps, InputState } from './types'

/**
 * Clear icon component
 */
const ClearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-full h-full"
    aria-hidden="true"
  >
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
)

/**
 * Get state-specific border styles
 */
const getStateBorderStyles = (state: InputState, isFocused: boolean): string => {
  if (state === 'error') {
    return isFocused
      ? 'border-red-500 ring-2 ring-red-500 ring-opacity-50 dark:border-red-400 dark:ring-red-400'
      : 'border-red-500 dark:border-red-400'
  }
  if (state === 'success') {
    return isFocused
      ? 'border-green-500 ring-2 ring-green-500 ring-opacity-50 dark:border-green-400 dark:ring-green-400'
      : 'border-green-500 dark:border-green-400'
  }
  return isFocused
    ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-50 dark:border-blue-400 dark:ring-blue-400'
    : 'border-gray-300 dark:border-gray-600'
}

/**
 * Get state-specific text color for helper/error text
 */
const getStateTextColor = (state: InputState): string => {
  if (state === 'error') {
    return 'text-red-600 dark:text-red-400'
  }
  if (state === 'success') {
    return 'text-green-600 dark:text-green-400'
  }
  return 'text-gray-600 dark:text-gray-400'
}

/**
 * Input component
 *
 * A flexible input component with multiple types, states, and features.
 * Supports labels, helper text, error messages, prefix/suffix icons, and clearable functionality.
 * Fully accessible with WCAG AA compliance.
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="you@example.com"
 *   helperText="We'll never share your email"
 * />
 *
 * <Input
 *   label="Password"
 *   type="password"
 *   state="error"
 *   errorMessage="Password is required"
 * />
 *
 * <Input
 *   label="Search"
 *   prefixIcon={<SearchIcon />}
 *   clearable
 *   onClear={() => setValue('')}
 * />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      state = 'default',
      label,
      helperText,
      errorMessage,
      prefixIcon,
      suffixIcon,
      clearable = false,
      onClear,
      disabled = false,
      required = false,
      fullWidth = false,
      className,
      inputClassName,
      id: providedId,
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const id = providedId || generatedId
    const [isFocused, setIsFocused] = useState(false)

    // Determine if we should show the clear button
    const hasValue = value !== undefined ? String(value).length > 0 : false
    const showClearButton = clearable && hasValue && !disabled

    // Determine the actual state based on errorMessage prop
    const actualState = errorMessage ? 'error' : state

    // IDs for accessibility
    const helperTextId = `${id}-helper-text`
    const errorMessageId = `${id}-error-message`

    // Base styles
    const wrapperStyles = fullWidth ? 'w-full' : 'w-auto'

    const labelStyles = cn(
      'block text-sm font-medium mb-1.5',
      disabled
        ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
        : 'text-gray-700 dark:text-gray-300'
    )

    const inputWrapperStyles = cn(
      'relative flex items-center',
      'border rounded-lg',
      'transition-all duration-200',
      'bg-white dark:bg-gray-800',
      disabled
        ? 'opacity-60 cursor-not-allowed bg-gray-50 dark:bg-gray-900'
        : 'hover:border-gray-400 dark:hover:border-gray-500',
      getStateBorderStyles(actualState, isFocused)
    )

    const inputStyles = cn(
      'flex-1 px-3 py-2 text-base',
      'bg-transparent',
      'text-gray-900 dark:text-gray-100',
      'placeholder:text-gray-400 dark:placeholder:text-gray-500',
      'focus:outline-none',
      disabled ? 'cursor-not-allowed' : 'cursor-text',
      prefixIcon && 'pl-10',
      (suffixIcon || showClearButton) && 'pr-10',
      inputClassName
    )

    const iconStyles = cn(
      'absolute w-5 h-5',
      'text-gray-400 dark:text-gray-500',
      'pointer-events-none'
    )

    const helperTextStyles = cn(
      'mt-1.5 text-sm',
      getStateTextColor(actualState)
    )

    const clearButtonStyles = cn(
      'absolute right-3 w-5 h-5',
      'text-gray-400 hover:text-gray-600',
      'dark:text-gray-500 dark:hover:text-gray-300',
      'transition-colors duration-200',
      'cursor-pointer',
      'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded',
      'flex items-center justify-center'
    )

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      onBlur?.(e)
    }

    const handleClearClick = () => {
      onClear?.()
    }

    const handleClearKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleClearClick()
      }
    }

    return (
      <div className={cn(wrapperStyles, className)}>
        {label && (
          <label htmlFor={id} className={labelStyles}>
            {label}
            {required && (
              <span className="text-red-500 ml-1" aria-label="required">
                *
              </span>
            )}
          </label>
        )}

        <div className={inputWrapperStyles}>
          {prefixIcon && (
            <span className={cn(iconStyles, 'left-3')} aria-hidden="true">
              {prefixIcon}
            </span>
          )}

          <input
            ref={ref}
            id={id}
            type={type}
            disabled={disabled}
            required={required}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={onKeyDown}
            className={inputStyles}
            aria-invalid={actualState === 'error'}
            aria-describedby={
              errorMessage
                ? errorMessageId
                : helperText
                ? helperTextId
                : undefined
            }
            aria-required={required}
            {...props}
          />

          {suffixIcon && !showClearButton && (
            <span className={cn(iconStyles, 'right-3')} aria-hidden="true">
              {suffixIcon}
            </span>
          )}

          {showClearButton && (
            <button
              type="button"
              onClick={handleClearClick}
              onKeyDown={handleClearKeyDown}
              className={clearButtonStyles}
              aria-label="Clear input"
              tabIndex={0}
            >
              <ClearIcon />
            </button>
          )}
        </div>

        {errorMessage && (
          <p id={errorMessageId} className={helperTextStyles} role="alert">
            {errorMessage}
          </p>
        )}

        {!errorMessage && helperText && (
          <p id={helperTextId} className={helperTextStyles}>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
