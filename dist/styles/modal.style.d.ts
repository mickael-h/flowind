export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type ModalPosition = 'center' | 'top' | 'bottom' | 'left' | 'right';
export declare const modalStyles: {
    content: string;
    header: string;
    title: string;
    closeButton: string;
    closeIcon: string;
    body: string;
    footer: string;
    sizes: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
};
export declare function getFlowbitePlacement(position: ModalPosition): 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export declare function buildModalClasses({ size }?: {
    size?: ModalSize;
}): {
    content: string;
};
