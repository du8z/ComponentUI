import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { Avatar, AvatarGroup } from './Avatar'

describe('Avatar', () => {
  describe('Rendering', () => {
    it('should render with initials from name', () => {
      render(<Avatar name="John Doe" />)
      expect(screen.getByText('JD')).toBeInTheDocument()
    })

    it('should render with single name initial', () => {
      render(<Avatar name="John" />)
      expect(screen.getByText('J')).toBeInTheDocument()
    })

    it('should render with custom initials', () => {
      render(<Avatar name="John Doe" initials="AB" />)
      expect(screen.getByText('AB')).toBeInTheDocument()
      expect(screen.queryByText('JD')).not.toBeInTheDocument()
    })

    it('should render with image when src is provided', () => {
      render(<Avatar name="John Doe" src="/avatar.jpg" alt="John's avatar" />)
      const img = screen.getByAltText("John's avatar")
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', '/avatar.jpg')
    })

    it('should use name as alt text when alt is not provided', () => {
      render(<Avatar name="John Doe" src="/avatar.jpg" />)
      expect(screen.getByAltText('John Doe')).toBeInTheDocument()
    })

    it('should use default alt text when neither alt nor name is provided', () => {
      render(<Avatar src="/avatar.jpg" />)
      const container = screen.getByRole('img')
      expect(container).toHaveAttribute('aria-label', 'Avatar')
    })

    it('should forward ref to div element', () => {
      const ref = vi.fn()
      render(<Avatar ref={ref} name="John Doe" />)
      expect(ref).toHaveBeenCalled()
    })

    it('should apply custom className', () => {
      render(<Avatar name="John Doe" className="custom-class" />)
      const avatar = screen.getByRole('img')
      expect(avatar).toHaveClass('custom-class')
    })
  })

  describe('Sizes', () => {
    it('should render xs size', () => {
      render(<Avatar name="John Doe" size="xs" />)
      const avatar = screen.getByRole('img')
      expect(avatar).toHaveClass('h-6', 'w-6', 'text-xs')
    })

    it('should render sm size', () => {
      render(<Avatar name="John Doe" size="sm" />)
      const avatar = screen.getByRole('img')
      expect(avatar).toHaveClass('h-8', 'w-8', 'text-sm')
    })

    it('should render md size (default)', () => {
      render(<Avatar name="John Doe" size="md" />)
      const avatar = screen.getByRole('img')
      expect(avatar).toHaveClass('h-10', 'w-10', 'text-base')
    })

    it('should render lg size', () => {
      render(<Avatar name="John Doe" size="lg" />)
      const avatar = screen.getByRole('img')
      expect(avatar).toHaveClass('h-12', 'w-12', 'text-lg')
    })

    it('should render xl size', () => {
      render(<Avatar name="John Doe" size="xl" />)
      const avatar = screen.getByRole('img')
      expect(avatar).toHaveClass('h-14', 'w-14', 'text-xl')
    })

    it('should render 2xl size', () => {
      render(<Avatar name="John Doe" size="2xl" />)
      const avatar = screen.getByRole('img')
      expect(avatar).toHaveClass('h-16', 'w-16', 'text-2xl')
    })
  })

  describe('Shapes', () => {
    it('should render circle shape (default)', () => {
      render(<Avatar name="John Doe" shape="circle" />)
      const avatar = screen.getByRole('img')
      expect(avatar).toHaveClass('rounded-full')
    })

    it('should render square shape', () => {
      render(<Avatar name="John Doe" shape="square" />)
      const avatar = screen.getByRole('img')
      expect(avatar).toHaveClass('rounded-lg')
    })
  })

  describe('Status Indicators', () => {
    it('should render online status', () => {
      render(<Avatar name="John Doe" status="online" />)
      const status = screen.getByRole('status')
      expect(status).toHaveClass('bg-green-500')
      expect(status).toHaveAttribute('aria-label', 'Status: online')
    })

    it('should render offline status', () => {
      render(<Avatar name="John Doe" status="offline" />)
      const status = screen.getByRole('status')
      expect(status).toHaveClass('bg-gray-400')
      expect(status).toHaveAttribute('aria-label', 'Status: offline')
    })

    it('should render busy status', () => {
      render(<Avatar name="John Doe" status="busy" />)
      const status = screen.getByRole('status')
      expect(status).toHaveClass('bg-red-500')
      expect(status).toHaveAttribute('aria-label', 'Status: busy')
    })

    it('should render away status', () => {
      render(<Avatar name="John Doe" status="away" />)
      const status = screen.getByRole('status')
      expect(status).toHaveClass('bg-yellow-500')
      expect(status).toHaveAttribute('aria-label', 'Status: away')
    })

    it('should not render status indicator when status is not provided', () => {
      render(<Avatar name="John Doe" />)
      expect(screen.queryByRole('status')).not.toBeInTheDocument()
    })

    it('should scale status indicator with avatar size', () => {
      const { rerender } = render(<Avatar name="John Doe" status="online" size="xs" />)
      expect(screen.getByRole('status')).toHaveClass('h-1.5', 'w-1.5')

      rerender(<Avatar name="John Doe" status="online" size="2xl" />)
      expect(screen.getByRole('status')).toHaveClass('h-4', 'w-4')
    })
  })

  describe('Image Fallback', () => {
    it('should show initials when image fails to load', async () => {
      render(<Avatar name="John Doe" src="/invalid.jpg" />)

      const img = screen.getByAltText('John Doe')

      // Simulate image error
      img.dispatchEvent(new Event('error'))

      await waitFor(() => {
        expect(screen.getByText('JD')).toBeInTheDocument()
      })
    })

    it('should show initials when src is not provided', () => {
      render(<Avatar name="John Doe" />)
      expect(screen.getByText('JD')).toBeInTheDocument()
    })

    it('should show custom initials on image error', async () => {
      render(<Avatar name="John Doe" src="/invalid.jpg" initials="AB" />)

      const img = screen.getByAltText('John Doe')
      img.dispatchEvent(new Event('error'))

      await waitFor(() => {
        expect(screen.getByText('AB')).toBeInTheDocument()
      })
    })
  })

  describe('Initials Generation', () => {
    it('should generate initials from first and last name', () => {
      render(<Avatar name="John Doe" />)
      expect(screen.getByText('JD')).toBeInTheDocument()
    })

    it('should generate initials from three-word name', () => {
      render(<Avatar name="John Michael Doe" />)
      expect(screen.getByText('JD')).toBeInTheDocument()
    })

    it('should handle extra whitespace in name', () => {
      render(<Avatar name="  John   Doe  " />)
      expect(screen.getByText('JD')).toBeInTheDocument()
    })

    it('should handle single word name', () => {
      render(<Avatar name="Madonna" />)
      expect(screen.getByText('M')).toBeInTheDocument()
    })

    it('should handle empty name', () => {
      render(<Avatar name="" />)
      expect(screen.queryByText(/[A-Z]/)).not.toBeInTheDocument()
    })

    it('should capitalize initials', () => {
      render(<Avatar name="john doe" />)
      expect(screen.getByText('JD')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have proper role attribute', () => {
      render(<Avatar name="John Doe" />)
      expect(screen.getByRole('img')).toBeInTheDocument()
    })

    it('should have aria-label', () => {
      render(<Avatar name="John Doe" />)
      expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'John Doe')
    })

    it('should have aria-label on status indicator', () => {
      render(<Avatar name="John Doe" status="online" />)
      expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Status: online')
    })

    it('should use alt text for aria-label when provided', () => {
      render(<Avatar name="John Doe" alt="Profile picture" />)
      expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'Profile picture')
    })

    it('should have proper image alt text', () => {
      render(<Avatar name="John Doe" src="/avatar.jpg" alt="User avatar" />)
      expect(screen.getByAltText('User avatar')).toBeInTheDocument()
    })
  })

  describe('Dark Mode', () => {
    it('should have dark mode classes for ring', () => {
      render(<Avatar name="John Doe" />)
      const avatar = screen.getByRole('img')
      expect(avatar).toHaveClass('dark:ring-gray-800')
    })

    it('should have dark mode classes for status indicators', () => {
      render(<Avatar name="John Doe" status="online" />)
      const status = screen.getByRole('status')
      expect(status).toHaveClass('dark:bg-green-400')
    })

    it('should have dark mode classes for initials background', () => {
      const { container } = render(<Avatar name="John Doe" />)
      const initialsDiv = container.querySelector('.dark\\:from-blue-600')
      expect(initialsDiv).toBeInTheDocument()
    })
  })

  describe('Default Props', () => {
    it('should use default size (md)', () => {
      render(<Avatar name="John Doe" />)
      const avatar = screen.getByRole('img')
      expect(avatar).toHaveClass('h-10', 'w-10')
    })

    it('should use default shape (circle)', () => {
      render(<Avatar name="John Doe" />)
      const avatar = screen.getByRole('img')
      expect(avatar).toHaveClass('rounded-full')
    })
  })

  describe('Edge Cases', () => {
    it('should handle avatar with only src', () => {
      render(<Avatar src="/avatar.jpg" />)
      expect(screen.getByAltText('Avatar')).toBeInTheDocument()
    })

    it('should handle avatar with both name and custom initials', () => {
      render(<Avatar name="John Doe" initials="XY" />)
      expect(screen.getByText('XY')).toBeInTheDocument()
      expect(screen.queryByText('JD')).not.toBeInTheDocument()
    })

    it('should spread additional props to div element', () => {
      render(<Avatar name="John Doe" data-testid="custom-avatar" />)
      expect(screen.getByTestId('custom-avatar')).toBeInTheDocument()
    })

    it('should maintain aspect ratio with different sizes and shapes', () => {
      const { rerender } = render(<Avatar name="John Doe" size="xs" shape="circle" />)
      expect(screen.getByRole('img')).toHaveClass('h-6', 'w-6', 'rounded-full')

      rerender(<Avatar name="John Doe" size="2xl" shape="square" />)
      expect(screen.getByRole('img')).toHaveClass('h-16', 'w-16', 'rounded-lg')
    })
  })
})

