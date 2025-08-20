<script lang="ts">
  import { Modal, Button, Text, Card } from '$lib/components/ui';
  import { pageStyles } from '$lib/styles/page.style';

  // Modal state management
  let defaultModalOpen = $state(false);
  let sizeModalOpen = $state(false);
  let positionModalOpen = $state(false);
</script>

{#snippet defaultModalBody()}
  <div class={pageStyles.modalShowcase.content}>
    <Text variant="body" color="secondary">
      Are you sure you want to perform this action? This cannot be undone.
    </Text>
    <div class={pageStyles.modalShowcase.warningBox}>
      <div class={pageStyles.modalShowcase.warningIcon}></div>
      <Text variant="bodySmall" color="secondary">
        This will permanently delete the selected items.
      </Text>
    </div>
  </div>
{/snippet}

{#snippet defaultModalFooter()}
  <div class={pageStyles.modalShowcase.footer}>
    <Button variant="outline" onclick={() => (defaultModalOpen = false)}>Cancel</Button>
    <Button variant="error" onclick={() => (defaultModalOpen = false)}>Delete</Button>
  </div>
{/snippet}

{#snippet sizeModalBody()}
  <div class={pageStyles.modalShowcase.content}>
    <Text variant="body" color="secondary">
      This is a large modal that provides more space for complex content, forms, or detailed
      information display.
    </Text>
    <div class={pageStyles.modalShowcase.grid}>
      <div class={pageStyles.modalShowcase.gridItem}>
        <Text variant="h6" color="primary">Features</Text>
        <ul class={pageStyles.modalShowcase.list}>
          <li>• Responsive design</li>
          <li>• Dark mode support</li>
          <li>• Keyboard navigation</li>
          <li>• Focus management</li>
        </ul>
      </div>
      <div class={pageStyles.modalShowcase.gridItem}>
        <Text variant="h6" color="primary">Benefits</Text>
        <ul class={pageStyles.modalShowcase.list}>
          <li>• Better user experience</li>
          <li>• Consistent styling</li>
          <li>• Accessibility compliant</li>
          <li>• Easy customization</li>
        </ul>
      </div>
    </div>
  </div>
{/snippet}

{#snippet sizeModalFooter()}
  <div class={pageStyles.modalShowcase.footer}>
    <Button variant="outline" onclick={() => (sizeModalOpen = false)}>Close</Button>
    <Button variant="primary" onclick={() => (sizeModalOpen = false)}>Save Changes</Button>
  </div>
{/snippet}

{#snippet positionModalBody()}
  <div class={pageStyles.modalShowcase.content}>
    <Text variant="body" color="secondary">
      This modal is positioned at the top of the screen instead of the center. Top positioning can
      be useful for notifications, quick confirmations, or when you want to keep the modal visible
      while users scroll through content below.
    </Text>
    <div class={pageStyles.modalShowcase.infoBox}>
      <Text variant="bodySmall" color="primary">
        Top positioning is great for non-intrusive notifications and quick actions that don't
        require the user's full attention.
      </Text>
    </div>
  </div>
{/snippet}

{#snippet positionModalFooter()}
  <div class={pageStyles.modalShowcase.footer}>
    <Button variant="outline" onclick={() => (positionModalOpen = false)}>Cancel</Button>
    <Button variant="primary" onclick={() => (positionModalOpen = false)}>Confirm</Button>
  </div>
{/snippet}

<div class={pageStyles.componentShowcase.container}>
  <Text variant="h4" as="h4">Modals</Text>

  <!-- Default Modal -->
  <div class={pageStyles.modalShowcase.card}>
    <Card variant="elevated" padding="lg">
      <div class={pageStyles.componentShowcase.section}>
        <Text variant="h5" as="h5">Default Modal</Text>
        <Text variant="body" color="secondary">
          A standard modal with header, body, and footer sections. Perfect for confirmations, forms,
          and content display.
        </Text>
        <Button variant="primary" onclick={() => (defaultModalOpen = true)}>
          Open Default Modal
        </Button>
      </div>
    </Card>
  </div>

  <!-- Size Variants -->
  <div class={pageStyles.modalShowcase.card}>
    <Card variant="elevated" padding="lg">
      <div class={pageStyles.componentShowcase.section}>
        <Text variant="h5" as="h5">Size Variants</Text>
        <Text variant="body" color="secondary">
          Modals come in different sizes to accommodate various content types and use cases.
        </Text>
        <div class={pageStyles.modalShowcase.buttonContainer}>
          <Button variant="outline" onclick={() => (sizeModalOpen = true)}>Open Large Modal</Button>
        </div>
      </div>
    </Card>
  </div>

  <!-- Position Variants -->
  <div class={pageStyles.modalShowcase.card}>
    <Card variant="elevated" padding="lg">
      <div class={pageStyles.componentShowcase.section}>
        <Text variant="h5" as="h5">Position Variants</Text>
        <Text variant="body" color="secondary">
          Modals can be positioned differently on the screen for better user experience.
        </Text>
        <Button variant="outline" onclick={() => (positionModalOpen = true)}>Open Top Modal</Button>
      </div>
    </Card>
  </div>

  <!-- Default Modal -->
  <Modal
    bind:open={defaultModalOpen}
    title="Confirm Action"
    body={defaultModalBody}
    footer={defaultModalFooter}
  />

  <!-- Size Modal -->
  <Modal
    bind:open={sizeModalOpen}
    title="Large Modal"
    size="lg"
    body={sizeModalBody}
    footer={sizeModalFooter}
  />

  <!-- Position Modal -->
  <Modal
    bind:open={positionModalOpen}
    title="Top Position Modal"
    position="top"
    body={positionModalBody}
    footer={positionModalFooter}
  />
</div>
