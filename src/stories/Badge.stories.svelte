<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Badge from '$lib/components/ui/Badge.svelte';

  const { Story } = defineMeta({
    title: 'UI/Badge',
    component: Badge,
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component:
            'A versatile badge component for displaying status, labels, or counts. Supports multiple variants, sizes, and removable functionality.'
        }
      }
    },
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['primary', 'secondary', 'accent', 'success', 'warning', 'error', 'info'],
        description: 'The visual style variant of the badge'
      },

      removable: {
        control: { type: 'boolean' },
        description: 'Whether the badge has a remove button'
      }
    },
    tags: ['autodocs']
  });

  // Handler for badge removal in stories
  function handleBadgeRemove() {
    // Badge removed from story
  }
</script>

<Story name="Default">Default Badge</Story>

<Story
  name="Primary"
  args={{ variant: 'primary' }}
  parameters={{
    docs: {
      description: {
        story: 'Primary badges are used for the main status or label.'
      }
    }
  }}
>
  Primary Badge
</Story>

<Story
  name="Secondary"
  args={{ variant: 'secondary' }}
  parameters={{
    docs: {
      description: {
        story: 'Secondary badges are used for supporting information.'
      }
    }
  }}
>
  Secondary Badge
</Story>

<Story
  name="Success"
  args={{ variant: 'success' }}
  parameters={{
    docs: {
      description: {
        story: 'Success badges indicate positive status or completion.'
      }
    }
  }}
>
  Success Badge
</Story>

<Story
  name="Warning"
  args={{ variant: 'warning' }}
  parameters={{
    docs: {
      description: {
        story: 'Warning badges indicate caution or attention needed.'
      }
    }
  }}
>
  Warning Badge
</Story>

<Story
  name="Error"
  args={{ variant: 'error' }}
  parameters={{
    docs: {
      description: {
        story: 'Error badges indicate problems or failures.'
      }
    }
  }}
>
  Error Badge
</Story>

<Story
  name="Info"
  args={{ variant: 'info' }}
  parameters={{
    docs: {
      description: {
        story: 'Info badges provide informational content.'
      }
    }
  }}
>
  Info Badge
</Story>

<Story
  name="Accent"
  args={{ variant: 'accent' }}
  parameters={{
    docs: {
      description: {
        story: 'Accent badges highlight important information with distinctive styling.'
      }
    }
  }}
>
  Accent Badge
</Story>

<Story
  name="Small"
  args={{ size: 'sm' }}
  parameters={{
    docs: {
      description: {
        story: 'Small badges for compact spaces.'
      }
    }
  }}
>
  Small Badge
</Story>

<Story
  name="Large"
  args={{ size: 'lg' }}
  parameters={{
    docs: {
      description: {
        story: 'Large badges for prominent display.'
      }
    }
  }}
>
  Large Badge
</Story>

<Story
  name="Rounded"
  args={{ rounded: true }}
  parameters={{
    docs: {
      description: {
        story: 'Rounded badges have fully curved corners for a softer appearance.'
      }
    }
  }}
>
  Rounded Badge
</Story>

<Story
  name="Removable"
  args={{ removable: true, onRemove: handleBadgeRemove }}
  parameters={{
    docs: {
      description: {
        story:
          'Removable badges include a close button for easy dismissal. Click the X button to see the removal handler in action.'
      }
    }
  }}
>
  Removable Badge
</Story>

<Story
  name="Rounded Removable"
  args={{ rounded: true, removable: true, onRemove: handleBadgeRemove }}
  parameters={{
    docs: {
      description: {
        story:
          'Combination of rounded corners and removable functionality. Click the X button to see the removal handler in action.'
      }
    }
  }}
>
  Rounded Removable Badge
</Story>
