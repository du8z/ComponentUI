import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'
import { useState } from 'react'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible badge component for labels, tags, and status indicators. Supports multiple variants, colors, sizes, dot indicators, and removable functionality. Fully accessible with WCAG AA compliance.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'subtle', 'outline'],
      description: 'The visual style variant of the badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'solid' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'The color scheme of the badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    dot: {
      control: 'boolean',
      description: 'Whether to show a dot indicator',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    removable: {
      control: 'boolean',
      description: 'Whether the badge is removable (shows X button)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onRemove: {
      action: 'removed',
      description: 'Callback fired when the remove button is clicked',
    },
    children: {
      control: 'text',
      description: 'Content to be rendered inside the badge',
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default badge with solid variant and primary color
 */
export const Default: Story = {
  args: {
    children: 'Badge',
  },
}

/**
 * All badge variants
 */
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="solid">Solid</Badge>
      <Badge variant="subtle">Subtle</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
}

/**
 * All badge colors with solid variant
 */
export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="error">Error</Badge>
      <Badge color="info">Info</Badge>
    </div>
  ),
}

/**
 * All badge sizes
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
}

/**
 * Solid variant with all colors
 */
export const SolidVariant: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="solid" color="primary">Primary</Badge>
      <Badge variant="solid" color="secondary">Secondary</Badge>
      <Badge variant="solid" color="success">Success</Badge>
      <Badge variant="solid" color="warning">Warning</Badge>
      <Badge variant="solid" color="error">Error</Badge>
      <Badge variant="solid" color="info">Info</Badge>
    </div>
  ),
}

/**
 * Subtle variant with all colors
 */
export const SubtleVariant: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="subtle" color="primary">Primary</Badge>
      <Badge variant="subtle" color="secondary">Secondary</Badge>
      <Badge variant="subtle" color="success">Success</Badge>
      <Badge variant="subtle" color="warning">Warning</Badge>
      <Badge variant="subtle" color="error">Error</Badge>
      <Badge variant="subtle" color="info">Info</Badge>
    </div>
  ),
}

/**
 * Outline variant with all colors
 */
export const OutlineVariant: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="outline" color="primary">Primary</Badge>
      <Badge variant="outline" color="secondary">Secondary</Badge>
      <Badge variant="outline" color="success">Success</Badge>
      <Badge variant="outline" color="warning">Warning</Badge>
      <Badge variant="outline" color="error">Error</Badge>
      <Badge variant="outline" color="info">Info</Badge>
    </div>
  ),
}

/**
 * Badges with dot indicator
 */
export const WithDot: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge dot color="primary">Online</Badge>
      <Badge dot color="success">Active</Badge>
      <Badge dot color="warning">Away</Badge>
      <Badge dot color="error">Offline</Badge>
    </div>
  ),
}

/**
 * Dot indicator with different sizes
 */
export const DotSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge dot size="sm" color="success">Small</Badge>
      <Badge dot size="md" color="success">Medium</Badge>
      <Badge dot size="lg" color="success">Large</Badge>
    </div>
  ),
}

/**
 * Dot indicator with all variants
 */
export const DotVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge dot variant="solid" color="success">Solid</Badge>
      <Badge dot variant="subtle" color="success">Subtle</Badge>
      <Badge dot variant="outline" color="success">Outline</Badge>
    </div>
  ),
}

/**
 * Removable badges
 */
export const Removable: Story = {
  render: () => {
    const RemovableExample = () => {
      const [badges, setBadges] = useState(['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4'])

      const handleRemove = (index: number) => {
        setBadges(badges.filter((_, i) => i !== index))
      }

      return (
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              removable
              onRemove={() => handleRemove(index)}
              color="primary"
            >
              {badge}
            </Badge>
          ))}
        </div>
      )
    }

    return <RemovableExample />
  },
}

/**
 * Removable badges with different colors
 */
export const RemovableColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge removable onRemove={() => {}} color="primary">Primary</Badge>
      <Badge removable onRemove={() => {}} color="secondary">Secondary</Badge>
      <Badge removable onRemove={() => {}} color="success">Success</Badge>
      <Badge removable onRemove={() => {}} color="warning">Warning</Badge>
      <Badge removable onRemove={() => {}} color="error">Error</Badge>
      <Badge removable onRemove={() => {}} color="info">Info</Badge>
    </div>
  ),
}

/**
 * Removable badges with different sizes
 */
export const RemovableSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge removable onRemove={() => {}} size="sm">Small</Badge>
      <Badge removable onRemove={() => {}} size="md">Medium</Badge>
      <Badge removable onRemove={() => {}} size="lg">Large</Badge>
    </div>
  ),
}

/**
 * Removable badges with dot indicator
 */
export const RemovableWithDot: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge dot removable onRemove={() => {}} color="success">Active Tag</Badge>
      <Badge dot removable onRemove={() => {}} color="warning">Pending Tag</Badge>
      <Badge dot removable onRemove={() => {}} color="error">Error Tag</Badge>
    </div>
  ),
}

/**
 * Status indicators
 */
