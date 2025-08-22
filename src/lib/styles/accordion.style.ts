// Accordion component styles using Tailwind utilities
export type AccordionVariant = 'default' | 'flush' | 'bordered';

// Accordion component styles - modern and consistent with design system
export const accordionStyles = {
  // Base accordion container styles
  base: `
    border border-gray-200 dark:border-gray-700
    rounded-lg
    overflow-hidden
    shadow-sm
    transition-all duration-200
  `
    .replace(/\s+/g, ' ')
    .trim(),

  // Flush variant (no borders/background)
  flush: `
    border-0
    shadow-none
    rounded-none
    bg-transparent
  `
    .replace(/\s+/g, ' ')
    .trim(),

  // Individual accordion item styles
  item: {
    // Base item container
    base: `
      border-b border-gray-200 dark:border-gray-700
      last:border-b-0
    `
      .replace(/\s+/g, ' ')
      .trim(),

    // Item header/trigger button
    header: `
      w-full
      px-5 py-4
      text-left
      font-medium text-gray-900 dark:text-white
      bg-gray-50 dark:bg-gray-800
      hover:bg-gray-100 dark:hover:bg-gray-700
      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
      transition-colors duration-200
      flex items-center justify-between
      group
    `
      .replace(/\s+/g, ' ')
      .trim(),

    // Item header when active/open
    headerActive: `
      bg-primary-50 dark:bg-primary-900/20
      text-primary-700 dark:text-primary-300
      border-b border-primary-200 dark:border-primary-700
    `
      .replace(/\s+/g, ' ')
      .trim(),

    // Item content container
    content: `
      px-5 py-4
      bg-white dark:bg-gray-900
      text-gray-700 dark:text-gray-300
      border-b border-gray-200 dark:border-gray-700
      last:border-b-0
    `
      .replace(/\s+/g, ' ')
      .trim()
  },

  // Content styles
  content: {
    arrow: `
      mr-3 
      h-3 
      w-3 
      text-gray-900 
      transition-transform 
      duration-200 
      dark:text-white
    `
      .replace(/\s+/g, ' ')
      .trim(),

    title: `
      flex-1 
      text-left
    `
      .replace(/\s+/g, ' ')
      .trim()
  },

  // Variant styles
  variants: {
    default: '',

    flush: `
      border-0
      shadow-none
      rounded-none
      bg-transparent
    `
      .replace(/\s+/g, ' ')
      .trim(),

    bordered: `
      border-2 !border-primary-200 dark:!border-primary-700
      shadow-md
    `
      .replace(/\s+/g, ' ')
      .trim()
  }
} as const;

// Helper function to build accordion classes
export function buildAccordionClasses({
  variant = 'default',
  flush = false
}: {
  variant?: AccordionVariant;
  flush?: boolean;
} = {}) {
  const baseClasses = accordionStyles.base;
  const variantClasses = flush ? accordionStyles.flush : accordionStyles.variants[variant];

  return `${baseClasses} ${variantClasses}`.trim();
}

// Helper function to build accordion item classes
export function buildAccordionItemClasses({
  isOpen = false,
  arrowPosition = 'right'
}: {
  isOpen?: boolean;
  arrowPosition?: 'left' | 'right';
} = {}) {
  const headerClasses =
    `${accordionStyles.item.header} ${isOpen ? accordionStyles.item.headerActive : ''} ${arrowPosition === 'left' ? '[&>svg:last-child]:hidden' : ''}`.trim();

  return {
    item: accordionStyles.item.base,
    header: headerClasses,
    content: accordionStyles.item.content
  };
}
