<script lang="ts">
  import { Text } from '$lib/components/ui';
  import { pageStyles } from '$lib/styles/page.style';
</script>

<footer class={pageStyles.footer.container}>
  <div class={pageStyles.layout.maxWidth}>
    <div class={pageStyles.footer.content}>
      <Text variant="h3" as="h3">Flowind Design System</Text>
      <Text variant="body" color="secondary">Built with Svelte and Tailwind CSS.</Text>
      <div class={pageStyles.footer.links}>
        <a href="http://localhost:6006" class={pageStyles.footer.link}>Storybook</a>
        <a href="#components" class={pageStyles.footer.link}>Components</a>
        <a href="#tokens" class={pageStyles.footer.link}>Design Tokens</a>
      </div>
    </div>
  </div>
</footer>
