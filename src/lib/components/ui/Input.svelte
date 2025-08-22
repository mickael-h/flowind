<script lang="ts">
  import { buildInputClasses, inputStyles } from '$lib/styles/input.style';

  let {
    variant = 'default' as const,
    size = 'md' as const,
    error = false,
    success = false,
    helperText = '',
    label = '',
    type = 'text',
    placeholder = '',
    ...rest
  } = $props<{
    variant?: 'default' | 'success' | 'error';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    error?: boolean;
    success?: boolean;
    helperText?: string;
    label?: string;
    type?: string;
    placeholder?: string;
  }>();

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
    <label for={rest.id} class={inputStyles.label}>
      {label}
    </label>
  {/if}

  <input class={customClasses} {type} {placeholder} {...rest} />

  {#if helperText}
    <div class={helperClasses}>
      {helperText}
    </div>
  {/if}
</div>
