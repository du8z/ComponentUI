import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

/**
 * The Spinner component provides visual feedback for loading states.
 * It supports multiple variants, sizes, and can be customized with different colors.
 */
const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the spinner',
      table: {
        type: { summary: 'xs | sm | md | lg | xl' },
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: 'select',
      options: ['circle', 'dots', 'pulse'],
      description: 'Visual variant of the spinner',
      table: {
        type: { summary: 'circle | dots | pulse' },
        defaultValue: { summary: 'circle' },
      },
    },
    color: {
      control: 'text',
      description: 'Tailwind color class for the spinner',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'blue-600' },
      },
    },
    label: {
      control: 'text',
      description: 'Optional label to display below the spinner',
      table: {
        type: { summary: 'string' },
      },
    },
    fullscreen: {
      control: 'boolean',
      description: 'If true, shows the spinner in a fullscreen overlay',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
      },
    },
    'aria-label': {
      control: 'text',
      description: 'ARIA label for screen readers',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Loading' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

/**
 * Default spinner with medium size and circle variant
 */
export const Default: Story = {
  args: {},
};

/**
 * Spinner with a label for context
 */
export const WithLabel: Story = {
  args: {
    label: 'Loading...',
  },
};

/**
 * All available sizes demonstrated with the circle variant
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-8">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xs" />
        <span className="text-sm text-gray-600 dark:text-gray-400">xs</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <span className="text-sm text-gray-600 dark:text-gray-400">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="md" />
        <span className="text-sm text-gray-600 dark:text-gray-400">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-sm text-gray-600 dark:text-gray-400">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
        <span className="text-sm text-gray-600 dark:text-gray-400">xl</span>
      </div>
    </div>
  ),
};

/**
 * Circle variant - spinning border animation
 */
export const CircleVariant: Story = {
  args: {
    variant: 'circle',
    size: 'lg',
  },
};

/**
 * Dots variant - bouncing dots animation
 */
export const DotsVariant: Story = {
  args: {
    variant: 'dots',
    size: 'lg',
  },
};

/**
 * Pulse variant - scaling circle animation
 */
export const PulseVariant: Story = {
  args: {
    variant: 'pulse',
    size: 'lg',
  },
};

/**
 * All variants side by side
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-12">
      <div className="flex flex-col items-center gap-3">
        <Spinner variant="circle" size="lg" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Circle
        </span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Spinner variant="dots" size="lg" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Dots
        </span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Spinner variant="pulse" size="lg" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Pulse
        </span>
      </div>
    </div>
  ),
};

/**
 * Different color variations
 */
export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-8">
      <div className="flex flex-col items-center gap-2">
        <Spinner color="blue-600" size="lg" />
        <span className="text-sm text-gray-600 dark:text-gray-400">Blue</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner color="red-600" size="lg" />
        <span className="text-sm text-gray-600 dark:text-gray-400">Red</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner color="green-600" size="lg" />
        <span className="text-sm text-gray-600 dark:text-gray-400">Green</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner color="yellow-600" size="lg" />
        <span className="text-sm text-gray-600 dark:text-gray-400">Yellow</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner color="purple-600" size="lg" />
        <span className="text-sm text-gray-600 dark:text-gray-400">Purple</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner color="pink-600" size="lg" />
        <span className="text-sm text-gray-600 dark:text-gray-400">Pink</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner color="indigo-600" size="lg" />
        <span className="text-sm text-gray-600 dark:text-gray-400">Indigo</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner color="gray-600" size="lg" />
        <span className="text-sm text-gray-600 dark:text-gray-400">Gray</span>
      </div>
    </div>
  ),
};

/**
 * Colors applied to dots variant
 */
export const DotsColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-8">
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="dots" color="blue-600" size="lg" />
        <span className="text-sm text-gray-600 dark:text-gray-400">Blue</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="dots" color="red-600" size="lg" />
        <span className="text-sm text-gray-600 dark:text-gray-400">Red</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="dots" color="green-600" size="lg" />
        <span className="text-sm text-gray-600 dark:text-gray-400">Green</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="dots" color="purple-600" size="lg" />
        <span className="text-sm text-gray-600 dark:text-gray-400">Purple</span>
      </div>
    </div>
  ),
};

/**
 * Colors applied to pulse variant
 */
export const PulseColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-8">
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="pulse" color="blue-600" size="lg" />
        <span className="text-sm text-gray-600 dark:text-gray-400">Blue</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="pulse" color="red-600" size="lg" />
        <span className="text-sm text-gray-600 dark:text-gray-400">Red</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="pulse" color="green-600" size="lg" />
        <span className="text-sm text-gray-600 dark:text-gray-400">Green</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="pulse" color="purple-600" size="lg" />
        <span className="text-sm text-gray-600 dark:text-gray-400">Purple</span>
      </div>
    </div>
  ),
};

