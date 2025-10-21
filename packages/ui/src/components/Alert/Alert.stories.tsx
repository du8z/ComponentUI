import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'
import { Button } from '../Button/Button'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'The type of alert to display',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'subtle'],
      description: 'The visual variant of the alert',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'subtle' },
      },
    },
    title: {
      control: 'text',
      description: 'Optional title for the alert',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'Content to be displayed in the alert',
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    type: 'success',
    variant: 'subtle',
    title: 'Success',
    children: 'Your changes have been saved successfully.',
  },
}

export const Error: Story = {
  args: {
    type: 'error',
    variant: 'subtle',
    title: 'Error',
    children: 'There was an error processing your request. Please try again.',
  },
}

export const Warning: Story = {
  args: {
    type: 'warning',
    variant: 'subtle',
    title: 'Warning',
    children: 'This action cannot be undone. Please proceed with caution.',
  },
}

export const Info: Story = {
  args: {
    type: 'info',
    variant: 'subtle',
    title: 'Information',
    children: 'This is an informational message to help you understand the context.',
  },
}

export const Filled: Story = {
  args: {
    type: 'info',
    variant: 'filled',
    title: 'Filled Variant',
    children: 'This is a filled variant of the alert component.',
  },
}

export const Outlined: Story = {
  args: {
    type: 'warning',
    variant: 'outlined',
    title: 'Outlined Variant',
    children: 'This is an outlined variant of the alert component.',
  },
}

export const Dismissible: Story = {
  args: {
    type: 'info',
    variant: 'subtle',
    title: 'Dismissible Alert',
    children: 'You can close this alert by clicking the X button.',
    dismissible: true,
  },
}

export const WithoutTitle: Story = {
  args: {
    type: 'success',
    variant: 'subtle',
    children: 'This alert has no title, just the message content.',
  },
}

export const WithActions: Story = {
  args: {
    type: 'info',
    variant: 'subtle',
    title: 'Action Required',
    children: 'Please review and accept the terms and conditions to continue.',
    actions: (
      <div className="flex gap-2">
        <Button size="sm" variant="primary">
          Accept
        </Button>
        <Button size="sm" variant="ghost">
          Decline
        </Button>
      </div>
    ),
  },
}

export const CustomIcon: Story = {
  args: {
    type: 'success',
    variant: 'subtle',
    title: 'Custom Icon',
    children: 'This alert uses a custom icon instead of the default.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
  },
}
