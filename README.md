# ComponentUI

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Storybook](https://img.shields.io/badge/Storybook-7.6-pink?style=flat-square&logo=storybook)](https://storybook.js.org/)
[![Test Coverage](https://img.shields.io/badge/coverage-93%25-green?style=flat-square)](/)
[![Version](https://img.shields.io/badge/version-0.1.0-blue?style=flat-square)](https://github.com/du8z/ComponentUI)

> A modern, accessible, and customizable React component library built with TypeScript and Tailwind CSS.

## 📚 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Available Components](#available-components)
- [Documentation](#documentation)
- [Development](#development)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
  - [Development Workflow](#development-workflow)
  - [Commit Convention](#commit-convention)
- [Testing](#testing)
- [Browser Support](#browser-support)
- [Technology Stack](#technology-stack)
- [Roadmap](#roadmap)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **TypeScript First** - Fully typed components with excellent IntelliSense support
- **Tailwind CSS** - Utility-first styling for easy customization
- **Accessibility** - WCAG AA compliant components with full ARIA support
- **Tree-shakeable** - Import only what you need for optimal bundle size
- **Dark Mode** - Built-in dark mode support for all components
- **Fully Tested** - Comprehensive test coverage with Vitest and React Testing Library
- **Well Documented** - Detailed documentation with live examples in Storybook

## Installation

```bash
# npm
npm install @componentui/ui

# pnpm
pnpm add @componentui/ui

# yarn
yarn add @componentui/ui
```

## Quick Start

```tsx
import { Button } from '@componentui/ui'
import '@componentui/ui/styles.css'

function App() {
  return (
    <Button variant="primary" size="md" onClick={() => alert('Hello!')}>
      Click me
    </Button>
  )
}
```

## Documentation

Visit our [Storybook documentation](https://github.com/du8z/ComponentUI.git) for:

- 📖 Component API documentation
- 🎨 Interactive examples
- ♿ Accessibility guidelines
- 🎯 Best practices

## Available Components

### Base Components

- **Button** - Versatile button with multiple variants and sizes
- **Input** - Text input with validation states
- **Card** - Container with header, body, and footer
- **Badge** - Label with color variants
- **Avatar** - User avatar with image or initials

### Feedback

- **Alert** - Contextual feedback messages
- **Toast** - Temporary notifications
- **Spinner** - Loading indicators
- **Modal** - Dialog overlays

### Form Controls

- **Checkbox** - Checkbox with indeterminate state
- **Select** - Dropdown with search and multi-select
- **Radio** - Radio button groups

### Navigation

- **Tabs** - Tabbed content panels
- **Pagination** - Page navigation
- **Accordion** - Collapsible content sections

### Utilities

- **Tooltip** - Contextual help text
- And more...

## Development

This project uses a monorepo structure with pnpm workspaces:

```
ComponentUI/
├── packages/
│   ├── ui/          # Component library
│   └── docs/        # Storybook documentation
```

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/du8z/ComponentUI.git
   cd ComponentUI
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development**

   ```bash
   # Run Storybook
   pnpm dev:docs

   # Run component development
   pnpm dev

   # Run tests
   pnpm test

   # Run tests with coverage
   pnpm test:coverage
   ```

### Scripts

| Command              | Description                        |
| -------------------- | ---------------------------------- |
| `pnpm dev`           | Start component development server |
| `pnpm dev:docs`      | Start Storybook on port 6006       |
| `pnpm build`         | Build component library            |
| `pnpm build:docs`    | Build Storybook for production     |
| `pnpm test`          | Run all tests                      |
| `pnpm test:coverage` | Run tests with coverage report     |
| `pnpm test:watch`    | Run tests in watch mode            |
| `pnpm lint`          | Lint all packages                  |
| `pnpm format`        | Format code with Prettier          |
| `pnpm clean`         | Clean all build artifacts          |

## Project Structure

```
packages/ui/src/
├── components/       # React components
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── Button.stories.tsx
│   └── ...
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
├── test/            # Test configuration
├── styles.css       # Global styles
└── index.ts         # Main entry point
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Write/update tests
5. Ensure tests pass (`pnpm test`)
6. Commit your changes (`git commit -m 'feat: add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Test updates
- `chore:` - Build process or auxiliary tool changes

## Testing

We maintain high test coverage standards:

- Minimum 80% coverage required
- Unit tests with Vitest
- Component tests with React Testing Library
- Accessibility tests with @storybook/addon-a11y

```bash
# Run tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run tests in watch mode
pnpm test:watch
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technology Stack

- **Framework**: React 18
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Build Tool**: Vite 5
- **Testing**: Vitest + React Testing Library
- **Documentation**: Storybook 7
- **Package Manager**: pnpm

## Roadmap

- [ ] Additional components (DataTable, DatePicker, etc.)
- [ ] Form validation integration
- [ ] Animation system
- [ ] CLI for component generation
- [ ] Figma design system integration
- [ ] Theme customization tool

## License

MIT © [du8z](https://github.com/du8z)

## Acknowledgments

Built with inspiration from:

- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Headless UI](https://headlessui.com/)

---

<p align="center">Made with ❤️ by Emilien Dubois</p>
