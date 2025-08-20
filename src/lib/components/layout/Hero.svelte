<script lang="ts">
  import { Button, Text } from '$lib/components/ui';
  import { pageStyles } from '$lib/styles/page.style';
</script>

<section class={pageStyles.hero.container}>
  <div class={pageStyles.hero.content}>
    <Text variant="h2" as="h2">Design System</Text>
    <Text variant="bodyLarge" color="secondary">
      A comprehensive component library built with Svelte and Tailwind CSS, inspired by Flowbite.
      Consistent design tokens ensure unified look and feel across all applications.
    </Text>
    <div class={pageStyles.hero.actions}>
      <Button size="lg" variant="primary">View Components</Button>
      <Button size="lg" variant="outline">Read Documentation</Button>
    </div>
  </div>
</section>
