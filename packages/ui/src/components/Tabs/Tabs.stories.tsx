import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['line', 'enclosed', 'pills'],
      description: 'Visual variant of the tabs',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'line' },
      },
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the tabs',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
    },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

const tabs = [
  {
    id: 'tab1',
    label: 'Profile',
    content: <div className="p-4">Profile settings and information</div>,
  },
  {
    id: 'tab2',
    label: 'Account',
    content: <div className="p-4">Account settings and preferences</div>,
  },
  {
    id: 'tab3',
    label: 'Notifications',
    content: <div className="p-4">Notification preferences and history</div>,
  },
]

export const Line: Story = {
  args: {
    tabs,
    variant: 'line',
  },
}

export const Enclosed: Story = {
  args: {
    tabs,
    variant: 'enclosed',
  },
}

export const Pills: Story = {
  args: {
    tabs,
    variant: 'pills',
  },
}

export const Vertical: Story = {
  args: {
    tabs,
    orientation: 'vertical',
  },
}
