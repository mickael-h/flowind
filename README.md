# flowind-design-system

A comprehensive design system built with Svelte and Tailwind CSS. This package provides reusable UI components and design tokens for building consistent web applications.

## 🚀 Features

- **Custom Design Tokens**: Comprehensive color palette, typography, spacing, and shadow system
- **Reusable Components**: Button, Card, Input, Badge, Form, Tabs, Accordion, Modal, Table, and Text components
- **TypeScript Support**: Full type safety for all components and props
- **Accessibility**: WCAG 2.1 AA compliant components
- **Responsive Design**: Mobile-first approach with flexible layouts
- **Dark Mode**: Built-in dark mode support with automatic theme switching

## 🛠️ Tech Stack

- **Svelte 5**: Modern reactive framework
- **Tailwind CSS 4**: Utility-first CSS framework

- **TypeScript**: Type safety and better developer experience

## 📦 Installation

### Installation

```bash
npm install flowind-design-system
```

This package includes a complete custom design system with enhanced styling, animations, and color tokens. Our design system includes:

- **Custom color palette** with semantic naming (primary, secondary, accent, success, warning, error)
- **Enhanced animations** with smooth transitions and hover effects
- **Custom focus states** with improved accessibility
- **Optimized spacing and sizing** for better visual hierarchy
- **Custom shadows** for depth and visual appeal

**You need to import our theme CSS to get the full design experience.**

### Theme Setup

This package includes a complete custom design system with enhanced styling, animations, and color tokens. To get the full design experience, import our theme CSS:

**Option 1: Import in your main CSS file**

```css
@import 'flowind-design-system/theme.css';
```

**Option 2: Import in your main JavaScript/TypeScript file**

```javascript
import 'flowind-design-system/theme.css';
```

**Option 3: For Rails with Sprockets**

```erb
<%= stylesheet_link_tag 'flowind-design-system/theme.css' %>
```

### For Ruby on Rails with Svelte

1. **Add to your Rails project**:

```bash
# In your Rails app directory
npm install flowind-design-system
```

2. **Configure your Svelte setup** (if using `svelte-rails` or similar):

```javascript
// In your Svelte entry point
import {
  Button,
  Card,
  Input,
  Badge,
  Text,
  Form,
  Tabs,
  Accordion,
  Modal,
  Table
} from 'flowind-design-system';
```

## 🎨 Usage

### Basic Component Usage

```svelte
<script>
  import {
    Button,
    Card,
    Input,
    Badge,
    Text,
    Form,
    Tabs,
    Accordion,
    Modal,
    Table
  } from 'flowind-design-system';
</script>

<Card variant="elevated" padding="lg">
  <Text variant="h4" as="h4">Welcome</Text>
  <Input label="Email" placeholder="Enter your email" />
  <Button variant="primary" size="md">Submit</Button>
  <Badge variant="success">Active</Badge>
</Card>
```

### Using Design Tokens

```svelte
<script>
  import { buttonStyles, buildButtonClasses } from 'flowind-design-system';

  const customButtonClasses = buildButtonClasses({
    variant: 'primary',
    size: 'lg',
    disabled: false
  });
</script>

<button class={customButtonClasses}> Custom Button </button>
```

## 🎯 Components

### Button

```svelte
<Button variant="primary" size="md" disabled={false}>Click me</Button>
```

**Props:**

- `variant`: `'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'outline' | 'ghost'`
- `size`: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`
- `disabled`: `boolean`

### Card

```svelte
<Card variant="elevated" padding="lg">
  <h3>Title</h3>
  <p>Content</p>
</Card>
```

**Props:**

- `variant`: `'default' | 'elevated' | 'outlined' | 'flat'`
- `padding`: `'none' | 'sm' | 'md' | 'lg' | 'xl'`

### Input

```svelte
<Input
  label="Email"
  placeholder="Enter email..."
  helperText="We'll never share your email"
  variant="default"
  size="md"
/>
```

**Props:**

- `label`: `string`
- `placeholder`: `string`
- `helperText`: `string`
- `variant`: `'default' | 'filled' | 'outlined'`
- `size`: `'sm' | 'md' | 'lg'`

### Badge

```svelte
<Badge variant="primary" size="md" removable>New</Badge>
```

**Props:**

- `variant`: `'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info'`
- `size`: `'sm' | 'md' | 'lg'`
- `removable`: `boolean`

### Text

```svelte
<Text variant="h4" as="h4" color="primary">Heading Text</Text>
```

**Props:**

- `variant`: `'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'bodySmall' | 'meta'`
- `as`: `'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'`
- `color`: `'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error'`

### Form

```svelte
<Form layout="vertical" spacing="lg" onSubmit={handleSubmit}>
  <Input label="Name" placeholder="Enter your name" />
  <Input label="Email" type="email" placeholder="Enter your email" />
  <Button type="submit" variant="primary">Submit</Button>
</Form>
```

