import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
          ComponentUI Development
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Use Storybook for component development and testing.
          Run <code className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded">pnpm dev:docs</code>
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Quick Start
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Components are located in <code>src/components/</code></li>
            <li>Run Storybook: <code>pnpm dev:docs</code></li>
            <li>Run tests: <code>pnpm test</code></li>
            <li>Build library: <code>pnpm build</code></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const root = document.getElementById('root')
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
