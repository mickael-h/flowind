<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Accordion from '$lib/components/ui/Accordion.svelte';

  const { Story } = defineMeta({
    title: 'UI/Accordion',
    component: Accordion,
    parameters: {
      docs: {
        description: {
          component: `
# Accordion

An accordion component that allows users to toggle content sections. Built on top of Flowbite Svelte with our custom styling and enhanced functionality.

## Features

- **Multiple Selection**: Allow multiple sections to be open simultaneously
- **Flush Style**: Remove borders and background for a minimal look
- **Accessible**: Full keyboard navigation and screen reader support
- **Responsive**: Works seamlessly across all device sizes
- **Customizable**: Consistent with our design system

## Usage

\`\`\`svelte
<Accordion
  items={[
    {
      id: 'item-1',
      title: 'Section Title',
      content: contentSnippet
    }
  ]}
/>
\`\`\`
          `
        }
      }
    },
    argTypes: {
      items: {
        control: false,
        description: 'Array of accordion items with id, title, and content snippet'
      },
      variant: {
        control: { type: 'select' },
        options: ['default', 'flush', 'bordered'],
        description: 'Visual style variant of the accordion'
      },
      flush: {
        control: { type: 'boolean' },
        description: 'Remove borders and background for minimal styling'
      },
      multiple: {
        control: { type: 'boolean' },
        description: 'Allow multiple accordion items to be open simultaneously'
      },
      arrowPosition: {
        control: { type: 'select' },
        options: ['left', 'right'],
        description: 'Position of the arrow icon in accordion headers'
      }
    },
    tags: ['autodocs']
  });
</script>

<script>
  import { Text } from '$lib/components/ui';
</script>

{#snippet basicContent()}
  <Text variant="body" color="secondary">
    This is the content for the first accordion item. It demonstrates how content can be displayed
    within the expandable section.
  </Text>
{/snippet}

{#snippet detailedContent()}
  <div class="space-y-3">
    <Text variant="body" color="secondary">
      This accordion item contains more detailed content with multiple elements.
    </Text>
    <Text variant="bodySmall" color="secondary">
      You can include any Svelte content within accordion items, making them highly flexible for
      various use cases.
    </Text>
  </div>
{/snippet}

{#snippet codeContent()}
  <Text variant="code">const example = "This is some example code";</Text>
{/snippet}

{#snippet testContent()}
  <Text variant="body" color="secondary"
    >This is test content to verify the accordion is working.</Text
  >
{/snippet}

<Story name="Default" asChild>
  <Accordion
    items={[
      { id: 'default-1', title: 'Getting Started', content: testContent },
      { id: 'default-2', title: 'Advanced Usage', content: detailedContent },
      { id: 'default-3', title: 'Code Examples', content: codeContent }
    ]}
  />
</Story>

<Story
  name="Multiple Selection"
  args={{ multiple: true }}
  parameters={{
    docs: {
      description: {
        story: 'Allow multiple accordion sections to be open simultaneously.'
      }
    }
  }}
  asChild
>
  <Accordion
    multiple={true}
    items={[
      { id: 'multi-1', title: 'Responsive Design', content: basicContent },
      { id: 'multi-2', title: 'Dark Mode Support', content: detailedContent },
      { id: 'multi-3', title: 'TypeScript Ready', content: codeContent }
    ]}
  />
</Story>

<Story
  name="Flush Style"
  args={{ flush: true }}
  parameters={{
    docs: {
      description: {
        story: 'Minimal styling without borders or background for a clean appearance.'
      }
    }
  }}
  asChild
>
  <Accordion
    flush={true}
    items={[
      { id: 'flush-1', title: 'Clean Design', content: basicContent },
      { id: 'flush-2', title: 'Minimal Style', content: detailedContent }
    ]}
  />
</Story>

<Story
  name="Arrow on Left"
  args={{ arrowPosition: 'left' }}
  parameters={{
    docs: {
      description: {
        story: 'Accordion with arrow icons positioned on the left side of headers.'
      }
    }
  }}
  asChild
>
  <Accordion
    arrowPosition="left"
    items={[
      { id: 'left-1', title: 'Getting Started', content: testContent },
      { id: 'left-2', title: 'Advanced Usage', content: detailedContent }
    ]}
  />
</Story>

<Story
  name="Single Item"
  parameters={{
    docs: {
      description: {
        story: 'Accordion with just one expandable section, useful for FAQs.'
      }
    }
  }}
  asChild
>
  <Accordion
    items={[{ id: 'single-1', title: 'FAQ: How do I get started?', content: detailedContent }]}
  />
</Story>
