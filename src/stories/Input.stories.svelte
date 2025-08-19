<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Input from '$lib/components/ui/Input.svelte';

  const { Story } = defineMeta({
    title: 'UI/Input',
    component: Input,
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component:
            'A flexible input component with multiple variants, sizes, and states. Supports labels, helper text, and validation states.'
        }
      }
    },
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['default', 'success', 'error'],
        description: 'The visual style variant of the input'
      },
      size: {
        control: { type: 'select' },
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
        description: 'The size of the input'
      },
      error: {
        control: { type: 'boolean' },
        description: 'Whether the input shows an error state'
      },
      success: {
        control: { type: 'boolean' },
        description: 'Whether the input shows a success state'
      },
      helperText: {
        control: { type: 'text' },
        description: 'Helper text displayed below the input'
      },
      label: {
        control: { type: 'text' },
        description: 'Label text displayed above the input'
      },
      placeholder: {
        control: { type: 'text' },
        description: 'Placeholder text for the input'
      },
      disabled: {
        control: { type: 'boolean' },
        description: 'Whether the input is disabled'
      },
      readonly: {
        control: { type: 'boolean' },
        description: 'Whether the input is readonly'
      }
    },
    tags: ['autodocs']
  });
</script>

<Story name="Default" args={{ placeholder: 'Enter your text here' }} />

<Story
  name="With Label"
  args={{ label: 'Email Address', placeholder: 'Enter your email' }}
  parameters={{
    docs: {
      description: {
        story: 'Input with a label for better accessibility and clarity.'
      }
    }
  }}
/>

<Story
  name="With Helper Text"
  args={{
    label: 'Password',
    placeholder: 'Enter your password',
    helperText: 'Must be at least 8 characters long'
  }}
  parameters={{
    docs: {
      description: {
        story: 'Input with helper text to provide additional guidance.'
      }
    }
  }}
/>

<Story
  name="Success State"
  args={{
    variant: 'success',
    label: 'Email',
    placeholder: 'Enter your email',
    helperText: 'Email is valid!'
  }}
  parameters={{
    docs: {
      description: {
        story: 'Success state indicates valid input with green styling.'
      }
    }
  }}
/>

<Story
  name="Error State"
  args={{
    variant: 'error',
    label: 'Email',
    placeholder: 'Enter your email',
    helperText: 'Please enter a valid email address'
  }}
  parameters={{
    docs: {
      description: {
        story: 'Error state indicates invalid input with red styling.'
      }
    }
  }}
/>

<Story
  name="Small"
  args={{ size: 'sm', placeholder: 'Small input' }}
  parameters={{
    docs: {
      description: {
        story: 'Small input for compact spaces.'
      }
    }
  }}
/>

<Story
  name="Large"
  args={{ size: 'lg', placeholder: 'Large input' }}
  parameters={{
    docs: {
      description: {
        story: 'Large input for prominent forms.'
      }
    }
  }}
/>

<Story
  name="Disabled"
  args={{
    disabled: true,
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    helperText: 'This field cannot be edited'
  }}
  parameters={{
    docs: {
      description: {
        story: 'Disabled input that cannot be interacted with.'
      }
    }
  }}
/>

<Story
  name="Readonly"
  args={{
    readonly: true,
    label: 'Readonly Input',
    value: 'This value cannot be changed',
    helperText: 'This field is read-only'
  }}
  parameters={{
    docs: {
      description: {
        story: 'Readonly input that displays a value but cannot be edited.'
      }
    }
  }}
/>
