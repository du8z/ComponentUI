import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from './Input'

describe('Input', () => {
  describe('Rendering', () => {
    it('should render input element', () => {
      render(<Input />)
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('should render with label', () => {
      render(<Input label="Email" />)
      expect(screen.getByLabelText('Email')).toBeInTheDocument()
    })

    it('should render with placeholder', () => {
      render(<Input placeholder="Enter your email" />)
      expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    })

    it('should forward ref to input element', () => {
      const ref = vi.fn()
      render(<Input ref={ref} />)
      expect(ref).toHaveBeenCalled()
    })

    it('should apply custom className to wrapper', () => {
      const { container } = render(<Input className="custom-wrapper" />)
      expect(container.firstChild).toHaveClass('custom-wrapper')
    })

    it('should apply custom inputClassName to input element', () => {
      render(<Input inputClassName="custom-input" />)
      expect(screen.getByRole('textbox')).toHaveClass('custom-input')
    })

    it('should render with helper text', () => {
      render(<Input helperText="This is helper text" />)
      expect(screen.getByText('This is helper text')).toBeInTheDocument()
    })

    it('should render with error message', () => {
      render(<Input errorMessage="This field is required" />)
      expect(screen.getByText('This field is required')).toBeInTheDocument()
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })

    it('should show error message instead of helper text when both provided', () => {
      render(
        <Input
          helperText="Helper text"
          errorMessage="Error message"
        />
      )
      expect(screen.getByText('Error message')).toBeInTheDocument()
      expect(screen.queryByText('Helper text')).not.toBeInTheDocument()
    })

    it('should show required asterisk when required prop is true', () => {
      render(<Input label="Email" required />)
      expect(screen.getByLabelText('required')).toBeInTheDocument()
    })
  })

  describe('Input Types', () => {
    it('should render text type by default', () => {
      render(<Input />)
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text')
    })

    it('should render email type', () => {
      render(<Input type="email" />)
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email')
    })

    it('should render password type', () => {
      render(<Input type="password" />)
      const input = screen.getByRole('textbox', { hidden: true })
      expect(input).toHaveAttribute('type', 'password')
    })

    it('should render number type', () => {
      render(<Input type="number" />)
      expect(screen.getByRole('spinbutton')).toHaveAttribute('type', 'number')
    })

    it('should render tel type', () => {
      render(<Input type="tel" />)
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'tel')
    })

    it('should render url type', () => {
      render(<Input type="url" />)
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'url')
    })
  })

  describe('States', () => {
    it('should render default state with default border styles', () => {
      const { container } = render(<Input state="default" />)
      const wrapper = container.querySelector('[class*="border"]')
      expect(wrapper).toHaveClass('border-gray-300')
    })

    it('should render error state with red border', () => {
      const { container } = render(<Input state="error" />)
      const wrapper = container.querySelector('[class*="border"]')
      expect(wrapper).toHaveClass('border-red-500')
    })

    it('should render success state with green border', () => {
      const { container } = render(<Input state="success" />)
      const wrapper = container.querySelector('[class*="border"]')
      expect(wrapper).toHaveClass('border-green-500')
    })

    it('should automatically set error state when errorMessage is provided', () => {
      const { container } = render(<Input errorMessage="Error" />)
      const wrapper = container.querySelector('[class*="border"]')
      expect(wrapper).toHaveClass('border-red-500')
    })

    it('should render disabled state', () => {
      render(<Input disabled />)
      expect(screen.getByRole('textbox')).toBeDisabled()
    })

    it('should have reduced opacity when disabled', () => {
      const { container } = render(<Input disabled />)
      const wrapper = container.querySelector('[class*="opacity"]')
      expect(wrapper).toHaveClass('opacity-60')
    })
  })

  describe('Full Width', () => {
    it('should render with full width when fullWidth is true', () => {
      const { container } = render(<Input fullWidth />)
      expect(container.firstChild).toHaveClass('w-full')
    })

    it('should not render full width by default', () => {
      const { container } = render(<Input />)
      expect(container.firstChild).toHaveClass('w-auto')
    })
  })

  describe('Icons', () => {
    const PrefixIcon = () => <span data-testid="prefix-icon">@</span>
    const SuffixIcon = () => <span data-testid="suffix-icon">icon</span>

    it('should render with prefix icon', () => {
      render(<Input prefixIcon={<PrefixIcon />} />)
      expect(screen.getByTestId('prefix-icon')).toBeInTheDocument()
    })

    it('should render with suffix icon', () => {
      render(<Input suffixIcon={<SuffixIcon />} />)
      expect(screen.getByTestId('suffix-icon')).toBeInTheDocument()
    })

    it('should render with both prefix and suffix icons', () => {
      render(
        <Input
          prefixIcon={<PrefixIcon />}
          suffixIcon={<SuffixIcon />}
        />
      )
      expect(screen.getByTestId('prefix-icon')).toBeInTheDocument()
      expect(screen.getByTestId('suffix-icon')).toBeInTheDocument()
    })

    it('should add padding for prefix icon', () => {
      render(<Input prefixIcon={<PrefixIcon />} />)
      expect(screen.getByRole('textbox')).toHaveClass('pl-10')
    })

    it('should add padding for suffix icon', () => {
      render(<Input suffixIcon={<SuffixIcon />} />)
      expect(screen.getByRole('textbox')).toHaveClass('pr-10')
    })

    it('should hide icons from screen readers', () => {
      const { container } = render(<Input prefixIcon={<PrefixIcon />} />)
      const iconWrapper = container.querySelector('[aria-hidden="true"]')
      expect(iconWrapper).toBeInTheDocument()
    })
  })

  describe('Clearable Functionality', () => {
    it('should not show clear button when clearable is false', () => {
      render(<Input value="test" clearable={false} />)
      expect(screen.queryByLabelText('Clear input')).not.toBeInTheDocument()
    })

    it('should not show clear button when input is empty', () => {
      render(<Input value="" clearable />)
      expect(screen.queryByLabelText('Clear input')).not.toBeInTheDocument()
    })

    it('should show clear button when clearable and has value', () => {
      render(<Input value="test" clearable onChange={() => {}} />)
      expect(screen.getByLabelText('Clear input')).toBeInTheDocument()
    })

    it('should not show clear button when disabled', () => {
      render(<Input value="test" clearable disabled onChange={() => {}} />)
      expect(screen.queryByLabelText('Clear input')).not.toBeInTheDocument()
    })

    it('should call onClear when clear button is clicked', async () => {
      const handleClear = vi.fn()
      const user = userEvent.setup()

      render(<Input value="test" clearable onClear={handleClear} onChange={() => {}} />)
      await user.click(screen.getByLabelText('Clear input'))

      expect(handleClear).toHaveBeenCalledTimes(1)
    })

    it('should clear input with Enter key on clear button', async () => {
      const handleClear = vi.fn()
      const user = userEvent.setup()

      render(<Input value="test" clearable onClear={handleClear} onChange={() => {}} />)
      const clearButton = screen.getByLabelText('Clear input')
      clearButton.focus()
      await user.keyboard('{Enter}')

      expect(handleClear).toHaveBeenCalledTimes(1)
    })

    it('should clear input with Space key on clear button', async () => {
      const handleClear = vi.fn()
      const user = userEvent.setup()

      render(<Input value="test" clearable onClear={handleClear} onChange={() => {}} />)
      const clearButton = screen.getByLabelText('Clear input')
      clearButton.focus()
      await user.keyboard(' ')

      expect(handleClear).toHaveBeenCalledTimes(1)
    })

    it('should hide suffix icon when clear button is shown', () => {
      const SuffixIcon = () => <span data-testid="suffix-icon">icon</span>
      render(
        <Input
          value="test"
          clearable
          suffixIcon={<SuffixIcon />}
          onChange={() => {}}
        />
      )
      expect(screen.queryByTestId('suffix-icon')).not.toBeInTheDocument()
      expect(screen.getByLabelText('Clear input')).toBeInTheDocument()
    })
  })

  describe('Interactions', () => {
    it('should handle onChange events', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()

      render(<Input onChange={handleChange} />)
      await user.type(screen.getByRole('textbox'), 'test')

      expect(handleChange).toHaveBeenCalled()
    })

    it('should handle onFocus events', async () => {
      const handleFocus = vi.fn()
      const user = userEvent.setup()

      render(<Input onFocus={handleFocus} />)
      await user.click(screen.getByRole('textbox'))

      expect(handleFocus).toHaveBeenCalledTimes(1)
    })

    it('should handle onBlur events', async () => {
      const handleBlur = vi.fn()
      const user = userEvent.setup()

      render(<Input onBlur={handleBlur} />)
      const input = screen.getByRole('textbox')
      await user.click(input)
      await user.tab()

      expect(handleBlur).toHaveBeenCalledTimes(1)
    })

    it('should handle onKeyDown events', async () => {
      const handleKeyDown = vi.fn()
      const user = userEvent.setup()

      render(<Input onKeyDown={handleKeyDown} />)
      const input = screen.getByRole('textbox')
      input.focus()
      await user.keyboard('a')

      expect(handleKeyDown).toHaveBeenCalled()
    })

    it('should not trigger events when disabled', async () => {
      const handleChange = vi.fn()
      const handleFocus = vi.fn()
      const user = userEvent.setup()

      render(
        <Input
          disabled
          onChange={handleChange}
          onFocus={handleFocus}
        />
      )

      const input = screen.getByRole('textbox')
      await user.click(input)
      await user.type(input, 'test')

      expect(handleFocus).not.toHaveBeenCalled()
      expect(handleChange).not.toHaveBeenCalled()
    })

    it('should update focus ring on focus', async () => {
      const { container } = render(<Input />)
      const user = userEvent.setup()
      const input = screen.getByRole('textbox')

      await user.click(input)
      const wrapper = container.querySelector('[class*="ring"]')
      expect(wrapper).toHaveClass('ring-2')
    })
  })

  describe('Keyboard Navigation', () => {
    it('should be keyboard focusable', async () => {
      const user = userEvent.setup()
      render(<Input />)

      await user.tab()
      expect(screen.getByRole('textbox')).toHaveFocus()
    })

    it('should allow typing with keyboard', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()

      render(<Input onChange={handleChange} />)
      const input = screen.getByRole('textbox')
      input.focus()
      await user.keyboard('hello')

      expect(handleChange).toHaveBeenCalled()
    })

    it('should allow tabbing to clear button', async () => {
      const user = userEvent.setup()
      render(<Input value="test" clearable onChange={() => {}} />)

      await user.tab() // Focus input
      await user.tab() // Focus clear button

      expect(screen.getByLabelText('Clear input')).toHaveFocus()
    })

    it('should not be focusable when disabled', () => {
      render(<Input disabled />)
      const input = screen.getByRole('textbox')

      expect(input).toBeDisabled()
    })
  })

  describe('Accessibility', () => {
    it('should have proper aria attributes', () => {
      render(<Input />)
      const input = screen.getByRole('textbox')

      expect(input).toHaveAttribute('aria-invalid', 'false')
    })

    it('should have aria-invalid when in error state', () => {
      render(<Input state="error" />)
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
    })

    it('should have aria-invalid when errorMessage is provided', () => {
      render(<Input errorMessage="Error" />)
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
    })

    it('should have aria-required when required', () => {
      render(<Input required />)
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-required', 'true')
    })

    it('should associate label with input via htmlFor/id', () => {
      render(<Input label="Email" id="email-input" />)
      const input = screen.getByLabelText('Email')
      expect(input).toHaveAttribute('id', 'email-input')
    })

    it('should generate unique id when not provided', () => {
      const { container } = render(<Input label="Email" />)
      const input = container.querySelector('input')
      expect(input).toHaveAttribute('id')
      expect(input?.getAttribute('id')).toBeTruthy()
    })

    it('should associate helper text with input via aria-describedby', () => {
      render(<Input helperText="Helper text" id="test-input" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('aria-describedby', 'test-input-helper-text')
    })

    it('should associate error message with input via aria-describedby', () => {
      render(<Input errorMessage="Error message" id="test-input" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('aria-describedby', 'test-input-error-message')
    })

    it('should have role="alert" on error message', () => {
      render(<Input errorMessage="Error message" />)
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })

    it('should have accessible clear button label', () => {
      render(<Input value="test" clearable onChange={() => {}} />)
      expect(screen.getByLabelText('Clear input')).toBeInTheDocument()
    })

    it('should hide icons from screen readers with aria-hidden', () => {
      const Icon = () => <span>Icon</span>
      const { container } = render(<Input prefixIcon={<Icon />} />)

      const iconWrapper = container.querySelector('span[aria-hidden="true"]')
      expect(iconWrapper).toBeInTheDocument()
    })
  })

  describe('Controlled vs Uncontrolled', () => {
    it('should work as controlled component with value prop', () => {
      const { rerender } = render(<Input value="initial" onChange={() => {}} />)
      expect(screen.getByRole('textbox')).toHaveValue('initial')

      rerender(<Input value="updated" onChange={() => {}} />)
      expect(screen.getByRole('textbox')).toHaveValue('updated')
    })

    it('should work as uncontrolled component with defaultValue', () => {
      render(<Input defaultValue="default value" />)
      expect(screen.getByRole('textbox')).toHaveValue('default value')
    })

    it('should handle number values', () => {
      render(<Input type="number" value={42} onChange={() => {}} />)
      expect(screen.getByRole('spinbutton')).toHaveValue(42)
    })
  })

  describe('Edge Cases', () => {
    it('should handle empty string value', () => {
      render(<Input value="" onChange={() => {}} />)
      expect(screen.getByRole('textbox')).toHaveValue('')
    })

    it('should handle zero as value', () => {
      render(<Input type="number" value={0} onChange={() => {}} />)
      expect(screen.getByRole('spinbutton')).toHaveValue(0)
    })

    it('should spread additional props to input element', () => {
      render(
        <Input
          data-testid="custom-input"
          aria-label="Custom input"
          autoComplete="off"
        />
      )
      const input = screen.getByTestId('custom-input')
      expect(input).toHaveAttribute('aria-label', 'Custom input')
      expect(input).toHaveAttribute('autocomplete', 'off')
    })

    it('should handle both required and disabled states', () => {
      render(<Input required disabled />)
      const input = screen.getByRole('textbox')
      expect(input).toBeDisabled()
      expect(input).toHaveAttribute('aria-required', 'true')
    })

    it('should maintain state through re-renders', () => {
      const { rerender } = render(<Input label="Email" />)
      expect(screen.getByLabelText('Email')).toBeInTheDocument()

      rerender(<Input label="Username" />)
      expect(screen.getByLabelText('Username')).toBeInTheDocument()
      expect(screen.queryByLabelText('Email')).not.toBeInTheDocument()
    })
  })

  describe('Default Props', () => {
    it('should use default type (text)', () => {
      render(<Input />)
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text')
    })

    it('should use default state (default)', () => {
      const { container } = render(<Input />)
      const wrapper = container.querySelector('[class*="border"]')
      expect(wrapper).toHaveClass('border-gray-300')
    })

    it('should not be clearable by default', () => {
      render(<Input value="test" onChange={() => {}} />)
      expect(screen.queryByLabelText('Clear input')).not.toBeInTheDocument()
    })

    it('should not be disabled by default', () => {
      render(<Input />)
      expect(screen.getByRole('textbox')).not.toBeDisabled()
    })

    it('should not be required by default', () => {
      render(<Input />)
      expect(screen.getByRole('textbox')).not.toHaveAttribute('required')
    })

    it('should not be full width by default', () => {
      const { container } = render(<Input />)
      expect(container.firstChild).toHaveClass('w-auto')
    })
  })
})
