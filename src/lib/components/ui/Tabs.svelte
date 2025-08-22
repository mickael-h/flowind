<script lang="ts">
  import {
    buildTabsClasses,
    buildTabButtonClasses,
    type TabsPosition
  } from '$lib/styles/tabs.style';
  import type { Snippet } from 'svelte';

  type TabItem = { id: string; label: string; content: Snippet };

  let {
    position = 'top' as TabsPosition,
    items = [] as TabItem[],
    activeId = undefined as string | undefined,
    ...rest
  } = $props<{
    position?: TabsPosition;
    items: TabItem[];
    activeId?: string;
  }>();

  const classes = $derived(buildTabsClasses({ position }));

  // Set default activeId to first item if not provided
  const defaultActiveId = $derived(items.length > 0 ? items[0].id : undefined);
  const currentActiveId = $derived(activeId || defaultActiveId);
</script>

<div class={classes.container} {...rest}>
  <!-- Tab list -->
  <div
    class={classes.list}
    role="tablist"
    aria-orientation={position === 'left' || position === 'right' ? 'vertical' : 'horizontal'}
  >
    {#each items as item (item.id)}
      <button
        type="button"
        role="tab"
        aria-selected={currentActiveId === item.id}
        class={buildTabButtonClasses({ position, active: currentActiveId === item.id })}
        onclick={() => (activeId = item.id)}
      >
        {item.label}
      </button>
    {/each}
  </div>

  <!-- Panels -->
  <div class={classes.panel} role="tabpanel">
    {#each items as item}
      {#if currentActiveId === item.id}
        {@render item.content?.()}
      {/if}
    {/each}
  </div>
</div>
