export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type ModalPosition = 'center' | 'top' | 'bottom' | 'left' | 'right';

// Modal component styles - modern and consistent with design system
export const modalStyles = {
  // Content styling for native modal
  content: `
        rounded-xl
    shadow-2xl
    border-0 
    backdrop-blur-sm 
    transition-all 
    duration-500 
    hover:scale-105
    bg-white 
    dark:bg-gray-800
  `
    .replace(/\s+/g, ' ')
    .trim(),

  // Header styling
  header: 'flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700',
  title: 'text-xl font-semibold text-gray-900 dark:text-white',
  closeButton:
    'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 hover:scale-110',
  closeIcon: 'h-5 w-5',

  // Body styling
  body: 'p-6',

  // Footer styling
  footer: 'flex items-center justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700',

  // Backdrop styling
  backdrop:
    'fixed inset-0 z-40 flex items-center justify-center bg-black/30 p-4 backdrop-blur-[1px]',

  // Size overrides for more distinctive sizing
  sizes: {
    sm: 'max-w-md w-full',
    md: 'max-w-lg w-full',
    lg: 'max-w-2xl w-full',
    xl: 'max-w-4xl w-full',
    full: 'max-w-full w-full mx-4'
  }
};

export function buildModalClasses({
  size = 'md'
}: {
  size?: ModalSize;
} = {}) {
  const sizeClasses = modalStyles.sizes[size];
  // Position classes are handled by our custom positioning system

  return {
    content: `${modalStyles.content} ${sizeClasses}`.trim()
  };
}

// Helper function to get position classes
export function getPositionClasses(position: ModalPosition): string {
  switch (position) {
    case 'center':
      return 'm-auto';
    case 'top':
      return 'mt-12 mb-auto';
    case 'bottom':
      return 'mt-auto mb-12';
    case 'left':
      return 'ml-12 mr-auto';
    case 'right':
      return 'ml-auto mr-12';
    default:
      return 'm-auto';
  }
}

// Helper function to get fly transition based on position
export function getFlyTransition(position: ModalPosition) {
  switch (position) {
    case 'center':
      return { duration: 300, start: 0.95, opacity: 0 };
    case 'top':
      return { duration: 300, y: -50, opacity: 0 };
    case 'bottom':
      return { duration: 300, y: 50, opacity: 0 };
    case 'left':
      return { duration: 300, x: -50, opacity: 0 };
    case 'right':
      return { duration: 300, x: 50, opacity: 0 };
    default:
      return { duration: 300, start: 0.95, opacity: 0 };
  }
}
