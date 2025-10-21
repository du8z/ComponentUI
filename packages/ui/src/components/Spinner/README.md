# Spinner Component

A production-ready, accessible Spinner component for loading states with multiple variants and customization options.

## Features

- **3 Variants**: Circle (spinning border), Dots (bouncing dots), Pulse (scaling circle)
- **5 Sizes**: xs, sm, md, lg, xl
- **Customizable Colors**: Support for all Tailwind color classes
- **Fullscreen Mode**: Optional overlay for page-level loading states
- **Accessible**: WCAG AA compliant with proper ARIA attributes
- **Dark Mode**: Full dark mode support
- **TypeScript**: Fully typed with strict mode
- **Well Tested**: 80%+ test coverage

## Installation

```bash
npm install @componentui/ui
```

## Basic Usage

```tsx
import { Spinner } from '@componentui/ui';

function App() {
  return <Spinner />;
}
```

## Variants

### Circle Variant (Default)
Spinning border animation - ideal for general loading states.

```tsx
<Spinner variant="circle" size="lg" />
```

### Dots Variant
Three bouncing dots - great for inline loading indicators.

```tsx
<Spinner variant="dots" size="md" color="green-600" />
```

### Pulse Variant
Scaling circle animation - subtle and modern.

```tsx
<Spinner variant="pulse" size="md" color="purple-600" />
```

## Sizes

Available sizes: `xs`, `sm`, `md` (default), `lg`, `xl`

```tsx
<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />
```

## Colors

Use any Tailwind color class:

```tsx
<Spinner color="red-500" />
<Spinner color="green-600" variant="dots" />
<Spinner color="purple-600" variant="pulse" />
```

## With Label

Add a descriptive label below the spinner:

```tsx
<Spinner label="Loading..." />
<Spinner label="Processing your request..." size="lg" />
```

## Fullscreen Mode

Display the spinner in a fullscreen overlay:

```tsx
<Spinner fullscreen label="Loading your content..." />
```

The fullscreen mode includes:
- Fixed positioning covering the entire viewport
- Semi-transparent backdrop with blur effect
- Centered content
- High z-index (50) to appear above other content

## Inline Usage

Use spinners inline with text or buttons:

```tsx
// With text
<div className="flex items-center gap-2">
  <Spinner size="xs" />
  <span>Loading user data...</span>
</div>

// In a button
<button className="flex items-center gap-2">
  <Spinner size="xs" color="white" />
  Processing
</button>
```

## Accessibility

The component follows WCAG AA accessibility guidelines:

- Uses `role="status"` for screen reader announcements
- Includes `aria-live="polite"` for non-intrusive updates
- Supports custom `aria-label` for screen readers
- Visual elements marked as `aria-hidden="true"`
- Screen reader-only text for context

```tsx
<Spinner aria-label="Fetching your data from the server" />
```

## Dark Mode

The component automatically supports dark mode through Tailwind's dark mode classes:

```tsx
// Light mode: text-gray-700
// Dark mode: text-gray-300
<Spinner label="Loading..." />

// Fullscreen overlay adapts to dark mode
<Spinner fullscreen label="Processing..." />
```

## Custom Styling

Add custom classes to the spinner container:

```tsx
<Spinner
  className="p-8 bg-blue-50 rounded-lg"
  label="Custom styled"
/>
```

## API Reference

### SpinnerProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the spinner |
| `variant` | `'circle' \| 'dots' \| 'pulse'` | `'circle'` | Visual variant |
| `color` | `string` | `'blue-600'` | Tailwind color class |
| `label` | `string` | `undefined` | Optional label text |
| `fullscreen` | `boolean` | `false` | Show in fullscreen overlay |
| `className` | `string` | `undefined` | Additional CSS classes |
| `aria-label` | `string` | `'Loading'` | ARIA label for screen readers |
| `data-testid` | `string` | `'spinner'` | Test ID for testing |

## Examples

### Loading State in Card

```tsx
<div className="card">
  <Spinner size="lg" label="Loading dashboard..." />
</div>
```

### Processing Form Data

```tsx
<button disabled={isLoading}>
  {isLoading ? (
    <Spinner size="xs" color="white" />
  ) : (
    'Submit'
  )}
</button>
```

### Page-Level Loading

```tsx
{isPageLoading && (
  <Spinner
    fullscreen
    size="xl"
    label="Loading your content..."
    aria-label="Please wait while we load your content"
  />
)}
```

### Different Colors for Status

```tsx
// Success
<Spinner variant="dots" color="green-600" label="Saved!" />

// Warning
<Spinner variant="pulse" color="yellow-600" label="Processing..." />

// Error retry
<Spinner variant="circle" color="red-600" label="Retrying..." />
```

## TypeScript

The component is fully typed:

```tsx
import { Spinner, SpinnerProps, SpinnerSize, SpinnerVariant } from '@componentui/ui';

const size: SpinnerSize = 'lg';
const variant: SpinnerVariant = 'circle';

const props: SpinnerProps = {
  size,
  variant,
  color: 'blue-600',
  label: 'Loading...',
};
```

## Testing

The component includes comprehensive tests with 80%+ coverage:

```tsx
import { render, screen } from '@testing-library/react';
import { Spinner } from '@componentui/ui';

test('renders spinner with label', () => {
  render(<Spinner label="Loading..." />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});
```

## Performance

- Lightweight with minimal dependencies (only clsx)
- Uses CSS animations (hardware accelerated)
- No JavaScript animations
- Small bundle size

## Browser Support

Works in all modern browsers that support:
- CSS transforms
- CSS animations
- Flexbox
- CSS backdrop-filter (for fullscreen blur effect)

## License

MIT
