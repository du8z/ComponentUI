import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarGroup } from './Avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible avatar component with support for images, initials, status indicators, multiple sizes and shapes. Fully accessible with WCAG AA compliance and dark mode support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'The size of the avatar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'The shape of the avatar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'circle' },
      },
    },
    name: {
      control: 'text',
      description: 'Name of the person - used for initials generation and alt text',
    },
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alt text for the image',
    },
    status: {
      control: 'select',
      options: [undefined, 'online', 'offline', 'busy', 'away'],
      description: 'Status indicator',
      table: {
        type: { summary: 'string' },
      },
    },
    initials: {
      control: 'text',
      description: 'Custom initials override (max 2 characters)',
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default avatar with initials
 */
export const Default: Story = {
  args: {
    name: 'John Doe',
  },
}

/**
 * Avatar with image
 */
export const WithImage: Story = {
  args: {
    name: 'Sarah Johnson',
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'Sarah Johnson',
  },
}

/**
 * All avatar sizes
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-4">
      <Avatar name="John Doe" size="xs" />
      <Avatar name="John Doe" size="sm" />
      <Avatar name="John Doe" size="md" />
      <Avatar name="John Doe" size="lg" />
      <Avatar name="John Doe" size="xl" />
      <Avatar name="John Doe" size="2xl" />
    </div>
  ),
}

/**
 * All avatar sizes with images
 */
export const SizesWithImages: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-4">
      <Avatar name="User" src="https://i.pravatar.cc/150?img=2" size="xs" />
      <Avatar name="User" src="https://i.pravatar.cc/150?img=2" size="sm" />
      <Avatar name="User" src="https://i.pravatar.cc/150?img=2" size="md" />
      <Avatar name="User" src="https://i.pravatar.cc/150?img=2" size="lg" />
      <Avatar name="User" src="https://i.pravatar.cc/150?img=2" size="xl" />
      <Avatar name="User" src="https://i.pravatar.cc/150?img=2" size="2xl" />
    </div>
  ),
}

/**
 * Circle and square shapes
 */
export const Shapes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Avatar name="Circle Avatar" shape="circle" size="lg" />
      <Avatar name="Square Avatar" shape="square" size="lg" />
      <Avatar
        name="Circle with Image"
        src="https://i.pravatar.cc/150?img=3"
        shape="circle"
        size="lg"
      />
      <Avatar
        name="Square with Image"
        src="https://i.pravatar.cc/150?img=3"
        shape="square"
        size="lg"
      />
    </div>
  ),
}

/**
 * Status indicators
 */
export const StatusIndicators: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Avatar name="Online User" status="online" size="lg" />
      <Avatar name="Offline User" status="offline" size="lg" />
      <Avatar name="Busy User" status="busy" size="lg" />
      <Avatar name="Away User" status="away" size="lg" />
    </div>
  ),
}

/**
 * Status indicators with images
 */
export const StatusWithImages: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Avatar
        name="Online User"
        src="https://i.pravatar.cc/150?img=4"
        status="online"
        size="lg"
      />
      <Avatar
        name="Offline User"
        src="https://i.pravatar.cc/150?img=5"
        status="offline"
        size="lg"
      />
      <Avatar
        name="Busy User"
        src="https://i.pravatar.cc/150?img=6"
        status="busy"
        size="lg"
      />
      <Avatar
        name="Away User"
        src="https://i.pravatar.cc/150?img=7"
        status="away"
        size="lg"
      />
    </div>
  ),
}

/**
 * Custom initials
 */
export const CustomInitials: Story = {
  args: {
    name: 'John Doe',
    initials: 'AB',
    size: 'lg',
  },
}

/**
 * Initials generation examples
 */
export const InitialsGeneration: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Avatar name="John Doe" size="lg" />
        <span className="text-xs text-gray-600">John Doe</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar name="Jane Smith" size="lg" />
        <span className="text-xs text-gray-600">Jane Smith</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar name="Bob" size="lg" />
        <span className="text-xs text-gray-600">Bob</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar name="Alice Marie Johnson" size="lg" />
        <span className="text-xs text-gray-600">Alice Marie Johnson</span>
      </div>
    </div>
  ),
}

