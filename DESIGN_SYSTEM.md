# Flowind Design System

A comprehensive design system built with Svelte, Tailwind CSS, and Flowbite components.

## Design Tokens

### Color Palette

- **Primary**: Blue shades (50-950) for main actions and brand elements
- **Secondary**: Gray shades (50-950) for text and neutral elements
- **Semantic**: Success (green), Warning (orange), Error (red), Accent (purple)

### Typography

- **Fonts**: Inter (UI), Poppins (Display), Merriweather (Serif), JetBrains Mono (Code)
- **Scale**: xs (12px) to 5xl (48px) with consistent line heights

### Spacing

- **Base Unit**: 4px (0.25rem)
- **Scale**: 0px to 96px using Tailwind's spacing system

## Components

### Button

```svelte
<Button variant="primary" size="md">Click me</Button>
```

**Variants**: primary, secondary, accent, success, warning, error, outline, ghost
**Sizes**: xs, sm, md, lg, xl

### Card

```svelte
<Card variant="elevated" padding="md">
  <h3>Title</h3>
  <p>Content</p>
</Card>
```

**Variants**: default, elevated, outlined, flat
**Padding**: none, sm, md, lg, xl

### Input

```svelte
<Input label="Email" placeholder="Enter email..." helperText="We'll never share your email" />
```

**Variants**: default, filled, outlined
**Sizes**: sm, md, lg

### Badge

```svelte
<Badge variant="primary" size="md">New</Badge>
```

**Variants**: primary, secondary, accent, success, warning, error, info
**Sizes**: sm, md, lg

## Usage Guidelines

### Accessibility

- WCAG 2.1 AA compliance
- Minimum 4.5:1 contrast ratio
- Keyboard navigation support
- Screen reader friendly

### Responsive Design

- Mobile-first approach
- Flexible layouts with CSS Grid/Flexbox
- Touch targets minimum 44px × 44px

## Getting Started

1. **Install**: `npm install`
2. **Storybook**: `npm run storybook`
3. **Import**: `import { Button, Card, Input } from '$lib/components/ui'`

## Storybook

Run `npm run storybook` to view all components with interactive examples and documentation.