**Props:**

- `layout`: `'vertical' | 'horizontal'`
- `spacing`: `'sm' | 'md' | 'lg'`
- `onSubmit`: `(formData: FormData) => void`

### Tabs

```svelte
<Tabs
  items={[
    { id: 'one', label: 'First Tab', content: tabOneContent },
    { id: 'two', label: 'Second Tab', content: tabTwoContent }
  ]}
  activeId="one"
  position="top"
/>
```

**Props:**

- `items`: `{ id: string; label: string; content: Snippet }[]`
- `activeId`: `string` (optional)
- `position`: `'top' | 'bottom' | 'left' | 'right'`

### Accordion

```svelte
<Accordion
  items={[
    {
      id: 'faq-1',
      title: 'What is Flowind Design System?',
      content: faqOneContent
    },
    {
      id: 'faq-2',
      title: 'How do I customize components?',
      content: faqTwoContent
    }
  ]}
  multiple={false}
  flush={false}
  arrowPosition="right"
/>

**Props:**

- `items`: `{ id: string; title: string; content: Snippet; open?: boolean }[]`
- `variant`: `'default' | 'elevated' | 'outlined' | 'flat'`
- `multiple`: `boolean` - Allow multiple items to be open simultaneously
- `flush`: `boolean` - Remove borders and spacing
- `arrowPosition`: `'left' | 'right'` - Position of the expand/collapse arrow
```

### Modal

```svelte
<Modal
  bind:open={isOpen}
  title="Confirm Action"
  size="md"
  position="center"
  body={modalBody}
  footer={modalFooter}
/>
```

**Props:**

- `open`: `boolean`
- `title`: `string`
- `size`: `'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'`
- `position`: `'center' | 'top' | 'bottom' | 'left' | 'right'`
- `closable`: `boolean`
- `body`: `Snippet`
- `footer`: `Snippet`
- `header`: `Snippet`

### Table

```svelte
<Table
  {columns}
  {rows}
  sortable={true}
  expandable={true}
  striped={true}
  hoverable={true}
  variant="default"
/>
```

**Props:**

- `columns`: `TableColumn[]` - Array of column definitions with `key`, `label`, `sortable`, `width`, `align`
- `rows`: `TableRow[]` - Array of row data with `id`, `data`, `type`, `expanded`, `children`
- `sortable`: `boolean` - Enable column sorting
- `expandable`: `boolean` - Enable row expansion
- `striped`: `boolean` - Add striped styling
- `hoverable`: `boolean` - Add hover effects
- `variant`: `'default' | 'elevated' | 'outlined' | 'flat'`

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

## 🔧 Configuration

### Tailwind CSS Setup

Make sure your `tailwind.config.js` includes the design system:

```javascript
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowind-design-system/dist/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      // Your custom theme extensions
    }
  },
  plugins: []
};
```

### Dark Mode

The components automatically support dark mode when Tailwind's dark mode is enabled:

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class' // or 'media'
  // ... rest of config
};
```

## 📚 API Reference

### Style Functions

All components include helper functions for building custom classes:

```javascript
import {
  buildButtonClasses,
  buildCardClasses,
  buildInputClasses,
  buildBadgeClasses,
  buildTextClasses,
  buildFormClasses,
  buildTabsClasses,
  buildAccordionClasses,
  buildModalClasses,
  buildTableClasses
} from 'flowind-design-system';

const buttonClasses = buildButtonClasses({
  variant: 'primary',
  size: 'lg',
  disabled: false
});

const cardClasses = buildCardClasses({
  variant: 'elevated',
  padding: 'lg'
});

const inputClasses = buildInputClasses({
  variant: 'default',
  size: 'md'
});

const badgeClasses = buildBadgeClasses({
  variant: 'primary',
  size: 'md'
});
```

### Style Objects

Access raw style objects for custom implementations:

```javascript
import {
  buttonStyles,
  cardStyles,
  inputStyles,
  badgeStyles,
  textStyles,
  formStyles,
  tabsStyles,
  accordionStyles,
  modalStyles,
  tableStyles
} from 'flowind-design-system';

console.log(buttonStyles.variants.primary);
// Output: '!bg-primary-600 !text-white hover:!bg-primary-700 ...'

console.log(tableStyles.variants.default);
// Output: '!bg-transparent !border-0 !shadow-none !rounded-none'
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- Create an issue on GitHub
- Check the documentation
- Review the Storybook examples

## 🔗 Links

- [GitHub Repository](https://github.com/mickael-h/flowind)
- [Storybook Documentation](https://mickael-h.github.io/flowind)
- [NPM Package](https://www.npmjs.com/package/flowind-design-system)
