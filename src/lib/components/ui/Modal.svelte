<script lang="ts">
  import {
    buildModalClasses,
    modalStyles,
    getPositionClasses,
    getFlyTransition,
    type ModalSize,
    type ModalPosition
  } from '$lib/styles/modal.style';
  import Text from './Text.svelte';
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let {
    open = $bindable(false),
    size = 'md' as ModalSize,
    position = 'center' as ModalPosition,
    title = '',
    closable = true,
    onClose = undefined as (() => void) | undefined,
    header,
    body,
    footer
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

  // Build modal classes for styling including our custom size overrides
  const modalClasses = $derived(buildModalClasses({ size }));

  // Modal refs for focus management
  let modalRef = $state<HTMLDivElement>();
  let backdropRef = $state<HTMLDivElement>();
  let closeButtonRef = $state<HTMLButtonElement>();

  // Handle close functionality
  function handleClose() {
    if (closable) {
      open = false;
      if (onClose) {
        onClose();
      }
    }
  }

  // Handle backdrop click
  function handleBackdropClick(event: MouseEvent) {
    if (event.target === backdropRef && closable) {
      handleClose();
    }
  }

  // Handle keyboard events
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && closable) {
      handleClose();
    }
  }

  // Focus management
  $effect(() => {
    if (open) {
      // Focus the close button or modal when opening
      setTimeout(() => {
        if (closeButtonRef) {
          closeButtonRef.focus();
        } else if (modalRef) {
          modalRef.focus();
        }
      }, 100);
    }
  });

  // Add/remove event listeners
  onMount(() => {
    return () => {
      // Cleanup if needed
    };
  });

  // Handle escape key globally
  $effect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeydown);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';

      return () => {
        document.removeEventListener('keydown', handleKeydown);
        document.body.style.overflow = '';
      };
    }
  });
</script>

{#if open}
  <!-- Backdrop -->
  <div
    bind:this={backdropRef}
    class={modalStyles.backdrop}
    role="dialog"
    aria-modal="true"
    aria-labelledby={title ? 'modal-title' : undefined}
    tabindex="0"
    transition:fade={{ duration: 200 }}
    onclick={handleBackdropClick}
    onkeydown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        handleBackdropClick(e as any);
      }
    }}
  >
    <!-- Modal Content -->
    <div
      bind:this={modalRef}
      class={`${modalClasses.content} ${getPositionClasses(position)}`}
      data-position={position}
      tabindex="-1"
      role="document"
      transition:fly={getFlyTransition(position)}
    >
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
              bind:this={closeButtonRef}
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
    </div>
  </div>
{/if}