/**
 * Image fallback to initials
 */
export const ImageFallback: Story = {
  args: {
    name: 'Error User',
    src: '/invalid-image.jpg',
    size: 'lg',
  },
}

/**
 * All statuses in different sizes
 */
export const StatusSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-4">
        <Avatar name="XS" status="online" size="xs" />
        <Avatar name="SM" status="online" size="sm" />
        <Avatar name="MD" status="online" size="md" />
        <Avatar name="LG" status="online" size="lg" />
        <Avatar name="XL" status="online" size="xl" />
        <Avatar name="2XL" status="online" size="2xl" />
      </div>
    </div>
  ),
}

/**
 * Avatar group with default settings
 */
export const GroupDefault: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar name="John Doe" src="https://i.pravatar.cc/150?img=8" />
      <Avatar name="Jane Smith" src="https://i.pravatar.cc/150?img=9" />
      <Avatar name="Bob Johnson" src="https://i.pravatar.cc/150?img=10" />
      <Avatar name="Alice Williams" src="https://i.pravatar.cc/150?img=11" />
    </AvatarGroup>
  ),
}

/**
 * Avatar group with max limit
 */
export const GroupWithMax: Story = {
  render: () => (
    <AvatarGroup max={3}>
      <Avatar name="User 1" src="https://i.pravatar.cc/150?img=12" />
      <Avatar name="User 2" src="https://i.pravatar.cc/150?img=13" />
      <Avatar name="User 3" src="https://i.pravatar.cc/150?img=14" />
      <Avatar name="User 4" src="https://i.pravatar.cc/150?img=15" />
      <Avatar name="User 5" src="https://i.pravatar.cc/150?img=16" />
      <Avatar name="User 6" src="https://i.pravatar.cc/150?img=17" />
    </AvatarGroup>
  ),
}

/**
 * Avatar group sizes
 */
export const GroupSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium w-12">XS:</span>
        <AvatarGroup size="xs">
          <Avatar name="User 1" />
          <Avatar name="User 2" />
          <Avatar name="User 3" />
        </AvatarGroup>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium w-12">SM:</span>
        <AvatarGroup size="sm">
          <Avatar name="User 1" />
          <Avatar name="User 2" />
          <Avatar name="User 3" />
        </AvatarGroup>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium w-12">MD:</span>
        <AvatarGroup size="md">
          <Avatar name="User 1" />
          <Avatar name="User 2" />
          <Avatar name="User 3" />
        </AvatarGroup>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium w-12">LG:</span>
        <AvatarGroup size="lg">
          <Avatar name="User 1" />
          <Avatar name="User 2" />
          <Avatar name="User 3" />
        </AvatarGroup>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium w-12">XL:</span>
        <AvatarGroup size="xl">
          <Avatar name="User 1" />
          <Avatar name="User 2" />
          <Avatar name="User 3" />
        </AvatarGroup>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium w-12">2XL:</span>
        <AvatarGroup size="2xl">
          <Avatar name="User 1" />
          <Avatar name="User 2" />
          <Avatar name="User 3" />
        </AvatarGroup>
      </div>
    </div>
  ),
}

/**
 * Avatar group with square shape
 */
export const GroupSquare: Story = {
  render: () => (
    <AvatarGroup shape="square" max={4}>
      <Avatar name="User 1" src="https://i.pravatar.cc/150?img=18" />
      <Avatar name="User 2" src="https://i.pravatar.cc/150?img=19" />
      <Avatar name="User 3" src="https://i.pravatar.cc/150?img=20" />
      <Avatar name="User 4" src="https://i.pravatar.cc/150?img=21" />
      <Avatar name="User 5" src="https://i.pravatar.cc/150?img=22" />
    </AvatarGroup>
  ),
}

/**
 * Avatar group with initials only
 */
