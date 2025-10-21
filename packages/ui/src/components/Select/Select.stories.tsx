import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Select } from './Select'

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="min-h-[400px] w-full max-w-md flex items-start justify-center pt-4">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple selections',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    searchable: {
      control: 'boolean',
      description: 'Enable search functionality',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button when a value is selected',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the select',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      control: 'boolean',
      description: 'Show error state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
]

function SelectStory(props: any) {
  const [value, setValue] = useState(props.multiple ? [] : '')
  return <Select {...props} value={value} onChange={setValue} />
}

export const Default: Story = {
  render: () => <SelectStory options={options} placeholder="Select a framework" />,
}

export const WithLabel: Story = {
  render: () => (
    <SelectStory
      options={options}
      label="Framework"
      helperText="Choose your preferred framework"
      placeholder="Select a framework"
    />
  ),
}

export const Searchable: Story = {
  render: () => (
    <SelectStory options={options} searchable placeholder="Search frameworks..." />
  ),
}

export const Clearable: Story = {
  render: () => (
    <SelectStory options={options} clearable placeholder="Select a framework" />
  ),
}

export const Multiple: Story = {
  render: () => (
    <SelectStory options={options} multiple placeholder="Select frameworks" />
  ),
}

export const Disabled: Story = {
  render: () => (
    <SelectStory options={options} disabled placeholder="Select a framework" />
  ),
}

export const Error: Story = {
  render: () => (
    <SelectStory
      options={options}
      error
      label="Framework"
      helperText="Please select a valid framework"
      placeholder="Select a framework"
    />
  ),
}
