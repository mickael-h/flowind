<script lang="ts">
  import type { Snippet } from 'svelte';
  import {
    Button,
    Card,
    Input,
    Badge,
    Form,
    Tabs,
    Modal,
    Text,
    Accordion,
    Table
  } from '$lib/components/ui';
  import type { TableRow } from '$lib/components/ui/Table.svelte';
  import { pageStyles } from '$lib/styles/page.style';

  // Handler for badge removal
  function handleBadgeRemove() {
    // Badge removed
  }

  // Handler for form submission
  function handleFormSubmit(_formData: FormData) {
    // Form submitted with data: Object.fromEntries(formData)
  }

  // Modal state management
  let defaultModalOpen = $state(false);
  let sizeModalOpen = $state(false);
  let positionModalOpen = $state(false);

  // Dark mode toggle
  let isDarkMode = $state(false);

  // Initialize dark mode on mount
  $effect(() => {
    if (typeof window !== 'undefined') {
      // Get initial state
      try {
        const stored = localStorage.getItem('darkMode');
        if (stored !== null) {
          isDarkMode = JSON.parse(stored);
        } else {
          const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          isDarkMode = systemPrefersDark;
        }
      } catch (_error) {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        isDarkMode = systemPrefersDark;
      }
    }
  });

  // Watch for changes to isDarkMode and update DOM
  $effect(() => {
    if (typeof document !== 'undefined') {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
      }
    }
  });

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    try {
      localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    } catch (_error) {
      // Continue without localStorage if it fails
    }
  }

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
          id: '1-2',
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
          type: 'file',
          data: {
            name: 'design-system.figma',
            type: 'Figma File',
            size: '8.7 MB',
            modified: '2024-01-14'
          },
          expandedContent: figmaDetailsContent
        },
        {
          id: '2-2',
          type: 'file',
          data: {
            name: 'wireframes.sketch',
            type: 'Sketch File',
            size: '4.2 MB',
            modified: '2024-01-13'
          }
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
                  type: 'file',
                  data: {
                    name: 'Table.svelte',
                    type: 'Svelte Component',
                    size: '8.5 KB',
                    modified: '2024-01-16'
                  }
                },
                {
                  id: '3-1-1-2',
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
            type: 'JSON File',
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
    },
    {
      id: '4',
      type: 'file',
      data: {
        name: 'LICENSE',
        type: 'Text File',
        size: '1.1 KB',
        modified: '2024-01-10'
      }
    }
  ];
</script>

