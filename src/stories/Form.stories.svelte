<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Form from '$lib/components/ui/Form.svelte';
  import Input from '$lib/components/ui/Input.svelte';
  import Button from '$lib/components/ui/Button.svelte';

  const { Story } = defineMeta({
    title: 'UI/Form',
    component: Form,
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component:
            'A flexible form component that provides consistent layout and spacing for form elements. Works seamlessly with other UI components.'
        }
      }
    },
    argTypes: {
      layout: {
        control: { type: 'select' },
        options: ['vertical', 'horizontal', 'inline'],
        description: 'The layout direction of form elements'
      },
      spacing: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg', 'xl'],
        description: 'The spacing between form elements'
      }
    },
    tags: ['autodocs']
  });
</script>

<Story name="Default">
  <Input label="Email" placeholder="Enter your email" />
  <Input label="Password" type="password" placeholder="Enter your password" />
  <Button>Submit</Button>
</Story>

<Story
  name="Vertical Layout"
  args={{ layout: 'vertical' }}
  parameters={{
    docs: {
      description: {
        story: 'Vertical layout stacks form elements in a column with consistent spacing.'
      }
    }
  }}
>
  <Input label="Full Name" placeholder="Enter your full name" />
  <Input label="Email Address" placeholder="Enter your email" />
  <Input label="Phone Number" placeholder="Enter your phone number" />
  <Button>Submit Form</Button>
</Story>

<Story
  name="Horizontal Layout"
  args={{ layout: 'horizontal' }}
  parameters={{
    docs: {
      description: {
        story: 'Horizontal layout arranges labels and inputs side by side.'
      }
    }
  }}
>
  <Input label="Username" placeholder="Enter username" />
  <Input label="Email" placeholder="Enter email" />
  <Button>Save</Button>
</Story>

<Story
  name="Inline Layout"
  args={{ layout: 'inline' }}
  parameters={{
    docs: {
      description: {
        story: 'Inline layout places all elements on the same line for compact forms.'
      }
    }
  }}
>
  <Input label="Search" placeholder="Search..." />
  <Button>Search</Button>
</Story>

<Story
  name="Small Spacing"
  args={{ spacing: 'sm' }}
  parameters={{
    docs: {
      description: {
        story: 'Small spacing for compact forms.'
      }
    }
  }}
>
  <Input label="Name" placeholder="Enter name" />
  <Input label="Email" placeholder="Enter email" />
  <Button>Submit</Button>
</Story>

<Story
  name="Large Spacing"
  args={{ spacing: 'lg' }}
  parameters={{
    docs: {
      description: {
        story: 'Large spacing for more breathing room between elements.'
      }
    }
  }}
>
  <Input label="First Name" placeholder="Enter first name" />
  <Input label="Last Name" placeholder="Enter last name" />
  <Input label="Email Address" placeholder="Enter email address" />
  <Button>Create Account</Button>
</Story>

<Story
  name="With Validation"
  parameters={{
    docs: {
      description: {
        story: 'Form with validation states and helper text.'
      }
    }
  }}
>
  <Input
    label="Email"
    placeholder="Enter your email"
    variant="success"
    helperText="Email is valid!"
  />
  <Input
    label="Password"
    type="password"
    placeholder="Enter your password"
    variant="error"
    helperText="Password must be at least 8 characters"
  />
  <Button>Submit</Button>
</Story>

<Story
  name="Contact Form"
  parameters={{
    docs: {
      description: {
        story: 'Complete contact form example with multiple input types.'
      }
    }
  }}
>
  <Input label="Name" placeholder="Your full name" />
  <Input label="Email" placeholder="your.email@example.com" />
  <Input label="Subject" placeholder="What is this about?" />
  <Input label="Message" placeholder="Your message here..." />
  <Button variant="primary">Send Message</Button>
</Story>
