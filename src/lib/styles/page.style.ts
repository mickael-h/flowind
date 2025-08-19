// Page component styles using Tailwind utilities
export const pageStyles = {
  // Layout styles
  layout: {
    container: 'min-h-screen bg-gray-50 dark:bg-gray-900',
    maxWidth: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
  },

  // Header styles
  header: {
    container: 'border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm',
    content: 'flex items-center justify-between py-6',
    logo: 'flex items-center',
    title: 'font-display text-2xl font-bold text-gray-900 dark:text-white',
    nav: 'flex space-x-8',
    navLink:
      'hover:text-primary-600 dark:hover:text-primary-400 text-gray-600 dark:text-gray-300 transition-colors'
  },

  // Hero section styles
  hero: {
    container:
      'from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 bg-gradient-to-br py-20',
    content: 'text-center',
    title: 'font-display mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-6xl',
    description: 'mx-auto mb-8 max-w-3xl text-xl text-gray-600 dark:text-gray-300',
    actions: 'flex flex-col justify-center gap-4 sm:flex-row'
  },

  // Section styles
  section: {
    white: 'bg-white dark:bg-gray-800 py-20',
    gray: 'bg-gray-50 dark:bg-gray-900 py-20',
    header: 'mb-16 text-center',
    title: 'mb-4 text-3xl font-bold text-gray-900 dark:text-white',
    subtitle: 'mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300'
  },

  // Color palette styles
  colorPalette: {
    container: 'mb-16',
    title: 'mb-8 text-2xl font-semibold text-gray-900 dark:text-white',
    grid: 'grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6',
    colorItem: 'space-y-2',
    colorSwatch: 'h-16 rounded-lg shadow-sm',
    colorName: 'text-sm font-medium text-gray-900 dark:text-white',
    colorHex: 'text-xs text-gray-500 dark:text-gray-400'
  },

  // Typography styles
  typography: {
    container: 'mb-16',
    title: 'mb-8 text-2xl font-semibold text-gray-900 dark:text-white',
    examples: 'space-y-4',
    displayHeading: 'font-display text-4xl font-bold text-gray-900 dark:text-white',
    heading2: 'text-3xl font-semibold text-gray-900 dark:text-white',
    heading3: 'text-2xl font-medium text-gray-900 dark:text-white',
    bodyLarge: 'text-lg text-gray-700 dark:text-gray-300',
    body: 'text-base text-gray-700 dark:text-gray-300',
    meta: 'text-sm text-gray-500 dark:text-gray-400'
  },

  // Component showcase styles
  componentShowcase: {
    container: 'mb-16',
    title: 'mb-8 text-2xl font-semibold text-gray-900 dark:text-white',
    card: 'space-y-6',
    section: 'space-y-4',
    sectionTitle: 'mb-4 text-lg font-medium text-gray-900 dark:text-white',
    buttonGrid: 'flex flex-wrap gap-4',
    buttonGridSizes: 'flex flex-wrap items-center gap-4',
    cardGrid: 'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4',
    formGrid: 'grid grid-cols-1 gap-6 md:grid-cols-2',
    badgeGrid: 'flex flex-wrap gap-4',
    badgeGridSizes: 'flex flex-wrap items-center gap-4'
  },

  // Card content styles
  cardContent: {
    title: 'mb-2 text-lg font-semibold text-gray-900 dark:text-white',
    description: 'text-gray-600 dark:text-gray-300'
  },

  // Form styles
  form: {
    actions: 'flex gap-4'
  },

  // Footer styles
  footer: {
    container: 'bg-gray-900 dark:bg-gray-950 py-12 text-white',
    content: 'text-center',
    title: 'font-display mb-4 text-2xl font-bold',
    description: 'mb-6 text-gray-400 dark:text-gray-500',
    links: 'flex justify-center space-x-6',
    link: 'text-gray-400 dark:text-gray-500 transition-colors hover:text-white'
  }
} as const;
