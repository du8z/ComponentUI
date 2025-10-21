import { useState } from 'react'
import { cn } from '@/utils/cn'
import type { TabsProps } from './types'

export function Tabs({
  tabs,
  defaultTab,
  variant = 'line',
  orientation = 'horizontal',
  className,
  onChange,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    onChange?.(tabId)
  }

  const handleKeyDown = (e: React.KeyboardEvent, tabId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleTabChange(tabId)
    }
  }

  const variantClasses = {
    line: {
      list: 'border-b border-gray-200 dark:border-gray-700',
      tab: 'border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600',
      active: 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400',
      inactive: 'text-gray-600 dark:text-gray-400',
    },
    enclosed: {
      list: 'border-b border-gray-200 dark:border-gray-700',
      tab: 'border border-transparent rounded-t-lg',
      active: 'border-gray-200 dark:border-gray-700 border-b-white dark:border-b-gray-800 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400',
      inactive: 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200',
    },
    pills: {
      list: '',
      tab: 'rounded-lg',
      active: 'bg-blue-600 text-white dark:bg-blue-500',
      inactive: 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700',
    },
  }

  const isVertical = orientation === 'vertical'

  return (
    <div className={cn('w-full', isVertical && 'flex gap-4', className)}>
      <div
        role="tablist"
        aria-orientation={orientation}
        className={cn(
          'flex',
          isVertical ? 'flex-col' : 'flex-row gap-2',
          variantClasses[variant].list
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            disabled={tab.disabled}
            onClick={() => handleTabChange(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, tab.id)}
            className={cn(
              'px-4 py-2 text-sm font-medium transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              variantClasses[variant].tab,
              activeTab === tab.id
                ? variantClasses[variant].active
                : variantClasses[variant].inactive
            )}
          >
            {tab.icon && <span className="mr-2" aria-hidden="true">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>

      <div className={cn('mt-4', isVertical && 'flex-1 mt-0')}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={activeTab !== tab.id}
            className={cn(activeTab === tab.id ? 'block' : 'hidden')}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
