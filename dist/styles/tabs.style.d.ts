export declare const tabsStyles: {
    readonly container: "w-full";
    readonly layout: {
        readonly top: "flex flex-col";
        readonly bottom: "flex flex-col";
        readonly left: "flex";
        readonly right: "flex";
    };
    readonly tabList: {
        readonly top: "flex items-center gap-2 border-b border-gray-200 dark:border-gray-700";
        readonly bottom: "flex items-center gap-2 border-t border-gray-200 dark:border-gray-700 order-last";
        readonly left: "flex flex-col gap-2 border-r border-gray-200 dark:border-gray-700";
        readonly right: "flex flex-col gap-2 border-l border-gray-200 dark:border-gray-700 order-last";
    };
    readonly panel: "p-4";
    readonly buttonBase: "px-3 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400";
    readonly buttonVariants: {
        readonly top: {
            readonly active: "text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400";
            readonly inactive: "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 border-b-2 border-transparent";
        };
        readonly bottom: {
            readonly active: "text-primary-600 dark:text-primary-400 border-t-2 border-primary-600 dark:border-primary-400";
            readonly inactive: "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 border-t-2 border-transparent";
        };
        readonly left: {
            readonly active: "text-primary-600 dark:text-primary-400 border-r-2 border-primary-600 dark:border-primary-400";
            readonly inactive: "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 border-r-2 border-transparent";
        };
        readonly right: {
            readonly active: "text-primary-600 dark:text-primary-400 border-l-2 border-primary-600 dark:border-primary-400";
            readonly inactive: "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 border-l-2 border-transparent";
        };
    };
};
export type TabsPosition = keyof typeof tabsStyles.layout;
export declare function buildTabsClasses({ position }: {
    position: TabsPosition;
}): {
    container: string;
    list: "flex items-center gap-2 border-b border-gray-200 dark:border-gray-700" | "flex items-center gap-2 border-t border-gray-200 dark:border-gray-700 order-last" | "flex flex-col gap-2 border-r border-gray-200 dark:border-gray-700" | "flex flex-col gap-2 border-l border-gray-200 dark:border-gray-700 order-last";
    panel: "p-4";
};
export declare function buildTabButtonClasses({ position, active }: {
    position: TabsPosition;
    active: boolean;
}): string;
