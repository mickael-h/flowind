// Tabs component styles using Tailwind utilities
export const tabsStyles = {
  container: 'w-full',

  layout: {
    top: 'flex flex-col',
    bottom: 'flex flex-col',
    left: 'flex',
    right: 'flex'
  },

  tabList: {
    top: 'flex items-center gap-2 border-b border-gray-200',
    bottom: 'flex items-center gap-2 border-t border-gray-200 order-last',
    left: 'flex flex-col gap-2 border-r border-gray-200',
    right: 'flex flex-col gap-2 border-l border-gray-200 order-last'
  },

  panel: 'p-4',

  buttonBase:
    'px-3 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400',
  buttonVariants: {
    // Active/inactive appearance adjusted per position for borders
    top: {
      active: 'text-primary-600 border-b-2 border-primary-600',
      inactive: 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent'
    },
    bottom: {
      active: 'text-primary-600 border-t-2 border-primary-600',
      inactive: 'text-gray-600 hover:text-gray-900 border-t-2 border-transparent'
    },
    left: {
      active: 'text-primary-600 border-r-2 border-primary-600',
      inactive: 'text-gray-600 hover:text-gray-900 border-r-2 border-transparent'
    },
    right: {
      active: 'text-primary-600 border-l-2 border-primary-600',
      inactive: 'text-gray-600 hover:text-gray-900 border-l-2 border-transparent'
    }
  }
} as const;

export type TabsPosition = keyof typeof tabsStyles.layout;

export function buildTabsClasses({ position }: { position: TabsPosition }) {
  return {
    container: [tabsStyles.container, tabsStyles.layout[position]].join(' '),
    list: tabsStyles.tabList[position],
    panel: tabsStyles.panel
  };
}

export function buildTabButtonClasses({
  position,
  active
}: {
  position: TabsPosition;
  active: boolean;
}) {
  const variant = tabsStyles.buttonVariants[position];
  const cursor = active ? 'cursor-default' : 'cursor-pointer';
  return [tabsStyles.buttonBase, cursor, active ? variant.active : variant.inactive].join(' ');
}
