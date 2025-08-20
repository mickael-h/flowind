<script lang="ts">
  import { Badge, Text, Card } from '$lib/components/ui';
  import { pageStyles } from '$lib/styles/page.style';

  // Handler for badge removal
  function handleBadgeRemove() {
    // Badge removed
  }
</script>

<div class={pageStyles.componentShowcase.container}>
  <Text variant="h4" as="h4">Badges</Text>
  <Card variant="elevated" padding="lg">
    <div class={pageStyles.componentShowcase.card}>
      <div class={pageStyles.componentShowcase.section}>
        <Text variant="h5" as="h5">Variants</Text>
        <div class={pageStyles.componentShowcase.badgeGrid}>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="accent">Accent</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </div>
      </div>
      <div class={pageStyles.componentShowcase.section}>
        <Text variant="h5" as="h5">Interactive</Text>
        <div class={pageStyles.componentShowcase.badgeGridSizes}>
          <Badge variant="primary">Standard Badge</Badge>
          <Badge variant="accent">Interactive</Badge>
          <Badge variant="info">Informational</Badge>
        </div>
      </div>
      <div class={pageStyles.componentShowcase.section}>
        <Text variant="h5" as="h5">Removable</Text>
        <div class={pageStyles.componentShowcase.badgeGrid}>
          <Badge variant="primary" removable onRemove={handleBadgeRemove}>Removable</Badge>
          <Badge variant="success" removable onRemove={handleBadgeRemove}>Success</Badge>
          <Badge variant="warning" removable onRemove={handleBadgeRemove}>Warning</Badge>
        </div>
      </div>
    </div>
  </Card>
</div>
