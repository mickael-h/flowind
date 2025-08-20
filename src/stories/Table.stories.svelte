<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Table from '$lib/components/ui/Table.svelte';
  import type { TableRow } from '$lib/components/ui/Table.svelte';
  import type { Snippet } from 'svelte';

  const { Story } = defineMeta({
    title: 'UI/Table',
    component: Table,
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component:
            'A table component wrapper around Flowbite with Windows File Explorer styling and expandable rows.'
        }
      }
    },
    argTypes: {
      columns: {
        control: { type: 'object' },
        description: 'Array of column definitions'
      },
      rows: {
        control: { type: 'object' },
        description: 'Array of row data'
      },
      variant: {
        control: { type: 'select' },
        options: ['default', 'elevated', 'outlined', 'flat'],
        description: 'Table styling variant'
      },
      striped: {
        control: { type: 'boolean' },
        description: 'Enable alternating row colors'
      },
      hoverable: {
        control: { type: 'boolean' },
        description: 'Enable hover effects on rows'
      },
      expandable: {
        control: { type: 'boolean' },
        description: 'Enable row expansion for additional details'
      }
    },
    tags: ['autodocs']
  });

  // Sample data
  const basicColumns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'role', label: 'Role', sortable: false }
  ];

  const basicRows = [
    { id: '1', data: { name: 'John Doe', email: 'john@example.com', role: 'Admin' } },
    { id: '2', data: { name: 'Jane Smith', email: 'jane@example.com', role: 'User' } },
    { id: '3', data: { name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' } }
  ];

  const fileColumns = [
    { key: 'name', label: 'Name', sortable: true, width: '40%' },
    { key: 'fileType', label: 'Type', sortable: true, width: '25%' },
    { key: 'size', label: 'Size', sortable: true, width: '15%' },
    { key: 'modified', label: 'Modified', sortable: true, width: '20%' }
  ];

  const fileRows: TableRow[] = [
    {
      id: '1',
      type: 'folder',
      data: {
        name: 'Documents',
        fileType: 'Folder',
        size: '—',
        modified: '2024-01-16'
      },
      expanded: false,
      children: [
        {
          id: '1-1',
          type: 'folder',
          data: {
            name: 'Archives',
            fileType: 'Folder',
            size: '—',
            modified: '2024-01-15'
          },
          expanded: false,
          children: [
            {
              id: '1-1-1',
              type: 'file',
              data: {
                name: 'old-docs.pdf',
                fileType: 'PDF Document',
                size: '1.2 MB',
                modified: '2024-01-10'
              }
            }
          ]
        },
        {
          id: '1-2',
          type: 'file',
          data: {
            name: 'project-docs.pdf',
            fileType: 'PDF Document',
            size: '2.3 MB',
            modified: '2024-01-15'
          },
          expandedContent: pdfDetailsContent
        }
      ]
    },
    {
      id: '2',
      type: 'file',
      data: {
        name: 'design-system.figma',
        fileType: 'Figma File',
        size: '8.7 MB',
        modified: '2024-01-14'
      },
      expandedContent: figmaDetailsContent
    }
  ];
</script>

{#snippet pdfDetailsContent()}
  This PDF contains comprehensive project documentation including specifications and user guides.
{/snippet}

{#snippet figmaDetailsContent()}
  Design file containing all UI components, color schemes, typography definitions, and design tokens
  used in the design system.
{/snippet}

<Story
  name="Default"
  args={{
    columns: basicColumns,
    rows: basicRows,
    variant: 'default',
    striped: true,
    hoverable: true,
    expandable: false
  }}
  asChild
>
  <Table columns={basicColumns} rows={basicRows} />
</Story>

<Story
  name="File Explorer Style"
  args={{
    columns: fileColumns,
    rows: fileRows,
    variant: 'default',
    striped: true,
    hoverable: true,
    expandable: true
  }}
  parameters={{
    docs: {
      description: {
        story:
          'A table styled like Windows File Explorer with expandable rows for additional details.'
      }
    }
  }}
  asChild
>
  <Table columns={fileColumns} rows={fileRows} expandable={true} sortable={true} />
</Story>

<Story
  name="Elevated"
  args={{
    columns: basicColumns,
    rows: basicRows,
    variant: 'elevated',
    striped: true,
    hoverable: true,
    expandable: false
  }}
  asChild
>
  <Table columns={basicColumns} rows={basicRows} variant="elevated" />
</Story>
