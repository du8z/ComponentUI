import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  describe('Rendering', () => {
    it('should render with children', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
    })

    it('should render without children', () => {
      render(<Button aria-label="icon button" />)
      expect(screen.getByRole('button', { name: /icon button/i })).toBeInTheDocument()
    })

    it('should forward ref to button element', () => {
      const ref = vi.fn()
      render(<Button ref={ref}>Click me</Button>)
      expect(ref).toHaveBeenCalled()
    })

    it('should apply custom className', () => {
      render(<Button className="custom-class">Click me</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('custom-class')
    })

    it('should have button type by default', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })

    it('should accept custom type attribute', () => {
      render(<Button type="submit">Submit</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
    })
  })

  describe('Variants', () => {
    it('should render primary variant', () => {
      render(<Button variant="primary">Primary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-blue-600')
    })

    it('should render secondary variant', () => {
      render(<Button variant="secondary">Secondary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-gray-600')
    })

    it('should render danger variant', () => {
      render(<Button variant="danger">Danger</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-red-600')
    })

    it('should render ghost variant', () => {
      render(<Button variant="ghost">Ghost</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-transparent')
    })

    it('should render outline variant', () => {
      render(<Button variant="outline">Outline</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('border-2')
    })
  })

  describe('Sizes', () => {
    it('should render xs size', () => {
      render(<Button size="xs">Extra Small</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-2.5', 'py-1.5', 'text-xs')
    })

    it('should render sm size', () => {
      render(<Button size="sm">Small</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-3', 'py-2', 'text-sm')
    })

    it('should render md size (default)', () => {
      render(<Button size="md">Medium</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-4', 'py-2.5', 'text-base')
    })

    it('should render lg size', () => {
      render(<Button size="lg">Large</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-5', 'py-3', 'text-lg')
    })

    it('should render xl size', () => {
      render(<Button size="xl">Extra Large</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-6', 'py-3.5', 'text-xl')
    })
  })

  describe('States', () => {
    it('should render disabled state', () => {
      render(<Button disabled>Disabled</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
      expect(button).toHaveAttribute('aria-disabled', 'true')
      expect(button).toHaveClass('opacity-50', 'cursor-not-allowed')
    })

    it('should render loading state', () => {
      render(<Button loading>Loading</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
      expect(button).toHaveAttribute('aria-busy', 'true')
      expect(button).toHaveClass('opacity-50')

      // Check spinner is present
      const spinner = button.querySelector('svg')
      expect(spinner).toBeInTheDocument()
      expect(spinner).toHaveClass('animate-spin')
    })

    it('should not show icon when loading', () => {
      const Icon = () => <span data-testid="custom-icon">Icon</span>
      render(
        <Button loading icon={<Icon />}>
          Loading
        </Button>
      )
      expect(screen.queryByTestId('custom-icon')).not.toBeInTheDocument()
    })
  })

  describe('Full Width', () => {
    it('should render with full width', () => {
      render(<Button fullWidth>Full Width</Button>)
      expect(screen.getByRole('button')).toHaveClass('w-full')
    })

    it('should not render full width by default', () => {
      render(<Button>Normal Width</Button>)
      expect(screen.getByRole('button')).not.toHaveClass('w-full')
    })
  })

  describe('Icons', () => {
    const Icon = () => <span data-testid="custom-icon">Icon</span>

    it('should render icon on left by default', () => {
      render(
        <Button icon={<Icon />}>
          With Icon
        </Button>
      )
      const button = screen.getByRole('button')
      const icon = screen.getByTestId('custom-icon')
      const text = screen.getByText('With Icon')

      expect(icon).toBeInTheDocument()
      expect(button.firstChild).toContainElement(icon.parentElement)
    })

    it('should render icon on right', () => {
      render(
        <Button icon={<Icon />} iconPosition="right">
          With Icon
        </Button>
      )
      const button = screen.getByRole('button')
      const icon = screen.getByTestId('custom-icon')

      expect(icon).toBeInTheDocument()
      expect(button.lastChild).toContainElement(icon.parentElement)
    })

    it('should render icon without text', () => {
      render(<Button icon={<Icon />} aria-label="Icon only" />)
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
    })

    it('should hide icon during loading', () => {
      render(
        <Button icon={<Icon />} loading>
          Loading
        </Button>
      )
      expect(screen.queryByTestId('custom-icon')).not.toBeInTheDocument()
    })
  })

  describe('Interactions', () => {
    it('should handle click events', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(<Button onClick={handleClick}>Click me</Button>)
      await user.click(screen.getByRole('button'))

      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should not trigger click when disabled', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(
        <Button onClick={handleClick} disabled>
          Click me
        </Button>
      )
      await user.click(screen.getByRole('button'))

      expect(handleClick).not.toHaveBeenCalled()
    })

    it('should not trigger click when loading', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(
        <Button onClick={handleClick} loading>
          Click me
        </Button>
      )
      await user.click(screen.getByRole('button'))

      expect(handleClick).not.toHaveBeenCalled()
    })

    it('should be keyboard accessible', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(<Button onClick={handleClick}>Click me</Button>)
      const button = screen.getByRole('button')
      button.focus()

      expect(button).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalledTimes(1)

      await user.keyboard(' ')
      expect(handleClick).toHaveBeenCalledTimes(2)
    })
  })

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      render(<Button>Accessible Button</Button>)
      const button = screen.getByRole('button')

      expect(button).toHaveAttribute('aria-disabled', 'false')
      expect(button).toHaveAttribute('aria-busy', 'false')
    })

    it('should have aria-disabled when disabled', () => {
      render(<Button disabled>Disabled Button</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true')
    })

    it('should have aria-busy when loading', () => {
      render(<Button loading>Loading Button</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')
    })

    it('should hide icons from screen readers', () => {
      const Icon = () => <span>Icon</span>
      render(<Button icon={<Icon />}>With Icon</Button>)

      const iconWrapper = screen.getByRole('button').querySelector('[aria-hidden="true"]')
      expect(iconWrapper).toBeInTheDocument()
    })

    it('should have focus ring styles', () => {
      render(<Button>Focusable</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('focus:ring-2', 'focus:ring-offset-2')
    })
  })

  describe('Default Props', () => {
    it('should use default variant (primary)', () => {
      render(<Button>Default</Button>)
      expect(screen.getByRole('button')).toHaveClass('bg-blue-600')
    })

    it('should use default size (md)', () => {
      render(<Button>Default</Button>)
      expect(screen.getByRole('button')).toHaveClass('px-4', 'py-2.5')
    })

    it('should use default iconPosition (left)', () => {
      const Icon = () => <span data-testid="icon">Icon</span>
      render(
        <Button icon={<Icon />}>
          Text
        </Button>
      )
      const button = screen.getByRole('button')
      const icon = screen.getByTestId('icon')

      expect(button.firstChild).toContainElement(icon.parentElement)
    })

    it('should not be disabled by default', () => {
      render(<Button>Default</Button>)
      expect(screen.getByRole('button')).not.toBeDisabled()
    })

    it('should not be loading by default', () => {
      render(<Button>Default</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('aria-busy', 'false')
      expect(button.querySelector('svg')).not.toBeInTheDocument()
    })

    it('should not be full width by default', () => {
      render(<Button>Default</Button>)
      expect(screen.getByRole('button')).not.toHaveClass('w-full')
    })
  })

  describe('Edge Cases', () => {
    it('should handle both disabled and loading states', () => {
      render(
        <Button disabled loading>
          Both States
        </Button>
      )
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
      expect(button).toHaveAttribute('aria-busy', 'true')
      expect(button).toHaveAttribute('aria-disabled', 'true')
    })

    it('should render with only icon and no children', () => {
      const Icon = () => <span data-testid="icon">Icon</span>
      render(<Button icon={<Icon />} aria-label="Icon only button" />)

      expect(screen.getByTestId('icon')).toBeInTheDocument()
      expect(screen.queryByText('Icon')).toBeInTheDocument() // Icon text itself
    })

    it('should spread additional props to button element', () => {
      render(
        <Button data-testid="custom-button" aria-label="Custom">
          Click
        </Button>
      )
      expect(screen.getByTestId('custom-button')).toBeInTheDocument()
      expect(screen.getByLabelText('Custom')).toBeInTheDocument()
    })

    it('should maintain aspect ratio with different sizes and variants', () => {
      const { rerender } = render(
        <Button variant="primary" size="xs">
          XS Primary
        </Button>
      )
      expect(screen.getByRole('button')).toHaveClass('bg-blue-600', 'px-2.5')

      rerender(
        <Button variant="danger" size="xl">
          XL Danger
        </Button>
      )
      expect(screen.getByRole('button')).toHaveClass('bg-red-600', 'px-6')
    })
  })
})
