<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Card from '$lib/components/ui/Card.svelte';
  import Text from '$lib/components/ui/Text.svelte';

  const { Story } = defineMeta({
    title: 'UI/Card',
    component: Card,
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component:
            'A flexible card component with multiple variants and padding options. Perfect for displaying content in organized containers.'
        }
      }
    },
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['default', 'elevated', 'outlined', 'flat'],
        description: 'The visual style variant of the card'
      },
      padding: {
        control: { type: 'select' },
        options: ['none', 'sm', 'md', 'lg', 'xl'],
        description: 'The padding size of the card'
      },
      hover: {
        control: { type: 'boolean' },
        description: 'Whether the card has hover effects'
      },
      interactive: {
        control: { type: 'boolean' },
        description: 'Whether the card is interactive (clickable)'
      }
    },
    tags: ['autodocs']
  });
</script>

<Story name="Default">
  <div>
    <Text variant="h4">Card Title</Text>
    <Text color="secondary">
      This is a default card with some sample content. It demonstrates the basic styling and layout.
    </Text>
  </div>
</Story>

<Story
  name="Elevated"
  args={{ variant: 'elevated' }}
  parameters={{
    docs: {
      description: {
        story: 'Elevated cards have a subtle shadow for more visual prominence.'
      }
    }
  }}
>
  <div>
    <Text variant="h4">Elevated Card</Text>
    <Text color="secondary">
      This card has a subtle shadow and elevated appearance for more visual prominence.
    </Text>
  </div>
</Story>

<Story
  name="Outlined"
  args={{ variant: 'outlined' }}
  parameters={{
    docs: {
      description: {
        story: 'Outlined cards have a prominent border and transparent background.'
      }
    }
  }}
>
  <div>
    <Text variant="h4">Outlined Card</Text>
    <Text color="secondary">
      This card has a prominent border and transparent background for a clean, minimal look.
    </Text>
  </div>
</Story>

<Story
  name="Flat"
  args={{ variant: 'flat' }}
  parameters={{
    docs: {
      description: {
        story: 'Flat cards have a subtle background color without borders or shadows.'
      }
    }
  }}
>
  <div>
    <Text variant="h4">Flat Card</Text>
    <Text color="secondary">
      This card has a subtle background color without borders or shadows for a flat design approach.
    </Text>
  </div>
</Story>

<Story
  name="Small Padding"
  args={{ padding: 'sm' }}
  parameters={{
    docs: {
      description: {
        story: 'Small padding for a more compact appearance.'
      }
    }
  }}
>
  <div>
    <Text variant="h4">Small Padding</Text>
    <Text color="secondary">This card uses small padding for a more compact appearance.</Text>
  </div>
</Story>

<Story
  name="Large Padding"
  args={{ padding: 'lg' }}
  parameters={{
    docs: {
      description: {
        story: 'Large padding for more breathing room around the content.'
      }
    }
  }}
>
  <div>
    <Text variant="h4">Large Padding</Text>
    <Text color="secondary">
      This card uses large padding for more breathing room around the content.
    </Text>
  </div>
</Story>

<Story
  name="Hoverable"
  args={{ hover: true }}
  parameters={{
    docs: {
      description: {
        story: 'Hover over this card to see the interactive effects.'
      }
    }
  }}
>
  <div>
    <Text variant="h4">Hoverable Card</Text>
    <Text color="secondary">
      Hover over this card to see the interactive effects including shadow and slight movement.
    </Text>
  </div>
</Story>

<Story
  name="Interactive"
  args={{ interactive: true, hover: true }}
  parameters={{
    docs: {
      description: {
        story: 'Interactive cards are clickable and show a pointer cursor.'
      }
    }
  }}
>
  <div>
    <Text variant="h4">Interactive Card</Text>
    <Text color="secondary">
      This card is clickable and shows a pointer cursor. Perfect for navigation or action cards.
    </Text>
  </div>
</Story>

<Story
  name="No Padding"
  args={{ padding: 'none' }}
  parameters={{
    docs: {
      description: {
        story: 'No padding allows you to control the internal spacing manually.'
      }
    }
  }}
>
  <div class="p-6">
    <Text variant="h4">No Padding Card</Text>
    <Text color="secondary">
      This card has no padding, allowing you to control the internal spacing manually.
    </Text>
  </div>
</Story>
