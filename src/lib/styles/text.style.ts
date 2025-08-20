export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'bodyLarge'
  | 'bodySmall'
  | 'caption'
  | 'overline'
  | 'code';
export type TextColor =
  | 'primary'
  | 'secondary'
  | 'muted'
  | 'accent'
  | 'success'
  | 'warning'
  | 'error'
  | 'inherit';
export type TextAlign = 'left' | 'center' | 'right' | 'justify';
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

export const textStyles = {
  // Base text styling
  base: 'leading-relaxed',

  // Variant styles - semantic typography scale
  variants: {
    h1: 'text-5xl font-bold tracking-tight',
    h2: 'text-4xl font-bold tracking-tight',
    h3: 'text-3xl font-bold tracking-tight',
    h4: 'text-2xl font-semibold tracking-tight',
    h5: 'text-xl font-semibold tracking-tight',
    h6: 'text-lg font-semibold tracking-tight',
    body: 'text-base font-normal',
    bodyLarge: 'text-lg font-normal',
    bodySmall: 'text-sm font-normal',
    caption: 'text-xs font-medium tracking-wide',
    overline: 'text-xs font-semibold tracking-wider uppercase',
    code: 'text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-medium'
  },

  // Color variants
  colors: {
    primary: 'text-gray-900 dark:text-white',
    secondary: 'text-gray-600 dark:text-gray-400',
    muted: 'text-gray-500 dark:text-gray-500',
    accent: 'text-primary-600 dark:text-primary-400',
    success: 'text-green-600 dark:text-green-400',
    warning: 'text-orange-600 dark:text-orange-400',
    error: 'text-red-600 dark:text-red-400',
    inherit: ''
  },

  // Text alignment
  align: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  },

  // Font weights
  weights: {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  },

  // Utility modifiers
  modifiers: {
    truncate: 'truncate',
    italic: 'italic',
    underline: 'underline',
    lineThrough: 'line-through',
    noWrap: 'whitespace-nowrap'
  }
};

export function buildTextClasses({
  variant = 'body',
  color = 'primary',
  align,
  weight,
  truncate = false,
  italic = false,
  underline = false,
  lineThrough = false,
  noWrap = false
}: {
  variant?: TextVariant;
  color?: TextColor;
  align?: TextAlign;
  weight?: TextWeight;
  truncate?: boolean;
  italic?: boolean;
  underline?: boolean;
  lineThrough?: boolean;
  noWrap?: boolean;
} = {}) {
  const classes = [textStyles.base, textStyles.variants[variant], textStyles.colors[color]];

  // Add optional styles
  if (align) classes.push(textStyles.align[align]);
  if (weight) classes.push(textStyles.weights[weight]);
  if (truncate) classes.push(textStyles.modifiers.truncate);
  if (italic) classes.push(textStyles.modifiers.italic);
  if (underline) classes.push(textStyles.modifiers.underline);
  if (lineThrough) classes.push(textStyles.modifiers.lineThrough);
  if (noWrap) classes.push(textStyles.modifiers.noWrap);

  return classes.filter(Boolean).join(' ');
}

// Semantic element mapping for variants
export const variantToElement = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  bodyLarge: 'p',
  bodySmall: 'p',
  caption: 'span',
  overline: 'span',
  code: 'code'
} as const;
