<script lang="ts">
  import { Tabs, Text, Card } from '$lib/components/ui';
  import { pageStyles } from '$lib/styles/page.style';
</script>

{#snippet tabOneContent()}
  <div class={pageStyles.tabsShowcase.content}>
    <Text variant="h6" color="primary">First Tab Content</Text>
    <Text variant="body" color="secondary">
      This is the content for the first tab. You can include any components, forms, or content here.
    </Text>
    <div class={pageStyles.tabsShowcase.contentBox}>
      <Text variant="bodySmall" color="secondary">
        This is an example of nested content within the tab.
      </Text>
    </div>
  </div>
{/snippet}

{#snippet tabTwoContent()}
  <div class={pageStyles.tabsShowcase.content}>
    <Text variant="h6" color="primary">Second Tab Content</Text>
    <Text variant="body" color="secondary">
      This tab contains different content. Tabs are great for organizing related information.
    </Text>
    <ul class={pageStyles.tabsShowcase.list}>
      <li><Text variant="body" color="secondary">Feature one</Text></li>
      <li><Text variant="body" color="secondary">Feature two</Text></li>
      <li><Text variant="body" color="secondary">Feature three</Text></li>
    </ul>
  </div>
{/snippet}

{#snippet tabThreeContent()}
  <div class={pageStyles.tabsShowcase.content}>
    <Text variant="h6" color="primary">Third Tab Content</Text>
    <Text variant="body" color="secondary">
      The third tab demonstrates how tabs can contain various types of content and components.
    </Text>
    <div class={pageStyles.tabsShowcase.grid}>
      <div class={pageStyles.tabsShowcase.primaryBox}>
        <Text variant="bodySmall" color="primary">Primary content</Text>
      </div>
      <div class={pageStyles.tabsShowcase.secondaryBox}>
        <Text variant="bodySmall" color="secondary">Secondary content</Text>
      </div>
    </div>
  </div>
{/snippet}

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
