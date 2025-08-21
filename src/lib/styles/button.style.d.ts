export declare const buttonStyles: {
    readonly base: string;
    readonly variants: {
        readonly primary: "!bg-primary-600 !text-white hover:!bg-primary-700 focus:!ring-primary-300 dark:!bg-primary-500 dark:hover:!bg-primary-600";
        readonly secondary: "!bg-secondary-600 !text-white hover:!bg-secondary-700 focus:!ring-secondary-300 dark:!bg-secondary-500 dark:hover:!bg-secondary-600";
        readonly accent: "!bg-accent-600 !text-white hover:!bg-accent-700 focus:!ring-accent-300 dark:!bg-accent-500 dark:hover:!bg-accent-600";
        readonly success: "!bg-success-600 !text-white hover:!bg-success-700 focus:!ring-success-300 dark:!bg-success-500 dark:hover:!bg-success-600";
        readonly warning: "!bg-warning-600 !text-white hover:!bg-warning-700 focus:!ring-warning-300 dark:!bg-warning-500 dark:hover:!bg-warning-600";
        readonly error: "!bg-error-600 !text-white hover:!bg-error-700 focus:!ring-error-300 dark:!bg-error-500 dark:hover:!bg-error-600";
        readonly outline: "!border-2 !border-primary-600 !text-primary-600 hover:!bg-primary-50 focus:!ring-primary-300 dark:!border-primary-400 dark:!text-primary-400 dark:hover:!bg-primary-900/20";
        readonly ghost: "!bg-transparent !text-primary-600 hover:!bg-primary-50 focus:!ring-primary-300 dark:!text-primary-400 dark:hover:!bg-primary-900/20";
    };
    readonly sizeOverrides: {
        readonly xs: "!px-2 !py-1 !text-xs";
        readonly sm: "!px-3 !py-1.5 !text-sm";
        readonly md: "!px-4 !py-2 !text-base";
        readonly lg: "!px-6 !py-3 !text-lg";
        readonly xl: "!px-8 !py-4 !text-xl !min-h-[3.5rem]";
    };
    readonly layout: {
        readonly fullWidth: "!w-full";
    };
    readonly spinner: "mr-2 h-4 w-4 animate-spin";
    readonly spinnerCircle: "opacity-25";
    readonly spinnerPath: "opacity-75";
    readonly disabled: "!opacity-50 !cursor-not-allowed !pointer-events-none";
};
export declare function buildButtonClasses({ variant, size, fullWidth, disabled }: {
    variant?: keyof typeof buttonStyles.variants;
    size?: keyof typeof buttonStyles.sizeOverrides;
    fullWidth?: boolean;
    disabled?: boolean;
}): string;
