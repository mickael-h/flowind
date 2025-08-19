// Card component styles - opinionated customizations on top of Flowbite
export const cardStyles = {
  // Base styling to add to Flowbite Card
  base: `
    transition-all 
    duration-300 
    border-0 
    shadow-sm 
    rounded-xl
  `
    .replace(/\s+/g, ' ')
    .trim(),

  // Variant-specific overrides for styles
  variants: {
    default:
      '!bg-white dark:!bg-gray-800 !border !border-gray-200 dark:!border-gray-700 hover:!shadow-md',
    elevated: '!bg-white dark:!bg-gray-800 !shadow-lg hover:!shadow-xl',
    outlined:
      '!bg-transparent !border-2 !border-gray-300 dark:!border-gray-600 hover:!border-gray-400 dark:hover:!border-gray-500',
    flat: '!bg-gray-50 dark:!bg-gray-700 !border-0 hover:!bg-gray-100 dark:hover:!bg-gray-600'
  },

  // Padding overrides
  padding: {
    none: '!p-0',
    sm: '!p-4',
    md: '!p-6',
    lg: '!p-8',
    xl: '!p-10'
  },

  // Interactive and hover effects
  interactive: 'cursor-pointer hover:!scale-105',
  hoverEffects: 'hover:!shadow-lg hover:!-translate-y-1'
} as const;

// Helper function to build card classes
export function buildCardClasses({
  variant = 'default',
  padding = 'md',
  interactive = false,
  hover = false
}: {
  variant?: keyof typeof cardStyles.variants;
  padding?: keyof typeof cardStyles.padding;
  interactive?: boolean;
  hover?: boolean;
}) {
  const classes = [
    cardStyles.base,
    cardStyles.variants[variant],
    cardStyles.padding[padding],
    interactive ? cardStyles.interactive : '',
    hover ? cardStyles.hoverEffects : ''
  ];

  return classes.filter(Boolean).join(' ');
}
