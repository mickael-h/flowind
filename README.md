# flowind-design-system

A comprehensive design system built with Svelte 5 and Tailwind CSS 4. This package provides reusable UI components and design tokens for building consistent web applications.

## 🚀 Features

- **10 Core Components**: Button, Card, Input, Badge, Form, Tabs, Accordion, Modal, Table, and Text
- **Custom Design Tokens**: Comprehensive color palette, typography, spacing, and shadow system
- **TypeScript Support**: Full type safety for all components and props
- **Accessibility**: WCAG 2.1 AA compliant components
- **Responsive Design**: Mobile-first approach with flexible layouts
- **Dark Mode**: Built-in dark mode support with automatic theme switching
- **Svelte 5**: Uses modern Svelte 5 syntax with snippets and runes

## 🛠️ Tech Stack

- **Svelte 5**: Modern reactive framework with snippets and runes
- **Tailwind CSS 4**: Latest utility-first CSS framework
- **TypeScript**: Type safety and better developer experience
- **Tailwind Variants**: Type-safe component styling

## 📦 Installation

```bash
npm install flowind-design-system
```

## 🎨 Setup

### Required CSS Configuration

**You must add this to your main CSS file (e.g., `app.css` or `global.css`):**

```css
@import 'tailwindcss';
@import 'flowind-design-system/theme.css';

@custom-variant dark (&:where(.dark, .dark *));

@source "../../node_modules/flowind-design-system/dist";
```

This setup:

- Imports Tailwind CSS 4
- Imports our custom theme with design tokens
- Configures dark mode support
- Sources our component styles from the package

### Tailwind Configuration

Make sure your `tailwind.config.js` includes the design system:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowind-design-system/dist/**/*.{js,ts}'
  ],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      // Your custom theme extensions
    }
  },
  plugins: []
};
```

## 🎯 Components

### Button

```svelte
<script>
  import { Button } from 'flowind-design-system';
</script>

<Button variant="primary" size="md" loading={false} disabled={false}>Click me</Button>
```

**Props:**

- `variant`: `'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'outline' | 'ghost'` - Button style variant
- `size`: `'xs' | 'sm' | 'md' | 'lg' | 'xl'` - Button size
- `loading`: `boolean` - Shows loading spinner when true
- `disabled`: `boolean` - Disables the button
- `fullWidth`: `boolean` - Makes button full width
- `children`: `Snippet` - Button content (should be a snippet)
- `onclick`: `(event: MouseEvent) => void` - Click handler
- `onkeydown`: `(event: KeyboardEvent) => void` - Keyboard handler
- `aria-label`: `string` - Accessibility label

### Card

```svelte
<script>
  import { Card } from 'flowind-design-system';
</script>

<Card variant="elevated" padding="lg">
  <h3>Title</h3>
  <p>Content</p>
</Card>
```

**Props:**

- `variant`: `'default' | 'elevated' | 'outlined' | 'flat'` - Card style variant
- `padding`: `'none' | 'sm' | 'md' | 'lg' | 'xl'` - Card padding
- `hover`: `boolean` - Add hover effects
- `interactive`: `boolean` - Make card interactive
- `children`: `Snippet` - Card content (should be a snippet)

### Input

```svelte
<script>
  import { Input } from 'flowind-design-system';
</script>

<Input
  label="Email"
  placeholder="Enter email..."
  helperText="We'll never share your email"
  variant="default"
  size="md"
  type="email"
/>
```

**Props:**

- `label`: `string` - Input label
- `placeholder`: `string` - Placeholder text
- `helperText`: `string` - Helper text below input
- `variant`: `'default' | 'success' | 'error'` - Input style variant
- `size`: `'xs' | 'sm' | 'md' | 'lg' | 'xl'` - Input size
- `type`: `string` - Input type (text, email, password, etc.)
- `error`: `boolean` - Shows error state
- `success`: `boolean` - Shows success state

### Badge

```svelte
<script>
  import { Badge } from 'flowind-design-system';
</script>

<Badge variant="primary" size="md" removable>New</Badge>
```

