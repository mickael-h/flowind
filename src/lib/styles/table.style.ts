// Table component styles - modern and consistent with design system
export const tableStyles = {
  // Base container styles
  container: `
    w-full 
    overflow-hidden 
    rounded-xl 
    shadow-sm 
    border 
    border-gray-200 
    dark:border-gray-700 
    bg-white 
    dark:bg-gray-800
  `
    .replace(/\s+/g, ' ')
    .trim(),

  // Table variants for different use cases
  variants: {
    default: '!bg-transparent !border-0 !shadow-none !rounded-none',
    elevated: '!bg-transparent !border-0 !shadow-none !rounded-none',
    outlined: '!bg-transparent !border-0 !shadow-none !rounded-none',
    flat: '!bg-transparent !border-0 !shadow-none !rounded-none'
  },

  // Header styles
  header: {
    base: `
      bg-gray-50 
      dark:bg-gray-700/50 
      border-b 
      border-gray-200 
      dark:border-gray-600
    `
      .replace(/\s+/g, ' ')
      .trim(),

    cell: `
      px-6 
      py-4 
      text-xs 
      font-semibold 
      text-gray-700 
      dark:text-gray-300 
      uppercase 
      tracking-wider
    `
      .replace(/\s+/g, ' ')
      .trim(),

    sortable: `
      cursor-pointer 
      hover:bg-gray-100 
      dark:hover:bg-gray-600 
      focus:outline-none 
      focus:ring-2 
      focus:ring-primary-500 
      focus:ring-inset
      bg-transparent
      border-0
      text-left
      w-full
      h-full
    `
      .replace(/\s+/g, ' ')
      .trim()
  },

  // Row styles
  body: {
    row: `
      border-b
      border-gray-100
      dark:border-gray-700
      last:border-b-0
    `
      .replace(/\s+/g, ' ')
      .trim(),

    rowHover: `
      hover:bg-gray-50 
      dark:hover:bg-gray-700/50
    `
      .replace(/\s+/g, ' ')
      .trim(),

    rowNested: `
      bg-gray-25 
      dark:bg-gray-800/30
    `
      .replace(/\s+/g, ' ')
      .trim(),

    cell: `
      px-6 
      py-4 
      text-sm 
      text-gray-900 
      dark:text-gray-100
    `
      .replace(/\s+/g, ' ')
      .trim(),

    cellExpandable: `
      cursor-pointer 
      hover:bg-gray-50 
      dark:hover:bg-gray-700/50
      focus:outline-none 
      focus:ring-2 
      focus:ring-primary-500 
      focus:ring-inset
    `
      .replace(/\s+/g, ' ')
      .trim()
  },

  // Icon styles
  icons: {
    sort: `
      ml-1.5 
      h-4 
      w-4 
      text-gray-400
    `
      .replace(/\s+/g, ' ')
      .trim(),

    sortActive: `
      text-primary-600 
      dark:text-primary-400
    `
      .replace(/\s+/g, ' ')
      .trim(),

    expand: `
      h-4 
      w-4 
      text-gray-400 
      dark:text-gray-500
      transition-transform 
      duration-200 
      ease-in-out
    `
      .replace(/\s+/g, ' ')
      .trim(),

    expandActive: `
      text-gray-600 
      dark:text-gray-300
    `
      .replace(/\s+/g, ' ')
      .trim()
  },

  // Content styles
  content: {
    headerLabel: `
      flex 
      items-center
    `
      .replace(/\s+/g, ' ')
      .trim(),

    firstColumn: `
      flex 
      h-full 
      w-full 
      items-center 
      gap-3 
      py-4
      bg-transparent
      border-0
      text-left
      cursor-pointer
    `
      .replace(/\s+/g, ' ')
      .trim(),

    iconSpacer: `
      h-4 
      w-4
    `
      .replace(/\s+/g, ' ')
      .trim(),

    rowIcon: `
      text-base 
      leading-none
      transition-all 
      duration-200 
      ease-in-out
    `
      .replace(/\s+/g, ' ')
      .trim(),

    rowName: `
      font-medium
    `
      .replace(/\s+/g, ' ')
      .trim(),

    otherColumn: `
      px-6 
      py-4
    `
      .replace(/\s+/g, ' ')
      .trim(),

    expandedContent: `
      border-t 
      border-gray-100 
      bg-gray-50 
      dark:border-gray-600 
      dark:bg-gray-700/30
      overflow-hidden
      transition-all
      duration-300
      ease-in-out
    `
      .replace(/\s+/g, ' ')
      .trim(),

    expandedText: `
      text-sm 
      leading-relaxed 
      text-gray-600 
      dark:text-gray-300
    `
      .replace(/\s+/g, ' ')
      .trim()
  }
} as const;

export type TableVariant = keyof typeof tableStyles.variants;

export function buildTableClasses({
  variant = 'default'
}: {
  variant?: TableVariant;
} = {}) {
  return {
    container: tableStyles.container,
    table: tableStyles.variants[variant]
  };
}
