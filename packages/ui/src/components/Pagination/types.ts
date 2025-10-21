export type PaginationStyle = 'default' | 'simple'

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  style?: PaginationStyle
  showFirstLast?: boolean
  showPrevNext?: boolean
  siblingCount?: number
  className?: string
}
