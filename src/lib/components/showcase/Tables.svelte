<script lang="ts">
  import { Table, Text, Card } from '$lib/components/ui';
  import { pageStyles } from '$lib/styles/page.style';
  import type { TableRow } from '$lib/components/ui/Table.svelte';

  // Table demo data
  const tableColumns = [
    { key: 'name', label: 'Name', sortable: true, width: '40%' },
    { key: 'type', label: 'Type', sortable: true, width: '25%' },
    { key: 'size', label: 'Size', sortable: true, width: '15%' },
    { key: 'modified', label: 'Modified', sortable: true, width: '20%' }
  ];

  const tableRows: TableRow[] = [
    {
      id: '1',
      type: 'folder',
      data: {
        name: 'Documents',
        type: 'Folder',
        size: '—',
        modified: '2024-01-16'
      },
      expanded: false,
      children: [
        {
          id: '1-1',
          type: 'folder',
          data: {
            name: 'Projects',
            type: 'Folder',
            size: '—',
            modified: '2024-01-15'
          },
          expanded: false,
          children: [
            {
              id: '1-1-1',
              type: 'folder',
              data: {
                name: 'Flowind',
                type: 'Folder',
                size: '—',
                modified: '2024-01-14'
              },
              expanded: false,
              children: [
                {
                  id: '1-1-1-1',
                  type: 'file',
                  data: {
                    name: 'project-docs.pdf',
                    fileType: 'PDF Document',
                    size: '2.3 MB',
                    modified: '2024-01-15'
                  },
                  expandedContent: pdfDetailsContent
                },
                {
                  id: '1-1-1-2',
                  type: 'file',
                  data: {
                    name: 'user-guide.pdf',
                    type: 'PDF Document',
                    size: '1.8 MB',
                    modified: '2024-01-14'
                  }
                }
              ]
            },
            {
              id: '1-1-2',
              type: 'folder',
              data: {
                name: 'Other Project',
                type: 'Folder',
                size: '—',
                modified: '2024-01-13'
              },
              expanded: false,
              children: [
                {
                  id: '1-1-2-1',
                  type: 'file',
                  data: {
                    name: 'specs.docx',
                    type: 'Word Document',
                    size: '1.5 MB',
                    modified: '2024-01-12'
                  }
                }
              ]
            }
          ]
        },
        {
          id: '1-2',
          type: 'file',
          data: {
            name: 'general-notes.txt',
            type: 'Text File',
            size: '2.1 KB',
            modified: '2024-01-10'
          }
        }
      ]
    },
    {
      id: '2',
      type: 'folder',
      data: {
        name: 'Design Files',
        type: 'Folder',
        size: '—',
        modified: '2024-01-14'
      },
      expanded: false,
      children: [
        {
          id: '2-1',
          type: 'folder',
          data: {
            name: 'Components',
            type: 'Folder',
            size: '—',
            modified: '2024-01-13'
          },
          expanded: false,
          children: [
            {
              id: '2-1-1',
              type: 'file',
              data: {
                name: 'buttons.fig',
                fileType: 'Figma File',
                size: '3.2 MB',
                modified: '2024-01-13'
              }
            },
            {
              id: '2-1-2',
              type: 'file',
              data: {
                name: 'forms.fig',
                fileType: 'Figma File',
                size: '2.8 MB',
                modified: '2024-01-12'
              }
            }
          ]
        },
        {
          id: '2-2',
          type: 'folder',
          data: {
            name: 'Mockups',
            type: 'Folder',
            size: '—',
            modified: '2024-01-14'
          },
          expanded: false,
          children: [
            {
              id: '2-2-1',
              type: 'file',
              data: {
                name: 'homepage.sketch',
                fileType: 'Sketch File',
                size: '4.1 MB',
                modified: '2024-01-14'
              },
              expandedContent: figmaDetailsContent
            },
            {
              id: '2-2-2',
              type: 'file',
              data: {
                name: 'dashboard.sketch',
                fileType: 'Sketch File',
                size: '3.7 MB',
                modified: '2024-01-13'
              }
            }
          ]
        }
      ]
    },
    {
      id: '3',
      type: 'folder',
      data: {
        name: 'Source Code',
        type: 'Folder',
        size: '—',
        modified: '2024-01-16'
      },
      expanded: false,
      children: [
        {
          id: '3-1',
          type: 'folder',
          data: {
            name: 'src',
            type: 'Folder',
            size: '—',
            modified: '2024-01-16'
          },
          expanded: false,
          children: [
            {
              id: '3-1-1',
              type: 'folder',
              data: {
                name: 'components',
                type: 'Folder',
                size: '—',
                modified: '2024-01-15'
              },
              expanded: false,
              children: [
                {
                  id: '3-1-1-1',
                  type: 'folder',
                  data: {
                    name: 'ui',
                    type: 'Folder',
                    size: '—',
                    modified: '2024-01-15'
                  },
                  expanded: false,
                  children: [
                    {
                      id: '3-1-1-1-1',
                      type: 'file',
                      data: {
                        name: 'Button.svelte',
                        type: 'Svelte Component',
                        size: '2.1 KB',
                        modified: '2024-01-16'
                      }
                    },
                    {
                      id: '3-1-1-1-2',
                      type: 'file',
                      data: {
                        name: 'Table.svelte',
                        type: 'Svelte Component',
                        size: '8.5 KB',
                        modified: '2024-01-16'
                      }
                    },
                    {
                      id: '3-1-1-1-3',
                      type: 'file',
                      data: {
                        name: 'Modal.svelte',
                        type: 'Svelte Component',
                        size: '3.2 KB',
                        modified: '2024-01-14'
                      }
                    }
                  ]
                },
                {
                  id: '3-1-1-2',
                  type: 'folder',
                  data: {
                    name: 'layout',
                    type: 'Folder',
                    size: '—',
                    modified: '2024-01-15'
                  },
                  expanded: false,
                  children: [
                    {
                      id: '3-1-1-2-1',
                      type: 'file',
                      data: {
                        name: 'Header.svelte',
                        type: 'Svelte Component',
                        size: '1.8 KB',
                        modified: '2024-01-15'
                      }
                    },
                    {
                      id: '3-1-1-2-2',
                      type: 'file',
                      data: {
                        name: 'Footer.svelte',
                        type: 'Svelte Component',
                        size: '1.5 KB',
                        modified: '2024-01-14'
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: '3-1-2',
              type: 'folder',
              data: {
                name: 'styles',
                type: 'Folder',
                size: '—',
                modified: '2024-01-15'
              },
              expanded: false,
              children: [
                {
                  id: '3-1-2-1',
                  type: 'file',
                  data: {
                    name: 'button.style.ts',
                    type: 'TypeScript',
                    size: '1.2 KB',
                    modified: '2024-01-16'
                  }
                },
                {
                  id: '3-1-2-2',
                  type: 'file',
                  data: {
                    name: 'table.style.ts',
                    type: 'TypeScript',
                    size: '1.8 KB',
                    modified: '2024-01-16'
                  }
                }
              ]
            }
          ]
        },
        {
          id: '3-2',
          type: 'file',
          data: {
            name: 'package.json',
            fileType: 'JSON File',
            size: '1.2 KB',
            modified: '2024-01-13'
          },
          expandedContent: packageDetailsContent
        },
        {
          id: '3-3',
          type: 'file',
          data: {
            name: 'README.md',
            type: 'Markdown',
            size: '4.5 KB',
            modified: '2024-01-16'
          }
        }
      ]
    }
  ];
</script>

{#snippet pdfDetailsContent()}
  <div class="space-y-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
    <Text variant="h6" color="primary">PDF Document Details</Text>
    <div class="grid grid-cols-2 gap-4 text-sm">
      <div>
        <Text variant="bodySmall" color="secondary">Pages: 24</Text>
        <Text variant="bodySmall" color="secondary">Author: John Doe</Text>
      </div>
      <div>
        <Text variant="bodySmall" color="secondary">Created: 2024-01-10</Text>
        <Text variant="bodySmall" color="secondary">Version: 1.2</Text>
      </div>
    </div>
  </div>
{/snippet}

{#snippet figmaDetailsContent()}
  <div class="space-y-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
    <Text variant="h6" color="primary">Figma File Details</Text>
    <div class="grid grid-cols-2 gap-4 text-sm">
      <div>
        <Text variant="bodySmall" color="secondary">Frames: 12</Text>
        <Text variant="bodySmall" color="secondary">Components: 8</Text>
      </div>
      <div>
        <Text variant="bodySmall" color="secondary">Last edited: 2024-01-13</Text>
        <Text variant="bodySmall" color="secondary">Collaborators: 3</Text>
      </div>
    </div>
  </div>
{/snippet}

{#snippet packageDetailsContent()}
  <div class="space-y-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
    <Text variant="h6" color="primary">Package.json Details</Text>
    <div class="grid grid-cols-2 gap-4 text-sm">
      <div>
        <Text variant="bodySmall" color="secondary">Dependencies: 15</Text>
        <Text variant="bodySmall" color="secondary">Dev Dependencies: 8</Text>
      </div>
      <div>
        <Text variant="bodySmall" color="secondary">Version: 1.0.0</Text>
        <Text variant="bodySmall" color="secondary">License: MIT</Text>
      </div>
    </div>
  </div>
{/snippet}

<div class={pageStyles.componentShowcase.container}>
  <Text variant="h4" as="h4">Tables</Text>
  <Card variant="elevated" padding="lg">
    <div class={pageStyles.componentShowcase.card}>
      <div class={pageStyles.componentShowcase.section}>
        <Text variant="h5" as="h5">File Explorer Style</Text>
        <Text variant="body" color="secondary">
          A table component inspired by Windows File Explorer with sortable columns and expandable
          rows for additional details.
        </Text>
        <Table columns={tableColumns} rows={tableRows} expandable={true} sortable={true} />
      </div>
    </div>
  </Card>
</div>
