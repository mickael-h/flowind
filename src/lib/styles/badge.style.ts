// Badge component styles - opinionated customizations on top of Flowbite
export const badgeStyles = {
  // Base styling that applies to all badges
  base: `
    font-semibold 
    tracking-wide 
    border-2 
    border-transparent
    shadow-md 
    px-3 
    py-1.5 
    text-sm 
    rounded-full 
    transition-all 
    duration-200 
    hover:shadow-lg 
    hover:-translate-y-0.5
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2
  `
    .replace(/\s+/g, ' ')
    .trim(),

  // Variant-specific colors to override Flowbite's defaults
  variants: {
    primary:
      '!bg-primary-50 !text-primary-700 hover:!bg-primary-100 focus:!ring-primary-300 dark:!bg-primary-900/20 dark:!text-primary-300 dark:hover:!bg-primary-800/30',
    secondary:
      '!bg-secondary-50 !text-secondary-700 hover:!bg-secondary-100 focus:!ring-secondary-300 dark:!bg-secondary-900/20 dark:!text-secondary-300 dark:hover:!bg-secondary-800/30',
    accent:
      '!bg-accent-50 !text-accent-700 hover:!bg-accent-100 focus:!ring-accent-300 dark:!bg-accent-900/20 dark:!text-accent-300 dark:hover:!bg-accent-800/30',
    success:
      '!bg-success-50 !text-success-700 hover:!bg-success-100 focus:!ring-success-300 dark:!bg-success-900/20 dark:!text-success-300 dark:hover:!bg-success-800/30',
    warning:
      '!bg-warning-50 !text-warning-700 hover:!bg-warning-100 focus:!ring-warning-300 dark:!bg-warning-900/20 dark:!text-warning-300 dark:hover:!bg-warning-800/30',
    error:
      '!bg-error-50 !text-error-700 hover:!bg-error-100 focus:!ring-error-300 dark:!bg-error-900/20 dark:!text-error-300 dark:hover:!bg-error-800/30',
    info: '!bg-primary-50 !text-primary-700 hover:!bg-primary-100 focus:!ring-primary-300 dark:!bg-primary-900/20 dark:!text-primary-300 dark:hover:!bg-primary-800/30'
  },

  // Remove button styling
  removeButton: `
    ml-2 
    -mr-1 
    h-4 
    w-4 
    rounded-full 
    inline-flex 
    items-center 
    justify-center 
    text-current 
    text-xs 
    font-bold 
    hover:bg-current 
    hover:bg-opacity-20 
    focus:outline-none 
    focus:ring-2 
    focus:ring-current 
    focus:ring-offset-1 
    transition-all 
    duration-150
    cursor-pointer
  `
    .replace(/\s+/g, ' ')
    .trim(),

  // Remove icon styling
  removeIcon: 'h-3 w-3'
} as const;

// Helper function to build complete badge classes
export function buildBadgeClasses(variant: keyof typeof badgeStyles.variants) {
  return `${badgeStyles.base} ${badgeStyles.variants[variant]}`;
}
