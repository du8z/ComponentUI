import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from './Accordion'

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    allowMultiple: {
      control: 'boolean',
      description: 'Allow multiple items to be expanded at once',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    variant: {
      control: 'select',
      options: ['bordered', 'filled'],
      description: 'Visual variant of the accordion',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bordered' },
      },
    },
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  {
    id: '1',
    title: 'What is React?',
    content: 'React is a JavaScript library for building user interfaces. It lets you create reusable components that can manage their own state.',
  },
  {
    id: '2',
    title: 'Why use TypeScript?',
    content: 'TypeScript adds static typing to JavaScript, helping catch errors during development and providing better tooling support.',
  },
  {
    id: '3',
    title: 'What is Tailwind CSS?',
    content: 'Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs.',
  },
]

export const Default: Story = {
  args: {
    items,
  },
}

export const AllowMultiple: Story = {
  args: {
    items,
    allowMultiple: true,
  },
}

export const DefaultExpanded: Story = {
  args: {
    items,
    defaultExpanded: ['1'],
  },
}

export const Filled: Story = {
  args: {
    items,
    variant: 'filled',
  },
}
