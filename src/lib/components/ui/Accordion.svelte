<script lang="ts">
  import {
    buildAccordionClasses,
    buildAccordionItemClasses,
    accordionStyles,
    type AccordionVariant
  } from '$lib/styles/accordion.style';
  import type { Snippet } from 'svelte';
  import { slide } from 'svelte/transition';

  export interface AccordionItemData {
    id: string;
    title: string;
    content: Snippet;
    open?: boolean;
  }

  let {
    items = [] as AccordionItemData[],
    variant = 'default' as AccordionVariant,
    flush = false,
    multiple = false,
    arrowPosition = 'right' as 'left' | 'right',
    onItemToggle = undefined as ((event: { itemId: string; isOpen: boolean }) => void) | undefined,
    ...rest
  } = $props<{
    items: AccordionItemData[];
    variant?: AccordionVariant;
    flush?: boolean;
    multiple?: boolean;
    arrowPosition?: 'left' | 'right';
    onItemToggle?: (event: { itemId: string; isOpen: boolean }) => void;
  }>();

  // Build custom classes for our opinionated styling
  const customClasses = $derived(buildAccordionClasses({ variant, flush }));

  // Track open state for each item
  let openStates = $state<Record<string, boolean>>({});

  // Initialize open states when items change
  $effect(() => {
    const newStates: Record<string, boolean> = {};
    items.forEach((item: AccordionItemData) => {
      newStates[item.id] = item.open ?? false;
    });
    openStates = newStates;
  });

  // Handle item toggle
  function toggleItem(itemId: string) {
    if (multiple) {
      // Multiple selection: just toggle the clicked item
      openStates = { ...openStates, [itemId]: !openStates[itemId] };
    } else {
      // Single selection: close all others, open clicked item
      const newState = !openStates[itemId];
      const newStates = { ...openStates };
      Object.keys(newStates).forEach((id) => {
        newStates[id] = id === itemId ? newState : false;
      });
      openStates = newStates;
    }

    // Call the callback if provided
    if (onItemToggle) {
      onItemToggle({ itemId, isOpen: openStates[itemId] });
    }
  }

  // Handle keyboard navigation
  function handleKeydown(event: KeyboardEvent, itemId: string) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleItem(itemId);
    }
  }
</script>

<div class={customClasses} {...rest}>
  {#each items as item (item.id)}
    {@const isOpen = openStates[item.id]}
    {@const itemClasses = buildAccordionItemClasses({ isOpen, arrowPosition })}

    <div class={itemClasses.item}>
      <!-- Header/Trigger Button -->
      <button
        type="button"
        class={itemClasses.header}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
        onclick={() => toggleItem(item.id)}
        onkeydown={(e) => handleKeydown(e, item.id)}
      >
        {#if arrowPosition === 'left'}
          <svg
            class={`${accordionStyles.content.arrow} ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        {/if}

        <span class={accordionStyles.content.title}>{item.title}</span>

        {#if arrowPosition === 'right'}
          <svg
            class={`${accordionStyles.content.arrow} ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        {/if}
      </button>

      <!-- Content -->
      {#if isOpen}
        <div
          id={`accordion-content-${item.id}`}
          class={itemClasses.content}
          role="region"
          aria-labelledby={`accordion-header-${item.id}`}
          transition:slide={{ duration: 200 }}
        >
          {@render item.content()}
        </div>
      {/if}
    </div>
  {/each}
</div>