{#snippet tabOneContent()}
  <Text variant="body" color="secondary"
    >This is the content for tab one. It shows some sample text.</Text
  >
{/snippet}

{#snippet tabTwoContent()}
  <Text variant="body" color="secondary"
    >This is the content for tab two. It has different content.</Text
  >
{/snippet}

{#snippet tabThreeContent()}
  <Text variant="body" color="secondary"
    >This is the content for tab three. Each tab can have unique content.</Text
  >
{/snippet}

{#snippet faqOneContent()}
  <Text variant="body" color="secondary">
    Flowind is a comprehensive design system built with Svelte 5, Tailwind CSS, and Flowbite
    components. It provides a consistent set of UI components, design tokens, and patterns for
    building modern web applications.
  </Text>
{/snippet}

{#snippet faqTwoContent()}
  <Text variant="body" color="secondary">
    All components are designed to be highly customizable through props and CSS custom properties.
    Each component has its own style file where you can modify colors, spacing, and other design
    tokens.
  </Text>
{/snippet}

{#snippet faqThreeContent()}
  <Text variant="body" color="secondary">
    Yes! All components follow WCAG accessibility guidelines and include proper ARIA attributes,
    keyboard navigation support, and screen reader compatibility.
  </Text>
{/snippet}

{#snippet featureOneContent()}
  <Text variant="body" color="secondary">
    All components are fully responsive and work seamlessly across desktop, tablet, and mobile
    devices.
  </Text>
{/snippet}

{#snippet featureTwoContent()}
  <Text variant="body" color="secondary">
    Built-in dark mode support with automatic theme switching based on user preferences.
  </Text>
{/snippet}

{#snippet featureThreeContent()}
  <Text variant="body" color="secondary">
    Full TypeScript support with comprehensive type definitions for all components and props.
  </Text>
{/snippet}

{#snippet tipOneContent()}
  <Text variant="body" color="secondary">
    Install the package and import components directly into your Svelte application.
  </Text>
{/snippet}

{#snippet tipTwoContent()}
  <Text variant="body" color="secondary">
    Follow our component guidelines and design patterns for consistent user experiences.
  </Text>
{/snippet}

{#snippet pdfDetailsContent()}
  <Text variant="body" color="secondary">
    This PDF contains comprehensive project documentation including technical specifications, user
    guides, and API references.
  </Text>
{/snippet}

{#snippet figmaDetailsContent()}
  <Text variant="body" color="secondary">
    Design file with all UI components, color schemes, typography definitions, and design tokens
    used in the Flowind design system.
  </Text>
{/snippet}

{#snippet packageDetailsContent()}
  <Text variant="body" color="secondary">
    Configuration file containing project dependencies, scripts, and metadata for the npm package
    manager.
  </Text>
{/snippet}

<svelte:head>
  <title>Flowind Design System</title>
  <meta
    name="description"
    content="A comprehensive design system built with Svelte, Tailwind CSS, and Flowbite components"
  />
</svelte:head>

<div class={pageStyles.layout.container}>
  <!-- Header -->
  <header class={pageStyles.header.container}>
    <div class={pageStyles.layout.maxWidth}>
      <div class={pageStyles.header.content}>
        <div class={pageStyles.header.logo}>
          <Text variant="h1" as="h1">Flowind</Text>
          <Badge variant="primary">Design System</Badge>
        </div>
        <div class="flex items-center gap-6">
          <nav class={pageStyles.header.nav}>
            <a href="#components" class={pageStyles.header.navLink}>Components</a>
            <a href="#tokens" class={pageStyles.header.navLink}>Design Tokens</a>
            <a href="http://localhost:6006" class={pageStyles.header.navLink}>Storybook</a>
          </nav>
          <Button
            variant="outline"
            size="sm"
            onclick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </Button>
        </div>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class={pageStyles.hero.container}>
    <div class={`${pageStyles.layout.maxWidth} text-center`}>
      <Text variant="h2" as="h2">Design System</Text>
      <Text variant="bodyLarge" color="secondary">
        A comprehensive component library built with Svelte and Tailwind CSS, inspired by Flowbite.
        Consistent design tokens ensure unified look and feel across all applications.
      </Text>
      <div class={pageStyles.hero.actions}>
        <Button size="lg" variant="primary">View Components</Button>
        <Button size="lg" variant="outline">Read Documentation</Button>
      </div>
    </div>
  </section>

  <!-- Design Tokens Section -->
  <section id="tokens" class={pageStyles.section.white}>
    <div class={pageStyles.layout.maxWidth}>
      <div class={pageStyles.section.header}>
        <Text variant="h3" as="h3">Design Tokens</Text>
        <Text variant="body" color="secondary">
          Consistent design tokens power our component library and ensure visual harmony.
        </Text>
      </div>

      <!-- Color Palette -->
      <div class={pageStyles.colorPalette.container}>
        <Text variant="h4" as="h4">Color Palette</Text>
        <div class={pageStyles.colorPalette.grid}>
          <!-- Primary Colors -->
          <div class={pageStyles.colorPalette.colorItem}>
            <div class={`${pageStyles.colorPalette.colorSwatch} bg-primary-500`}></div>
            <Text variant="bodySmall" color="primary">Primary 500</Text>
            <Text variant="caption" color="secondary">#3b82f6</Text>
          </div>
          <div class={pageStyles.colorPalette.colorItem}>
            <div class={`${pageStyles.colorPalette.colorSwatch} bg-secondary-500`}></div>
            <Text variant="bodySmall" color="primary">Secondary 500</Text>
            <Text variant="caption" color="secondary">#64748b</Text>
          </div>
          <div class={pageStyles.colorPalette.colorItem}>
            <div class={`${pageStyles.colorPalette.colorSwatch} bg-accent-500`}></div>
            <Text variant="bodySmall" color="primary">Accent 500</Text>
            <Text variant="caption" color="secondary">#d946ef</Text>
          </div>
          <div class={pageStyles.colorPalette.colorItem}>
            <div class={`${pageStyles.colorPalette.colorSwatch} bg-success-500`}></div>
            <Text variant="bodySmall" color="primary">Success 500</Text>
            <Text variant="caption" color="secondary">#22c55e</Text>
          </div>
          <div class={pageStyles.colorPalette.colorItem}>
            <div class={`${pageStyles.colorPalette.colorSwatch} bg-warning-500`}></div>
            <Text variant="bodySmall" color="primary">Warning 500</Text>
            <Text variant="caption" color="secondary">#f59e0b</Text>
          </div>
          <div class={pageStyles.colorPalette.colorItem}>
            <div class={`${pageStyles.colorPalette.colorSwatch} bg-error-500`}></div>
            <Text variant="bodySmall" color="primary">Error 500</Text>
            <Text variant="caption" color="secondary">#ef4444</Text>
          </div>
        </div>
      </div>

      <!-- Typography -->
      <div class={pageStyles.typography.container}>
        <Text variant="h4" as="h4">Typography</Text>
        <div class={pageStyles.typography.examples}>
          <div>
            <Text variant="h1" as="h1">Display Heading</Text>
            <Text variant="caption" color="secondary">Poppins, 36px, Bold</Text>
          </div>
          <div>
            <Text variant="h2" as="h2">Heading 2</Text>
            <Text variant="caption" color="secondary">Inter, 30px, Semibold</Text>
          </div>
          <div>
            <Text variant="h3" as="h3">Heading 3</Text>
            <Text variant="caption" color="secondary">Inter, 24px, Medium</Text>
          </div>
          <div>
            <Text variant="bodyLarge" color="primary">
              Body Large - This is body text with larger size for better readability.
            </Text>
            <Text variant="caption" color="secondary">Inter, 18px, Regular</Text>
          </div>
          <div>
            <Text variant="body" color="primary">
              Body - This is standard body text used throughout the application.
            </Text>
            <Text variant="caption" color="secondary">Inter, 16px, Regular</Text>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Components Section -->
  <section id="components" class={pageStyles.section.gray}>
    <div class={pageStyles.layout.maxWidth}>
      <div class={pageStyles.section.header}>
        <Text variant="h3" as="h3">Components</Text>
        <Text variant="body" color="secondary">
          Reusable components built with consistent design tokens and accessibility in mind.
        </Text>
      </div>

      <!-- Buttons -->
      <div class={pageStyles.componentShowcase.container}>
        <Text variant="h4" as="h4">Buttons</Text>
        <Card variant="elevated" padding="lg">
          <div class={pageStyles.componentShowcase.card}>
            <div class={pageStyles.componentShowcase.section}>
              <Text variant="h5" as="h5">Variants</Text>
              <div class={pageStyles.componentShowcase.buttonGrid}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="accent">Accent</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="error">Error</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>
            <div class={pageStyles.componentShowcase.section}>
              <Text variant="h5" as="h5">Sizes</Text>
              <div class={pageStyles.componentShowcase.buttonGridSizes}>
                <Button size="xs">Extra Small</Button>
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">Extra Large</Button>
              </div>
            </div>
            <div class={pageStyles.componentShowcase.section}>
              <Text variant="h5" as="h5">States</Text>
              <div class={pageStyles.componentShowcase.buttonGrid}>
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
                <Button>Standard</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <!-- Cards -->
      <div class={pageStyles.componentShowcase.container}>
        <Text variant="h4" as="h4">Cards</Text>
        <div class={pageStyles.componentShowcase.cardGrid}>
          <Card variant="default" hover>
            <Text variant="h5" as="h5">Default Card</Text>
            <Text variant="body" color="secondary">
              Standard card with border and white background.
            </Text>
          </Card>
          <Card variant="elevated" hover>
            <Text variant="h5" as="h5">Elevated Card</Text>
            <Text variant="body" color="secondary">Card with shadow for visual prominence.</Text>
          </Card>
          <Card variant="outlined" hover>
            <Text variant="h5" as="h5">Outlined Card</Text>
            <Text variant="body" color="secondary">
              Card with prominent border and transparent background.
            </Text>
          </Card>
          <Card variant="flat" hover>
            <Text variant="h5" as="h5">Flat Card</Text>
            <Text variant="body" color="secondary">Card with subtle background color.</Text>
          </Card>
        </div>
      </div>

      <!-- Form Elements -->
      <div class={pageStyles.componentShowcase.container}>
        <Text variant="h4" as="h4">Form Elements</Text>
        <Card variant="elevated" padding="lg">
          <Form layout="vertical" spacing="lg" onSubmit={handleFormSubmit}>
            <div class={pageStyles.componentShowcase.formGrid}>
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email..."
                helperText="We'll never share your email"
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password..."
                helperText="Must be at least 8 characters"
              />
              <Input
                label="Success Input"
                placeholder="This input is valid..."
                success={true}
                helperText="Great! This looks good."
              />
              <Input
                label="Error Input"
                placeholder="This input has an error..."
                error={true}
                helperText="Please fix this error."
              />
            </div>
            <div class={pageStyles.form.actions}>
              <Button variant="primary">Submit</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </Form>
        </Card>
      </div>

      <!-- Badges -->
      <div class={pageStyles.componentShowcase.container}>
        <Text variant="h4" as="h4">Badges</Text>
        <Card variant="elevated" padding="lg">
          <div class={pageStyles.componentShowcase.card}>
            <div class={pageStyles.componentShowcase.section}>
              <Text variant="h5" as="h5">Variants</Text>
              <div class={pageStyles.componentShowcase.badgeGrid}>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="accent">Accent</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="info">Info</Badge>
              </div>
            </div>
            <div class={pageStyles.componentShowcase.section}>
              <Text variant="h5" as="h5">Interactive</Text>
              <div class={pageStyles.componentShowcase.badgeGridSizes}>
                <Badge variant="primary">Standard Badge</Badge>
                <Badge variant="accent">Interactive</Badge>
                <Badge variant="info">Informational</Badge>
              </div>
            </div>
            <div class={pageStyles.componentShowcase.section}>
              <Text variant="h5" as="h5">Removable</Text>
              <div class={pageStyles.componentShowcase.badgeGrid}>
                <Badge variant="primary" removable onRemove={handleBadgeRemove}>Removable</Badge>
                <Badge variant="success" removable onRemove={handleBadgeRemove}>Success</Badge>
                <Badge variant="warning" removable onRemove={handleBadgeRemove}>Warning</Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <!-- Tabs -->
      <div class={pageStyles.componentShowcase.container}>
        <Text variant="h4" as="h4">Tabs</Text>
        <Card variant="elevated" padding="lg">
          <Tabs
            items={[
              { id: 'one', label: 'First Tab', content: tabOneContent },
              { id: 'two', label: 'Second Tab', content: tabTwoContent },
              { id: 'three', label: 'Third Tab', content: tabThreeContent }
            ]}
            activeId="one"
          />
        </Card>
      </div>

      <!-- Accordions -->
      <div class={pageStyles.componentShowcase.container}>
        <Text variant="h4" as="h4">Accordions</Text>
        <Card variant="elevated" padding="lg">
          <div class={pageStyles.componentShowcase.card}>
            <div class={pageStyles.componentShowcase.section}>
              <Text variant="h5" as="h5">Default Accordion</Text>
              <Accordion
                items={[
                  {
                    id: 'faq-1',
                    title: 'What is Flowind Design System?',
                    content: faqOneContent
                  },
                  {
                    id: 'faq-2',
                    title: 'How do I customize the components?',
                    content: faqTwoContent
                  },
                  {
                    id: 'faq-3',
                    title: 'Is it accessible?',
                    content: faqThreeContent
                  }
                ]}
              />
            </div>

            <div class={pageStyles.componentShowcase.section}>
              <Text variant="h5" as="h5">Multiple Selection</Text>
              <Accordion
                multiple={true}
                items={[
                  {
                    id: 'feature-1',
                    title: 'Responsive Design',
                    content: featureOneContent
                  },
                  {
                    id: 'feature-2',
                    title: 'Dark Mode Support',
                    content: featureTwoContent
                  },
                  {
                    id: 'feature-3',
                    title: 'TypeScript Ready',
                    content: featureThreeContent
                  }
                ]}
              />
            </div>

            <div class={pageStyles.componentShowcase.section}>
              <Text variant="h5" as="h5">Flush Style</Text>
              <Accordion
                flush={true}
                items={[
                  {
                    id: 'tip-1',
                    title: 'Quick Start',
                    content: tipOneContent
                  },
                  {
                    id: 'tip-2',
                    title: 'Best Practices',
                    content: tipTwoContent
                  }
                ]}
              />
            </div>
          </div>
        </Card>
      </div>

      <!-- Tables -->
      <div class={pageStyles.componentShowcase.container}>
        <Text variant="h4" as="h4">Tables</Text>
        <Card variant="elevated" padding="lg">
          <div class={pageStyles.componentShowcase.card}>
            <div class={pageStyles.componentShowcase.section}>
              <Text variant="h5" as="h5">File Explorer Style</Text>
              <Text variant="body" color="secondary">
                A table component inspired by Windows File Explorer with sortable columns and
                expandable rows for additional details.
              </Text>
              <Table columns={tableColumns} rows={tableRows} expandable={true} sortable={true} />
            </div>
          </div>
        </Card>
      </div>

      <!-- Modals -->
      <div class={pageStyles.componentShowcase.container}>
        <Text variant="h4" as="h4">Modals</Text>
        <Card variant="elevated" padding="lg">
          <div class={pageStyles.componentShowcase.card}>
            <div class={pageStyles.componentShowcase.section}>
              <Text variant="h5" as="h5">Basic Modal</Text>
              <div class={pageStyles.componentShowcase.buttonGrid}>
                <Button onclick={() => (defaultModalOpen = true)}>Open Default Modal</Button>
              </div>
            </div>
            <div class={pageStyles.componentShowcase.section}>
              <Text variant="h5" as="h5">Sizes</Text>
              <div class={pageStyles.componentShowcase.buttonGrid}>
                <Button variant="secondary" onclick={() => (sizeModalOpen = true)}
                  >Open Large Modal</Button
                >
              </div>
            </div>
            <div class={pageStyles.componentShowcase.section}>
              <Text variant="h5" as="h5">Positions</Text>
              <div class={pageStyles.componentShowcase.buttonGrid}>
                <Button variant="accent" onclick={() => (positionModalOpen = true)}
                  >Open Top Modal</Button
                >
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class={pageStyles.footer.container}>
    <div class={pageStyles.layout.maxWidth}>
      <div class={pageStyles.footer.content}>
        <Text variant="h3" as="h3">Flowind Design System</Text>
        <Text variant="body" color="secondary">
          Built with Svelte, Tailwind CSS, and Flowbite components.
        </Text>
        <div class={pageStyles.footer.links}>
          <a href="http://localhost:6006" class={pageStyles.footer.link}>Storybook</a>
          <a href="#components" class={pageStyles.footer.link}>Components</a>
          <a href="#tokens" class={pageStyles.footer.link}>Design Tokens</a>
        </div>
      </div>
    </div>
  </footer>
</div>

<!-- Modal Components - Placed outside main container to avoid positioning conflicts -->
<Modal bind:open={defaultModalOpen} title="Sample Modal">
  {#snippet body()}
    <Text variant="body" color="secondary">
      This is a default modal with standard styling. You can close it by clicking the X button,
      pressing Escape, or clicking outside the modal.
    </Text>
  {/snippet}
  {#snippet footer()}
    <Button variant="secondary" onclick={() => (defaultModalOpen = false)}>Cancel</Button>
    <Button onclick={() => (defaultModalOpen = false)}>Confirm</Button>
  {/snippet}
</Modal>

<Modal bind:open={sizeModalOpen} size="lg" title="Large Modal">
  {#snippet body()}
    <div class="space-y-4">
      <Text variant="body" color="secondary">
        This is a large modal that provides more space for complex content, forms, or data displays.
      </Text>
      <div class="grid grid-cols-2 gap-4">
        <div class="rounded bg-gray-100 p-4 dark:bg-gray-700">
          <Text variant="h6" color="primary">Feature One</Text>
          <Text variant="body" color="secondary">
            Large modals are perfect for detailed content.
          </Text>
        </div>
        <div class="rounded bg-gray-100 p-4 dark:bg-gray-700">
          <Text variant="h6" color="primary">Feature Two</Text>
          <Text variant="body" color="secondary">
            They provide enough space for multiple sections.
          </Text>
        </div>
      </div>
    </div>
  {/snippet}
  {#snippet footer()}
    <Button variant="secondary" onclick={() => (sizeModalOpen = false)}>Close</Button>
    <Button onclick={() => (sizeModalOpen = false)}>Save Changes</Button>
  {/snippet}
</Modal>

<Modal bind:open={positionModalOpen} position="top" title="Top Position Modal">
  {#snippet body()}
    <Text variant="body" color="secondary">
      This modal is positioned at the top of the screen instead of the center. Different positions
      can be useful for different use cases and user flows.
    </Text>
  {/snippet}
  {#snippet footer()}
    <Button variant="accent" onclick={() => (positionModalOpen = false)}>Got it!</Button>
  {/snippet}
</Modal>
