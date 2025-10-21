import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Pagination } from './Pagination'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    style: {
      control: 'select',
      options: ['default', 'simple'],
      description: 'Visual style of the pagination',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    showFirstLast: {
      control: 'boolean',
      description: 'Show first and last page buttons',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showPrevNext: {
      control: 'boolean',
      description: 'Show previous and next buttons',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    siblingCount: {
      control: 'number',
      description: 'Number of sibling pages to show around current page',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

function PaginationStory({ totalPages = 10, ...props }: any) {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
      {...props}
    />
  )
}

export const Default: Story = {
  render: () => <PaginationStory />,
}

export const Simple: Story = {
  render: () => <PaginationStory style="simple" />,
}

export const ManyPages: Story = {
  render: () => <PaginationStory totalPages={50} />,
}

export const FewPages: Story = {
  render: () => <PaginationStory totalPages={3} />,
}
