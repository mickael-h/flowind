<script lang="ts">
  import { buildBadgeClasses, badgeStyles } from '$lib/styles/badge.style';
  import type { Snippet } from 'svelte';

  let {
    variant = 'primary' as const,
    removable = false,
    onRemove = undefined as (() => void) | undefined,
    children,
    ...rest
  } = $props<{
    variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info';
    removable?: boolean;
    onRemove?: () => void;
    children?: Snippet;
  }>();

  // Build complete badge classes with variant-specific styling
  const badgeClasses = $derived(buildBadgeClasses(variant));

  function handleRemove() {
    if (removable && onRemove) {
      onRemove();
    }
  }
</script>

<span class={badgeClasses} {...rest}>
  {@render children?.()}
  {#if removable}
    <button
      type="button"
      onclick={handleRemove}
      aria-label="Remove badge"
      class={badgeStyles.removeButton}
    >
      <svg fill="currentColor" viewBox="0 0 20 20" class={badgeStyles.removeIcon}>
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  {/if}
</span>
