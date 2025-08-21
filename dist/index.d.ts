import { SvelteComponent, Snippet } from 'svelte';

// Style type imports
export * from '../../styles/button.style';
export * from '../../styles/card.style';
export * from '../../styles/input.style';
export * from '../../styles/badge.style';
export * from '../../styles/text.style';
export * from '../../styles/form.style';
export * from '../../styles/tabs.style';
export * from '../../styles/accordion.style';
export * from '../../styles/modal.style';
export * from '../../styles/table.style';

// Component Props Interfaces
export interface ButtonProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'success'
    | 'warning'
    | 'error'
    | 'outline'
    | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  children?: Snippet;
  class?: string;
  [key: string]: any;
}

export interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'flat';
  children?: Snippet;
  class?: string;
  [key: string]: any;
}

export interface InputProps {
  variant?: 'default' | 'success' | 'error';
  label?: string;
  required?: boolean;
  helpText?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  class?: string;
  [key: string]: any;
}

export interface BadgeProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  removable?: boolean;
  children?: Snippet;
  class?: string;
  onclick?: () => void;
  onremove?: () => void;
  [key: string]: any;
}

export interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'small' | 'caption';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  children?: Snippet;
  class?: string;
  [key: string]: any;
}

export interface FormProps {
  onsubmit?: (event: SubmitEvent) => void;
  children?: Snippet;
  class?: string;
  [key: string]: any;
}

export interface TabsProps {
  tabs: Array<{ label: string; content: Snippet }>;
  activeTab?: number;
  class?: string;
  [key: string]: any;
}

export interface AccordionProps {
  title?: string;
  children?: Snippet;
  class?: string;
  [key: string]: any;
}

export interface ModalProps {
  open?: boolean;
  title?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  position?: 'center' | 'top';
  body?: Snippet;
  footer?: Snippet;
  onclose?: () => void;
  class?: string;
  [key: string]: any;
}

export interface TableProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'flat';
  columns: Array<{
    key: string;
    label: string;
    sortable?: boolean;
    alignment?: 'left' | 'center' | 'right';
  }>;
  data: Array<Record<string, any>>;
  sortKey?: string;
  sortDirection?: 'asc' | 'desc';
  expandableRows?: boolean;
  onSort?: (key: string, direction: 'asc' | 'desc') => void;
  onRowExpand?: (row: any, expanded: boolean) => void;
  children?: Snippet<[{ row: any; expanded: boolean }]>;
  class?: string;
  [key: string]: any;
}

// Component Class Declarations
export declare class Button extends SvelteComponent<ButtonProps> {}
export declare class Card extends SvelteComponent<CardProps> {}
export declare class Input extends SvelteComponent<InputProps> {}
export declare class Badge extends SvelteComponent<BadgeProps> {}
export declare class Text extends SvelteComponent<TextProps> {}
export declare class Form extends SvelteComponent<FormProps> {}
export declare class Tabs extends SvelteComponent<TabsProps> {}
export declare class Accordion extends SvelteComponent<AccordionProps> {}
export declare class Modal extends SvelteComponent<ModalProps> {}
export declare class Table extends SvelteComponent<TableProps> {}
