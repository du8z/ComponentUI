import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the checkbox',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    label: {
      control: 'text',
      description: 'Label text for the checkbox',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the label',
    },
    error: {
      control: 'boolean',
      description: 'Whether the checkbox is in an error state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the checkbox is in an indeterminate state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'checkbox-default',
    label: 'Accept terms and conditions',
  },
}

export const WithHelperText: Story = {
  args: {
    id: 'checkbox-helper',
    label: 'Subscribe to newsletter',
    helperText: 'Get weekly updates about new products and features',
  },
}

export const Checked: Story = {
  args: {
    id: 'checkbox-checked',
    label: 'Remember me',
    defaultChecked: true,
  },
}

export const Indeterminate: Story = {
  args: {
    id: 'checkbox-indeterminate',
    label: 'Select all items',
    indeterminate: true,
  },
}

export const Disabled: Story = {
  args: {
    id: 'checkbox-disabled',
    label: 'Disabled option',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    id: 'checkbox-disabled-checked',
    label: 'Disabled checked option',
    disabled: true,
    defaultChecked: true,
  },
}

export const Error: Story = {
  args: {
    id: 'checkbox-error',
    label: 'I agree to the terms',
    helperText: 'You must accept the terms to continue',
    error: true,
  },
}

export const Small: Story = {
  args: {
    id: 'checkbox-small',
    label: 'Small checkbox',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    id: 'checkbox-large',
    label: 'Large checkbox',
    size: 'lg',
  },
}

export const WithoutLabel: Story = {
  args: {
    id: 'checkbox-no-label',
    'aria-label': 'Checkbox without visible label',
  },
}
