import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Badge } from './Badge'

describe('Badge', () => {
  describe('Rendering', () => {
    it('should render with children', () => {
      render(<Badge>New</Badge>)
      expect(screen.getByText('New')).toBeInTheDocument()
    })

    it('should render without children', () => {
      render(<Badge data-testid="badge" />)
      expect(screen.getByTestId('badge')).toBeInTheDocument()
    })

    it('should forward ref to span element', () => {
      const ref = vi.fn()
      render(<Badge ref={ref}>Badge</Badge>)
      expect(ref).toHaveBeenCalled()
    })

    it('should apply custom className', () => {
      render(<Badge className="custom-class">Badge</Badge>)
      const badge = screen.getByText('Badge')
      expect(badge).toHaveClass('custom-class')
    })

    it('should spread additional props to span element', () => {
      render(
        <Badge data-testid="custom-badge" aria-label="Custom">
          Badge
        </Badge>
      )
      expect(screen.getByTestId('custom-badge')).toBeInTheDocument()
      expect(screen.getByLabelText('Custom')).toBeInTheDocument()
    })
  })

  describe('Variants', () => {
    it('should render solid variant (default)', () => {
      render(<Badge variant="solid">Solid</Badge>)
      const badge = screen.getByText('Solid')
      expect(badge).toHaveClass('bg-blue-600', 'text-white')
    })

    it('should render subtle variant', () => {
      render(<Badge variant="subtle">Subtle</Badge>)
      const badge = screen.getByText('Subtle')
      expect(badge).toHaveClass('bg-blue-100', 'text-blue-800')
    })

    it('should render outline variant', () => {
      render(<Badge variant="outline">Outline</Badge>)
      const badge = screen.getByText('Outline')
      expect(badge).toHaveClass('bg-transparent', 'border', 'border-blue-600')
    })
  })

  describe('Colors', () => {
    it('should render primary color (default)', () => {
      render(<Badge color="primary">Primary</Badge>)
      const badge = screen.getByText('Primary')
      expect(badge).toHaveClass('bg-blue-600')
    })

    it('should render secondary color', () => {
      render(<Badge color="secondary">Secondary</Badge>)
      const badge = screen.getByText('Secondary')
      expect(badge).toHaveClass('bg-gray-600')
    })

    it('should render success color', () => {
      render(<Badge color="success">Success</Badge>)
      const badge = screen.getByText('Success')
      expect(badge).toHaveClass('bg-green-600')
    })

    it('should render warning color', () => {
      render(<Badge color="warning">Warning</Badge>)
      const badge = screen.getByText('Warning')
      expect(badge).toHaveClass('bg-yellow-600')
    })

    it('should render error color', () => {
      render(<Badge color="error">Error</Badge>)
      const badge = screen.getByText('Error')
      expect(badge).toHaveClass('bg-red-600')
    })

    it('should render info color', () => {
      render(<Badge color="info">Info</Badge>)
      const badge = screen.getByText('Info')
      expect(badge).toHaveClass('bg-cyan-600')
    })
  })

  describe('Sizes', () => {
    it('should render sm size', () => {
      render(<Badge size="sm">Small</Badge>)
      const badge = screen.getByText('Small')
      expect(badge).toHaveClass('px-2', 'py-0.5', 'text-xs')
    })

    it('should render md size (default)', () => {
      render(<Badge size="md">Medium</Badge>)
      const badge = screen.getByText('Medium')
      expect(badge).toHaveClass('px-2.5', 'py-1', 'text-sm')
    })

    it('should render lg size', () => {
      render(<Badge size="lg">Large</Badge>)
      const badge = screen.getByText('Large')
      expect(badge).toHaveClass('px-3', 'py-1.5', 'text-base')
    })
  })

  describe('Dot Indicator', () => {
    it('should not show dot by default', () => {
      const { container } = render(<Badge>No Dot</Badge>)
      const dots = container.querySelectorAll('[aria-hidden="true"]')
      // Filter out only dots (small circles), not other aria-hidden elements
      const dotElements = Array.from(dots).filter((el) =>
        el.classList.contains('rounded-full') &&
        (el.classList.contains('h-1.5') || el.classList.contains('h-2') || el.classList.contains('h-2.5'))
      )
      expect(dotElements).toHaveLength(0)
    })

    it('should show dot when dot prop is true', () => {
      const { container } = render(<Badge dot>With Dot</Badge>)
      const dots = container.querySelectorAll('[aria-hidden="true"]')
      const dotElements = Array.from(dots).filter((el) =>
        el.classList.contains('rounded-full') &&
        (el.classList.contains('h-1.5') || el.classList.contains('h-2') || el.classList.contains('h-2.5'))
      )
      expect(dotElements.length).toBeGreaterThan(0)
    })

    it('should render dot with correct size for sm badge', () => {
      const { container } = render(<Badge dot size="sm">Small</Badge>)
      const dot = container.querySelector('.h-1\\.5')
      expect(dot).toBeInTheDocument()
    })

    it('should render dot with correct size for md badge', () => {
      const { container } = render(<Badge dot size="md">Medium</Badge>)
      const dot = container.querySelector('.h-2')
      expect(dot).toBeInTheDocument()
    })

    it('should render dot with correct size for lg badge', () => {
      const { container } = render(<Badge dot size="lg">Large</Badge>)
      const dot = container.querySelector('.h-2\\.5')
      expect(dot).toBeInTheDocument()
    })

    it('should render white dot for solid variant', () => {
      const { container } = render(
        <Badge variant="solid" dot>
          Solid
        </Badge>
      )
      const dot = container.querySelector('.bg-white')
      expect(dot).toBeInTheDocument()
    })

    it('should render colored dot for subtle variant', () => {
      const { container } = render(
        <Badge variant="subtle" color="success" dot>
          Subtle
        </Badge>
      )
      const dot = container.querySelector('.bg-green-600')
      expect(dot).toBeInTheDocument()
    })

    it('should render colored dot for outline variant', () => {
      const { container } = render(
        <Badge variant="outline" color="error" dot>
          Outline
        </Badge>
      )
      const dot = container.querySelector('.bg-red-600')
      expect(dot).toBeInTheDocument()
    })
  })

  describe('Removable', () => {
    it('should not show remove button by default', () => {
      render(<Badge>Not Removable</Badge>)
      const removeButton = screen.queryByRole('button', { name: /remove/i })
      expect(removeButton).not.toBeInTheDocument()
    })

    it('should show remove button when removable is true and onRemove is provided', () => {
      const handleRemove = vi.fn()
      render(
        <Badge removable onRemove={handleRemove}>
          Removable
        </Badge>
      )
      const removeButton = screen.getByRole('button', { name: /remove/i })
      expect(removeButton).toBeInTheDocument()
    })

    it('should not show remove button when removable is true but onRemove is not provided', () => {
      render(<Badge removable>No Callback</Badge>)
      const removeButton = screen.queryByRole('button', { name: /remove/i })
      expect(removeButton).not.toBeInTheDocument()
    })

    it('should call onRemove when remove button is clicked', async () => {
      const handleRemove = vi.fn()
      const user = userEvent.setup()

      render(
        <Badge removable onRemove={handleRemove}>
          Removable
        </Badge>
      )
      const removeButton = screen.getByRole('button', { name: /remove/i })
      await user.click(removeButton)

      expect(handleRemove).toHaveBeenCalledTimes(1)
    })

    it('should stop propagation when remove button is clicked', async () => {
      const handleRemove = vi.fn()
      const handleBadgeClick = vi.fn()
      const user = userEvent.setup()

      const { container } = render(
        <Badge removable onRemove={handleRemove} onClick={handleBadgeClick}>
          Removable
        </Badge>
      )
      const removeButton = screen.getByRole('button', { name: /remove/i })
      await user.click(removeButton)

      expect(handleRemove).toHaveBeenCalledTimes(1)
      expect(handleBadgeClick).not.toHaveBeenCalled()
    })

    it('should call onRemove when Enter key is pressed on remove button', async () => {
      const handleRemove = vi.fn()
      const user = userEvent.setup()

      render(
        <Badge removable onRemove={handleRemove}>
          Removable
        </Badge>
      )
      const removeButton = screen.getByRole('button', { name: /remove/i })
      removeButton.focus()
      await user.keyboard('{Enter}')

      expect(handleRemove).toHaveBeenCalledTimes(1)
    })

    it('should call onRemove when Space key is pressed on remove button', async () => {
      const handleRemove = vi.fn()
      const user = userEvent.setup()

      render(
        <Badge removable onRemove={handleRemove}>
          Removable
        </Badge>
      )
      const removeButton = screen.getByRole('button', { name: /remove/i })
      removeButton.focus()
      await user.keyboard(' ')

      expect(handleRemove).toHaveBeenCalledTimes(1)
    })

    it('should not call onRemove when other keys are pressed', async () => {
      const handleRemove = vi.fn()
      const user = userEvent.setup()

      render(
        <Badge removable onRemove={handleRemove}>
          Removable
        </Badge>
      )
      const removeButton = screen.getByRole('button', { name: /remove/i })
      removeButton.focus()
      await user.keyboard('a')

      expect(handleRemove).not.toHaveBeenCalled()
    })

    it('should have focus ring styles on remove button', () => {
      const handleRemove = vi.fn()
      render(
        <Badge removable onRemove={handleRemove}>
          Removable
        </Badge>
      )
      const removeButton = screen.getByRole('button', { name: /remove/i })
      expect(removeButton).toHaveClass('focus:ring-2', 'focus:ring-offset-1')
    })

    it('should hide remove button icon from screen readers', () => {
      const handleRemove = vi.fn()
      render(
        <Badge removable onRemove={handleRemove}>
          Removable
        </Badge>
      )
      const removeButton = screen.getByRole('button', { name: /remove/i })
      const icon = removeButton.querySelector('svg')
      expect(icon).toHaveAttribute('aria-hidden', 'true')
    })
  })

  describe('Variant and Color Combinations', () => {
    it('should combine solid variant with all colors', () => {
      const { rerender } = render(
        <Badge variant="solid" color="primary">
          Primary
        </Badge>
      )
      expect(screen.getByText('Primary')).toHaveClass('bg-blue-600')

      rerender(
        <Badge variant="solid" color="secondary">
          Secondary
        </Badge>
      )
      expect(screen.getByText('Secondary')).toHaveClass('bg-gray-600')

      rerender(
        <Badge variant="solid" color="success">
          Success
        </Badge>
      )
      expect(screen.getByText('Success')).toHaveClass('bg-green-600')

      rerender(
        <Badge variant="solid" color="warning">
          Warning
        </Badge>
      )
      expect(screen.getByText('Warning')).toHaveClass('bg-yellow-600')

      rerender(
        <Badge variant="solid" color="error">
          Error
        </Badge>
      )
      expect(screen.getByText('Error')).toHaveClass('bg-red-600')

      rerender(
        <Badge variant="solid" color="info">
          Info
        </Badge>
      )
      expect(screen.getByText('Info')).toHaveClass('bg-cyan-600')
    })

    it('should combine subtle variant with all colors', () => {
      const { rerender } = render(
        <Badge variant="subtle" color="primary">
          Primary
        </Badge>
      )
      expect(screen.getByText('Primary')).toHaveClass('bg-blue-100', 'text-blue-800')

      rerender(
        <Badge variant="subtle" color="success">
          Success
        </Badge>
      )
      expect(screen.getByText('Success')).toHaveClass('bg-green-100', 'text-green-800')
    })

    it('should combine outline variant with all colors', () => {
      const { rerender } = render(
        <Badge variant="outline" color="primary">
          Primary
        </Badge>
      )
      expect(screen.getByText('Primary')).toHaveClass('border-blue-600')

      rerender(
        <Badge variant="outline" color="error">
          Error
        </Badge>
      )
      expect(screen.getByText('Error')).toHaveClass('border-red-600')
    })
  })

  describe('Combined Features', () => {
    it('should render badge with dot and removable', async () => {
      const handleRemove = vi.fn()
      const user = userEvent.setup()
      const { container } = render(
        <Badge dot removable onRemove={handleRemove}>
          Complete
        </Badge>
      )

      // Check dot is present
      const dots = container.querySelectorAll('[aria-hidden="true"]')
      const dotElements = Array.from(dots).filter((el) =>
        el.classList.contains('rounded-full') &&
        (el.classList.contains('h-1.5') || el.classList.contains('h-2') || el.classList.contains('h-2.5'))
      )
      expect(dotElements.length).toBeGreaterThan(0)

      // Check remove button is present and works
      const removeButton = screen.getByRole('button', { name: /remove/i })
      expect(removeButton).toBeInTheDocument()
      await user.click(removeButton)
      expect(handleRemove).toHaveBeenCalledTimes(1)
    })

    it('should render all features together', () => {
      const handleRemove = vi.fn()
      const { container } = render(
        <Badge
          variant="subtle"
          color="success"
          size="lg"
          dot
          removable
          onRemove={handleRemove}
        >
          Complete
        </Badge>
      )

      const badge = screen.getByText('Complete')
      expect(badge).toHaveClass('bg-green-100', 'text-green-800', 'px-3', 'py-1.5', 'text-base')

      const dots = container.querySelectorAll('[aria-hidden="true"]')
      const dotElements = Array.from(dots).filter((el) =>
        el.classList.contains('rounded-full') &&
        (el.classList.contains('h-1.5') || el.classList.contains('h-2') || el.classList.contains('h-2.5'))
      )
      expect(dotElements.length).toBeGreaterThan(0)

      const removeButton = screen.getByRole('button', { name: /remove/i })
      expect(removeButton).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have proper base styles', () => {
      render(<Badge>Accessible</Badge>)
      const badge = screen.getByText('Accessible')
      expect(badge).toHaveClass('inline-flex', 'items-center', 'rounded-full')
    })

    it('should be keyboard accessible for remove button', async () => {
      const handleRemove = vi.fn()
      const user = userEvent.setup()

      render(
        <Badge removable onRemove={handleRemove}>
          Removable
        </Badge>
      )
      const removeButton = screen.getByRole('button', { name: /remove/i })

      // Tab to button
      await user.tab()
      expect(removeButton).toHaveFocus()

      // Press Enter
      await user.keyboard('{Enter}')
      expect(handleRemove).toHaveBeenCalledTimes(1)

      // Press Space
      await user.keyboard(' ')
      expect(handleRemove).toHaveBeenCalledTimes(2)
    })

    it('should have aria-label on remove button', () => {
      const handleRemove = vi.fn()
      render(
        <Badge removable onRemove={handleRemove}>
          Removable
        </Badge>
      )
      const removeButton = screen.getByRole('button', { name: /remove/i })
      expect(removeButton).toHaveAttribute('aria-label', 'Remove')
    })

    it('should hide decorative elements from screen readers', () => {
      const handleRemove = vi.fn()
      const { container } = render(
        <Badge dot removable onRemove={handleRemove}>
          Badge
        </Badge>
      )

      const ariaHidden = container.querySelectorAll('[aria-hidden="true"]')
      expect(ariaHidden.length).toBeGreaterThan(0)
    })
  })

  describe('Default Props', () => {
    it('should use default variant (solid)', () => {
      render(<Badge>Default</Badge>)
      expect(screen.getByText('Default')).toHaveClass('bg-blue-600')
    })

    it('should use default color (primary)', () => {
      render(<Badge>Default</Badge>)
      expect(screen.getByText('Default')).toHaveClass('bg-blue-600')
    })

    it('should use default size (md)', () => {
      render(<Badge>Default</Badge>)
      expect(screen.getByText('Default')).toHaveClass('px-2.5', 'py-1')
    })

    it('should not show dot by default', () => {
      const { container } = render(<Badge>Default</Badge>)
      const dots = container.querySelectorAll('[aria-hidden="true"]')
      const dotElements = Array.from(dots).filter((el) =>
        el.classList.contains('rounded-full') &&
        (el.classList.contains('h-1.5') || el.classList.contains('h-2') || el.classList.contains('h-2.5'))
      )
      expect(dotElements).toHaveLength(0)
    })

    it('should not be removable by default', () => {
      render(<Badge>Default</Badge>)
      const removeButton = screen.queryByRole('button', { name: /remove/i })
      expect(removeButton).not.toBeInTheDocument()
    })
  })

  describe('Edge Cases', () => {
    it('should handle empty children', () => {
      const { container } = render(<Badge />)
      expect(container.querySelector('span')).toBeInTheDocument()
    })

    it('should handle long text content', () => {
      render(<Badge>This is a very long badge text that should still render properly</Badge>)
      expect(screen.getByText(/This is a very long/)).toBeInTheDocument()
    })

    it('should maintain styles with different size and variant combinations', () => {
      const { rerender } = render(
        <Badge variant="solid" size="sm" color="primary">
          Small Solid
        </Badge>
      )
      expect(screen.getByText('Small Solid')).toHaveClass('bg-blue-600', 'px-2', 'py-0.5')

      rerender(
        <Badge variant="outline" size="lg" color="error">
          Large Outline
        </Badge>
      )
      expect(screen.getByText('Large Outline')).toHaveClass('border-red-600', 'px-3', 'py-1.5')
    })

    it('should handle multiple badges rendered together', () => {
      render(
        <div>
          <Badge>First</Badge>
          <Badge>Second</Badge>
          <Badge>Third</Badge>
        </div>
      )
      expect(screen.getByText('First')).toBeInTheDocument()
      expect(screen.getByText('Second')).toBeInTheDocument()
      expect(screen.getByText('Third')).toBeInTheDocument()
    })
  })
})
