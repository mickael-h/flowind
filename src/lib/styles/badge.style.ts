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
    primary: '!bg-blue-50 !text-blue-700 hover:!bg-blue-100 focus:ring-blue-500',
    secondary: '!bg-gray-50 !text-gray-700 hover:!bg-gray-100 focus:ring-gray-500',
    accent: '!bg-purple-50 !text-purple-700 hover:!bg-purple-100 focus:ring-purple-500',
    success: '!bg-green-50 !text-green-700 hover:!bg-green-100 focus:ring-green-500',
    warning: '!bg-amber-50 !text-amber-700 hover:!bg-amber-100 focus:ring-amber-500',
    error: '!bg-red-50 !text-red-700 hover:!bg-red-100 focus:ring-red-500',
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
