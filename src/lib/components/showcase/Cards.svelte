<script lang="ts">
  import { Card, Text } from '$lib/components/ui';
  import { pageStyles } from '$lib/styles/page.style';
</script>

<div class={pageStyles.componentShowcase.container}>
  <Text variant="h4" as="h4">Cards</Text>
  <div class={pageStyles.componentShowcase.cardGrid}>
    <Card variant="default" hover>
      <Text variant="h5" as="h5">Default Card</Text>
      <Text variant="body" color="secondary">Standard card with border and white background.</Text>
    </Card>
    <Card variant="elevated" hover>
      <Text variant="h5" as="h5">Elevated Card</Text>
      <Text variant="body" color="secondary">Card with shadow for visual prominence.</Text>
    </Card>
    <Card variant="outlined" hover>
      <Text variant="h5" as="h5">Outlined Card</Text>
      <Text variant="body" color="secondary">
        Card with prominent border and transparent background.
      </Text>
    </Card>
    <Card variant="flat" hover>
      <Text variant="h5" as="h5">Flat Card</Text>
      <Text variant="body" color="secondary">Card with subtle background color.</Text>
    </Card>
  </div>
</div>
