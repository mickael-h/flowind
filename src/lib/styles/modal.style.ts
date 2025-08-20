export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type ModalPosition = 'center' | 'top' | 'bottom' | 'left' | 'right';

// Modal component styles - opinionated customizations on top of Flowbite
export const modalStyles = {
  // Content styling to override Flowbite Modal
  content: `
    !rounded-xl 
    !shadow-2xl 
    !border-0 
    !backdrop-blur-sm 
    !transition-all 
    !duration-500 
    hover:!scale-105
  `
    .replace(/\s+/g, ' ')
    .trim(),

  // Header styling
  header: 'flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700',
  title: 'text-xl font-semibold text-gray-900 dark:text-white',
  closeButton:
    'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 hover:!scale-110',
  closeIcon: 'h-5 w-5',

  // Body styling
  body: 'p-6',

  // Footer styling
  footer: 'flex items-center justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700',

  // Size overrides for more distinctive sizing
  sizes: {
    sm: '!max-w-md !w-full',
    md: '!max-w-lg !w-full',
    lg: '!max-w-2xl !w-full',
    xl: '!max-w-4xl !w-full',
    full: '!max-w-full !w-full !mx-4'
  }
};

export function getFlowbitePlacement(
  position: ModalPosition
):
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right' {
  switch (position) {
    case 'center':
      return 'center';
    case 'top':
      return 'top-center';
    case 'bottom':
      return 'bottom-center';
    case 'left':
      return 'center-left';
    case 'right':
      return 'center-right';
    default:
      return 'center';
  }
}

export function buildModalClasses({
  size = 'md'
}: {
  size?: ModalSize;
} = {}) {
  const sizeClasses = modalStyles.sizes[size];
  // Position classes are not used here as positioning is handled by Flowbite's placement prop

  return {
    content: `${modalStyles.content} ${sizeClasses}`.trim()
  };
}
