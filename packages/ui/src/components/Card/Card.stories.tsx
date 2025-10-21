import type { Meta, StoryObj } from '@storybook/react'
import Card from './Card'

/**
 * Icon components for examples
 */
const IconUser = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-12 h-12"
  >
    <path
      fillRule="evenodd"
      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
      clipRule="evenodd"
    />
  </svg>
)

const IconHeart = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  </svg>
)

const IconChat = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z"
      clipRule="evenodd"
    />
  </svg>
)

const IconShare = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
      clipRule="evenodd"
    />
  </svg>
)

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible card component with composable sections (Header, Body, Footer). Supports multiple variants (elevated, outlined, filled) and interactive features (hoverable, clickable). Fully accessible with WCAG AA compliance.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
      description: 'The visual style variant of the card',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'elevated' },
      },
    },
    hoverable: {
      control: 'boolean',
      description: 'Whether the card should have a hover effect',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the card is clickable',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'Content to be rendered inside the card',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler (only works when clickable is true)',
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default card with all sections
 */
export const Default: Story = {
  render: () => (
    <div className="w-96">
      <Card>
        <Card.Header>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Card Title</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Subtitle text</p>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-700 dark:text-gray-300">
            This is the main content of the card. It can contain any React components or HTML elements.
          </p>
        </Card.Body>
        <Card.Footer>
          <div className="flex justify-end gap-2">
            <button className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300">
              Cancel
            </button>
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
              Confirm
            </button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  ),
}

/**
 * All card variants
 */
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      <div className="w-80">
        <Card variant="elevated">
          <Card.Header>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Elevated Card</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-gray-700 dark:text-gray-300">
              Card with shadow elevation effect. Default variant.
            </p>
          </Card.Body>
        </Card>
      </div>
      <div className="w-80">
        <Card variant="outlined">
          <Card.Header>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Outlined Card</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-gray-700 dark:text-gray-300">
              Card with border outline style.
            </p>
          </Card.Body>
        </Card>
      </div>
      <div className="w-80">
        <Card variant="filled">
          <Card.Header>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filled Card</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-gray-700 dark:text-gray-300">
              Card with background fill style.
            </p>
          </Card.Body>
        </Card>
      </div>
    </div>
  ),
}

/**
 * Elevated variant (default)
 */
export const Elevated: Story = {
  render: () => (
    <div className="w-96">
      <Card variant="elevated">
        <Card.Header>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Elevated Card</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-700 dark:text-gray-300">
            This card uses the elevated variant with shadow effect.
          </p>
        </Card.Body>
      </Card>
    </div>
  ),
}

/**
 * Outlined variant
 */
export const Outlined: Story = {
  render: () => (
    <div className="w-96">
      <Card variant="outlined">
        <Card.Header>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Outlined Card</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-700 dark:text-gray-300">
            This card uses the outlined variant with border.
          </p>
        </Card.Body>
      </Card>
    </div>
  ),
}

/**
 * Filled variant
 */
export const Filled: Story = {
  render: () => (
    <div className="w-96">
      <Card variant="filled">
        <Card.Header>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filled Card</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-700 dark:text-gray-300">
            This card uses the filled variant with background color.
          </p>
        </Card.Body>
      </Card>
    </div>
  ),
}

/**
 * Hoverable cards
 */
export const Hoverable: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      <div className="w-80">
        <Card variant="elevated" hoverable>
          <Card.Body>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Hoverable Elevated</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Hover over this card to see the shadow and lift effect.
            </p>
          </Card.Body>
        </Card>
      </div>
      <div className="w-80">
        <Card variant="outlined" hoverable>
          <Card.Body>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Hoverable Outlined</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Hover over this card to see the border and shadow effect.
            </p>
          </Card.Body>
        </Card>
      </div>
      <div className="w-80">
        <Card variant="filled" hoverable>
          <Card.Body>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Hoverable Filled</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Hover over this card to see the background color change.
            </p>
          </Card.Body>
        </Card>
      </div>
    </div>
  ),
}

/**
 * Clickable cards
 */
export const Clickable: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      <div className="w-80">
        <Card variant="elevated" clickable onClick={() => alert('Elevated card clicked!')}>
          <Card.Body>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Clickable Card</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Click this card to trigger an action.
            </p>
          </Card.Body>
        </Card>
      </div>
      <div className="w-80">
        <Card variant="outlined" clickable onClick={() => alert('Outlined card clicked!')}>
          <Card.Body>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Clickable Outlined</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Keyboard accessible with Enter and Space keys.
            </p>
          </Card.Body>
        </Card>
      </div>
    </div>
  ),
}

/**
 * Hoverable and clickable combination
 */
export const HoverableAndClickable: Story = {
  render: () => (
    <div className="w-96">
      <Card
        variant="outlined"
        hoverable
        clickable
        onClick={() => alert('Card clicked!')}
      >
        <Card.Body>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Card
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            This card is both hoverable and clickable. Hover to see the effect, click to trigger action.
          </p>
        </Card.Body>
      </Card>
    </div>
  ),
}

/**
 * Simple card with only body
 */
export const SimpleCard: Story = {
  render: () => (
    <div className="w-96">
      <Card>
        <Card.Body>
          <p className="text-gray-700 dark:text-gray-300">
            A simple card with only body content.
          </p>
        </Card.Body>
      </Card>
    </div>
  ),
}

/**
 * Card with header and body
 */
export const WithHeaderAndBody: Story = {
  render: () => (
    <div className="w-96">
      <Card variant="outlined">
        <Card.Header>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Card Title</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-700 dark:text-gray-300">
            Card with header and body sections.
          </p>
        </Card.Body>
      </Card>
    </div>
  ),
}

/**
 * Card with body and footer
 */
