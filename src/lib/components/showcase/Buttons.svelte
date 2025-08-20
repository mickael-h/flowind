<script lang="ts">
  import { Button, Text, Card } from '$lib/components/ui';
  import { pageStyles } from '$lib/styles/page.style';
</script>

<div class={pageStyles.componentShowcase.container}>
  <Text variant="h4" as="h4">Buttons</Text>
  <Card variant="elevated" padding="lg">
    <div class={pageStyles.componentShowcase.card}>
      <div class={pageStyles.componentShowcase.section}>
        <Text variant="h5" as="h5">Variants</Text>
        <div class={pageStyles.componentShowcase.buttonGrid}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="error">Error</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>
      <div class={pageStyles.componentShowcase.section}>
        <Text variant="h5" as="h5">Sizes</Text>
        <div class={pageStyles.componentShowcase.buttonGridSizes}>
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </div>
      <div class={pageStyles.componentShowcase.section}>
        <Text variant="h5" as="h5">States</Text>
        <div class={pageStyles.componentShowcase.buttonGrid}>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button>Standard</Button>
        </div>
      </div>
    </div>
  </Card>
</div>
