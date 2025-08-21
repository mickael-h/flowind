<script module lang="ts">
  import type { Snippet } from 'svelte';

  export interface TableColumn {
    key: string;
    label: string;
    sortable?: boolean;
    width?: string;
    align?: 'left' | 'center' | 'right';
  }

  export interface TableRow {
    id: string;
    data: Record<string, any>;
    type?: 'folder' | 'file';
    expanded?: boolean;
    children?: TableRow[];
    level?: number;
    expandedContent?: Snippet;
  }
</script>

<script lang="ts">
  import {
    Table as FlowbiteTable,
    TableHead as FlowbiteTableHead,
    TableHeadCell as FlowbiteTableHeadCell,
    TableBody as FlowbiteTableBody,
    TableBodyRow as FlowbiteTableBodyRow,
    TableBodyCell as FlowbiteTableBodyCell
  } from 'flowbite-svelte';

  import {
    buildTableClasses,
    buildSortIconClasses,
    buildExpandIconClasses,
    buildCellClasses,
    tableStyles,
    type TableVariant
  } from '$lib/styles/table.style';

  type SortDirection = 'asc' | 'desc';

  let {
    columns,
    rows = $bindable([]),
    variant = 'default' as TableVariant,
    striped = true,
    hoverable = true,
    expandable = false,
    sortable = false,
    children,
    ...rest
  } = $props<{
    columns: TableColumn[];
    rows: TableRow[];
    variant?: TableVariant;
    striped?: boolean;
    hoverable?: boolean;
    expandable?: boolean;
    sortable?: boolean;
    children?: Snippet;
    [key: string]: any;
  }>();

  // Build custom classes for our opinionated styling
  const tableClasses = $derived(buildTableClasses({ variant }));

  // Sorting state
  let sortColumn = $state<string | null>(null);
  let sortDirection = $state<SortDirection>('asc');

  // Flatten hierarchical rows for display
  function flattenRows(rows: TableRow[], level = 0): TableRow[] {
    let result: TableRow[] = [];

    for (const row of rows) {
      // Add current row with level
      result.push({ ...row, level });

      // If row is expanded and has children, add them recursively
      if (row.expanded && row.children && row.children.length > 0) {
        result.push(...flattenRows(row.children, level + 1));
      }
    }

    return result;
  }

  // Get flattened rows for display with proper nesting
  const displayRows = $derived(flattenRows(rows));

  function handleSort(key: string) {
    if (!sortable) return;

    if (sortColumn === key) {
      sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn = key;
      sortDirection = 'asc';
    }

    // Sort only top-level rows, preserving hierarchy
    function sortRowsRecursively(rowsToSort: TableRow[]): TableRow[] {
      const sorted = [...rowsToSort].sort((a, b) => {
        const aValue = a.data[key];
        const bValue = b.data[key];

        if (aValue === undefined || bValue === undefined) return 0;

        if (sortDirection === 'asc') {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      });

      // Sort children recursively
      return sorted.map((row) => ({
        ...row,
        children: row.children ? sortRowsRecursively(row.children) : undefined
      }));
    }

    rows = sortRowsRecursively(rows);
  }

  function toggleExpanded(rowId: string) {
    if (!expandable) return;

    function toggleInRows(rowsToUpdate: TableRow[]): TableRow[] {
      return rowsToUpdate.map((row) => {
        if (row.id === rowId) {
          return { ...row, expanded: !row.expanded };
        } else if (row.children) {
          return { ...row, children: toggleInRows(row.children) };
        }
        return row;
      });
    }

    rows = toggleInRows(rows);
  }

  // Helper functions now use the build functions from styles
  function getSortIconClasses(columnKey: string) {
    return buildSortIconClasses({
      isActive: sortable && sortColumn === columnKey,
      sortDirection
    });
  }

  function getExpandIconClasses(isExpanded: boolean, hasContent: boolean) {
    return buildExpandIconClasses({
      isExpanded,
      hasExpandableContent: hasContent
    });
  }

  function getCellClasses(
    align: 'left' | 'center' | 'right' = 'left',
    isFirstColumn: boolean = false
  ) {
    return buildCellClasses({
      alignment: align,
      isFirstColumn
    });
  }

  function getCellAlignment(align: 'left' | 'center' | 'right' = 'left') {
    switch (align) {
      case 'center':
        return tableStyles.content.textCenter;
      case 'right':
        return tableStyles.content.textRight;
      default:
        return tableStyles.content.textLeft;
    }
  }

  function getIndentationPadding(level: number = 0) {
    return level * 1.125; // Return number of rem units (18px per level)
  }

  function getRowIcon(row: TableRow) {
    if (row.type === 'folder') {
      return row.expanded ? '📂' : '📁';
    }
    return '📄';
  }

  function shouldShowExpandIcon(row: TableRow) {
    return expandable && (row.children?.length || row.expandedContent);
  }
</script>

<div class={tableClasses.container}>
  <FlowbiteTable {striped} {hoverable} class={tableClasses.table} {...rest}>
    <FlowbiteTableHead class={tableStyles.header.base}>
      {#each columns as column}
        <FlowbiteTableHeadCell
          style={column.width ? `width: ${column.width}` : ''}
          class="{tableStyles.header.cell} {getCellAlignment(column.align)}"
        >
          {#if column.sortable && sortable}
            <button
              type="button"
              class="{tableStyles.content.headerLabel} {tableStyles.header.sortable}"
              onclick={() => {
                if (column.sortable) {
                  handleSort(column.key);
                }
              }}
              onkeydown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  if (column.sortable) {
                    handleSort(column.key);
                  }
                }
              }}
              aria-label={`Sort by ${column.label}`}
            >
              <span>{column.label}</span>
              <svg class={getSortIconClasses(column.key)} fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          {:else}
            <div class={tableStyles.content.headerLabel}>
              <span>{column.label}</span>
            </div>
          {/if}
        </FlowbiteTableHeadCell>
      {/each}
    </FlowbiteTableHead>

    <FlowbiteTableBody>
      {#each displayRows as row}
        <!-- Main row -->
        <FlowbiteTableBodyRow
          class="{tableStyles.body.row} {hoverable ? tableStyles.body.rowHover : ''} {row.level &&
          row.level > 0
            ? tableStyles.body.rowNested
            : ''}"
        >
          {#each columns as column, columnIndex}
            <FlowbiteTableBodyCell
              style={column.width ? `width: ${column.width}` : ''}
              class={getCellClasses(column.align, columnIndex === 0)}
            >
              {#if columnIndex === 0}
                <!-- First column gets the icon, arrow, and indentation -->
                <button
                  type="button"
                  class="{tableStyles.content.firstColumn} {shouldShowExpandIcon(row)
                    ? tableStyles.body.cellExpandable
                    : ''}"
                  style="padding-left: {1.5 +
                    getIndentationPadding(row.level)}rem; padding-right: 1.5rem;"
                  onclick={() => {
                    if (shouldShowExpandIcon(row)) {
                      toggleExpanded(row.id);
                    }
                  }}
                  onkeydown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      if (shouldShowExpandIcon(row)) {
                        toggleExpanded(row.id);
                      }
                    }
                  }}
                  aria-expanded={row.expanded || false}
                  aria-label={shouldShowExpandIcon(row)
                    ? `Toggle ${row.data.name || 'item'}`
                    : undefined}
                >
                  {#if shouldShowExpandIcon(row)}
                    <svg
                      class={getExpandIconClasses(row.expanded || false, shouldShowExpandIcon(row))}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  {:else}
                    <!-- Empty space for alignment when no arrow -->
                    <div class={tableStyles.content.iconSpacer}></div>
                  {/if}
                  <span class={tableStyles.content.rowIcon}>{getRowIcon(row)}</span>
                  <span class={tableStyles.content.rowName}>{row.data[column.key] || ''}</span>
                </button>
              {:else}
                <div class={tableStyles.content.otherColumn}>
                  {row.data[column.key] || ''}
                </div>
              {/if}
            </FlowbiteTableBodyCell>
          {/each}
        </FlowbiteTableBodyRow>

        <!-- Expanded content row (for additional details, not children) -->
        {#if expandable && row.expanded && row.expandedContent}
          <FlowbiteTableBodyRow>
            <FlowbiteTableBodyCell
              colspan={columns.length}
              class={tableStyles.content.expandedContent}
              style="padding: 1rem 1.5rem; padding-left: {2.5 +
                getIndentationPadding((row.level || 0) + 1)}rem;"
            >
              <div class={tableStyles.content.expandedText}>
                {@render row.expandedContent()}
              </div>
            </FlowbiteTableBodyCell>
          </FlowbiteTableBodyRow>
        {/if}
      {/each}
    </FlowbiteTableBody>

    {#if children}
      {@render children()}
    {/if}
  </FlowbiteTable>
</div>
