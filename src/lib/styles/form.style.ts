// Form component styles using Tailwind utilities
export const formStyles = {
  // Base form classes
  base: 'space-y-6',

  // Layout styles
  layout: {
    vertical: 'flex flex-col',
    horizontal: 'flex flex-wrap items-center',
    inline: 'flex items-center'
  },

  // Spacing styles
  spacing: {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  },

  // Label styles
  label: 'block text-sm font-medium text-gray-700 mb-1',
  labelRequired: 'text-error-600',
  labelHorizontal: 'block text-sm font-medium text-gray-700 w-32 flex-shrink-0',

  // Input wrapper styles
  inputWrapper: 'flex-1',
  inputWrapperHorizontal: 'flex-1',

  // Helper text styles
  helper: 'mt-1 text-sm text-gray-500',
  helperError: 'text-error-600',
  helperSuccess: 'text-success-600',

  // Actions styles
  actions: 'flex justify-end space-x-3 pt-4 border-t border-gray-200',
  actionsLeft: 'flex justify-start space-x-3 pt-4 border-t border-gray-200',
  actionsCenter: 'flex justify-center space-x-3 pt-4 border-t border-gray-200',
  actionsBetween: 'flex justify-between items-center pt-4 border-t border-gray-200',

  // Section styles
  section: 'border-b border-gray-200 pb-6 mb-6',
  sectionTitle: 'text-lg font-semibold text-gray-900 mb-4',
  sectionDescription: 'text-sm text-gray-600 mb-4'
} as const;

// Helper function to build form classes
export function buildFormClasses({
  layout = 'vertical',
  spacing = 'md'
}: {
  layout?: keyof typeof formStyles.layout;
  spacing?: keyof typeof formStyles.spacing;
}) {
  return [formStyles.base, formStyles.layout[layout], formStyles.spacing[spacing]].join(' ');
}
