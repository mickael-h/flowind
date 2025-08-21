export declare const badgeStyles: {
    readonly base: string;
    readonly variants: {
        readonly primary: "!bg-primary-50 !text-primary-700 hover:!bg-primary-100 focus:!ring-primary-300 dark:!bg-primary-900/20 dark:!text-primary-300 dark:hover:!bg-primary-800/30";
        readonly secondary: "!bg-secondary-50 !text-secondary-700 hover:!bg-secondary-100 focus:!ring-secondary-300 dark:!bg-secondary-900/20 dark:!text-secondary-300 dark:hover:!bg-secondary-800/30";
        readonly accent: "!bg-accent-50 !text-accent-700 hover:!bg-accent-100 focus:!ring-accent-300 dark:!bg-accent-900/20 dark:!text-accent-300 dark:hover:!bg-accent-800/30";
        readonly success: "!bg-success-50 !text-success-700 hover:!bg-success-100 focus:!ring-success-300 dark:!bg-success-900/20 dark:!text-success-300 dark:hover:!bg-success-800/30";
        readonly warning: "!bg-warning-50 !text-warning-700 hover:!bg-warning-100 focus:!ring-warning-300 dark:!bg-warning-900/20 dark:!text-warning-300 dark:hover:!bg-warning-800/30";
        readonly error: "!bg-error-50 !text-error-700 hover:!bg-error-100 focus:!ring-error-300 dark:!bg-error-900/20 dark:!text-error-300 dark:hover:!bg-error-800/30";
        readonly info: "!bg-primary-50 !text-primary-700 hover:!bg-primary-100 focus:!ring-primary-300 dark:!bg-primary-900/20 dark:!text-primary-300 dark:hover:!bg-primary-800/30";
    };
    readonly removeButton: string;
    readonly removeIcon: "h-3 w-3";
};
export declare function buildBadgeClasses(variant: keyof typeof badgeStyles.variants): string;
