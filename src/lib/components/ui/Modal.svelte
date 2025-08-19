<script lang="ts">
  import { Modal as FlowbiteModal } from 'flowbite-svelte';
  import {
    buildModalClasses,
    getFlowbitePlacement,
    modalStyles,
    type ModalSize,
    type ModalPosition
  } from '$lib/styles/modal.style';
  import Text from './Text.svelte';
  import type { Snippet } from 'svelte';

  let {
    open = $bindable(false),
    size = 'md' as ModalSize,
    position = 'center' as ModalPosition,
    title = '',
    closable = true,
    onClose,
    header,
    body,
    footer,
    ...rest
  } = $props<{
    open?: boolean;
    size?: ModalSize;
    position?: ModalPosition;
    title?: string;
    closable?: boolean;
    onClose?: () => void;
    header?: Snippet;
    body?: Snippet;
    footer?: Snippet;
  }>();

  // Build custom classes for our opinionated styling
  const customClasses = $derived(buildModalClasses({ size, position }));

  // Get Flowbite placement from our position prop
  const flowbitePlacement = $derived(getFlowbitePlacement(position));

  // Handle close functionality
  function handleClose() {
    if (closable) {
      open = false; // Trigger Flowbite's natural close mechanism
      if (onClose) {
        onClose();
      }
    }
  }
</script>

<FlowbiteModal bind:open dismissable={false} outsideclose={closable} placement={flowbitePlacement}>
  <!-- Header -->
  {#if header || title}
    <div class={modalStyles.header}>
      {#if header}
        {@render header()}
      {:else if title}
        <div id="modal-title">
          <Text variant="h5" as="h2">
            {title}
          </Text>
        </div>
      {/if}

      {#if closable}
        <button
          type="button"
          class={modalStyles.closeButton}
          onclick={handleClose}
          aria-label="Close modal"
        >
          <svg class={modalStyles.closeIcon} fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      {/if}
    </div>
  {/if}

  <!-- Body -->
  {#if body}
    <div class={modalStyles.body}>
      {@render body()}
    </div>
  {/if}

  <!-- Footer -->
  {#if footer}
    <div class={modalStyles.footer}>
      {@render footer()}
    </div>
  {/if}
</FlowbiteModal>
