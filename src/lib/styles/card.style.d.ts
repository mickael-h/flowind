export declare const cardStyles: {
    readonly base: string;
    readonly variants: {
        readonly default: "!bg-white dark:!bg-gray-800 !border !border-gray-200 dark:!border-gray-700 hover:!shadow-md";
        readonly elevated: "!bg-white dark:!bg-gray-800 !shadow-lg hover:!shadow-xl";
        readonly outlined: "!bg-transparent !border-2 !border-primary-300 dark:!border-primary-600 hover:!border-primary-400 dark:hover:!border-primary-500";
        readonly flat: "!bg-primary-50 dark:!bg-primary-900/20 !border-0 hover:!bg-primary-100 dark:hover:!bg-primary-900/40";
    };
    readonly padding: {
        readonly none: "!p-0";
        readonly sm: "!p-4";
        readonly md: "!p-6";
        readonly lg: "!p-8";
        readonly xl: "!p-10";
    };
    readonly interactive: "cursor-pointer hover:!scale-105";
    readonly hoverEffects: "hover:!shadow-lg hover:!-translate-y-1";
};
export declare function buildCardClasses({ variant, padding, interactive, hover }: {
    variant?: keyof typeof cardStyles.variants;
    padding?: keyof typeof cardStyles.padding;
    interactive?: boolean;
    hover?: boolean;
}): string;
