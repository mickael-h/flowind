export declare const tableStyles: {
    readonly container: string;
    readonly variants: {
        readonly default: "!bg-transparent !border-0 !shadow-none !rounded-none";
        readonly elevated: "!bg-transparent !border-0 !shadow-none !rounded-none";
        readonly outlined: "!bg-transparent !border-0 !shadow-none !rounded-none";
        readonly flat: "!bg-transparent !border-0 !shadow-none !rounded-none";
    };
    readonly header: {
        readonly base: string;
        readonly cell: string;
        readonly sortable: string;
    };
    readonly body: {
        readonly row: string;
        readonly rowHover: string;
        readonly rowNested: string;
        readonly cell: string;
        readonly cellExpandable: string;
    };
    readonly icons: {
        readonly sort: string;
        readonly sortActive: string;
        readonly expand: string;
        readonly expandActive: string;
    };
    readonly content: {
        readonly headerLabel: string;
        readonly firstColumn: string;
        readonly iconSpacer: string;
        readonly rowIcon: string;
        readonly rowName: string;
        readonly otherColumn: string;
        readonly expandedContent: string;
        readonly expandedText: string;
        readonly textCenter: "text-center";
        readonly textRight: "text-right";
        readonly textLeft: "text-left";
        readonly firstColumnPadding: "!p-0";
        readonly rotate180: "rotate-180";
        readonly rotate90: "rotate-90";
    };
};
export type TableVariant = keyof typeof tableStyles.variants;
export interface TableClassOptions {
    variant?: TableVariant;
}
export interface SortIconOptions {
    isActive?: boolean;
    sortDirection?: 'asc' | 'desc';
}
export interface ExpandIconOptions {
    isExpanded?: boolean;
    hasExpandableContent?: boolean;
}
export interface CellAlignmentOptions {
    alignment?: 'left' | 'center' | 'right';
    isFirstColumn?: boolean;
}
export declare function buildTableClasses({ variant }?: TableClassOptions): {
    container: string;
    table: "!bg-transparent !border-0 !shadow-none !rounded-none";
};
export declare function buildSortIconClasses({ isActive, sortDirection }?: SortIconOptions): string;
export declare function buildExpandIconClasses({ isExpanded, hasExpandableContent }?: ExpandIconOptions): string;
export declare function buildCellClasses({ alignment, isFirstColumn }?: CellAlignmentOptions): string;
