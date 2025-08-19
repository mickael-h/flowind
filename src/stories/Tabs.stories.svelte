<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Tabs from '$lib/components/ui/Tabs.svelte';
  import Text from '$lib/components/ui/Text.svelte';

  const { Story } = defineMeta({
    title: 'UI/Tabs',
    component: Tabs,
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component:
            'Tabs container supporting positions: top, bottom, left, right. Uses Svelte 5 snippets for panel content.'
        }
      }
    },
    argTypes: {
      position: {
        control: { type: 'select' },
        options: ['top', 'bottom', 'left', 'right']
      }
    },
    tags: ['autodocs']
  });
</script>

{#snippet tabOneContent()}
  <Text>Content for tab one.</Text>
{/snippet}

{#snippet tabTwoContent()}
  <Text>Content for tab two.</Text>
{/snippet}

{#snippet tabThreeContent()}
  <Text>Content for tab three.</Text>
{/snippet}

<Story name="Top" asChild>
  <Tabs
    position="top"
    items={[
      { id: 'one', label: 'One', content: tabOneContent },
      { id: 'two', label: 'Two', content: tabTwoContent },
      { id: 'three', label: 'Three', content: tabThreeContent }
    ]}
    activeId="one"
  />
</Story>

<Story name="Bottom" asChild>
  <Tabs
    position="bottom"
    items={[
      { id: 'one', label: 'One', content: tabOneContent },
      { id: 'two', label: 'Two', content: tabTwoContent },
      { id: 'three', label: 'Three', content: tabThreeContent }
    ]}
    activeId="one"
  />
</Story>

<Story name="Left" asChild>
  <Tabs
    position="left"
    items={[
      { id: 'one', label: 'One', content: tabOneContent },
      { id: 'two', label: 'Two', content: tabTwoContent },
      { id: 'three', label: 'Three', content: tabThreeContent }
    ]}
    activeId="one"
  />
</Story>

<Story name="Right" asChild>
  <Tabs
    position="right"
    items={[
      { id: 'one', label: 'One', content: tabOneContent },
      { id: 'two', label: 'Two', content: tabTwoContent },
      { id: 'three', label: 'Three', content: tabThreeContent }
    ]}
    activeId="one"
  />
</Story>
