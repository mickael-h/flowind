export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'bodyLarge' | 'bodySmall' | 'caption' | 'overline' | 'code';
export type TextColor = 'primary' | 'secondary' | 'muted' | 'accent' | 'success' | 'warning' | 'error' | 'inherit';
export type TextAlign = 'left' | 'center' | 'right' | 'justify';
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export declare const textStyles: {
    base: string;
    variants: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        body: string;
        bodyLarge: string;
        bodySmall: string;
        caption: string;
        overline: string;
        code: string;
    };
    colors: {
        primary: string;
        secondary: string;
        muted: string;
        accent: string;
        success: string;
        warning: string;
        error: string;
        inherit: string;
    };
    align: {
        left: string;
        center: string;
        right: string;
        justify: string;
    };
    weights: {
        light: string;
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
    };
    modifiers: {
        truncate: string;
        italic: string;
        underline: string;
        lineThrough: string;
        noWrap: string;
    };
};
export declare function buildTextClasses({ variant, color, align, weight, truncate, italic, underline, lineThrough, noWrap }?: {
    variant?: TextVariant;
    color?: TextColor;
    align?: TextAlign;
    weight?: TextWeight;
    truncate?: boolean;
    italic?: boolean;
    underline?: boolean;
    lineThrough?: boolean;
    noWrap?: boolean;
}): string;
export declare const variantToElement: {
    readonly h1: "h1";
    readonly h2: "h2";
    readonly h3: "h3";
    readonly h4: "h4";
    readonly h5: "h5";
    readonly h6: "h6";
    readonly body: "p";
    readonly bodyLarge: "p";
    readonly bodySmall: "p";
    readonly caption: "span";
    readonly overline: "span";
    readonly code: "code";
};
