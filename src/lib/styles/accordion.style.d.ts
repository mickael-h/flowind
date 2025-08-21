export type AccordionVariant = 'default' | 'flush' | 'bordered';
export declare const accordionStyles: {
    readonly base: string;
    readonly flush: string;
    readonly item: {
        readonly base: string;
        readonly header: string;
        readonly headerActive: string;
        readonly content: string;
    };
    readonly content: {
        readonly arrow: string;
        readonly title: string;
    };
    readonly variants: {
        readonly default: "";
        readonly flush: string;
        readonly bordered: string;
    };
};
export declare function buildAccordionClasses({ variant, flush }?: {
    variant?: AccordionVariant;
    flush?: boolean;
}): string;
export declare function buildAccordionItemClasses({ isOpen, arrowPosition }?: {
    isOpen?: boolean;
    arrowPosition?: 'left' | 'right';
}): {
    item: string;
    header: string;
    content: string;
};
