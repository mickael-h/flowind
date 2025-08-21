export declare const inputStyles: {
    readonly base: string;
    readonly variants: {
        readonly default: "!border-gray-300 !bg-white !text-gray-900 focus:!border-primary-500 focus:!ring-primary-200 dark:!border-gray-600 dark:!bg-gray-700 dark:!text-white dark:focus:!border-primary-400 dark:focus:!ring-primary-900/20";
        readonly success: "!border-green-300 !bg-white !text-gray-900 focus:!border-green-500 focus:!ring-green-200 dark:!border-green-600 dark:!bg-gray-700 dark:!text-white dark:focus:!border-green-400 dark:focus:!ring-green-900/20";
        readonly error: "!border-red-300 !bg-white !text-gray-900 focus:!border-red-500 focus:!ring-red-200 dark:!border-red-600 dark:!bg-gray-700 dark:!text-white dark:focus:!border-red-400 dark:focus:!ring-red-900/20";
    };
    readonly sizes: {
        readonly xs: "!px-3 !py-2 !text-xs";
        readonly sm: "!px-3 !py-2.5 !text-sm";
        readonly md: "!px-4 !py-3 !text-base";
        readonly lg: "!px-5 !py-3.5 !text-lg";
        readonly xl: "!px-6 !py-4 !text-xl";
    };
    readonly label: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";
    readonly labelRequired: "text-error-600 dark:text-error-400";
    readonly helper: "mt-1 text-sm";
    readonly helperSuccess: "text-success-600 dark:text-success-400";
    readonly helperError: "text-error-600 dark:text-error-400";
    readonly helperDefault: "text-gray-500 dark:text-gray-400";
    readonly group: "flex";
    readonly groupInput: "flex-1";
    readonly groupAddon: "inline-flex items-center px-3 py-2 text-sm text-gray-500 bg-gray-50 border border-gray-300 border-l-0 rounded-r-lg";
    readonly container: "space-y-1";
};
export declare function buildInputClasses({ variant, size }: {
    variant?: keyof typeof inputStyles.variants;
    size?: keyof typeof inputStyles.sizes;
}): string;
