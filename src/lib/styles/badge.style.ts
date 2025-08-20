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
    primary: '!bg-primary-50 !text-primary-700 hover:!bg-primary-100 focus:ring-primary-500',
    secondary:
      '!bg-secondary-50 !text-secondary-700 hover:!bg-secondary-100 focus:ring-secondary-500',
    accent: '!bg-accent-50 !text-accent-700 hover:!bg-accent-100 focus:ring-accent-500',
    success: '!bg-success-50 !text-success-700 hover:!bg-success-100 focus:ring-success-500',
    warning: '!bg-warning-50 !text-warning-700 hover:!bg-warning-100 focus:ring-warning-500',
    error: '!bg-error-50 !text-error-700 hover:!bg-error-100 focus:ring-error-500',
    info: '!bg-sky-50 !text-sky-700 hover:!bg-sky-100 focus:ring-sky-500'
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
