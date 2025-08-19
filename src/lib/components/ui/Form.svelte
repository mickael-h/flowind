<script lang="ts">
  import { buildFormClasses } from '$lib/styles/form.style';

  let {
    layout = 'vertical' as const,
    spacing = 'md' as const,
    onSubmit,
    children,
    ...rest
  } = $props();

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
