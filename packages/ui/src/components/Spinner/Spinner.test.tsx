import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  describe('Rendering', () => {
    it('should render the spinner with default props', () => {
      render(<Spinner />);
      const spinner = screen.getByTestId('spinner');
      expect(spinner).toBeInTheDocument();
      expect(spinner).toHaveAttribute('role', 'status');
      expect(spinner).toHaveAttribute('aria-live', 'polite');
      expect(spinner).toHaveAttribute('aria-busy', 'true');
    });

    it('should render with custom test id', () => {
      render(<Spinner data-testid="custom-spinner" />);
      expect(screen.getByTestId('custom-spinner')).toBeInTheDocument();
    });

    it('should render with custom aria-label', () => {
      render(<Spinner aria-label="Processing data" />);
      expect(screen.getByText('Processing data')).toBeInTheDocument();
    });

    it('should apply custom className when not fullscreen', () => {
      render(<Spinner className="custom-class" />);
      const spinner = screen.getByTestId('spinner');
      expect(spinner).toHaveClass('custom-class');
    });
  });

  describe('Variants', () => {
    it('should render circle variant by default', () => {
      render(<Spinner />);
      expect(screen.getByTestId('spinner-circle')).toBeInTheDocument();
    });

    it('should render circle variant when specified', () => {
      render(<Spinner variant="circle" />);
      expect(screen.getByTestId('spinner-circle')).toBeInTheDocument();
    });

    it('should render dots variant', () => {
      render(<Spinner variant="dots" />);
      const dotsContainer = screen.getByTestId('spinner-dots');
      expect(dotsContainer).toBeInTheDocument();
      // Should have 3 dots
      expect(dotsContainer.children).toHaveLength(3);
    });

    it('should render pulse variant', () => {
      render(<Spinner variant="pulse" />);
      expect(screen.getByTestId('spinner-pulse')).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('should render with xs size', () => {
      render(<Spinner size="xs" variant="circle" />);
      const circle = screen.getByTestId('spinner-circle');
      expect(circle).toHaveClass('h-4', 'w-4', 'border-2');
    });

    it('should render with sm size', () => {
      render(<Spinner size="sm" variant="circle" />);
      const circle = screen.getByTestId('spinner-circle');
      expect(circle).toHaveClass('h-6', 'w-6', 'border-2');
    });

    it('should render with md size (default)', () => {
      render(<Spinner variant="circle" />);
      const circle = screen.getByTestId('spinner-circle');
      expect(circle).toHaveClass('h-8', 'w-8', 'border-2');
    });

    it('should render with lg size', () => {
      render(<Spinner size="lg" variant="circle" />);
      const circle = screen.getByTestId('spinner-circle');
      expect(circle).toHaveClass('h-12', 'w-12');
    });

    it('should render with xl size', () => {
      render(<Spinner size="xl" variant="circle" />);
      const circle = screen.getByTestId('spinner-circle');
      expect(circle).toHaveClass('h-16', 'w-16', 'border-4');
    });
  });

  describe('Colors', () => {
    it('should apply default blue color', () => {
      render(<Spinner variant="circle" />);
      const circle = screen.getByTestId('spinner-circle');
      expect(circle).toHaveClass('border-blue-600');
    });

    it('should apply custom color to circle variant', () => {
      render(<Spinner variant="circle" color="red-500" />);
      const circle = screen.getByTestId('spinner-circle');
      expect(circle).toHaveClass('border-red-500');
    });

    it('should apply custom color to dots variant', () => {
      render(<Spinner variant="dots" color="green-600" />);
      const dotsContainer = screen.getByTestId('spinner-dots');
      const dots = dotsContainer.querySelectorAll('div');
      dots.forEach((dot) => {
        expect(dot).toHaveClass('bg-green-600');
      });
    });

    it('should apply custom color to pulse variant', () => {
      render(<Spinner variant="pulse" color="purple-500" />);
      const pulse = screen.getByTestId('spinner-pulse');
      expect(pulse).toHaveClass('bg-purple-500');
    });
  });

  describe('Label', () => {
    it('should not render label when not provided', () => {
      render(<Spinner />);
      expect(screen.queryByTestId('spinner-label')).not.toBeInTheDocument();
    });

    it('should render label when provided', () => {
      render(<Spinner label="Loading..." />);
      const label = screen.getByTestId('spinner-label');
      expect(label).toBeInTheDocument();
      expect(label).toHaveTextContent('Loading...');
    });

    it('should apply correct size classes to label', () => {
      render(<Spinner label="Loading" size="xs" />);
      const label = screen.getByTestId('spinner-label');
      expect(label).toHaveClass('text-xs');
    });

    it('should apply medium font weight to label', () => {
      render(<Spinner label="Loading" />);
      const label = screen.getByTestId('spinner-label');
      expect(label).toHaveClass('font-medium');
    });

    it('should apply text color for light and dark mode', () => {
      render(<Spinner label="Loading" />);
      const label = screen.getByTestId('spinner-label');
      expect(label).toHaveClass('text-gray-700', 'dark:text-gray-300');
    });
  });

  describe('Fullscreen', () => {
    it('should not render fullscreen overlay by default', () => {
      render(<Spinner />);
      expect(screen.queryByTestId('spinner-fullscreen')).not.toBeInTheDocument();
    });

    it('should render fullscreen overlay when enabled', () => {
      render(<Spinner fullscreen />);
      const overlay = screen.getByTestId('spinner-fullscreen');
      expect(overlay).toBeInTheDocument();
      expect(overlay).toHaveClass('fixed', 'inset-0', 'z-50');
    });

    it('should apply backdrop blur to fullscreen overlay', () => {
      render(<Spinner fullscreen />);
      const overlay = screen.getByTestId('spinner-fullscreen');
      expect(overlay).toHaveClass('backdrop-blur-sm');
    });

    it('should center content in fullscreen mode', () => {
      render(<Spinner fullscreen />);
      const overlay = screen.getByTestId('spinner-fullscreen');
      expect(overlay).toHaveClass('flex', 'items-center', 'justify-center');
    });

    it('should apply custom className to fullscreen overlay', () => {
      render(<Spinner fullscreen className="custom-overlay" />);
      const overlay = screen.getByTestId('spinner-fullscreen');
      expect(overlay).toHaveClass('custom-overlay');
    });

    it('should render label in fullscreen mode', () => {
      render(<Spinner fullscreen label="Processing..." />);
      expect(screen.getByTestId('spinner-label')).toBeInTheDocument();
      expect(screen.getByText('Processing...')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have role status', () => {
      render(<Spinner />);
      const spinner = screen.getByTestId('spinner');
      expect(spinner).toHaveAttribute('role', 'status');
    });

    it('should have aria-live polite', () => {
      render(<Spinner />);
      const spinner = screen.getByTestId('spinner');
      expect(spinner).toHaveAttribute('aria-live', 'polite');
    });

    it('should have aria-busy true', () => {
      render(<Spinner />);
      const spinner = screen.getByTestId('spinner');
      expect(spinner).toHaveAttribute('aria-busy', 'true');
    });

    it('should have screen reader only text with default aria-label', () => {
      render(<Spinner />);
      const srText = screen.getByText('Loading');
      expect(srText).toHaveClass('sr-only');
    });

    it('should have screen reader only text with custom aria-label', () => {
      render(<Spinner aria-label="Fetching data" />);
      const srText = screen.getByText('Fetching data');
      expect(srText).toHaveClass('sr-only');
    });

    it('should mark spinner visual element as aria-hidden', () => {
      render(<Spinner variant="circle" />);
      const circle = screen.getByTestId('spinner-circle');
      expect(circle).toHaveAttribute('aria-hidden', 'true');
    });

    it('should mark dots as aria-hidden', () => {
      render(<Spinner variant="dots" />);
      const dots = screen.getByTestId('spinner-dots');
      expect(dots).toHaveAttribute('aria-hidden', 'true');
    });

    it('should mark pulse as aria-hidden', () => {
      render(<Spinner variant="pulse" />);
      const pulse = screen.getByTestId('spinner-pulse');
      expect(pulse).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Animation', () => {
    it('should apply spin animation to circle variant', () => {
      render(<Spinner variant="circle" />);
      const circle = screen.getByTestId('spinner-circle');
      expect(circle).toHaveClass('animate-spin');
    });

    it('should apply bounce animation to dots', () => {
      render(<Spinner variant="dots" />);
      const dotsContainer = screen.getByTestId('spinner-dots');
      const dots = dotsContainer.querySelectorAll('div');
      dots.forEach((dot) => {
        expect(dot).toHaveClass('animate-bounce');
      });
    });

    it('should apply pulse animation to pulse variant', () => {
      render(<Spinner variant="pulse" />);
      const pulse = screen.getByTestId('spinner-pulse');
      expect(pulse).toHaveClass('animate-pulse');
    });

    it('should apply staggered animation delays to dots', () => {
      render(<Spinner variant="dots" />);
      const dotsContainer = screen.getByTestId('spinner-dots');
      const dots = Array.from(dotsContainer.querySelectorAll('div'));

      expect(dots[0]).toHaveStyle({ animationDelay: '0ms' });
      expect(dots[1]).toHaveStyle({ animationDelay: '150ms' });
      expect(dots[2]).toHaveStyle({ animationDelay: '300ms' });
    });
  });

  describe('Dark Mode', () => {
    it('should have dark mode classes for fullscreen overlay', () => {
      render(<Spinner fullscreen />);
      const overlay = screen.getByTestId('spinner-fullscreen');
      expect(overlay).toHaveClass('dark:bg-gray-900/80');
    });

    it('should have dark mode classes for label', () => {
      render(<Spinner label="Loading" />);
      const label = screen.getByTestId('spinner-label');
      expect(label).toHaveClass('dark:text-gray-300');
    });
  });

  describe('Display Name', () => {
    it('should have correct display name', () => {
      expect(Spinner.displayName).toBe('Spinner');
    });
  });

  describe('Integration', () => {
    it('should render all size and variant combinations for circle', () => {
      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
      sizes.forEach((size) => {
        const { unmount } = render(
          <Spinner size={size} variant="circle" data-testid={`spinner-${size}`} />
        );
        expect(screen.getByTestId(`spinner-${size}-circle`)).toBeInTheDocument();
        unmount();
      });
    });

    it('should render all size and variant combinations for dots', () => {
      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
      sizes.forEach((size) => {
        const { unmount } = render(
          <Spinner size={size} variant="dots" data-testid={`spinner-${size}`} />
        );
        expect(screen.getByTestId(`spinner-${size}-dots`)).toBeInTheDocument();
        unmount();
      });
    });

    it('should render all size and variant combinations for pulse', () => {
      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
      sizes.forEach((size) => {
        const { unmount } = render(
          <Spinner size={size} variant="pulse" data-testid={`spinner-${size}`} />
        );
        expect(screen.getByTestId(`spinner-${size}-pulse`)).toBeInTheDocument();
        unmount();
      });
    });

    it('should render with all props combined', () => {
      render(
        <Spinner
          size="lg"
          variant="circle"
          color="red-500"
          label="Processing your request..."
          fullscreen
          className="custom-class"
          aria-label="Please wait"
          data-testid="full-spinner"
        />
      );

      expect(screen.getByTestId('full-spinner-fullscreen')).toBeInTheDocument();
      expect(screen.getByTestId('full-spinner-circle')).toBeInTheDocument();
      expect(screen.getByTestId('full-spinner-label')).toHaveTextContent(
        'Processing your request...'
      );
      expect(screen.getByText('Please wait')).toHaveClass('sr-only');
    });
  });
});
