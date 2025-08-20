// Button component styles - opinionated customizations on top of Flowbite
export const buttonStyles = {
  // Base styling to add to Flowbite Button
  base: `
    font-semibold 
    tracking-wide 
    shadow-sm 
    transition-all 
    duration-300 
    transform 
    hover:scale-105 
    hover:shadow-md 
    active:scale-95 
    focus:ring-4 
    focus:ring-offset-2
    cursor-pointer
  `
    .replace(/\s+/g, ' ')
    .trim(),

  // Variant-specific overrides for colors
  variants: {
    primary:
      '!bg-primary-600 !text-white hover:!bg-primary-700 focus:!ring-primary-300 dark:!bg-primary-500 dark:hover:!bg-primary-600',
    secondary:
      '!bg-secondary-600 !text-white hover:!bg-secondary-700 focus:!ring-secondary-300 dark:!bg-secondary-500 dark:hover:!bg-secondary-600',
    accent:
      '!bg-accent-600 !text-white hover:!bg-accent-700 focus:!ring-accent-300 dark:!bg-accent-500 dark:hover:!bg-accent-600',
    success:
      '!bg-success-600 !text-white hover:!bg-success-700 focus:!ring-success-300 dark:!bg-success-500 dark:hover:!bg-success-600',
    warning:
      '!bg-warning-600 !text-white hover:!bg-warning-700 focus:!ring-warning-300 dark:!bg-warning-500 dark:hover:!bg-warning-600',
    error:
      '!bg-error-600 !text-white hover:!bg-error-700 focus:!ring-error-300 dark:!bg-error-500 dark:hover:!bg-error-600',
    outline:
      '!border-2 !border-primary-600 !text-primary-600 hover:!bg-primary-50 focus:!ring-primary-300 dark:!border-primary-400 dark:!text-primary-400 dark:hover:!bg-primary-900/20',
    ghost:
      '!bg-transparent !text-primary-600 hover:!bg-primary-50 focus:!ring-primary-300 dark:!text-primary-400 dark:hover:!bg-primary-900/20'
  },

  // Size overrides to fix Flowbite's sizing issues
  sizeOverrides: {
    xs: '!px-2 !py-1 !text-xs',
    sm: '!px-3 !py-1.5 !text-sm',
    md: '!px-4 !py-2 !text-base',
    lg: '!px-6 !py-3 !text-lg',
    xl: '!px-8 !py-4 !text-xl !min-h-[3.5rem]'
  },

  // Layout styles
  layout: {
    fullWidth: '!w-full'
  },

  // Loading spinner styles
  spinner: 'mr-2 h-4 w-4 animate-spin',
  spinnerCircle: 'opacity-25',
  spinnerPath: 'opacity-75',

  // Disabled state styles
  disabled: '!opacity-50 !cursor-not-allowed !pointer-events-none'
} as const;

// Helper function to build button classes
export function buildButtonClasses({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false
}: {
  variant?: keyof typeof buttonStyles.variants;
  size?: keyof typeof buttonStyles.sizeOverrides;
  fullWidth?: boolean;
  disabled?: boolean;
}) {
  const classes = [
    buttonStyles.base,
    buttonStyles.variants[variant],
    buttonStyles.sizeOverrides[size],
    fullWidth ? buttonStyles.layout.fullWidth : '',
    disabled ? buttonStyles.disabled : ''
  ];

  return classes.filter(Boolean).join(' ');
}