/**
 * Spinner with custom label and different sizes
 */
export const WithLabels: Story = {
  render: () => (
    <div className="flex flex-wrap gap-8">
      <Spinner size="sm" label="Loading..." />
      <Spinner size="md" label="Processing..." />
      <Spinner size="lg" label="Please wait..." />
    </div>
  ),
};

/**
 * Fullscreen overlay spinner - typically used for page-level loading states
 */
export const Fullscreen: Story = {
  args: {
    fullscreen: true,
    label: 'Loading your content...',
    size: 'lg',
  },
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Fullscreen with different variants
 */
export const FullscreenVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <button
        onClick={() => {
          const container = document.createElement('div');
          document.body.appendChild(container);
          const root = (window as unknown as { createRoot?: (container: Element) => { render: (element: React.ReactElement) => void; unmount: () => void } }).createRoot?.(container);
          if (root) {
            root.render(<Spinner fullscreen variant="circle" label="Loading..." />);
            setTimeout(() => {
              root.unmount();
              document.body.removeChild(container);
            }, 3000);
          }
        }}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Show Circle Fullscreen
      </button>
      <button
        onClick={() => {
          const container = document.createElement('div');
          document.body.appendChild(container);
          const root = (window as unknown as { createRoot?: (container: Element) => { render: (element: React.ReactElement) => void; unmount: () => void } }).createRoot?.(container);
          if (root) {
            root.render(<Spinner fullscreen variant="dots" label="Processing..." />);
            setTimeout(() => {
              root.unmount();
              document.body.removeChild(container);
            }, 3000);
          }
        }}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        Show Dots Fullscreen
      </button>
      <button
        onClick={() => {
          const container = document.createElement('div');
          document.body.appendChild(container);
          const root = (window as unknown as { createRoot?: (container: Element) => { render: (element: React.ReactElement) => void; unmount: () => void } }).createRoot?.(container);
          if (root) {
            root.render(<Spinner fullscreen variant="pulse" label="Please wait..." />);
            setTimeout(() => {
              root.unmount();
              document.body.removeChild(container);
            }, 3000);
          }
        }}
        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
      >
        Show Pulse Fullscreen
      </button>
    </div>
  ),
};

/**
 * Inline spinners in different contexts
 */
export const InlineUsage: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Spinner size="sm" />
        <span className="text-gray-700 dark:text-gray-300">
          Loading user data...
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Spinner size="xs" variant="dots" color="green-600" />
        <span className="text-gray-700 dark:text-gray-300">
          Saving changes...
        </span>
      </div>
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md">
        <Spinner size="xs" color="white" />
        Processing
      </button>
    </div>
  ),
};

/**
 * Centered spinner in a card or container
 */
export const InCard: Story = {
  render: () => (
    <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      <Spinner size="lg" label="Loading dashboard..." />
    </div>
  ),
};

/**
 * Dark mode examples
 */
export const DarkMode: Story = {
  render: () => (
    <div className="p-8 bg-gray-900 rounded-lg">
      <div className="flex flex-wrap gap-8">
        <Spinner size="lg" color="blue-400" label="Loading..." />
        <Spinner size="lg" variant="dots" color="green-400" label="Processing..." />
        <Spinner size="lg" variant="pulse" color="purple-400" label="Please wait..." />
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/**
 * Custom styling with className
 */
export const CustomStyling: Story = {
  args: {
    size: 'lg',
    label: 'Custom styled spinner',
    className: 'p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg',
  },
};

/**
 * Accessibility example with custom aria-label
 */
export const Accessibility: Story = {
  args: {
    size: 'lg',
    label: 'Fetching your data',
    'aria-label': 'Please wait while we fetch your data from the server',
  },
};

/**
 * Loading state in a button
 */
export const ButtonLoading: Story = {
  render: () => (
    <div className="flex gap-4">
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50">
        <Spinner size="xs" color="white" />
        <span>Loading...</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50">
        <Spinner size="xs" variant="dots" color="white" />
        <span>Saving...</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50">
        <Spinner size="xs" variant="pulse" color="white" />
        <span>Processing...</span>
      </button>
    </div>
  ),
};

/**
 * All size and variant combinations
 */
export const SizeVariantMatrix: Story = {
  render: () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
    const variants = ['circle', 'dots', 'pulse'] as const;

    return (
      <div className="space-y-8">
        {variants.map((variant) => (
          <div key={variant} className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 capitalize">
              {variant} Variant
            </h3>
            <div className="flex flex-wrap items-end gap-8">
              {sizes.map((size) => (
                <div key={size} className="flex flex-col items-center gap-2">
                  <Spinner size={size} variant={variant} />
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {size}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