**Props:**

- `variant`: `'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info'` - Badge style variant
- `removable`: `boolean` - Shows remove button
- `onRemove`: `() => void` - Remove button click handler
- `children`: `Snippet` - Badge content (should be a snippet)

### Text

```svelte
<script>
  import { Text } from 'flowind-design-system';
</script>

<Text variant="h4" as="h4" color="primary">Heading Text</Text>
```

**Props:**

- `variant`: `'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'bodySmall' | 'meta'` - Text style variant
- `as`: `keyof HTMLElementTagNameMap` - HTML element to render
- `color`: `'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error'` - Text color
- `align`: `'left' | 'center' | 'right' | 'justify'` - Text alignment
- `weight`: `'normal' | 'medium' | 'semibold' | 'bold'` - Font weight
- `truncate`: `boolean` - Truncate text with ellipsis
- `italic`: `boolean` - Italic text
- `underline`: `boolean` - Underlined text
- `lineThrough`: `boolean` - Strikethrough text
- `noWrap`: `boolean` - Prevent text wrapping
- `children`: `Snippet` - Text content (should be a snippet)

### Form

```svelte
<script>
  import { Form, Input, Button } from 'flowind-design-system';

  function handleSubmit(formData) {
    console.log('Form submitted:', formData);
  }
</script>

<Form layout="vertical" spacing="lg" onSubmit={handleSubmit}>
  <Input label="Name" placeholder="Enter your name" />
  <Input label="Email" type="email" placeholder="Enter your email" />
  <Button variant="primary">Submit</Button>
</Form>
```

**Props:**

- `layout`: `'vertical' | 'horizontal' | 'inline'` - Form layout direction
- `spacing`: `'sm' | 'md' | 'lg' | 'xl'` - Spacing between form elements
- `onSubmit`: `(formData: FormData) => void` - Form submission handler
- `children`: `Snippet` - Form content (should be a snippet)

### Tabs

```svelte
<script>
  import { Tabs } from 'flowind-design-system';
</script>

{#snippet tabOneContent()}
  <div>
    <h3>First Tab Content</h3>
    <p>This is the content for the first tab.</p>
  </div>
{/snippet}

{#snippet tabTwoContent()}
  <div>
    <h3>Second Tab Content</h3>
    <p>This is the content for the second tab.</p>
  </div>
{/snippet}

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

- `items`: `{ id: string; label: string; content: Snippet }[]` - Array of tab items
- `activeId`: `string` - Currently active tab ID
- `position`: `'top' | 'bottom' | 'left' | 'right'` - Tab position

### Accordion

```svelte
<script>
  import { Accordion } from 'flowind-design-system';
</script>

