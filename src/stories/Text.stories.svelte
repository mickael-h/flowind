<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Text from '$lib/components/ui/Text.svelte';
  import Card from '$lib/components/ui/Card.svelte';

  const { Story } = defineMeta({
    title: 'UI/Text',
    component: Text,
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component:
            'A flexible text component that provides consistent typography throughout the design system. Supports semantic variants, colors, and text styling options.'
        }
      }
    },
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'body',
          'bodyLarge',
          'bodySmall',
          'caption',
          'overline',
          'code'
        ],
        description: 'Typography variant that determines size and semantic meaning'
      },
      color: {
        control: { type: 'select' },
        options: [
          'primary',
          'secondary',
          'muted',
          'accent',
          'success',
          'warning',
          'error',
          'inherit'
        ],
        description: 'Text color variant'
      },
      align: {
        control: { type: 'select' },
        options: ['left', 'center', 'right', 'justify'],
        description: 'Text alignment'
      },
      weight: {
        control: { type: 'select' },
        options: ['light', 'normal', 'medium', 'semibold', 'bold'],
        description: 'Font weight override'
      },
      as: {
        control: { type: 'text' },
        description: 'HTML element override'
      },
      truncate: {
        control: { type: 'boolean' },
        description: 'Truncate text with ellipsis'
      },
      italic: {
        control: { type: 'boolean' },
        description: 'Italic text style'
      },
      underline: {
        control: { type: 'boolean' },
        description: 'Underlined text'
      },
      lineThrough: {
        control: { type: 'boolean' },
        description: 'Line-through text'
      },
      noWrap: {
        control: { type: 'boolean' },
        description: 'Prevent text wrapping'
      }
    },
    tags: ['autodocs']
  });
</script>

<Story name="Headings">
  <Card variant="outlined">
    <Text variant="h1">Heading 1 - Main Page Title</Text>
    <Text variant="h2">Heading 2 - Section Title</Text>
    <Text variant="h3">Heading 3 - Subsection Title</Text>
    <Text variant="h4">Heading 4 - Component Title</Text>
    <Text variant="h5">Heading 5 - Small Section</Text>
    <Text variant="h6">Heading 6 - Smallest Heading</Text>
  </Card>
</Story>

<Story name="Body Text">
  <Card variant="flat">
    <Text variant="bodyLarge">
      Large body text is perfect for introductory paragraphs, lead text, or important descriptions
      that need more visual weight than regular body text.
    </Text>
    <Text variant="body">
      Regular body text is the most common variant, used for main content, descriptions, and general
      text throughout the application. It provides excellent readability and follows our design
      system typography scale.
    </Text>
    <Text variant="bodySmall">
      Small body text is useful for secondary information, fine print, or when you need to fit more
      text in a smaller space while maintaining readability.
    </Text>
  </Card>
</Story>

<Story name="Specialized Text">
  <Card variant="elevated">
    <Text variant="overline">Overline Text - Labels and Categories</Text>
    <Text variant="caption">Caption text for images, tables, or supplementary information</Text>
    <Text variant="code">const example = "inline code snippet";</Text>
    <Text variant="code" as="pre"
      >{`function multilineCode() {
  return "formatted code block";
}`}</Text
    >
  </Card>
</Story>

<Story name="Colors">
  <Card>
    <Text color="primary">Primary text color (default) - main content</Text>
    <Text color="secondary">Secondary text color - supporting content</Text>
    <Text color="muted">Muted text color - less important information</Text>
    <Text color="accent">Accent text color - highlights and links</Text>
    <Text color="success">Success text color - positive messages</Text>
    <Text color="warning">Warning text color - caution messages</Text>
    <Text color="error">Error text color - error messages</Text>
  </Card>
</Story>

<Story name="Alignment">
  <Card variant="outlined">
    <Text align="left">Left aligned text (default alignment)</Text>
    <Text align="center">Center aligned text for emphasis</Text>
    <Text align="right">Right aligned text for special layouts</Text>
    <Text align="justify">
      Justified text creates even margins on both sides by adjusting spacing between words. This is
      useful for formal documents or specific design requirements.
    </Text>
  </Card>
</Story>

<Story name="Font Weights">
  <Card variant="flat">
    <Text weight="light">Light font weight - subtle text</Text>
    <Text weight="normal">Normal font weight - regular text</Text>
    <Text weight="medium">Medium font weight - slight emphasis</Text>
    <Text weight="semibold">Semibold font weight - strong emphasis</Text>
    <Text weight="bold">Bold font weight - maximum emphasis</Text>
  </Card>
</Story>

<Story name="Text Modifiers">
  <Card variant="elevated">
    <Text italic>Italic text for emphasis or quotes</Text>
    <Text underline>Underlined text for links or emphasis</Text>
    <Text lineThrough>Line-through text for deleted content</Text>
    <Text noWrap>This text will not wrap to the next line no matter how long it gets</Text>
    <Card>
      <Text truncate
        >This is a very long text that will be truncated with ellipsis when it exceeds the container
        width</Text
      >
    </Card>
  </Card>
</Story>

<Story name="Semantic Elements">
  <Card variant="outlined">
    <Text variant="h2" as="div">Heading variant rendered as div</Text>
    <Text variant="body" as="span">Body text rendered as span</Text>
    <Text variant="caption" as="figcaption">Caption rendered as figcaption</Text>
    <Text variant="overline" as="label">Overline rendered as label</Text>
  </Card>
</Story>

<Story name="Real World Examples">
  <Card padding="lg">
    <!-- Article header -->
    <Text variant="overline" color="muted">Technology • March 15, 2024</Text>
    <Text variant="h1">Building Better User Interfaces</Text>
    <Text variant="bodyLarge" color="secondary">
      A comprehensive guide to creating consistent and accessible user interfaces using design
      systems and component libraries.
    </Text>

    <!-- Article content -->
    <Text variant="h3">Introduction</Text>
    <Text variant="body">
      Design systems have become essential tools for modern web development. They provide a unified
      approach to creating user interfaces that are both consistent and scalable.
    </Text>

    <Text variant="h4">Key Benefits</Text>
    <Text variant="body">The primary advantages of using a design system include:</Text>

    <!-- Status messages -->
    <Card variant="flat">
      <Text variant="bodySmall" color="success">✓ Successfully saved draft</Text>
      <Text variant="bodySmall" color="warning">⚠ Some changes are pending review</Text>
      <Text variant="bodySmall" color="error">✗ Failed to publish article</Text>
    </Card>

    <!-- Code example -->
    <Text variant="body">Here's how you might use the Text component:</Text>
    <Card variant="outlined">
      <Text variant="code" as="pre"
        >{`<Text variant="h1" color="primary">
  My Heading
</Text>`}</Text
      >
    </Card>
  </Card>
</Story>
