<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Modal from '$lib/components/ui/Modal.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import Text from '$lib/components/ui/Text.svelte';

  const { Story } = defineMeta({
    title: 'UI/Modal',
    component: Modal,
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component:
            'A modal component for displaying content in an overlay. Supports multiple sizes, positions, and customizable content areas.'
        }
      }
    },
    argTypes: {
      open: {
        control: { type: 'boolean' },
        description: 'Whether the modal is open'
      },
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg', 'xl', 'full'],
        description: 'The size of the modal'
      },
      position: {
        control: { type: 'select' },
        options: ['center', 'top', 'bottom', 'left', 'right'],
        description: 'The position of the modal'
      },
      title: {
        control: { type: 'text' },
        description: 'The title of the modal'
      },
      closable: {
        control: { type: 'boolean' },
        description: 'Whether the modal can be closed by the user'
      }
    },
    tags: ['autodocs']
  });
</script>

<Story name="Documentation" parameters={{ previewTabs: { canvas: { hidden: true } } }} asChild>
  <div class="space-y-4">
    <Text variant="h3">Modal Component</Text>
    <Text color="secondary">
      Interactive modal dialogs for displaying content in an overlay. Click the individual story
      tabs (Default, Small, Large, etc.) to see the modals in action.
    </Text>

    <div class="space-y-2">
      <Text variant="h4">Available Sizes</Text>
      <Text variant="bodySmall" color="secondary">sm, md (default), lg, xl, full</Text>
    </div>

    <div class="space-y-2">
      <Text variant="h4">Available Positions</Text>
      <Text variant="bodySmall" color="secondary">center (default), top, bottom, left, right</Text>
    </div>

    <div class="space-y-2">
      <Text variant="h4">Features</Text>
      <ul class="space-y-1">
        <li>
          <Text variant="bodySmall" color="secondary">• Keyboard navigation (ESC to close)</Text>
        </li>
        <li><Text variant="bodySmall" color="secondary">• Click outside to close</Text></li>
        <li>
          <Text variant="bodySmall" color="secondary"
            >• Customizable content with header, body, and footer snippets</Text
          >
        </li>
        <li><Text variant="bodySmall" color="secondary">• Optional close button</Text></li>
      </ul>
    </div>
  </div>
</Story>

<Story name="Default" parameters={{ docs: { disable: true } }} asChild>
  <Modal open={true} title="Sample Modal">
    {#snippet body()}
      <Text color="secondary">
        This is a sample modal with a title and close button. You can close it by clicking the X
        button, pressing Escape, or clicking outside the modal.
      </Text>
    {/snippet}

    {#snippet footer()}
      <Button variant="secondary">Cancel</Button>
      <Button>Confirm</Button>
    {/snippet}
  </Modal>
</Story>

<Story name="Small" parameters={{ docs: { disable: true } }} asChild>
  <Modal open={true} size="sm" title="Small Modal">
    {#snippet body()}
      <Text color="secondary">
        This is a small modal, perfect for confirmations and simple messages.
      </Text>
    {/snippet}

    {#snippet footer()}
      <Button variant="secondary">Cancel</Button>
      <Button>Confirm</Button>
    {/snippet}
  </Modal>
</Story>

<Story name="Large" parameters={{ docs: { disable: true } }} asChild>
  <Modal open={true} size="lg" title="Large Modal">
    {#snippet body()}
      <Text color="secondary">This is a large modal, perfect for forms and detailed content.</Text>
      <div class="space-y-3">
        <div class="rounded bg-gray-100 p-3 dark:bg-gray-700">
          <Text variant="bodySmall" color="secondary">
            Large modals provide more space for complex content, forms, or data tables.
          </Text>
        </div>
        <div class="rounded bg-gray-100 p-3 dark:bg-gray-700">
          <Text variant="bodySmall" color="secondary">
            They're ideal when you need to display multiple sections or require user input.
          </Text>
        </div>
      </div>
    {/snippet}

    {#snippet footer()}
      <Button variant="secondary">Cancel</Button>
      <Button>Save Changes</Button>
    {/snippet}
  </Modal>
</Story>

<Story name="Top Position" parameters={{ docs: { disable: true } }} asChild>
  <Modal open={true} position="top" title="Top Position Modal">
    {#snippet body()}
      <Text color="secondary">
        This modal is positioned at the top of the screen. Different positions can be useful for
        different use cases.
      </Text>
    {/snippet}

    {#snippet footer()}
      <Button variant="secondary">Close</Button>
    {/snippet}
  </Modal>
</Story>

<Story name="Non-closable" parameters={{ docs: { disable: true } }} asChild>
  <Modal open={true} closable={false} title="Processing...">
    {#snippet body()}
      <div class="py-8 text-center">
        <div
          class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900"
        >
          <svg
            class="h-6 w-6 animate-spin text-primary-600 dark:text-primary-400"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
        <Text color="secondary">
          This modal cannot be closed by the user. It's useful for processing states or important
          confirmations.
        </Text>
      </div>
    {/snippet}

    <!-- No footer for non-closable modal -->
  </Modal>
</Story>
