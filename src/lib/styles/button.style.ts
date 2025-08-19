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
  `
    .replace(/\s+/g, ' ')
    .trim(),

  // Variant-specific overrides for colors
  variants: {
    primary: '!bg-blue-600 !text-white hover:!bg-blue-700 focus:!ring-blue-300',
    secondary: '!bg-gray-600 !text-white hover:!bg-gray-700 focus:!ring-gray-300',
    accent: '!bg-purple-600 !text-white hover:!bg-purple-700 focus:!ring-purple-300',
    success: '!bg-green-600 !text-white hover:!bg-green-700 focus:!ring-green-300',
    warning: '!bg-amber-600 !text-white hover:!bg-amber-700 focus:!ring-amber-300',
    error: '!bg-red-600 !text-white hover:!bg-red-700 focus:!ring-red-300',
    outline: '!border-2 !border-blue-600 !text-blue-600 hover:!bg-blue-50 focus:!ring-blue-300',
    ghost: '!bg-transparent !text-blue-600 hover:!bg-blue-50 focus:!ring-blue-300'
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
  spinnerPath: 'opacity-75'
} as const;

// Helper function to build button classes
export function buildButtonClasses({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false
}: {
  variant?: keyof typeof buttonStyles.variants;
  size?: keyof typeof buttonStyles.sizeOverrides;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}) {
  const classes = [
    buttonStyles.base,
    buttonStyles.variants[variant],
    buttonStyles.sizeOverrides[size],
    fullWidth ? buttonStyles.layout.fullWidth : ''
  ];

  return classes.filter(Boolean).join(' ');
}
