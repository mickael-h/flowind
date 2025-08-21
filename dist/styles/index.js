const l = {
  // Base styling to add to Flowbite Button
  base: `
    font-semibold 
    tracking-wide 
    shadow-sm 
    transition-all 
    duration-300 
    transform 
    hover:scale-105 
    hover:shadow-md 
    active:scale-95 
    focus:ring-4 
    focus:ring-offset-2
    cursor-pointer
  `.replace(/\s+/g, " ").trim(),
  // Variant-specific overrides for colors
  variants: {
    primary: "!bg-primary-600 !text-white hover:!bg-primary-700 focus:!ring-primary-300 dark:!bg-primary-500 dark:hover:!bg-primary-600",
    secondary: "!bg-secondary-600 !text-white hover:!bg-secondary-700 focus:!ring-secondary-300 dark:!bg-secondary-500 dark:hover:!bg-secondary-600",
    accent: "!bg-accent-600 !text-white hover:!bg-accent-700 focus:!ring-accent-300 dark:!bg-accent-500 dark:hover:!bg-accent-600",
    success: "!bg-success-600 !text-white hover:!bg-success-700 focus:!ring-success-300 dark:!bg-success-500 dark:hover:!bg-success-600",
    warning: "!bg-warning-600 !text-white hover:!bg-warning-700 focus:!ring-warning-300 dark:!bg-warning-500 dark:hover:!bg-warning-600",
    error: "!bg-error-600 !text-white hover:!bg-error-700 focus:!ring-error-300 dark:!bg-error-500 dark:hover:!bg-error-600",
    outline: "!border-2 !border-primary-600 !text-primary-600 hover:!bg-primary-50 focus:!ring-primary-300 dark:!border-primary-400 dark:!text-primary-400 dark:hover:!bg-primary-900/20",
    ghost: "!bg-transparent !text-primary-600 hover:!bg-primary-50 focus:!ring-primary-300 dark:!text-primary-400 dark:hover:!bg-primary-900/20"
  },
  // Size overrides to fix Flowbite's sizing issues
  sizeOverrides: {
    xs: "!px-2 !py-1 !text-xs",
    sm: "!px-3 !py-1.5 !text-sm",
    md: "!px-4 !py-2 !text-base",
    lg: "!px-6 !py-3 !text-lg",
    xl: "!px-8 !py-4 !text-xl !min-h-[3.5rem]"
  },
  // Layout styles
  layout: {
    fullWidth: "!w-full"
  },
  // Loading spinner styles
  spinner: "mr-2 h-4 w-4 animate-spin",
  spinnerCircle: "opacity-25",
  spinnerPath: "opacity-75",
  // Disabled state styles
  disabled: "!opacity-50 !cursor-not-allowed !pointer-events-none"
};
function k({
  variant: r = "primary",
  size: e = "md",
  fullWidth: t = !1,
  disabled: a = !1
}) {
  return [
    l.base,
    l.variants[r],
    l.sizeOverrides[e],
    t ? l.layout.fullWidth : "",
    a ? l.disabled : ""
  ].filter(Boolean).join(" ");
}
const c = {
  // Base styling to add to Flowbite Card
  base: `
    transition-all 
    duration-300 
    border-0 
    shadow-sm 
    rounded-xl
  `.replace(/\s+/g, " ").trim(),
  // Variant-specific overrides for styles
  variants: {
    default: "!bg-white dark:!bg-gray-800 !border !border-gray-200 dark:!border-gray-700 hover:!shadow-md",
    elevated: "!bg-white dark:!bg-gray-800 !shadow-lg hover:!shadow-xl",
    outlined: "!bg-transparent !border-2 !border-primary-300 dark:!border-primary-600 hover:!border-primary-400 dark:hover:!border-primary-500",
    flat: "!bg-primary-50 dark:!bg-primary-900/20 !border-0 hover:!bg-primary-100 dark:hover:!bg-primary-900/40"
  },
  // Padding overrides
  padding: {
    none: "!p-0",
    sm: "!p-4",
    md: "!p-6",
    lg: "!p-8",
    xl: "!p-10"
  },
  // Interactive and hover effects
  interactive: "cursor-pointer hover:!scale-105",
  hoverEffects: "hover:!shadow-lg hover:!-translate-y-1"
};
function v({
  variant: r = "default",
  padding: e = "md",
  interactive: t = !1,
  hover: a = !1
}) {
  return [
    c.base,
    c.variants[r],
    c.padding[e],
    t ? c.interactive : "",
    a ? c.hoverEffects : ""
  ].filter(Boolean).join(" ");
}
const p = {
  // Base styling that applies to all badges
  base: `
    font-semibold 
    tracking-wide 
    border-2 
    border-transparent
    shadow-md 
    px-3 
    py-1.5 
    text-sm 
    rounded-full 
    transition-all 
    duration-200 
    hover:shadow-lg 
    hover:-translate-y-0.5
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2
  `.replace(/\s+/g, " ").trim(),
  // Variant-specific colors to override Flowbite's defaults
  variants: {
    primary: "!bg-primary-50 !text-primary-700 hover:!bg-primary-100 focus:!ring-primary-300 dark:!bg-primary-900/20 dark:!text-primary-300 dark:hover:!bg-primary-800/30",
    secondary: "!bg-secondary-50 !text-secondary-700 hover:!bg-secondary-100 focus:!ring-secondary-300 dark:!bg-secondary-900/20 dark:!text-secondary-300 dark:hover:!bg-secondary-800/30",
    accent: "!bg-accent-50 !text-accent-700 hover:!bg-accent-100 focus:!ring-accent-300 dark:!bg-accent-900/20 dark:!text-accent-300 dark:hover:!bg-accent-800/30",
    success: "!bg-success-50 !text-success-700 hover:!bg-success-100 focus:!ring-success-300 dark:!bg-success-900/20 dark:!text-success-300 dark:hover:!bg-success-800/30",
    warning: "!bg-warning-50 !text-warning-700 hover:!bg-warning-100 focus:!ring-warning-300 dark:!bg-warning-900/20 dark:!text-warning-300 dark:hover:!bg-warning-800/30",
    error: "!bg-error-50 !text-error-700 hover:!bg-error-100 focus:!ring-error-300 dark:!bg-error-900/20 dark:!text-error-300 dark:hover:!bg-error-800/30",
    info: "!bg-primary-50 !text-primary-700 hover:!bg-primary-100 focus:!ring-primary-300 dark:!bg-primary-900/20 dark:!text-primary-300 dark:hover:!bg-primary-800/30"
  },
  // Remove button styling
  removeButton: `
    ml-2 
    -mr-1 
    h-4 
    w-4 
    rounded-full 
    inline-flex 
    items-center 
    justify-center 
    text-current 
    text-xs 
    font-bold 
    hover:bg-current 
    hover:bg-opacity-20 
    focus:outline-none 
    focus:ring-2 
    focus:ring-current 
    focus:ring-offset-1 
    transition-all 
    duration-150
    cursor-pointer
  `.replace(/\s+/g, " ").trim(),
  // Remove icon styling
  removeIcon: "h-3 w-3"
};
function w(r) {
  return `${p.base} ${p.variants[r]}`;
}
const b = {
  // Base styling to add to Flowbite Input
  base: `
    !transition-all 
    !duration-300 
    !border-2 
    !rounded-xl 
    !shadow-sm 
    focus:!shadow-md 
    focus:!ring-4 
    focus:!ring-offset-1
  `.replace(/\s+/g, " ").trim(),
  // Variant-specific overrides for colors
  variants: {
    default: "!border-gray-300 !bg-white !text-gray-900 focus:!border-primary-500 focus:!ring-primary-200 dark:!border-gray-600 dark:!bg-gray-700 dark:!text-white dark:focus:!border-primary-400 dark:focus:!ring-primary-900/20",
    success: "!border-green-300 !bg-white !text-gray-900 focus:!border-green-500 focus:!ring-green-200 dark:!border-green-600 dark:!bg-gray-700 dark:!text-white dark:focus:!border-green-400 dark:focus:!ring-green-900/20",
    error: "!border-red-300 !bg-white !text-gray-900 focus:!border-red-500 focus:!ring-red-200 dark:!border-red-600 dark:!bg-gray-700 dark:!text-white dark:focus:!border-red-400 dark:focus:!ring-red-900/20"
  },
  // Size overrides
  sizes: {
    xs: "!px-3 !py-2 !text-xs",
    sm: "!px-3 !py-2.5 !text-sm",
    md: "!px-4 !py-3 !text-base",
    lg: "!px-5 !py-3.5 !text-lg",
    xl: "!px-6 !py-4 !text-xl"
  },
  // Label styles
  label: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
  labelRequired: "text-error-600 dark:text-error-400",
  // Helper text styles
  helper: "mt-1 text-sm",
  helperSuccess: "text-success-600 dark:text-success-400",
  helperError: "text-error-600 dark:text-error-400",
  helperDefault: "text-gray-500 dark:text-gray-400",
  // Input group styles
  group: "flex",
  groupInput: "flex-1",
  groupAddon: "inline-flex items-center px-3 py-2 text-sm text-gray-500 bg-gray-50 border border-gray-300 border-l-0 rounded-r-lg",
  // Container styles
  container: "space-y-1"
};
function C({
  variant: r = "default",
  size: e = "md"
}) {
  return [b.base, b.variants[r], b.sizes[e]].filter(Boolean).join(" ");
}
const u = {
  // Base form classes
  base: "space-y-6",
  // Layout styles
  layout: {
    vertical: "flex flex-col",
    horizontal: "flex flex-wrap items-center",
    inline: "flex items-center"
  },
  // Spacing styles
  spacing: {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8"
  },
  // Label styles
  label: "block text-sm font-medium text-gray-700 mb-1",
  labelRequired: "text-error-600",
  labelHorizontal: "block text-sm font-medium text-gray-700 w-32 flex-shrink-0",
  // Input wrapper styles
  inputWrapper: "flex-1",
  inputWrapperHorizontal: "flex-1",
  // Helper text styles
  helper: "mt-1 text-sm text-gray-500",
  helperError: "text-error-600",
  helperSuccess: "text-success-600",
  // Actions styles
  actions: "flex justify-end space-x-3 pt-4 border-t border-gray-200",
  actionsLeft: "flex justify-start space-x-3 pt-4 border-t border-gray-200",
  actionsCenter: "flex justify-center space-x-3 pt-4 border-t border-gray-200",
  actionsBetween: "flex justify-between items-center pt-4 border-t border-gray-200",
  // Section styles
  section: "border-b border-gray-200 pb-6 mb-6",
  sectionTitle: "text-lg font-semibold text-gray-900 mb-4",
  sectionDescription: "text-sm text-gray-600 mb-4"
};
function $({
  layout: r = "vertical",
  spacing: e = "md"
}) {
  return [u.base, u.layout[r], u.spacing[e]].join(" ");
}
const n = {
  // Base text styling
  base: "leading-relaxed",
  // Variant styles - semantic typography scale
  variants: {
    h1: "text-5xl font-bold tracking-tight",
    h2: "text-4xl font-bold tracking-tight",
    h3: "text-3xl font-bold tracking-tight",
    h4: "text-2xl font-semibold tracking-tight",
    h5: "text-xl font-semibold tracking-tight",
    h6: "text-lg font-semibold tracking-tight",
    body: "text-base font-normal",
    bodyLarge: "text-lg font-normal",
    bodySmall: "text-sm font-normal",
    caption: "text-xs font-medium tracking-wide",
    overline: "text-xs font-semibold tracking-wider uppercase",
    code: "text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-medium"
  },
  // Color variants
  colors: {
    primary: "text-gray-900 dark:text-white",
    secondary: "text-gray-600 dark:text-gray-400",
    muted: "text-gray-500 dark:text-gray-500",
    accent: "text-primary-600 dark:text-primary-400",
    success: "text-green-600 dark:text-green-400",
    warning: "text-orange-600 dark:text-orange-400",
    error: "text-red-600 dark:text-red-400",
    inherit: ""
  },
  // Text alignment
  align: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify"
  },
  // Font weights
  weights: {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold"
  },
  // Utility modifiers
  modifiers: {
    truncate: "truncate",
    italic: "italic",
    underline: "underline",
    lineThrough: "line-through",
    noWrap: "whitespace-nowrap"
  }
};
function j({
  variant: r = "body",
  color: e = "primary",
  align: t,
  weight: a,
  truncate: g = !1,
  italic: y = !1,
  underline: m = !1,
  lineThrough: f = !1,
  noWrap: h = !1
} = {}) {
  const s = [n.base, n.variants[r], n.colors[e]];
  return t && s.push(n.align[t]), a && s.push(n.weights[a]), g && s.push(n.modifiers.truncate), y && s.push(n.modifiers.italic), m && s.push(n.modifiers.underline), f && s.push(n.modifiers.lineThrough), h && s.push(n.modifiers.noWrap), s.filter(Boolean).join(" ");
}
const S = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "p",
  bodyLarge: "p",
  bodySmall: "p",
  caption: "span",
  overline: "span",
  code: "code"
}, d = {
  container: "w-full",
  layout: {
    top: "flex flex-col",
    bottom: "flex flex-col",
    left: "flex",
    right: "flex"
  },
  tabList: {
    top: "flex items-center gap-2 border-b border-gray-200 dark:border-gray-700",
    bottom: "flex items-center gap-2 border-t border-gray-200 dark:border-gray-700 order-last",
    left: "flex flex-col gap-2 border-r border-gray-200 dark:border-gray-700",
    right: "flex flex-col gap-2 border-l border-gray-200 dark:border-gray-700 order-last"
  },
  panel: "p-4",
  buttonBase: "px-3 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400",
  buttonVariants: {
    // Active/inactive appearance adjusted per position for borders
    top: {
      active: "text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400",
      inactive: "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 border-b-2 border-transparent"
    },
    bottom: {
      active: "text-primary-600 dark:text-primary-400 border-t-2 border-primary-600 dark:border-primary-400",
      inactive: "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 border-t-2 border-transparent"
    },
    left: {
      active: "text-primary-600 dark:text-primary-400 border-r-2 border-primary-600 dark:border-primary-400",
      inactive: "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 border-r-2 border-transparent"
    },
    right: {
      active: "text-primary-600 dark:text-primary-400 border-l-2 border-primary-600 dark:border-primary-400",
      inactive: "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 border-l-2 border-transparent"
    }
  }
};
function B({ position: r }) {
  return {
    container: [d.container, d.layout[r]].join(" "),
    list: d.tabList[r],
    panel: d.panel
  };
}
function z({
  position: r,
  active: e
}) {
  const t = d.buttonVariants[r], a = e ? "cursor-default" : "cursor-pointer";
  return [d.buttonBase, a, e ? t.active : t.inactive].join(" ");
}
const i = {
  // Base accordion container styles
  base: `
    border border-gray-200 dark:border-gray-700
    rounded-lg
    overflow-hidden
    shadow-sm
    transition-all duration-200
  `.replace(/\s+/g, " ").trim(),
  // Flush variant (no borders/background)
  flush: `
    border-0
    shadow-none
    rounded-none
    bg-transparent
  `.replace(/\s+/g, " ").trim(),
  // Individual accordion item styles
  item: {
    // Base item container
    base: `
      border-b border-gray-200 dark:border-gray-700
      last:border-b-0
    `.replace(/\s+/g, " ").trim(),
    // Item header/trigger button
    header: `
      w-full
      px-5 py-4
      text-left
      font-medium text-gray-900 dark:text-white
      bg-gray-50 dark:bg-gray-800
      hover:bg-gray-100 dark:hover:bg-gray-700
      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
      transition-colors duration-200
      flex items-center justify-between
      group
    `.replace(/\s+/g, " ").trim(),
    // Item header when active/open
    headerActive: `
      bg-primary-50 dark:bg-primary-900/20
      text-primary-700 dark:text-primary-300
      border-b border-primary-200 dark:border-primary-700
    `.replace(/\s+/g, " ").trim(),
    // Item content container
    content: `
      px-5 py-4
      bg-white dark:bg-gray-900
      text-gray-700 dark:text-gray-300
      border-b border-gray-200 dark:border-gray-700
      last:border-b-0
    `.replace(/\s+/g, " ").trim()
  },
  // Content styles
  content: {
    arrow: `
      mr-3 
      h-3 
      w-3 
      text-gray-900 
      transition-transform 
      duration-200 
      dark:text-white
    `.replace(/\s+/g, " ").trim(),
    title: `
      flex-1 
      text-left
    `.replace(/\s+/g, " ").trim()
  },
  // Variant styles
  variants: {
    default: "",
    flush: `
      border-0
      shadow-none
      rounded-none
      bg-transparent
    `.replace(/\s+/g, " ").trim(),
    bordered: `
      border-2 !border-primary-200 dark:!border-primary-700
      shadow-md
    `.replace(/\s+/g, " ").trim()
  }
};
function A({
  variant: r = "default",
  flush: e = !1
} = {}) {
  const t = i.base, a = e ? i.flush : i.variants[r];
  return `${t} ${a}`.trim();
}
function T({
  isOpen: r = !1,
  arrowPosition: e = "right"
} = {}) {
  const t = `${i.item.header} ${r ? i.item.headerActive : ""} ${e === "left" ? "[&>svg:last-child]:hidden" : ""}`.trim();
  return {
    item: i.item.base,
    header: t,
    content: i.item.content
  };
}
const x = {
  // Content styling to override Flowbite Modal
  content: `
    !rounded-xl 
    !shadow-2xl 
    !border-0 
    !backdrop-blur-sm 
    !transition-all 
    !duration-500 
    hover:!scale-105
  `.replace(/\s+/g, " ").trim(),
  // Header styling
  header: "flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",
  title: "text-xl font-semibold text-gray-900 dark:text-white",
  closeButton: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 hover:!scale-110",
  closeIcon: "h-5 w-5",
  // Body styling
  body: "p-6",
  // Footer styling
  footer: "flex items-center justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700",
  // Size overrides for more distinctive sizing
  sizes: {
    sm: "!max-w-md !w-full",
    md: "!max-w-lg !w-full",
    lg: "!max-w-2xl !w-full",
    xl: "!max-w-4xl !w-full",
    full: "!max-w-full !w-full !mx-4"
  }
};
function I(r) {
  switch (r) {
    case "center":
      return "center";
    case "top":
      return "top-center";
    case "bottom":
      return "bottom-center";
    case "left":
      return "center-left";
    case "right":
      return "center-right";
    default:
      return "center";
  }
}
function L({
  size: r = "md"
} = {}) {
  const e = x.sizes[r];
  return {
    content: `${x.content} ${e}`.trim()
  };
}
const o = {
  // Base container styles
  container: `
    w-full 
    overflow-hidden 
    rounded-xl 
    shadow-sm 
    border 
    border-gray-200 
    dark:border-gray-700 
    bg-white 
    dark:bg-gray-800
  `.replace(/\s+/g, " ").trim(),
  // Table variants for different use cases
  variants: {
    default: "!bg-transparent !border-0 !shadow-none !rounded-none",
    elevated: "!bg-transparent !border-0 !shadow-none !rounded-none",
    outlined: "!bg-transparent !border-0 !shadow-none !rounded-none",
    flat: "!bg-transparent !border-0 !shadow-none !rounded-none"
  },
  // Header styles
  header: {
    base: `
      bg-gray-50 
      dark:bg-gray-700/50 
      border-b 
      border-gray-200 
      dark:border-gray-600
    `.replace(/\s+/g, " ").trim(),
    cell: `
      px-6 
      py-4 
      text-xs 
      font-semibold 
      text-gray-700 
      dark:text-gray-300 
      uppercase 
      tracking-wider
    `.replace(/\s+/g, " ").trim(),
    sortable: `
      cursor-pointer 
      hover:bg-gray-100 
      dark:hover:bg-gray-600 
      focus:outline-none 
      focus:ring-2 
      focus:ring-primary-500 
      focus:ring-inset
      bg-transparent
      border-0
      text-left
      w-full
      h-full
    `.replace(/\s+/g, " ").trim()
  },
  // Row styles
  body: {
    row: `
      border-b
      border-gray-100
      dark:border-gray-700
      last:border-b-0
    `.replace(/\s+/g, " ").trim(),
    rowHover: `
      hover:bg-gray-50 
      dark:hover:bg-gray-700/50
    `.replace(/\s+/g, " ").trim(),
    rowNested: `
      bg-gray-25 
      dark:bg-gray-800/30
    `.replace(/\s+/g, " ").trim(),
    cell: `
      px-6 
      py-4 
      text-sm 
      text-gray-900 
      dark:text-gray-100
    `.replace(/\s+/g, " ").trim(),
    cellExpandable: `
      cursor-pointer 
      hover:bg-gray-50 
      dark:hover:bg-gray-700/50
      focus:outline-none 
      focus:ring-2 
      focus:ring-primary-500 
      focus:ring-inset
    `.replace(/\s+/g, " ").trim()
  },
  // Icon styles
  icons: {
    sort: `
      ml-1.5 
      h-4 
      w-4 
      text-gray-400
    `.replace(/\s+/g, " ").trim(),
    sortActive: `
      text-primary-600 
      dark:text-primary-400
    `.replace(/\s+/g, " ").trim(),
    expand: `
      h-4 
      w-4 
      text-gray-400 
      dark:text-gray-500
      transition-transform 
      duration-200 
      ease-in-out
    `.replace(/\s+/g, " ").trim(),
    expandActive: `
      text-gray-600 
      dark:text-gray-300
    `.replace(/\s+/g, " ").trim()
  },
  // Content styles
  content: {
    headerLabel: `
      flex 
      items-center
    `.replace(/\s+/g, " ").trim(),
    firstColumn: `
      flex 
      h-full 
      w-full 
      items-center 
      gap-3 
      py-4
      bg-transparent
      border-0
      text-left
      cursor-pointer
    `.replace(/\s+/g, " ").trim(),
    iconSpacer: `
      h-4 
      w-4
    `.replace(/\s+/g, " ").trim(),
    rowIcon: `
      text-base 
      leading-none
      transition-all 
      duration-200 
      ease-in-out
    `.replace(/\s+/g, " ").trim(),
    rowName: `
      font-medium
    `.replace(/\s+/g, " ").trim(),
    otherColumn: `
      px-6 
      py-4
    `.replace(/\s+/g, " ").trim(),
    expandedContent: `
      border-t 
      border-gray-100 
      bg-gray-50 
      dark:border-gray-600 
      dark:bg-gray-700/30
      overflow-hidden
      transition-all
      duration-300
      ease-in-out
    `.replace(/\s+/g, " ").trim(),
    expandedText: `
      text-sm 
      leading-relaxed 
      text-gray-600 
      dark:text-gray-300
    `.replace(/\s+/g, " ").trim(),
    // Alignment utilities
    textCenter: "text-center",
    textRight: "text-right",
    textLeft: "text-left",
    // Cell padding override for first column
    firstColumnPadding: "!p-0",
    // Rotation utilities
    rotate180: "rotate-180",
    rotate90: "rotate-90"
  }
};
function E({ variant: r = "default" } = {}) {
  return {
    container: o.container,
    table: o.variants[r]
  };
}
function W({
  isActive: r = !1,
  sortDirection: e = "asc"
} = {}) {
  const t = o.icons.sort;
  if (!r)
    return t;
  const a = `${t} ${o.icons.sortActive}`;
  return e === "asc" ? `${a} ${o.content.rotate180}` : a;
}
function P({
  isExpanded: r = !1,
  hasExpandableContent: e = !1
} = {}) {
  const t = o.icons.expand;
  if (!e)
    return t;
  const a = `${t} ${o.icons.expandActive}`;
  return r ? `${a} ${o.content.rotate90}` : a;
}
function R({
  alignment: r = "left",
  isFirstColumn: e = !1
} = {}) {
  const t = (() => {
    switch (r) {
      case "center":
        return o.content.textCenter;
      case "right":
        return o.content.textRight;
      default:
        return o.content.textLeft;
    }
  })(), a = e ? o.content.firstColumnPadding : "";
  return `${t} ${o.body.cell} ${a}`.trim();
}
export {
  i as accordionStyles,
  p as badgeStyles,
  A as buildAccordionClasses,
  T as buildAccordionItemClasses,
  w as buildBadgeClasses,
  k as buildButtonClasses,
  v as buildCardClasses,
  R as buildCellClasses,
  P as buildExpandIconClasses,
  $ as buildFormClasses,
  C as buildInputClasses,
  L as buildModalClasses,
  W as buildSortIconClasses,
  z as buildTabButtonClasses,
  E as buildTableClasses,
  B as buildTabsClasses,
  j as buildTextClasses,
  l as buttonStyles,
  c as cardStyles,
  u as formStyles,
  I as getFlowbitePlacement,
  b as inputStyles,
  x as modalStyles,
  o as tableStyles,
  d as tabsStyles,
  n as textStyles,
  S as variantToElement
};
