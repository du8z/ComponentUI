# Contributing to ComponentUI

Thank you for your interest in contributing to ComponentUI! We appreciate your help in making this project better.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Component Guidelines](#component-guidelines)
- [Testing Guidelines](#testing-guidelines)
- [Pull Request Process](#pull-request-process)
- [Commit Convention](#commit-convention)

## Code of Conduct

This project follows a Code of Conduct. By participating, you are expected to uphold this code. Please be respectful and professional in all interactions.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
   ```bash
   git clone https://github.com/yourusername/componentui.git
   cd componentui
   ```
3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/original/componentui.git
   ```

## Development Setup

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
# Install dependencies
pnpm install

# Start Storybook
pnpm dev:docs

# Run tests
pnpm test
```

## Project Structure

```
ComponentUI/
├── packages/
│   ├── ui/                 # Component library
│   │   ├── src/
│   │   │   ├── components/ # React components
│   │   │   ├── hooks/      # Custom hooks
│   │   │   ├── utils/      # Utilities
│   │   │   └── test/       # Test setup
│   │   └── package.json
│   └── docs/               # Storybook
│       ├── .storybook/
│       └── stories/
└── package.json
```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types/interfaces - avoid `any`
- Export types for public APIs
- Use strict mode settings

### Code Style

- Follow the existing code style
- Use Prettier for formatting (configured in `.prettierrc.json`)
- Use ESLint for linting
- Maximum line length: 100 characters

```bash
# Format code
pnpm format

# Lint code
pnpm lint
```

### Naming Conventions

- **Components**: PascalCase (e.g., `Button`, `InputField`)
- **Files**: PascalCase for components, camelCase for utilities
- **Props**: camelCase
- **CSS Classes**: Tailwind utilities only

## Component Guidelines

### Creating a New Component

Each component should include:

1. **Component file** (`ComponentName.tsx`)
2. **Test file** (`ComponentName.test.tsx`)
3. **Storybook file** (`ComponentName.stories.tsx`)
4. **Export** in `src/index.ts`

### Component Structure

```tsx
import { forwardRef } from 'react'
import { cn } from '@/utils/cn'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'

  /**
   * Button size
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * Loading state
   * @default false
   */
  loading?: boolean
}

/**
 * Button component with multiple variants and sizes
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Click me</Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn('base-styles', variantStyles[variant], className)}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
```

### Component Checklist

- [ ] TypeScript with exported types
- [ ] Props documentation with JSDoc
- [ ] Default prop values
- [ ] Forward refs when appropriate
- [ ] Accessible (ARIA attributes, keyboard navigation)
- [ ] Responsive design
- [ ] Dark mode support
- [ ] Tailwind CSS styling (no inline styles)
- [ ] Unit tests (80%+ coverage)
- [ ] Storybook stories for all variants
- [ ] Documentation in story

## Testing Guidelines

### Writing Tests

- Use Vitest and React Testing Library
- Test user interactions, not implementation
- Include accessibility tests
- Aim for 80%+ code coverage

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('handles click events', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is accessible', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true')
  })
})
```

### Running Tests

```bash
# Run all tests
pnpm test

# Run with coverage
pnpm test:coverage

# Watch mode
pnpm test:watch
```

## Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write code
   - Add/update tests
   - Update documentation

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new component"
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**
   - Describe your changes
   - Reference any related issues
   - Ensure CI passes

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] Tests added/updated and passing
- [ ] Documentation updated
- [ ] Storybook stories added/updated
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Commits follow convention
- [ ] PR title follows convention

## Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style (formatting, semicolons, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding/updating tests
- `chore:` - Build process, dependencies, etc.
- `perf:` - Performance improvements
- `ci:` - CI configuration changes

### Examples

```bash
feat(button): add loading state
fix(input): resolve focus issue
docs(readme): update installation instructions
test(card): add missing test cases
```

## Questions?

Feel free to open an issue for:
- Bug reports
- Feature requests
- Questions about contributing

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to ComponentUI!
