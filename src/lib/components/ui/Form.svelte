<script lang="ts">
  import { buildFormClasses } from '$lib/styles/form.style';
  import type { Snippet } from 'svelte';

  let {
    layout = 'vertical' as const,
    spacing = 'md' as const,
    onSubmit = undefined as ((formData: FormData) => void) | undefined,
    children,
    ...rest
  } = $props<{
    layout?: 'vertical' | 'horizontal' | 'inline';
    spacing?: 'sm' | 'md' | 'lg' | 'xl';
    onSubmit?: (formData: FormData) => void;
    children?: Snippet;
  }>();

  // Build form classes using the extracted styles
  const formClasses = $derived(buildFormClasses({ layout, spacing }));

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    if (onSubmit) {
      onSubmit(formData);
    }
  }
</script>

<form class={formClasses} onsubmit={handleSubmit} {...rest}>
  {@render children?.()}
</form>
