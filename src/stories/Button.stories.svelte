<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from '$lib/components/ui/Button.svelte';

  const { Story } = defineMeta({
    title: 'UI/Button',
    component: Button,
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component:
            'A versatile button component with multiple variants, sizes, and states. Built with custom design tokens for consistent styling.'
        }
      }
    },
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: [
          'primary',
          'secondary',
          'accent',
          'success',
          'warning',
          'error',
          'outline',
          'ghost'
        ],
        description: 'The visual style variant of the button'
      },
      size: {
        control: { type: 'select' },
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
        description: 'The size of the button'
      },
      loading: {
        control: { type: 'boolean' },
        description: 'Whether the button shows a loading spinner'
      },
      disabled: {
        control: { type: 'boolean' },
        description: 'Whether the button is disabled'
      },
      fullWidth: {
        control: { type: 'boolean' },
        description: 'Whether the button should take full width'
      }
    },
    tags: ['autodocs']
  });
</script>

<Story name="Default">Default Button</Story>
<Story
  name="Primary"
  args={{ variant: 'primary' }}
  parameters={{
    docs: {
      description: {
        story: 'Primary buttons are used for the main action in a section or page.'
      }
    }
  }}
>
  Primary Button
</Story>

<Story
  name="Secondary"
  args={{ variant: 'secondary' }}
  parameters={{
    docs: {
      description: {
        story: 'Secondary buttons are used for supporting actions.'
      }
    }
  }}
>
  Secondary Button
</Story>

<Story
  name="Accent"
  args={{ variant: 'accent' }}
  parameters={{
    docs: {
      description: {
        story: 'Accent buttons highlight important actions with a distinctive color.'
      }
    }
  }}
>
  Accent Button
</Story>

<Story
  name="Success"
  args={{ variant: 'success' }}
  parameters={{
    docs: {
      description: {
        story: 'Success buttons indicate positive actions like save, confirm, or complete.'
      }
    }
  }}
>
  Success Button
</Story>

<Story
  name="Warning"
  args={{ variant: 'warning' }}
  parameters={{
    docs: {
      description: {
        story: 'Warning buttons are used for actions that require caution.'
      }
    }
  }}
>
  Warning Button
</Story>

<Story
  name="Error"
  args={{ variant: 'error' }}
  parameters={{
    docs: {
      description: {
        story: 'Error buttons are used for destructive actions like delete or remove.'
      }
    }
  }}
>
  Error Button
</Story>

<Story
  name="Outline"
  args={{ variant: 'outline' }}
  parameters={{
    docs: {
      description: {
        story: 'Outline buttons have a transparent background with a colored border.'
      }
    }
  }}
>
  Outline Button
</Story>

<Story
  name="Ghost"
  args={{ variant: 'ghost' }}
  parameters={{
    docs: {
      description: {
        story: 'Ghost buttons are subtle and blend into the background.'
      }
    }
  }}
>
  Ghost Button
</Story>
<Story
  name="Small"
  args={{ size: 'sm' }}
  parameters={{
    docs: {
      description: {
        story: 'Small buttons are used in compact spaces or for less prominent actions.'
      }
    }
  }}
>
  Small Button
</Story>

<Story
  name="Large"
  args={{ size: 'lg' }}
  parameters={{
    docs: {
      description: {
        story: 'Large buttons are used for prominent actions and better touch targets.'
      }
    }
  }}
>
  Large Button
</Story>
<Story
  name="Loading"
  args={{ loading: true }}
  parameters={{
    docs: {
      description: {
        story: 'Loading buttons show a spinner and disable interaction while processing.'
      }
    }
  }}
>
  Loading Button
</Story>

<Story
  name="Disabled"
  args={{ disabled: true }}
  parameters={{
    docs: {
      description: {
        story: 'Disabled buttons are not interactive and indicate unavailable actions.'
      }
    }
  }}
>
  Disabled Button
</Story>
<Story
  name="FullWidth"
  args={{ fullWidth: true }}
  parameters={{
    docs: {
      description: {
        story: 'Full width buttons span the entire width of their container.'
      }
    }
  }}
>
  Full Width Button
</Story>

<Story
  name="Rounded"
  parameters={{
    docs: {
      description: {
        story: 'Rounded buttons have more curved corners for a softer appearance.'
      }
    }
  }}
>
  Rounded Button
</Story>