export const GroupWithInitials: Story = {
  render: () => (
    <AvatarGroup max={4}>
      <Avatar name="John Doe" />
      <Avatar name="Jane Smith" />
      <Avatar name="Bob Johnson" />
      <Avatar name="Alice Williams" />
      <Avatar name="Charlie Brown" />
      <Avatar name="Diana Prince" />
    </AvatarGroup>
  ),
}

/**
 * Large avatar group
 */
export const GroupLarge: Story = {
  render: () => (
    <AvatarGroup max={5}>
      <Avatar name="User 1" src="https://i.pravatar.cc/150?img=23" />
      <Avatar name="User 2" src="https://i.pravatar.cc/150?img=24" />
      <Avatar name="User 3" src="https://i.pravatar.cc/150?img=25" />
      <Avatar name="User 4" src="https://i.pravatar.cc/150?img=26" />
      <Avatar name="User 5" src="https://i.pravatar.cc/150?img=27" />
      <Avatar name="User 6" src="https://i.pravatar.cc/150?img=28" />
      <Avatar name="User 7" src="https://i.pravatar.cc/150?img=29" />
      <Avatar name="User 8" src="https://i.pravatar.cc/150?img=30" />
      <Avatar name="User 9" src="https://i.pravatar.cc/150?img=31" />
      <Avatar name="User 10" src="https://i.pravatar.cc/150?img=32" />
    </AvatarGroup>
  ),
}

/**
 * User profile card example
 */
export const ProfileCard: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <Avatar
        name="Sarah Johnson"
        src="https://i.pravatar.cc/150?img=33"
        status="online"
        size="xl"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Sarah Johnson
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Product Designer
        </p>
      </div>
    </div>
  ),
}

/**
 * Team members list example
 */
export const TeamList: Story = {
  render: () => (
    <div className="space-y-3 w-80">
      <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
        <div className="flex items-center gap-3">
          <Avatar
            name="John Doe"
            src="https://i.pravatar.cc/150?img=34"
            status="online"
            size="md"
          />
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              John Doe
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Developer</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
        <div className="flex items-center gap-3">
          <Avatar
            name="Jane Smith"
            src="https://i.pravatar.cc/150?img=35"
            status="busy"
            size="md"
          />
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Jane Smith
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Designer</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
        <div className="flex items-center gap-3">
          <Avatar
            name="Bob Johnson"
            src="https://i.pravatar.cc/150?img=36"
            status="away"
            size="md"
          />
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Bob Johnson
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Manager</p>
          </div>
        </div>
      </div>
    </div>
  ),
}

/**
 * Comment section example
 */
export const Comments: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <div className="flex gap-3">
        <Avatar name="Alice Williams" src="https://i.pravatar.cc/150?img=37" size="sm" />
        <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            Alice Williams
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
            Great work on this component! The design looks really clean.
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <Avatar name="Charlie Brown" src="https://i.pravatar.cc/150?img=38" size="sm" />
        <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            Charlie Brown
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
            I agree! The accessibility features are excellent too.
          </p>
        </div>
      </div>
    </div>
  ),
}

/**
 * Dark mode example
 */
export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-8 rounded-lg space-y-6">
      <div className="flex flex-wrap gap-4">
        <Avatar name="John Doe" size="lg" />
        <Avatar name="Jane Smith" src="https://i.pravatar.cc/150?img=39" size="lg" />
        <Avatar name="Bob" status="online" size="lg" />
        <Avatar
          name="Alice"
          src="https://i.pravatar.cc/150?img=40"
          status="busy"
          size="lg"
        />
      </div>
      <AvatarGroup max={4}>
        <Avatar name="User 1" src="https://i.pravatar.cc/150?img=41" />
        <Avatar name="User 2" src="https://i.pravatar.cc/150?img=42" />
        <Avatar name="User 3" src="https://i.pravatar.cc/150?img=43" />
        <Avatar name="User 4" src="https://i.pravatar.cc/150?img=44" />
        <Avatar name="User 5" src="https://i.pravatar.cc/150?img=45" />
      </AvatarGroup>
    </div>
  ),
}

/**
 * Playground for interactive testing
 */
export const Playground: Story = {
  args: {
    name: 'John Doe',
    size: 'md',
    shape: 'circle',
    status: undefined,
  },
}
