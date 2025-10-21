# ComponentUI - Setup Guide

## Quick Setup

Follow these steps to get the project up and running:

### 1. Install pnpm (if not already installed)

```bash
# Using npm
npm install -g pnpm

# Using Homebrew (macOS)
brew install pnpm

# Using curl
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

### 2. Install Dependencies

```bash
pnpm install
```

This will install all dependencies for all packages in the monorepo.

### 3. Verify Installation

```bash
# Check if everything is installed correctly
pnpm -r list
```

### 4. Start Development

```bash
# Option 1: Start Storybook (recommended for component development)
pnpm dev:docs

# Option 2: Start Vite dev server
pnpm dev

# Option 3: Run tests
pnpm test
```

## Available Commands

### Root Level Commands

| Command | Description |
|---------|-------------|
| `pnpm install` | Install all dependencies |
| `pnpm dev` | Start UI package dev server |
| `pnpm dev:docs` | Start Storybook on http://localhost:6006 |
| `pnpm build` | Build the component library |
| `pnpm build:docs` | Build Storybook for production |
| `pnpm test` | Run all tests |
| `pnpm test:coverage` | Run tests with coverage report |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm lint` | Lint all packages |
| `pnpm format` | Format all files with Prettier |
| `pnpm format:check` | Check formatting without changes |
| `pnpm clean` | Remove all build artifacts and node_modules |

### Package-Specific Commands

```bash
# Work on UI package
cd packages/ui
pnpm dev
pnpm build
pnpm test

# Work on Docs package
cd packages/docs
pnpm storybook
pnpm build-storybook
```

## Project Structure

```
ComponentUI/
├── .vscode/                 # VSCode settings
├── packages/
│   ├── ui/                 # Component library
│   │   ├── src/
│   │   │   ├── components/ # React components
│   │   │   ├── hooks/      # Custom hooks
│   │   │   ├── utils/      # Utility functions
│   │   │   ├── test/       # Test setup
│   │   │   ├── styles.css  # Global styles
│   │   │   └── index.ts    # Main entry
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   ├── vitest.config.ts
│   │   └── tsconfig.json
│   └── docs/               # Storybook documentation
│       ├── .storybook/
│       │   ├── main.ts     # Storybook config
│       │   ├── preview.ts  # Preview config
│       │   └── manager.ts  # Theme config
│       └── stories/
│           └── Introduction.mdx
├── package.json            # Root package.json
├── pnpm-workspace.yaml     # Workspace config
├── tsconfig.json           # Root TypeScript config
├── .prettierrc.json        # Prettier config
├── .gitignore
├── README.md
├── CONTRIBUTING.md
├── CHANGELOG.md
└── LICENSE
```

## Development Workflow

### Creating a New Component

1. Create component directory:
   ```bash
   cd packages/ui/src/components
   mkdir MyComponent
   cd MyComponent
   ```

2. Create component files:
   - `MyComponent.tsx` - Component implementation
   - `MyComponent.test.tsx` - Unit tests
   - `MyComponent.stories.tsx` - Storybook stories

3. Export component in `src/index.ts`:
   ```typescript
   export { MyComponent } from './components/MyComponent'
   export type { MyComponentProps } from './components/MyComponent'
   ```

4. Develop in Storybook:
   ```bash
   pnpm dev:docs
   ```

5. Write tests:
   ```bash
   pnpm test:watch
   ```

6. Build and verify:
   ```bash
   pnpm build
   ```

## Troubleshooting

### pnpm not found
```bash
npm install -g pnpm
```

### TypeScript errors
```bash
# Clean and reinstall
pnpm clean
pnpm install
```

### Storybook not starting
```bash
# Clear Storybook cache
cd packages/docs
rm -rf node_modules/.cache
pnpm storybook
```

### Tests failing
```bash
# Clear test cache
cd packages/ui
rm -rf coverage
pnpm test
```

## Next Steps

1. **Read the documentation**: Check out [README.md](README.md)
2. **Contributing**: Read [CONTRIBUTING.md](CONTRIBUTING.md)
3. **Start building**: Create your first component!
4. **Run Storybook**: `pnpm dev:docs` to see examples

## IDE Setup

### Recommended VSCode Extensions

The project includes recommended extensions in `.vscode/extensions.json`:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Playwright
- Vitest Explorer

### VSCode Settings

The project includes optimized settings in `.vscode/settings.json`:
- Auto-format on save
- ESLint auto-fix
- TypeScript workspace version
- Tailwind CSS IntelliSense

## Environment Requirements

- **Node.js**: >= 18.0.0
- **pnpm**: >= 8.0.0
- **Git**: Latest version

Check your versions:
```bash
node --version
pnpm --version
git --version
```

## Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/componentui/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/componentui/discussions)
- **Documentation**: Run `pnpm dev:docs` and visit http://localhost:6006

---

Happy coding! 🚀
