<script lang="ts">
  import { Button as FlowbiteButton } from 'flowbite-svelte';
  import { buildButtonClasses, buttonStyles } from '$lib/styles/button.style';

  let {
    variant = 'primary' as const,
    size = 'md' as const,
    loading = false,
    disabled = false,
    fullWidth = false,
    children,
    ...rest
  } = $props();

  // Build custom classes for our opinionated styling
  const customClasses = $derived(buildButtonClasses({ variant, size, fullWidth }));
</script>

<FlowbiteButton {disabled} class={customClasses} {...rest}>
  {#if loading}
    <svg
      class={buttonStyles.spinner}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class={buttonStyles.spinnerCircle}
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class={buttonStyles.spinnerPath}
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  {/if}
  {@render children?.()}
</FlowbiteButton>
