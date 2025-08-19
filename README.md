# Flowind Design System

A comprehensive design system built with Svelte, Tailwind CSS, and Flowbite components. This project demonstrates how to create a unified design system that ensures visual consistency across applications.

## 🚀 Features

- **Custom Design Tokens**: Comprehensive color palette, typography, spacing, and shadow system
- **Reusable Components**: Button, Card, Input, Badge, and Form components
- **Storybook Integration**: Interactive component documentation and testing
- **TypeScript Support**: Full type safety for all components
- **Accessibility**: WCAG 2.1 AA compliant components
- **Responsive Design**: Mobile-first approach with flexible layouts

## 🛠️ Tech Stack

- **Svelte 5**: Modern reactive framework
- **SvelteKit**: Full-stack web framework
- **Tailwind CSS 4**: Utility-first CSS framework
- **Flowbite Svelte**: Component library built on top of Tailwind
- **Storybook**: Component development and documentation
- **TypeScript**: Type safety and better developer experience

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd flowind
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open Storybook** (in a new terminal):
   ```bash
   npm run storybook
   ```

## 🎨 Design Tokens

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

## 🧩 Components

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

## 📚 Storybook

Storybook provides interactive documentation for all components. Run `npm run storybook` to:

- View all component variants and states
- Test component interactions
- See component documentation
- Develop components in isolation

## 🎯 Usage Guidelines

### Component Composition

1. **Prefer composition over inheritance**: Build complex components by combining simple ones
2. **Use consistent spacing**: Apply spacing tokens consistently across components
3. **Maintain visual hierarchy**: Use typography scale to establish clear information hierarchy

### Accessibility

1. **Color contrast**: Ensure all text meets WCAG AA contrast requirements
2. **Focus states**: Always provide visible focus indicators
3. **Semantic HTML**: Use appropriate HTML elements for their intended purpose
4. **ARIA labels**: Add ARIA labels for interactive elements when needed

### Responsive Design

1. **Mobile-first**: Design for mobile devices first, then enhance for larger screens
2. **Flexible layouts**: Use CSS Grid and Flexbox for responsive layouts
3. **Touch targets**: Ensure interactive elements are at least 44px × 44px on mobile

## 🧪 Testing

```bash
# Run unit tests
npm run test:unit

# Run all tests
npm run test

# Run type checking
npm run check
```

## 📖 Documentation

- **Design System Guide**: See `DESIGN_SYSTEM.md` for detailed documentation
- **Component API**: Each component has detailed documentation in Storybook
- **Design Tokens**: All design tokens are documented in the main page

## 🔧 Development

### Project Structure

```
src/
├── lib/
│   └── components/
│       └── ui/           # Reusable UI components
├── routes/               # SvelteKit pages
├── stories/              # Storybook stories
└── app.css              # Global styles and design tokens
```

### Adding New Components

1. Create the component in `src/lib/components/ui/`
2. Add TypeScript interfaces for props
3. Use design tokens for styling
4. Add Storybook stories
5. Update the component index file
6. Test accessibility and responsiveness

### Customizing Design Tokens

1. Modify `tailwind.config.js` for new tokens
2. Update CSS variables in `src/app.css`
3. Document changes in `DESIGN_SYSTEM.md`

## 🌟 Key Benefits

- **Consistency**: Unified design tokens ensure visual harmony
- **Efficiency**: Reusable components speed up development
- **Maintainability**: Centralized design system is easy to update
- **Accessibility**: Built-in accessibility features
- **Documentation**: Comprehensive documentation with Storybook

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Follow existing patterns and conventions
2. Add documentation for new components
3. Create Storybook stories for new components
4. Ensure accessibility compliance
5. Test across different screen sizes

---

Built with ❤️ using Svelte, Tailwind CSS, and Flowbite