describe('AvatarGroup', () => {
  describe('Rendering', () => {
    it('should render multiple avatars', () => {
      render(
        <AvatarGroup>
          <Avatar name="John Doe" />
          <Avatar name="Jane Smith" />
          <Avatar name="Bob Johnson" />
        </AvatarGroup>
      )

      expect(screen.getByText('JD')).toBeInTheDocument()
      expect(screen.getByText('JS')).toBeInTheDocument()
      expect(screen.getByText('BJ')).toBeInTheDocument()
    })

    it('should forward ref to div element', () => {
      const ref = vi.fn()
      render(
        <AvatarGroup ref={ref}>
          <Avatar name="John Doe" />
        </AvatarGroup>
      )
      expect(ref).toHaveBeenCalled()
    })

    it('should apply custom className', () => {
      render(
        <AvatarGroup className="custom-group">
          <Avatar name="John Doe" />
        </AvatarGroup>
      )
      expect(screen.getByRole('group')).toHaveClass('custom-group')
    })

    it('should have proper role attribute', () => {
      render(
        <AvatarGroup>
          <Avatar name="John Doe" />
        </AvatarGroup>
      )
      expect(screen.getByRole('group')).toBeInTheDocument()
    })
  })

  describe('Max Limit', () => {
    it('should limit displayed avatars to max prop', () => {
      render(
        <AvatarGroup max={2}>
          <Avatar name="John Doe" />
          <Avatar name="Jane Smith" />
          <Avatar name="Bob Johnson" />
          <Avatar name="Alice Williams" />
        </AvatarGroup>
      )

      expect(screen.getByText('JD')).toBeInTheDocument()
      expect(screen.getByText('JS')).toBeInTheDocument()
      expect(screen.queryByText('BJ')).not.toBeInTheDocument()
      expect(screen.queryByText('AW')).not.toBeInTheDocument()
    })

    it('should show remaining count when exceeds max', () => {
      render(
        <AvatarGroup max={2}>
          <Avatar name="John Doe" />
          <Avatar name="Jane Smith" />
          <Avatar name="Bob Johnson" />
          <Avatar name="Alice Williams" />
        </AvatarGroup>
      )

      expect(screen.getByText('+2')).toBeInTheDocument()
    })

    it('should not show remaining count when within max', () => {
      render(
        <AvatarGroup max={5}>
          <Avatar name="John Doe" />
          <Avatar name="Jane Smith" />
        </AvatarGroup>
      )

      expect(screen.queryByText(/^\+/)).not.toBeInTheDocument()
    })

    it('should use default max of 5', () => {
      render(
        <AvatarGroup>
          <Avatar name="User 1" />
          <Avatar name="User 2" />
          <Avatar name="User 3" />
          <Avatar name="User 4" />
          <Avatar name="User 5" />
          <Avatar name="User 6" />
        </AvatarGroup>
      )

      expect(screen.getByText('+1')).toBeInTheDocument()
    })
  })

  describe('Size and Shape Propagation', () => {
    it('should pass size prop to child avatars', () => {
      render(
        <AvatarGroup size="lg">
          <Avatar name="John Doe" />
        </AvatarGroup>
      )

      const avatar = screen.getByRole('img', { name: 'John Doe' })
      expect(avatar).toHaveClass('h-12', 'w-12')
    })

    it('should pass shape prop to child avatars', () => {
      render(
        <AvatarGroup shape="square">
          <Avatar name="John Doe" />
        </AvatarGroup>
      )

      const avatar = screen.getByRole('img', { name: 'John Doe' })
      expect(avatar).toHaveClass('rounded-lg')
    })

    it('should apply size and shape to remaining count indicator', () => {
      render(
        <AvatarGroup max={1} size="xl" shape="square">
          <Avatar name="John Doe" />
          <Avatar name="Jane Smith" />
        </AvatarGroup>
      )

      const remainingCount = screen.getByText('+1')
      expect(remainingCount).toHaveClass('h-14', 'w-14', 'rounded-lg')
    })
  })

  describe('Accessibility', () => {
    it('should have aria-label with count', () => {
      render(
        <AvatarGroup>
          <Avatar name="John Doe" />
          <Avatar name="Jane Smith" />
          <Avatar name="Bob Johnson" />
        </AvatarGroup>
      )

      expect(screen.getByRole('group')).toHaveAttribute(
        'aria-label',
        'Avatar group of 3 people'
      )
    })

    it('should use singular "person" for one avatar', () => {
      render(
        <AvatarGroup>
          <Avatar name="John Doe" />
        </AvatarGroup>
      )

      expect(screen.getByRole('group')).toHaveAttribute(
        'aria-label',
        'Avatar group of 1 person'
      )
    })

    it('should have aria-label on remaining count', () => {
      render(
        <AvatarGroup max={1}>
          <Avatar name="John Doe" />
          <Avatar name="Jane Smith" />
          <Avatar name="Bob Johnson" />
        </AvatarGroup>
      )

      const remainingCount = screen.getByLabelText('2 more people')
      expect(remainingCount).toBeInTheDocument()
    })

    it('should use singular for one remaining person', () => {
      render(
        <AvatarGroup max={1}>
          <Avatar name="John Doe" />
          <Avatar name="Jane Smith" />
        </AvatarGroup>
      )

      const remainingCount = screen.getByLabelText('1 more person')
      expect(remainingCount).toBeInTheDocument()
    })
  })

  describe('Hover Effects', () => {
    it('should add hover classes to avatars', () => {
      render(
        <AvatarGroup>
          <Avatar name="John Doe" />
        </AvatarGroup>
      )

      const avatar = screen.getByRole('img', { name: 'John Doe' })
      expect(avatar).toHaveClass('hover:scale-110', 'hover:z-10')
    })

    it('should add hover classes to remaining count', () => {
      render(
        <AvatarGroup max={1}>
          <Avatar name="John Doe" />
          <Avatar name="Jane Smith" />
        </AvatarGroup>
      )

      const remainingCount = screen.getByText('+1')
      expect(remainingCount).toHaveClass('hover:scale-110', 'hover:z-10')
    })
  })

  describe('Edge Cases', () => {
    it('should handle empty children', () => {
      render(<AvatarGroup>{[]}</AvatarGroup>)
      expect(screen.getByRole('group')).toHaveAttribute(
        'aria-label',
        'Avatar group of 0 people'
      )
    })

    it('should handle non-Avatar children gracefully', () => {
      render(
        <AvatarGroup>
          <Avatar name="John Doe" />
          <div>Not an avatar</div>
          <Avatar name="Jane Smith" />
        </AvatarGroup>
      )

      expect(screen.getByText('JD')).toBeInTheDocument()
      expect(screen.getByText('JS')).toBeInTheDocument()
    })

    it('should spread additional props to div element', () => {
      render(
        <AvatarGroup data-testid="custom-group">
          <Avatar name="John Doe" />
        </AvatarGroup>
      )
      expect(screen.getByTestId('custom-group')).toBeInTheDocument()
    })

    it('should preserve child avatar className when cloning', () => {
      render(
        <AvatarGroup>
          <Avatar name="John Doe" className="custom-avatar" />
        </AvatarGroup>
      )

      const avatar = screen.getByRole('img', { name: 'John Doe' })
      expect(avatar).toHaveClass('custom-avatar')
    })
  })

  describe('Default Props', () => {
    it('should use default size (md)', () => {
      render(
        <AvatarGroup>
          <Avatar name="John Doe" />
        </AvatarGroup>
      )

      const avatar = screen.getByRole('img', { name: 'John Doe' })
      expect(avatar).toHaveClass('h-10', 'w-10')
    })

    it('should use default shape (circle)', () => {
      render(
        <AvatarGroup>
          <Avatar name="John Doe" />
        </AvatarGroup>
      )

      const avatar = screen.getByRole('img', { name: 'John Doe' })
      expect(avatar).toHaveClass('rounded-full')
    })

    it('should use default max (5)', () => {
      const avatars = Array.from({ length: 6 }, (_, i) => (
        <Avatar key={i} name={`User ${i + 1}`} />
      ))

      render(<AvatarGroup>{avatars}</AvatarGroup>)
      expect(screen.getByText('+1')).toBeInTheDocument()
    })
  })
})