{#snippet faqOneContent()}
  <div>
    <p>Flowind is a comprehensive design system built with Svelte 5 and Tailwind CSS 4.</p>
  </div>
{/snippet}

{#snippet faqTwoContent()}
  <div>
    <p>Components can be customized through CSS custom properties and Tailwind classes.</p>
  </div>
{/snippet}

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
```

**Props:**

- `items`: `{ id: string; title: string; content: Snippet; open?: boolean }[]` - Array of accordion items
- `variant`: `'default' | 'elevated' | 'outlined' | 'flat'` - Accordion style variant
- `multiple`: `boolean` - Allow multiple items to be open simultaneously
- `flush`: `boolean` - Remove borders and spacing
- `arrowPosition`: `'left' | 'right'` - Position of the expand/collapse arrow
- `onItemToggle`: `(event: { itemId: string; isOpen: boolean }) => void` - Item toggle callback

### Modal

```svelte
<script>
  import { Modal, Button, Text } from 'flowind-design-system';

  let isOpen = false;
</script>

{#snippet modalBody()}
  <div>
    <p>This is the modal body content. You can include any components or content here.</p>
  </div>
{/snippet}

{#snippet modalFooter()}
  <div class="flex justify-end gap-2">
    <Button variant="outline" onclick={() => (isOpen = false)}>Cancel</Button>
    <Button variant="primary" onclick={() => (isOpen = false)}>Confirm</Button>
  </div>
{/snippet}

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

- `open`: `boolean` - Controls modal visibility
- `title`: `string` - Modal title
- `size`: `'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'` - Modal size
- `position`: `'center' | 'top' | 'bottom' | 'left' | 'right'` - Modal position
- `closable`: `boolean` - Show close button
- `onClose`: `() => void` - Close button click handler
- `body`: `Snippet` - Modal body content (should be a snippet)
- `footer`: `Snippet` - Modal footer content (should be a snippet)
- `header`: `Snippet` - Custom header content (should be a snippet)

### Table

```svelte
<script>
  import { Table, Text } from 'flowind-design-system';
  import type { TableRow } from 'flowind-design-system';

  const columns = [
    { key: 'name', label: 'Name', sortable: true, width: '40%' },
    { key: 'type', label: 'Type', sortable: true, width: '25%' },
    { key: 'size', label: 'Size', sortable: true, width: '15%' },
    { key: 'modified', label: 'Modified', sortable: true, width: '20%' }
  ];

  const rows: TableRow[] = [
    {
      id: '1',
      type: 'folder',
      data: { name: 'Documents', type: 'Folder', size: '—', modified: '2024-01-16' },
      expanded: false,
      children: [
        {
          id: '1-1',
          type: 'folder',
          data: { name: 'Projects', type: 'Folder', size: '—', modified: '2024-01-15' },
          expanded: false,
          children: [
            {
              id: '1-1-1',
              type: 'file',
              data: {
                name: 'project-docs.pdf',
                type: 'PDF Document',
                size: '2.3 MB',
                modified: '2024-01-15'
              },
              expandedContent: fileDetailsContent
            }
          ]
        },
        {
          id: '1-2',
          type: 'file',
          data: { name: 'notes.txt', type: 'Text File', size: '1.2 KB', modified: '2024-01-14' },
          expandedContent: fileDetailsContent
        }
      ]
    },
    {
      id: '2',
      type: 'file',
      data: { name: 'report.xlsx', type: 'Excel File', size: '3.1 MB', modified: '2024-01-13' },
      expandedContent: fileDetailsContent
    }
  ];
</script>

{#snippet fileDetailsContent()}
  <div class="space-y-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
    <Text variant="h6" color="primary">File Details</Text>
    <div class="grid grid-cols-2 gap-4 text-sm">
      <div>
        <Text variant="bodySmall" color="secondary">Created: 2024-01-15</Text>
        <Text variant="bodySmall" color="secondary">Modified: 2024-01-16</Text>
      </div>
      <div>
        <Text variant="bodySmall" color="secondary">Owner: Current User</Text>
        <Text variant="bodySmall" color="secondary">Permissions: Read/Write</Text>
      </div>
    </div>
  </div>
{/snippet}

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
- `rows`: `TableRow[]` - Array of row data with `id`, `data`, `type`, `expanded`, `children`, `expandedContent`
- `sortable`: `boolean` - Enable column sorting
- `expandable`: `boolean` - Enable row expansion
- `striped`: `boolean` - Add striped styling
- `hoverable`: `boolean` - Add hover effects
- `variant`: `'default' | 'elevated' | 'outlined' | 'flat'` - Table style variant

## 🎨 Design Tokens

### Color Palette

Our design system includes a comprehensive color palette:

- **Primary**: Blue shades (50-950) for main actions and brand elements
- **Secondary**: Gray shades (50-950) for text and neutral elements
- **Accent**: Purple shades (50-950) for highlights and accents
- **Semantic**: Success (green), Warning (orange), Error (red)

### Typography

- **Fonts**: Inter (UI), Poppins (Display), Merriweather (Serif), JetBrains Mono (Code)
- **Scale**: xs (12px) to 5xl (48px) with consistent line heights

### Spacing

- **Base Unit**: 4px (0.25rem)
- **Scale**: 0px to 96px using Tailwind's spacing system

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
- [NPM Package](https://www.npmjs.com/package/flowind-design-system)
