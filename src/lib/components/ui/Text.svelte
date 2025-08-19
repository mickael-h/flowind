<script lang="ts">
  import {
    buildTextClasses,
    variantToElement,
    type TextVariant,
    type TextColor,
    type TextAlign,
    type TextWeight
  } from '$lib/styles/text.style';
  import type { Snippet } from 'svelte';

  let {
    variant = 'body' as TextVariant,
    color = 'primary' as TextColor,
    align = undefined as TextAlign | undefined,
    weight = undefined as TextWeight | undefined,
    as = undefined as keyof HTMLElementTagNameMap | undefined,
    truncate = false,
    italic = false,
    underline = false,
    lineThrough = false,
    noWrap = false,
    children,
    ...rest
  } = $props<{
    variant?: TextVariant;
    color?: TextColor;
    align?: TextAlign;
    weight?: TextWeight;
    as?: keyof HTMLElementTagNameMap;
    truncate?: boolean;
    italic?: boolean;
    underline?: boolean;
    lineThrough?: boolean;
    noWrap?: boolean;
    children?: Snippet;
  }>();

  // Determine the HTML element to render
  const element = as || variantToElement[variant as keyof typeof variantToElement] || 'p';

  // Build text classes using the extracted styles
  const textClasses = $derived(
    buildTextClasses({
      variant,
      color,
      align,
      weight,
      truncate,
      italic,
      underline,
      lineThrough,
      noWrap
    })
  );
</script>

<svelte:element this={element} class={textClasses} {...rest}>
  {@render children?.()}
</svelte:element>
