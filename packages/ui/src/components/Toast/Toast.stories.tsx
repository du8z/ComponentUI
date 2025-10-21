import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Toast } from './Toast'
import { Button } from '../Button/Button'

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'Type of toast notification',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    duration: {
      control: 'number',
      description: 'Duration in milliseconds before auto-close (0 for no auto-close)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5000' },
      },
    },
    showProgress: {
      control: 'boolean',
      description: 'Show progress bar',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

function ToastStory({ type = 'info', ...props }: any) {
  const [show, setShow] = useState(false)

  return (
    <div>
      <Button onClick={() => setShow(true)}>Show Toast</Button>
      {show && (
        <Toast
          type={type}
          title="Notification"
          message="This is a toast notification message"
          onClose={() => setShow(false)}
          {...props}
        />
      )}
    </div>
  )
}

export const Success: Story = {
  render: () => <ToastStory type="success" />,
}

export const Error: Story = {
  render: () => <ToastStory type="error" />,
}

export const Warning: Story = {
  render: () => <ToastStory type="warning" />,
}

export const Info: Story = {
  render: () => <ToastStory type="info" />,
}

export const WithAction: Story = {
  render: () => (
    <ToastStory
      type="info"
      action={<Button size="sm" variant="ghost">Undo</Button>}
    />
  ),
}

export const NoProgress: Story = {
  render: () => <ToastStory showProgress={false} />,
}
