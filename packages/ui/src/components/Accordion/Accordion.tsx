import { useState } from 'react'
import { cn } from '@/utils/cn'
import type { AccordionProps } from './types'

export function Accordion({
  items,
  allowMultiple = false,
  defaultExpanded = [],
  variant = 'bordered',
  className,
  onChange,
}: AccordionProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(defaultExpanded)

  const toggleItem = (itemId: string) => {
    let newExpanded: string[]
    
    if (expandedItems.includes(itemId)) {
      newExpanded = expandedItems.filter((id) => id !== itemId)
    } else {
      newExpanded = allowMultiple ? [...expandedItems, itemId] : [itemId]
    }
    
    setExpandedItems(newExpanded)
    onChange?.(newExpanded)
  }

  const variantClasses = {
    bordered: 'border border-gray-200 dark:border-gray-700 rounded-lg',
    filled: 'bg-gray-50 dark:bg-gray-800 rounded-lg',
  }

  return (
    <div className={cn('space-y-2', className)}>
      {items.map((item) => {
        const isExpanded = expandedItems.includes(item.id)
        
        return (
          <div
            key={item.id}
            className={cn(
              'overflow-hidden transition-all duration-200',
              variantClasses[variant]
            )}
          >
            <button
              onClick={() => !item.disabled && toggleItem(item.id)}
              disabled={item.disabled}
              aria-expanded={isExpanded}
              aria-controls={`accordion-content-${item.id}`}
              className={cn(
                'w-full flex items-center justify-between p-4 text-left',
                'hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset'
              )}
            >
              <span className="flex items-center gap-2 font-medium text-gray-900 dark:text-gray-100">
                {item.icon && <span aria-hidden="true">{item.icon}</span>}
                {item.title}
              </span>
              <svg
                className={cn(
                  'w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200',
                  isExpanded && 'transform rotate-180'
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div
              id={`accordion-content-${item.id}`}
              className={cn(
                'transition-all duration-200 ease-in-out',
                isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              )}
            >
              <div className="p-4 pt-0 text-gray-700 dark:text-gray-300">
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
