import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

/**
 * Icon component for examples
 */
const IconHeart = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-full h-full"
  >
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  </svg>
)

const IconPlus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-full h-full"
  >
    <path
      fillRule="evenodd"
      d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
      clipRule="evenodd"
    />
  </svg>
)

const IconTrash = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-full h-full"
  >
    <path
      fillRule="evenodd"
      d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
      clipRule="evenodd"
    />
  </svg>
)

const IconDownload = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-full h-full"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
      clipRule="evenodd"
    />
  </svg>
)

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible button component with multiple variants, sizes, and states. Fully accessible with WCAG AA compliance.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'ghost', 'outline'],
      description: 'The visual style variant of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take full width of its container',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the icon relative to the text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    children: {
      control: 'text',
      description: 'Content to be rendered inside the button',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default button with primary variant
 */
export const Default: Story = {
  args: {
    children: 'Button',
  },
}

/**
 * All button variants
 */
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
}

/**
 * All button sizes
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
}

/**
 * Primary variant button
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
}

/**
 * Secondary variant button
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}

/**
 * Danger variant button
 */
export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
}

/**
 * Ghost variant button
 */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
}

/**
 * Outline variant button
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
}

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
}

/**
 * Loading state
 */
export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading',
  },
}

/**
 * Loading state without text
 */
export const LoadingWithoutText: Story = {
  args: {
    loading: true,
    'aria-label': 'Loading',
  },
}

/**
 * Full width button
 */
export const FullWidth: Story = {
  render: () => (
    <div className="w-96">
      <Button fullWidth>Full Width Button</Button>
    </div>
  ),
}

/**
 * Button with icon on the left
 */
export const WithIconLeft: Story = {
  args: {
    icon: <IconHeart />,
    iconPosition: 'left',
    children: 'Like',
  },
}

/**
 * Button with icon on the right
 */
export const WithIconRight: Story = {
  args: {
    icon: <IconDownload />,
    iconPosition: 'right',
    children: 'Download',
  },
}

/**
 * Icon-only button
 */
export const IconOnly: Story = {
  args: {
    icon: <IconHeart />,
    'aria-label': 'Like',
  },
}

/**
 * Multiple buttons with icons
 */
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button icon={<IconPlus />}>Add Item</Button>
      <Button variant="secondary" icon={<IconDownload />}>
        Download
      </Button>
      <Button variant="danger" icon={<IconTrash />}>
        Delete
      </Button>
      <Button variant="ghost" icon={<IconHeart />} iconPosition="right">
        Favorite
      </Button>
      <Button variant="outline" icon={<IconPlus />} aria-label="Add" />
    </div>
  ),
}

/**
 * Size comparison with icons
 */
export const SizesWithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="xs" icon={<IconHeart />}>
        Extra Small
      </Button>
      <Button size="sm" icon={<IconHeart />}>
        Small
      </Button>
      <Button size="md" icon={<IconHeart />}>
        Medium
      </Button>
      <Button size="lg" icon={<IconHeart />}>
        Large
      </Button>
      <Button size="xl" icon={<IconHeart />}>
        Extra Large
      </Button>
    </div>
  ),
}

/**
 * Loading states for all variants
 */
export const LoadingStates: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary" loading>
        Primary Loading
      </Button>
      <Button variant="secondary" loading>
        Secondary Loading
      </Button>
      <Button variant="danger" loading>
        Danger Loading
      </Button>
      <Button variant="ghost" loading>
        Ghost Loading
      </Button>
      <Button variant="outline" loading>
        Outline Loading
      </Button>
    </div>
  ),
}

/**
 * Disabled states for all variants
 */
export const DisabledStates: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary" disabled>
        Primary Disabled
      </Button>
      <Button variant="secondary" disabled>
        Secondary Disabled
      </Button>
      <Button variant="danger" disabled>
        Danger Disabled
      </Button>
      <Button variant="ghost" disabled>
        Ghost Disabled
      </Button>
      <Button variant="outline" disabled>
        Outline Disabled
      </Button>
    </div>
  ),
}

/**
 * Button group example
 */
export const ButtonGroup: Story = {
  render: () => (
    <div className="inline-flex rounded-lg shadow-sm" role="group">
      <Button variant="outline" className="rounded-r-none border-r-0">
        Left
      </Button>
      <Button variant="outline" className="rounded-none">
        Middle
      </Button>
      <Button variant="outline" className="rounded-l-none border-l-0">
        Right
      </Button>
    </div>
  ),
}

/**
 * Form buttons
 */
export const FormButtons: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button type="submit" variant="primary">
        Submit
      </Button>
      <Button type="reset" variant="secondary">
        Reset
      </Button>
      <Button type="button" variant="ghost">
        Cancel
      </Button>
    </div>
  ),
}

/**
 * Action buttons
 */
export const ActionButtons: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <Button variant="primary" icon={<IconPlus />}>
        Create New
      </Button>
      <Button variant="secondary" icon={<IconDownload />}>
        Export Data
      </Button>
      <Button variant="danger" icon={<IconTrash />}>
        Delete All
      </Button>
    </div>
  ),
}

/**
 * Dark mode example (wrap in dark container)
 */
export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-8 rounded-lg">
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </div>
  ),
}

/**
 * Playground for interactive testing
 */
export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button',
    fullWidth: false,
    loading: false,
    disabled: false,
  },
}
