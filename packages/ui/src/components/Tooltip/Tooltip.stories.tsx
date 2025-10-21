import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'
import { Button } from '../Button/Button'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Position of the tooltip relative to the trigger element',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top' },
      },
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click', 'focus'],
      description: 'Event that triggers the tooltip',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'hover' },
      },
    },
    delay: {
      control: 'number',
      description: 'Delay in milliseconds before showing the tooltip',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '200' },
      },
    },
    content: {
      control: 'text',
      description: 'Content to display in the tooltip',
    },
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: <Button>Hover me</Button>,
  },
}

export const Top: Story = {
  args: {
    content: 'Tooltip on top',
    position: 'top',
    children: <Button>Top</Button>,
  },
}

export const Right: Story = {
  args: {
    content: 'Tooltip on right',
    position: 'right',
    children: <Button>Right</Button>,
  },
}

export const Bottom: Story = {
  args: {
    content: 'Tooltip on bottom',
    position: 'bottom',
    children: <Button>Bottom</Button>,
  },
}

export const Left: Story = {
  args: {
    content: 'Tooltip on left',
    position: 'left',
    children: <Button>Left</Button>,
  },
}

export const ClickTrigger: Story = {
  args: {
    content: 'Click to toggle',
    trigger: 'click',
    children: <Button>Click me</Button>,
  },
}

export const LongContent: Story = {
  args: {
    content: 'This is a much longer tooltip with more information that might wrap to multiple lines',
    children: <Button>Hover for long text</Button>,
  },
}
