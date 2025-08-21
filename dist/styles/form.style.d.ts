export declare const formStyles: {
    readonly base: "space-y-6";
    readonly layout: {
        readonly vertical: "flex flex-col";
        readonly horizontal: "flex flex-wrap items-center";
        readonly inline: "flex items-center";
    };
    readonly spacing: {
        readonly sm: "gap-2";
        readonly md: "gap-4";
        readonly lg: "gap-6";
        readonly xl: "gap-8";
    };
    readonly label: "block text-sm font-medium text-gray-700 mb-1";
    readonly labelRequired: "text-error-600";
    readonly labelHorizontal: "block text-sm font-medium text-gray-700 w-32 flex-shrink-0";
    readonly inputWrapper: "flex-1";
    readonly inputWrapperHorizontal: "flex-1";
    readonly helper: "mt-1 text-sm text-gray-500";
    readonly helperError: "text-error-600";
    readonly helperSuccess: "text-success-600";
    readonly actions: "flex justify-end space-x-3 pt-4 border-t border-gray-200";
    readonly actionsLeft: "flex justify-start space-x-3 pt-4 border-t border-gray-200";
    readonly actionsCenter: "flex justify-center space-x-3 pt-4 border-t border-gray-200";
    readonly actionsBetween: "flex justify-between items-center pt-4 border-t border-gray-200";
    readonly section: "border-b border-gray-200 pb-6 mb-6";
    readonly sectionTitle: "text-lg font-semibold text-gray-900 mb-4";
    readonly sectionDescription: "text-sm text-gray-600 mb-4";
};
export declare function buildFormClasses({ layout, spacing }: {
    layout?: keyof typeof formStyles.layout;
    spacing?: keyof typeof formStyles.spacing;
}): string;
