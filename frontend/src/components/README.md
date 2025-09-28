# GradientHeader Component

A reusable React component for creating beautiful gradient text headers with semantic HTML and responsive design.

## Features

- 🎨 **Multiple Gradient Variants**: 6 different gradient styles using design system colors
- 📱 **Responsive Design**: Automatic responsive sizing based on header level
- 🎯 **Semantic HTML**: Renders proper h1, h2, h3, etc. elements
- 🎭 **Customizable**: Accepts additional Tailwind classes via className prop
- ♿ **Accessible**: Includes fallback colors for browsers that don't support background-clip
- 📝 **TypeScript**: Full TypeScript support with proper type definitions

## Gradient Variants

| Variant | Description | Colors |
|---------|-------------|---------|
| `default` | Modern blue gradient | #1e40af → #60a5fa |
| `primary` | Primary brand gradient | #2563eb → #3b82f6 |
| `accent` | Accent gradient | #3b82f6 → #60a5fa |
| `warm` | Warm orange gradient | #f59e0b → #fbbf24 |
| `cool` | Cool green gradient | #10b981 → #34d399 |
| `reverse` | Reversed blue gradient | #60a5fa → #1e40af |

## Usage

### Basic Usage

```tsx
import GradientHeader from '@/components/GradientHeader';

<GradientHeader level="h1" className="text-5xl font-bold">
  Invisible AI That Thinks for You
</GradientHeader>
```

### With Different Variants

```tsx
<GradientHeader level="h2" variant="accent" className="text-3xl">
  Modern Tech Solutions
</GradientHeader>

<GradientHeader level="h3" variant="warm" className="text-2xl">
  Lightning Fast Processing
</GradientHeader>
```

### Multi-line Text

```tsx
<GradientHeader level="h1" variant="primary" className="text-4xl">
  <div>Turn chaos into</div>
  <div>mastery</div>
</GradientHeader>
```

### Custom Styling

```tsx
<GradientHeader 
  level="h2" 
  variant="cool" 
  className="text-3xl text-center italic"
>
  Centered & Italic
</GradientHeader>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | - | **Required.** The semantic HTML element to render |
| `variant` | `'default' \| 'primary' \| 'accent' \| 'warm' \| 'cool' \| 'reverse'` | `'default'` | The gradient variant to apply |
| `className` | `string` | `''` | Additional CSS classes to apply |
| `children` | `React.ReactNode` | - | **Required.** The content to display |

## Default Responsive Sizing

The component automatically applies responsive sizing based on the header level:

- **H1**: `text-4xl sm:text-5xl lg:text-6xl`
- **H2**: `text-3xl sm:text-4xl lg:text-5xl`
- **H3**: `text-2xl sm:text-3xl lg:text-4xl`
- **H4**: `text-xl sm:text-2xl lg:text-3xl`
- **H5**: `text-lg sm:text-xl lg:text-2xl`
- **H6**: `text-base sm:text-lg lg:text-xl`

## Browser Support

- ✅ **Modern browsers**: Full gradient support with `background-clip: text`
- ✅ **Fallback**: Solid color fallback for browsers that don't support `background-clip: text`
- ✅ **Accessibility**: Proper contrast ratios and semantic HTML

## Tailwind Configuration

The component relies on custom Tailwind utilities defined in `tailwind.config.js`:

```js
// Custom gradient utilities
'.text-gradient': {
  'background-clip': 'text',
  '-webkit-background-clip': 'text',
  'color': 'transparent',
  'background-image': 'linear-gradient(to bottom, #1e40af, #60a5fa)',
}
```

## Examples in Action

See the `GradientHeaderDemo` component for a comprehensive showcase of all variants and usage patterns.
