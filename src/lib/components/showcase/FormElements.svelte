<script lang="ts">
  import { Form, Input, Button, Card, Text } from '$lib/components/ui';
  import { pageStyles } from '$lib/styles/page.style';

  // Handler for form submission
  function handleFormSubmit(_formData: FormData) {
    // Form submitted with data: Object.fromEntries(formData)
  }
</script>

<div class={pageStyles.componentShowcase.container}>
  <Text variant="h4" as="h4">Form Elements</Text>
  <Card variant="elevated" padding="lg">
    <Form layout="vertical" spacing="lg" onSubmit={handleFormSubmit}>
      <div class={pageStyles.componentShowcase.formGrid}>
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email..."
          helperText="We'll never share your email"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password..."
          helperText="Must be at least 8 characters"
        />
        <Input
          label="Success Input"
          placeholder="This input is valid..."
          success={true}
          helperText="Great! This looks good."
        />
        <Input
          label="Error Input"
          placeholder="This input has an error..."
          error={true}
          helperText="Please fix this error."
        />
      </div>
      <div class={pageStyles.form.actions}>
        <Button variant="primary">Submit</Button>
        <Button variant="outline">Cancel</Button>
      </div>
    </Form>
  </Card>
</div>
