<script lang="ts">
  import { buildCardClasses } from '$lib/styles/card.style';
  import type { Snippet } from 'svelte';

  let {
    variant = 'default' as const,
    padding = 'md' as const,
    hover = false,
    interactive = false,
    children,
    ...rest
  } = $props<{
    variant?: 'default' | 'elevated' | 'outlined' | 'flat';
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    hover?: boolean;
    interactive?: boolean;
    children?: Snippet;
  }>();

  // Build custom classes for our opinionated styling
  const customClasses = $derived(buildCardClasses({ variant, padding, interactive, hover }));
</script>

<div class={customClasses} {...rest}>
  {@render children?.()}
</div>
