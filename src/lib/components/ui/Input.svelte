<script lang="ts">
  import { Input as FlowbiteInput, Label, Helper } from 'flowbite-svelte';
  import { buildInputClasses, inputStyles } from '$lib/styles/input.style';

  let {
    variant = 'default' as const,
    size = 'md' as const,
    error = false,
    success = false,
    helperText = '',
    label = '',
    ...rest
  } = $props();

  // Determine the actual variant based on error/success states
  const actualVariant = $derived(error ? 'error' : success ? 'success' : variant);

  // Build custom classes for our opinionated styling
  const customClasses = $derived(buildInputClasses({ variant: actualVariant, size }));

  // Build helper text classes
  const helperClasses = $derived(
    [
      inputStyles.helper,
      error
        ? inputStyles.helperError
        : success
          ? inputStyles.helperSuccess
          : inputStyles.helperDefault
    ].join(' ')
  );
</script>

<div class={inputStyles.container}>
  {#if label}
    <Label for={rest.id} class={inputStyles.label}>
      {label}
    </Label>
  {/if}

  <FlowbiteInput class={customClasses} {...rest} />

  {#if helperText}
    <Helper class={helperClasses}>
      {helperText}
    </Helper>
  {/if}
</div>
