import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Card from './Card'

describe('Card', () => {
  describe('Rendering', () => {
    it('should render with children', () => {
      render(<Card>Card content</Card>)
      expect(screen.getByText('Card content')).toBeInTheDocument()
    })

    it('should render as article element', () => {
      render(<Card data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card.tagName).toBe('ARTICLE')
    })

    it('should forward ref to article element', () => {
      const ref = vi.fn()
      render(<Card ref={ref}>Content</Card>)
      expect(ref).toHaveBeenCalled()
    })

    it('should apply custom className', () => {
      render(<Card className="custom-class" data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('custom-class')
    })

    it('should render without children', () => {
      render(<Card data-testid="card" aria-label="Empty card" />)
      expect(screen.getByTestId('card')).toBeInTheDocument()
    })
  })

  describe('Variants', () => {
    it('should render elevated variant by default', () => {
      render(<Card data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('shadow-lg')
    })

    it('should render elevated variant', () => {
      render(<Card variant="elevated" data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('shadow-lg', 'bg-white')
    })

    it('should render outlined variant', () => {
      render(<Card variant="outlined" data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('border-2', 'border-gray-200')
    })

    it('should render filled variant', () => {
      render(<Card variant="filled" data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('bg-gray-50')
    })

    it('should have rounded corners', () => {
      render(<Card data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('rounded-lg')
    })

    it('should have overflow hidden', () => {
      render(<Card data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('overflow-hidden')
    })
  })

  describe('Hoverable', () => {
    it('should not have hover styles by default', () => {
      render(<Card variant="elevated" data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).not.toHaveClass('hover:shadow-xl')
    })

    it('should apply hover styles when hoverable is true for elevated variant', () => {
      render(<Card variant="elevated" hoverable data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('hover:shadow-xl', 'hover:-translate-y-0.5')
    })

    it('should apply hover styles when hoverable is true for outlined variant', () => {
      render(<Card variant="outlined" hoverable data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('hover:border-gray-300', 'hover:shadow-md')
    })

    it('should apply hover styles when hoverable is true for filled variant', () => {
      render(<Card variant="filled" hoverable data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('hover:bg-gray-100')
    })

    it('should have transition styles when hoverable', () => {
      render(<Card hoverable data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('transition-all', 'duration-200')
    })
  })

  describe('Clickable', () => {
    it('should not have clickable styles by default', () => {
      render(<Card data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).not.toHaveClass('cursor-pointer')
      expect(card).not.toHaveAttribute('role', 'button')
      expect(card).not.toHaveAttribute('tabIndex')
    })

    it('should apply cursor pointer when clickable', () => {
      render(<Card clickable data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('cursor-pointer')
    })

    it('should have button role when clickable', () => {
      render(<Card clickable data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveAttribute('role', 'button')
    })

    it('should be keyboard accessible when clickable', () => {
      render(<Card clickable data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveAttribute('tabIndex', '0')
    })

    it('should have aria-pressed attribute when clickable', () => {
      render(<Card clickable data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveAttribute('aria-pressed', 'false')
    })

    it('should have active scale styles when clickable', () => {
      render(<Card clickable data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('active:scale-[0.98]')
    })

    it('should have focus ring when clickable', () => {
      render(<Card clickable data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('focus:ring-2', 'focus:ring-offset-2')
    })
  })

  describe('Interactions', () => {
    it('should handle click events when clickable', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(<Card clickable onClick={handleClick} data-testid="card">Content</Card>)
      await user.click(screen.getByTestId('card'))

      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should not trigger click when not clickable', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(<Card onClick={handleClick} data-testid="card">Content</Card>)
      await user.click(screen.getByTestId('card'))

      expect(handleClick).not.toHaveBeenCalled()
    })

    it('should handle Enter key when clickable', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(<Card clickable onClick={handleClick} data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      card.focus()

      await user.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should handle Space key when clickable', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(<Card clickable onClick={handleClick} data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      card.focus()

      await user.keyboard(' ')
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should not handle keyboard events when not clickable', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(<Card onClick={handleClick} data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')

      await user.keyboard('{Enter}')
      await user.keyboard(' ')

      expect(handleClick).not.toHaveBeenCalled()
    })

    it('should be focusable when clickable', () => {
      render(<Card clickable data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      card.focus()

      expect(card).toHaveFocus()
    })
  })

  describe('Composability', () => {
    it('should render with Header, Body, and Footer', () => {
      render(
        <Card>
          <Card.Header>Header Content</Card.Header>
          <Card.Body>Body Content</Card.Body>
          <Card.Footer>Footer Content</Card.Footer>
        </Card>
      )

      expect(screen.getByText('Header Content')).toBeInTheDocument()
      expect(screen.getByText('Body Content')).toBeInTheDocument()
      expect(screen.getByText('Footer Content')).toBeInTheDocument()
    })

    it('should render with only Body', () => {
      render(
        <Card>
          <Card.Body>Body Only</Card.Body>
        </Card>
      )

      expect(screen.getByText('Body Only')).toBeInTheDocument()
    })

    it('should render with Header and Body only', () => {
      render(
        <Card>
          <Card.Header>Header</Card.Header>
          <Card.Body>Body</Card.Body>
        </Card>
      )

      expect(screen.getByText('Header')).toBeInTheDocument()
      expect(screen.getByText('Body')).toBeInTheDocument()
    })

    it('should render with Body and Footer only', () => {
      render(
        <Card>
          <Card.Body>Body</Card.Body>
          <Card.Footer>Footer</Card.Footer>
        </Card>
      )

      expect(screen.getByText('Body')).toBeInTheDocument()
      expect(screen.getByText('Footer')).toBeInTheDocument()
    })

    it('should render multiple Body sections', () => {
      render(
        <Card>
          <Card.Body>First Body</Card.Body>
          <Card.Body>Second Body</Card.Body>
        </Card>
      )

      expect(screen.getByText('First Body')).toBeInTheDocument()
      expect(screen.getByText('Second Body')).toBeInTheDocument()
    })
  })

  describe('Card.Header', () => {
    it('should render as section element', () => {
      render(<Card.Header data-testid="header">Header</Card.Header>)
      const header = screen.getByTestId('header')
      expect(header.tagName).toBe('SECTION')
    })

    it('should have border bottom', () => {
      render(<Card.Header data-testid="header">Header</Card.Header>)
      const header = screen.getByTestId('header')
      expect(header).toHaveClass('border-b', 'border-gray-200')
    })

    it('should have padding', () => {
      render(<Card.Header data-testid="header">Header</Card.Header>)
      const header = screen.getByTestId('header')
      expect(header).toHaveClass('px-6', 'py-4')
    })

    it('should apply custom className', () => {
      render(<Card.Header className="custom-header" data-testid="header">Header</Card.Header>)
      const header = screen.getByTestId('header')
      expect(header).toHaveClass('custom-header')
    })

    it('should forward ref', () => {
      const ref = vi.fn()
      render(<Card.Header ref={ref}>Header</Card.Header>)
      expect(ref).toHaveBeenCalled()
    })

    it('should accept additional props', () => {
      render(<Card.Header data-testid="header" aria-label="Card header">Header</Card.Header>)
      const header = screen.getByTestId('header')
      expect(header).toHaveAttribute('aria-label', 'Card header')
    })
  })

  describe('Card.Body', () => {
    it('should render as section element', () => {
      render(<Card.Body data-testid="body">Body</Card.Body>)
      const body = screen.getByTestId('body')
      expect(body.tagName).toBe('SECTION')
    })

    it('should have padding', () => {
      render(<Card.Body data-testid="body">Body</Card.Body>)
      const body = screen.getByTestId('body')
      expect(body).toHaveClass('px-6', 'py-4')
    })

    it('should not have border by default', () => {
      render(<Card.Body data-testid="body">Body</Card.Body>)
      const body = screen.getByTestId('body')
      expect(body).not.toHaveClass('border-t')
      expect(body).not.toHaveClass('border-b')
    })

    it('should apply custom className', () => {
      render(<Card.Body className="custom-body" data-testid="body">Body</Card.Body>)
      const body = screen.getByTestId('body')
      expect(body).toHaveClass('custom-body')
    })

    it('should forward ref', () => {
      const ref = vi.fn()
      render(<Card.Body ref={ref}>Body</Card.Body>)
      expect(ref).toHaveBeenCalled()
    })

    it('should accept additional props', () => {
      render(<Card.Body data-testid="body" aria-label="Card body">Body</Card.Body>)
      const body = screen.getByTestId('body')
      expect(body).toHaveAttribute('aria-label', 'Card body')
    })
  })

  describe('Card.Footer', () => {
    it('should render as section element', () => {
      render(<Card.Footer data-testid="footer">Footer</Card.Footer>)
      const footer = screen.getByTestId('footer')
      expect(footer.tagName).toBe('SECTION')
    })

    it('should have border top', () => {
      render(<Card.Footer data-testid="footer">Footer</Card.Footer>)
      const footer = screen.getByTestId('footer')
      expect(footer).toHaveClass('border-t', 'border-gray-200')
    })

    it('should have padding', () => {
      render(<Card.Footer data-testid="footer">Footer</Card.Footer>)
      const footer = screen.getByTestId('footer')
      expect(footer).toHaveClass('px-6', 'py-4')
    })

    it('should apply custom className', () => {
      render(<Card.Footer className="custom-footer" data-testid="footer">Footer</Card.Footer>)
      const footer = screen.getByTestId('footer')
      expect(footer).toHaveClass('custom-footer')
    })

    it('should forward ref', () => {
      const ref = vi.fn()
      render(<Card.Footer ref={ref}>Footer</Card.Footer>)
      expect(ref).toHaveBeenCalled()
    })

    it('should accept additional props', () => {
      render(<Card.Footer data-testid="footer" aria-label="Card footer">Footer</Card.Footer>)
      const footer = screen.getByTestId('footer')
      expect(footer).toHaveAttribute('aria-label', 'Card footer')
    })
  })

  describe('Accessibility', () => {
    it('should have proper ARIA attributes for clickable cards', () => {
      render(<Card clickable data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')

      expect(card).toHaveAttribute('role', 'button')
      expect(card).toHaveAttribute('tabIndex', '0')
      expect(card).toHaveAttribute('aria-pressed', 'false')
    })

    it('should accept aria-label', () => {
      render(<Card aria-label="Product card" data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveAttribute('aria-label', 'Product card')
    })

    it('should not have button attributes when not clickable', () => {
      render(<Card data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')

      expect(card).not.toHaveAttribute('role')
      expect(card).not.toHaveAttribute('tabIndex')
      expect(card).not.toHaveAttribute('aria-pressed')
    })

    it('should have focus ring styles when clickable', () => {
      render(<Card clickable data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('focus:ring-2', 'focus:ring-offset-2', 'focus:ring-blue-500')
    })

    it('should use semantic HTML (article)', () => {
      render(<Card data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card.tagName).toBe('ARTICLE')
    })

    it('should use semantic HTML (section) for sub-components', () => {
      render(
        <Card>
          <Card.Header data-testid="header">Header</Card.Header>
          <Card.Body data-testid="body">Body</Card.Body>
          <Card.Footer data-testid="footer">Footer</Card.Footer>
        </Card>
      )

      expect(screen.getByTestId('header').tagName).toBe('SECTION')
      expect(screen.getByTestId('body').tagName).toBe('SECTION')
      expect(screen.getByTestId('footer').tagName).toBe('SECTION')
    })
  })

  describe('Combined Features', () => {
    it('should work with both hoverable and clickable', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(
        <Card variant="outlined" hoverable clickable onClick={handleClick} data-testid="card">
          Content
        </Card>
      )

      const card = screen.getByTestId('card')
      expect(card).toHaveClass('hover:border-gray-300', 'cursor-pointer')

      await user.click(card)
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should work with all variants when hoverable', () => {
      const { rerender } = render(
        <Card variant="elevated" hoverable data-testid="card">Content</Card>
      )
      expect(screen.getByTestId('card')).toHaveClass('hover:shadow-xl')

      rerender(
        <Card variant="outlined" hoverable data-testid="card">Content</Card>
      )
      expect(screen.getByTestId('card')).toHaveClass('hover:border-gray-300')

      rerender(
        <Card variant="filled" hoverable data-testid="card">Content</Card>
      )
      expect(screen.getByTestId('card')).toHaveClass('hover:bg-gray-100')
    })

    it('should render complex card structure', () => {
      render(
        <Card variant="outlined" hoverable clickable data-testid="card">
          <Card.Header>
            <h2>Card Title</h2>
            <p>Subtitle</p>
          </Card.Header>
          <Card.Body>
            <p>Main content</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
          </Card.Body>
          <Card.Footer>
            <button>Action</button>
          </Card.Footer>
        </Card>
      )

      expect(screen.getByText('Card Title')).toBeInTheDocument()
      expect(screen.getByText('Subtitle')).toBeInTheDocument()
      expect(screen.getByText('Main content')).toBeInTheDocument()
      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Action')).toBeInTheDocument()
    })
  })

  describe('Default Props', () => {
    it('should use default variant (elevated)', () => {
      render(<Card data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('shadow-lg')
    })

    it('should not be hoverable by default', () => {
      render(<Card data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).not.toHaveClass('hover:shadow-xl')
    })

    it('should not be clickable by default', () => {
      render(<Card data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).not.toHaveClass('cursor-pointer')
      expect(card).not.toHaveAttribute('role', 'button')
    })
  })

  describe('Edge Cases', () => {
    it('should handle empty card', () => {
      render(<Card data-testid="card" />)
      expect(screen.getByTestId('card')).toBeInTheDocument()
    })

    it('should spread additional props to card element', () => {
      render(
        <Card data-testid="custom-card" aria-label="Custom" id="my-card">
          Content
        </Card>
      )
      const card = screen.getByTestId('custom-card')
      expect(card).toHaveAttribute('aria-label', 'Custom')
      expect(card).toHaveAttribute('id', 'my-card')
    })

    it('should prevent default on Space key', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(<Card clickable onClick={handleClick} data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      card.focus()

      // This simulates Space key press and ensures it doesn't scroll the page
      await user.keyboard(' ')
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should handle rapid clicks', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(<Card clickable onClick={handleClick} data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')

      await user.click(card)
      await user.click(card)
      await user.click(card)

      expect(handleClick).toHaveBeenCalledTimes(3)
    })

    it('should maintain styles with different combinations', () => {
      const { rerender } = render(
        <Card variant="elevated" hoverable data-testid="card">Content</Card>
      )
      expect(screen.getByTestId('card')).toHaveClass('shadow-lg', 'hover:shadow-xl')

      rerender(
        <Card variant="outlined" clickable data-testid="card">Content</Card>
      )
      expect(screen.getByTestId('card')).toHaveClass('border-2', 'cursor-pointer')

      rerender(
        <Card variant="filled" hoverable clickable data-testid="card">Content</Card>
      )
      expect(screen.getByTestId('card')).toHaveClass('bg-gray-50', 'hover:bg-gray-100', 'cursor-pointer')
    })
  })
})
