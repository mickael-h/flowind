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
    primary: '!bg-primary-600 !text-white hover:!bg-primary-700 focus:!ring-primary-300',
    secondary: '!bg-secondary-600 !text-white hover:!bg-secondary-700 focus:!ring-secondary-300',
    accent: '!bg-accent-600 !text-white hover:!bg-accent-700 focus:!ring-accent-300',
    success: '!bg-success-600 !text-white hover:!bg-success-700 focus:!ring-success-300',
    warning: '!bg-warning-600 !text-white hover:!bg-warning-700 focus:!ring-warning-300',
    error: '!bg-error-600 !text-white hover:!bg-error-700 focus:!ring-error-300',
    outline:
      '!border-2 !border-primary-600 !text-primary-600 hover:!bg-primary-50 focus:!ring-primary-300',
    ghost: '!bg-transparent !text-primary-600 hover:!bg-primary-50 focus:!ring-primary-300'
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
  fullWidth = false
}: {
  variant?: keyof typeof buttonStyles.variants;
  size?: keyof typeof buttonStyles.sizeOverrides;
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