export const WithBodyAndFooter: Story = {
  render: () => (
    <div className="w-96">
      <Card variant="filled">
        <Card.Body>
          <p className="text-gray-700 dark:text-gray-300">
            Card with body and footer sections.
          </p>
        </Card.Body>
        <Card.Footer>
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
            Action
          </button>
        </Card.Footer>
      </Card>
    </div>
  ),
}

/**
 * User profile card
 */
export const UserProfile: Story = {
  render: () => (
    <div className="w-96">
      <Card variant="elevated">
        <Card.Body>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-gray-600 dark:text-gray-400">
              <IconUser />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              John Doe
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Product Designer
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Passionate about creating beautiful and functional user interfaces.
            </p>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              View Profile
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  ),
}

/**
 * Product card
 */
export const ProductCard: Story = {
  render: () => (
    <div className="w-80">
      <Card variant="outlined" hoverable clickable onClick={() => alert('Product clicked!')}>
        <Card.Body className="p-0">
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-gray-400 dark:text-gray-500">Product Image</span>
          </div>
        </Card.Body>
        <Card.Body>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Premium Product
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            High-quality product with amazing features and benefits.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">$99.99</span>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  ),
}

/**
 * Blog post card
 */
export const BlogPost: Story = {
  render: () => (
    <div className="w-96">
      <Card variant="elevated" hoverable>
        <Card.Header>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
            <span>Technology</span>
            <span>"</span>
            <span>5 min read</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Building Modern UIs with React
          </h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Learn how to create beautiful and accessible user interfaces using modern React patterns and best practices.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <IconHeart />
              <span>234</span>
            </div>
            <div className="flex items-center gap-1">
              <IconChat />
              <span>42</span>
            </div>
            <div className="flex items-center gap-1">
              <IconShare />
              <span>Share</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  ),
}

/**
 * Notification card
 */
export const Notification: Story = {
  render: () => (
    <div className="w-96">
      <Card variant="filled">
        <Card.Body>
          <div className="flex gap-4">
            <div className="flex-shrink-0 text-blue-600 dark:text-blue-400">
              <IconChat />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                New message received
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                You have a new message from Sarah Johnson
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">2 minutes ago</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  ),
}

/**
 * Stats card
 */
export const StatsCard: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      <div className="w-64">
        <Card variant="elevated">
          <Card.Body>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Users</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">12,345</p>
              </div>
              <div className="text-green-600 dark:text-green-400">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-green-600 dark:text-green-400 mt-2">+12.5% from last month</p>
          </Card.Body>
        </Card>
      </div>
      <div className="w-64">
        <Card variant="elevated">
          <Card.Body>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Revenue</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">$45,678</p>
              </div>
              <div className="text-blue-600 dark:text-blue-400">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">+8.2% from last month</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  ),
}

/**
 * Multiple body sections
 */
export const MultipleBodySections: Story = {
  render: () => (
    <div className="w-96">
      <Card variant="outlined">
        <Card.Header>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Settings</h3>
        </Card.Header>
        <Card.Body>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Profile Settings</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Update your profile information and preferences.
          </p>
        </Card.Body>
        <Card.Body className="border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Privacy Settings</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Manage your privacy and data sharing preferences.
          </p>
        </Card.Body>
        <Card.Body className="border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Notification Settings</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Configure how you receive notifications.
          </p>
        </Card.Body>
      </Card>
    </div>
  ),
}

/**
 * Card grid layout
 */
export const CardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 max-w-4xl">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Card key={i} variant="outlined" hoverable clickable>
          <Card.Body>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Card {i}</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Card content goes here
            </p>
          </Card.Body>
        </Card>
      ))}
    </div>
  ),
}

/**
 * Dark mode example
 */
export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-8 rounded-lg">
      <div className="flex flex-wrap gap-6">
        <div className="w-80">
          <Card variant="elevated">
            <Card.Header>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Elevated in Dark</h3>
            </Card.Header>
            <Card.Body>
              <p className="text-gray-700 dark:text-gray-300">
                Dark mode elevated card with shadow.
              </p>
            </Card.Body>
          </Card>
        </div>
        <div className="w-80">
          <Card variant="outlined">
            <Card.Header>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Outlined in Dark</h3>
            </Card.Header>
            <Card.Body>
              <p className="text-gray-700 dark:text-gray-300">
                Dark mode outlined card with border.
              </p>
            </Card.Body>
          </Card>
        </div>
        <div className="w-80">
          <Card variant="filled">
            <Card.Header>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filled in Dark</h3>
            </Card.Header>
            <Card.Body>
              <p className="text-gray-700 dark:text-gray-300">
                Dark mode filled card with background.
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  ),
}

/**
 * Custom styling example
 */
export const CustomStyling: Story = {
  render: () => (
    <div className="w-96">
      <Card variant="outlined" className="border-blue-500 dark:border-blue-400">
        <Card.Header className="bg-blue-50 dark:bg-blue-900/20">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
            Custom Styled Card
          </h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-700 dark:text-gray-300">
            This card demonstrates custom styling with blue accent colors.
          </p>
        </Card.Body>
        <Card.Footer className="bg-blue-50 dark:bg-blue-900/20">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Custom Action
          </button>
        </Card.Footer>
      </Card>
    </div>
  ),
}

/**
 * Playground for interactive testing
 */
export const Playground: Story = {
  args: {
    variant: 'elevated',
    hoverable: false,
    clickable: false,
  },
  render: (args) => (
    <div className="w-96">
      <Card {...args}>
        <Card.Header>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Playground Card</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-700 dark:text-gray-300">
            Use the controls to customize this card and see the changes in real-time.
          </p>
        </Card.Body>
        <Card.Footer>
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
            Action
          </button>
        </Card.Footer>
      </Card>
    </div>
  ),
}
