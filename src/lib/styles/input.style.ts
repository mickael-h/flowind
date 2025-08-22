// Input component styles - modern and consistent with design system
export const inputStyles = {
  // Base styling for native input
  base: `
    !w-full
    !transition-all 
    !duration-300 
    !border-2 
    !rounded-xl 
    !shadow-sm 
    focus:!shadow-md 
    focus:!ring-4 
    focus:!ring-offset-1
  `
    .replace(/\s+/g, ' ')
    .trim(),

  // Variant-specific overrides for colors
  variants: {
    default:
      '!border-gray-300 !bg-white !text-gray-900 focus:!border-primary-500 focus:!ring-primary-200 dark:!border-gray-600 dark:!bg-gray-700 dark:!text-white dark:focus:!border-primary-400 dark:focus:!ring-primary-900/20',
    success:
      '!border-green-300 !bg-white !text-gray-900 focus:!border-green-500 focus:!ring-green-200 dark:!border-green-600 dark:!bg-gray-700 dark:!text-white dark:focus:!border-green-400 dark:focus:!ring-green-900/20',
    error:
      '!border-red-300 !bg-white !text-gray-900 focus:!border-red-500 focus:!ring-red-200 dark:!border-red-600 dark:!bg-gray-700 dark:!text-white dark:focus:!border-red-400 dark:focus:!ring-red-900/20'
  },

  // Size overrides
  sizes: {
    xs: '!px-3 !py-2 !text-xs',
    sm: '!px-3 !py-2.5 !text-sm',
    md: '!px-4 !py-3 !text-base',
    lg: '!px-5 !py-3.5 !text-lg',
    xl: '!px-6 !py-4 !text-xl'
  },

  // Label styles
  label: 'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1',
  labelRequired: 'text-error-600 dark:text-error-400',

  // Helper text styles
  helper: 'mt-1 text-sm',
  helperSuccess: 'text-success-600 dark:text-success-400',
  helperError: 'text-error-600 dark:text-error-400',
  helperDefault: 'text-gray-500 dark:text-gray-400',

  // Input group styles
  group: 'flex',
  groupInput: 'flex-1',
  groupAddon:
    'inline-flex items-center px-3 py-2 text-sm text-gray-500 bg-gray-50 border border-gray-300 border-l-0 rounded-r-lg',

  // Container styles
  container: 'space-y-1'
} as const;

// Helper function to build input classes
export function buildInputClasses({
  variant = 'default',
  size = 'md'
}: {
  variant?: keyof typeof inputStyles.variants;
  size?: keyof typeof inputStyles.sizes;
}) {
  const classes = [inputStyles.base, inputStyles.variants[variant], inputStyles.sizes[size]];

  return classes.filter(Boolean).join(' ');
}