export const StatusIndicators: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700 dark:text-gray-300">User Status:</span>
        <Badge dot variant="subtle" color="success">Online</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700 dark:text-gray-300">Server Status:</span>
        <Badge dot variant="subtle" color="warning">Maintenance</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700 dark:text-gray-300">Build Status:</span>
        <Badge dot variant="subtle" color="error">Failed</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700 dark:text-gray-300">Connection:</span>
        <Badge dot variant="subtle" color="primary">Connected</Badge>
      </div>
    </div>
  ),
}

/**
 * Tag collection
 */
export const TagCollection: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 max-w-md">
      <Badge variant="subtle" color="primary">React</Badge>
      <Badge variant="subtle" color="primary">TypeScript</Badge>
      <Badge variant="subtle" color="primary">Tailwind CSS</Badge>
      <Badge variant="subtle" color="secondary">Frontend</Badge>
      <Badge variant="subtle" color="secondary">UI/UX</Badge>
      <Badge variant="subtle" color="success">Accessible</Badge>
      <Badge variant="subtle" color="info">Documentation</Badge>
    </div>
  ),
}

/**
 * Notification badges
 */
export const NotificationBadges: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700 dark:text-gray-300">Messages</span>
        <Badge size="sm" color="error">3</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700 dark:text-gray-300">Notifications</span>
        <Badge size="sm" color="primary">12</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700 dark:text-gray-300">Updates</span>
        <Badge size="sm" color="success">New</Badge>
      </div>
    </div>
  ),
}

/**
 * Product labels
 */
export const ProductLabels: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 max-w-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Premium Plan</h3>
        <Badge color="warning">Popular</Badge>
      </div>
      <div className="flex gap-2">
        <Badge variant="subtle" color="success">New Features</Badge>
        <Badge variant="subtle" color="info">50% Off</Badge>
      </div>
    </div>
  ),
}

/**
 * User roles
 */
export const UserRoles: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700 dark:text-gray-300 w-24">John Doe</span>
        <Badge variant="outline" color="primary" size="sm">Admin</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700 dark:text-gray-300 w-24">Jane Smith</span>
        <Badge variant="outline" color="secondary" size="sm">Editor</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700 dark:text-gray-300 w-24">Bob Wilson</span>
        <Badge variant="outline" color="info" size="sm">Viewer</Badge>
      </div>
    </div>
  ),
}

/**
 * Priority levels
 */
export const PriorityLevels: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Badge variant="solid" color="error">Critical</Badge>
        <span className="text-sm text-gray-700 dark:text-gray-300">System outage detected</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="solid" color="warning">High</Badge>
        <span className="text-sm text-gray-700 dark:text-gray-300">Performance degradation</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="solid" color="info">Medium</Badge>
        <span className="text-sm text-gray-700 dark:text-gray-300">Feature request</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="solid" color="secondary">Low</Badge>
        <span className="text-sm text-gray-700 dark:text-gray-300">Documentation update</span>
      </div>
    </div>
  ),
}

/**
 * Mixed styles showcase
 */
export const MixedStyles: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Badge variant="solid" color="primary">Solid Primary</Badge>
        <Badge variant="subtle" color="success">Subtle Success</Badge>
        <Badge variant="outline" color="error">Outline Error</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge dot variant="solid" color="info">With Dot</Badge>
        <Badge removable onRemove={() => {}} variant="subtle" color="warning">Removable</Badge>
        <Badge dot removable onRemove={() => {}} variant="outline" color="primary">Both</Badge>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Badge size="sm" color="secondary">Small</Badge>
        <Badge size="md" color="secondary">Medium</Badge>
        <Badge size="lg" color="secondary">Large</Badge>
      </div>
    </div>
  ),
}

/**
 * All sizes across all variants
 */
export const SizeComparison: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">Solid</div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="solid" size="sm">Small</Badge>
          <Badge variant="solid" size="md">Medium</Badge>
          <Badge variant="solid" size="lg">Large</Badge>
        </div>
      </div>
      <div>
        <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">Subtle</div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="subtle" size="sm">Small</Badge>
          <Badge variant="subtle" size="md">Medium</Badge>
          <Badge variant="subtle" size="lg">Large</Badge>
        </div>
      </div>
      <div>
        <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">Outline</div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" size="sm">Small</Badge>
          <Badge variant="outline" size="md">Medium</Badge>
          <Badge variant="outline" size="lg">Large</Badge>
        </div>
      </div>
    </div>
  ),
}

/**
 * Dark mode showcase
 */
export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-8 rounded-lg">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="solid" color="primary">Solid</Badge>
          <Badge variant="subtle" color="success">Subtle</Badge>
          <Badge variant="outline" color="error">Outline</Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge dot color="primary">With Dot</Badge>
          <Badge removable onRemove={() => {}} color="warning">Removable</Badge>
          <Badge dot removable onRemove={() => {}} color="info">Both</Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge color="primary">Primary</Badge>
          <Badge color="secondary">Secondary</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="warning">Warning</Badge>
          <Badge color="error">Error</Badge>
          <Badge color="info">Info</Badge>
        </div>
      </div>
    </div>
  ),
}

/**
 * Interactive playground for testing
 */
export const Playground: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    dot: false,
    removable: false,
    children: 'Badge',
  },
}
