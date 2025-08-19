<script lang="ts">
  import { Card as FlowbiteCard } from 'flowbite-svelte';
  import { buildCardClasses } from '$lib/styles/card.style';

  let {
    variant = 'default' as const,
    padding = 'md' as const,
    hover = false,
    interactive = false,
    children,
    ...rest
  } = $props();

  // Build custom classes for our opinionated styling
  const customClasses = $derived(buildCardClasses({ variant, padding, interactive, hover }));
</script>

<FlowbiteCard class={customClasses} {...rest}>
  {@render children?.()}
</FlowbiteCard>
