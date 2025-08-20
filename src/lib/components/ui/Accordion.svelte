<script lang="ts">
  import {
    Accordion as FlowbiteAccordion,
    AccordionItem as FlowbiteAccordionItem
  } from 'flowbite-svelte';
  import {
    buildAccordionClasses,
    buildAccordionItemClasses,
    accordionStyles,
    type AccordionVariant
  } from '$lib/styles/accordion.style';
  import type { Snippet } from 'svelte';

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
    ...rest
  } = $props<{
    items: AccordionItemData[];
    variant?: AccordionVariant;
    flush?: boolean;
    multiple?: boolean;
    arrowPosition?: 'left' | 'right';
  }>();

  // Build custom classes for our opinionated styling
  const customClasses = $derived(buildAccordionClasses({ variant, flush }));

  // Track open state for each item when not using multiple selection
  let openStates = $state<Record<string, boolean>>(
    items.reduce(
      (acc: Record<string, boolean>, item: AccordionItemData) => {
        acc[item.id] = item.open ?? false;
        return acc;
      },
      {} as Record<string, boolean>
    )
  );
</script>

<FlowbiteAccordion {multiple} {flush} class={customClasses} {...rest}>
  {#each items as item (item.id)}
    {@const isOpen = openStates[item.id]}
    {@const itemClasses = buildAccordionItemClasses({ isOpen, arrowPosition })}

    <FlowbiteAccordionItem
      bind:open={openStates[item.id]}
      class={itemClasses.item}
      classes={{
        button: itemClasses.header,
        content: itemClasses.content
      }}
    >
      {#snippet header()}
        {#if arrowPosition === 'left'}
          <svg
            class="{accordionStyles.content.arrow} {isOpen ? 'rotate-180' : ''}"
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
      {/snippet}

      {@render item.content()}
    </FlowbiteAccordionItem>
  {/each}
</FlowbiteAccordion>
