export declare const pageStyles: {
    readonly layout: {
        readonly container: "min-h-screen bg-gray-50 dark:bg-gray-900";
        readonly maxWidth: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
    };
    readonly header: {
        readonly container: "border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm";
        readonly content: "flex items-center justify-between py-6";
        readonly logo: "flex items-center";
        readonly title: "font-display text-2xl font-bold text-gray-900 dark:text-white";
        readonly nav: "flex space-x-8";
        readonly navLink: "hover:text-primary-600 dark:hover:text-primary-400 text-gray-600 dark:text-gray-300 transition-colors";
    };
    readonly hero: {
        readonly container: "from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 bg-gradient-to-br py-20";
        readonly content: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center";
        readonly title: "font-display mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-6xl";
        readonly description: "mx-auto mb-8 max-w-3xl text-xl text-gray-600 dark:text-gray-300";
        readonly actions: "flex flex-col justify-center gap-4 sm:flex-row mt-12";
    };
    readonly section: {
        readonly white: "bg-white dark:bg-gray-800 py-20";
        readonly gray: "bg-gray-50 dark:bg-gray-900 py-20";
        readonly header: "mb-16 text-center";
        readonly title: "mb-4 text-3xl font-bold text-gray-900 dark:text-white";
        readonly subtitle: "mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300";
    };
    readonly colorPalette: {
        readonly container: "mb-16";
        readonly title: "mb-8 text-2xl font-semibold text-gray-900 dark:text-white";
        readonly grid: "grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6";
        readonly colorItem: "space-y-2";
        readonly colorSwatch: "h-16 rounded-lg shadow-sm";
        readonly colorSwatchPrimary: "h-16 rounded-lg shadow-sm bg-primary-500";
        readonly colorSwatchSecondary: "h-16 rounded-lg shadow-sm bg-secondary-500";
        readonly colorSwatchAccent: "h-16 rounded-lg shadow-sm bg-accent-500";
        readonly colorSwatchSuccess: "h-16 rounded-lg shadow-sm bg-success-500";
        readonly colorSwatchWarning: "h-16 rounded-lg shadow-sm bg-warning-500";
        readonly colorSwatchError: "h-16 rounded-lg shadow-sm bg-error-500";
        readonly colorSwatchPrimaryDark: "h-16 rounded-lg shadow-sm bg-primary-400";
        readonly colorSwatchSecondaryDark: "h-16 rounded-lg shadow-sm bg-secondary-400";
        readonly colorSwatchAccentDark: "h-16 rounded-lg shadow-sm bg-accent-400";
        readonly colorSwatchSuccessDark: "h-16 rounded-lg shadow-sm bg-success-400";
        readonly colorSwatchWarningDark: "h-16 rounded-lg shadow-sm bg-warning-400";
        readonly colorSwatchErrorDark: "h-16 rounded-lg shadow-sm bg-error-400";
        readonly colorName: "text-sm font-medium text-gray-900 dark:text-white";
        readonly colorHex: "text-xs text-gray-500 dark:text-gray-400";
    };
    readonly typography: {
        readonly container: "mb-16";
        readonly title: "mb-8 text-2xl font-semibold text-gray-900 dark:text-white";
        readonly examples: "space-y-4";
        readonly displayHeading: "font-display text-4xl font-bold text-gray-900 dark:text-white";
        readonly heading2: "text-3xl font-semibold text-gray-900 dark:text-white";
        readonly heading3: "text-2xl font-medium text-gray-900 dark:text-white";
        readonly bodyLarge: "text-lg text-gray-700 dark:text-gray-300";
        readonly body: "text-base text-gray-700 dark:text-gray-300";
        readonly meta: "text-sm text-gray-500 dark:text-gray-400";
    };
    readonly componentShowcase: {
        readonly container: "mb-16";
        readonly title: "mb-8 text-2xl font-semibold text-gray-900 dark:text-white";
        readonly card: "space-y-6";
        readonly section: "space-y-4";
        readonly sectionTitle: "mb-4 text-lg font-medium text-gray-900 dark:text-white";
        readonly buttonGrid: "flex flex-wrap gap-4";
        readonly buttonGridSizes: "flex flex-wrap items-center gap-4";
        readonly cardGrid: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4";
        readonly formGrid: "grid grid-cols-1 gap-6 md:grid-cols-2";
        readonly badgeGrid: "flex flex-wrap gap-4";
        readonly badgeGridSizes: "flex flex-wrap items-center gap-4";
    };
    readonly cardContent: {
        readonly title: "mb-2 text-lg font-semibold text-gray-900 dark:text-white";
        readonly description: "text-gray-600 dark:text-gray-300";
    };
    readonly form: {
        readonly actions: "flex gap-4";
    };
    readonly modalShowcase: {
        readonly content: "space-y-4";
        readonly warningBox: "flex items-center gap-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-700";
        readonly warningIcon: "h-2 w-2 rounded-full bg-yellow-500";
        readonly infoBox: "rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20";
        readonly footer: "flex justify-end gap-3";
        readonly grid: "grid grid-cols-2 gap-4";
        readonly gridItem: "space-y-2";
        readonly list: "space-y-1 text-sm text-gray-600 dark:text-gray-400";
        readonly buttonContainer: "flex flex-wrap gap-3";
        readonly card: "mb-8 last:mb-0";
    };
    readonly tabsShowcase: {
        readonly content: "space-y-4";
        readonly contentBox: "rounded-lg bg-gray-50 p-4 dark:bg-gray-700";
        readonly list: "list-inside list-disc space-y-2";
        readonly grid: "grid grid-cols-2 gap-4";
        readonly primaryBox: "rounded bg-primary-50 p-3 dark:bg-primary-900/20";
        readonly secondaryBox: "rounded bg-secondary-50 p-3 dark:bg-secondary-900/20";
    };
    readonly footer: {
        readonly container: "bg-gray-900 dark:bg-gray-950 py-12 text-white";
        readonly content: "text-center";
        readonly title: "font-display mb-4 text-2xl font-bold";
        readonly description: "mb-6 text-gray-400 dark:text-gray-500";
        readonly links: "flex justify-center space-x-6";
        readonly link: "text-gray-400 dark:text-gray-500 transition-colors hover:text-white";
    };
};
