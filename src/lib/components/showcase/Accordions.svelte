<script lang="ts">
  import { Accordion, Text, Card } from '$lib/components/ui';
  import { pageStyles } from '$lib/styles/page.style';
</script>

{#snippet faqOneContent()}
  <div class="space-y-3">
    <Text variant="body" color="secondary">
      Flowind is a comprehensive design system built with Svelte and Tailwind CSS. It provides
      consistent, accessible, and customizable components for modern web applications.
    </Text>
    <Text variant="body" color="secondary">
      The design system includes a complete set of design tokens, reusable components, and
      comprehensive documentation to ensure visual consistency across your projects.
    </Text>
  </div>
{/snippet}

{#snippet faqTwoContent()}
  <div class="space-y-3">
    <Text variant="body" color="secondary">
      Components can be customized through CSS custom properties, Tailwind classes, or by modifying
      the component source code directly.
    </Text>
    <Text variant="body" color="secondary">
      Each component follows our design tokens and color strategy, making it easy to maintain
      consistency while allowing for project-specific customizations.
    </Text>
  </div>
{/snippet}

{#snippet faqThreeContent()}
  <div class="space-y-3">
    <Text variant="body" color="secondary">
      Yes! All components are built with accessibility in mind, following WCAG guidelines and best
      practices for keyboard navigation, screen readers, and other assistive technologies.
    </Text>
    <Text variant="body" color="secondary">
      Components include proper ARIA attributes, focus management, and semantic HTML structure.
    </Text>
  </div>
{/snippet}

{#snippet featureOneContent()}
  <div class="space-y-3">
    <Text variant="body" color="secondary">
      All components are built with responsive design principles, ensuring they work seamlessly
      across desktop, tablet, and mobile devices.
    </Text>
    <Text variant="body" color="secondary">
      The design system uses flexible layouts and adaptive sizing to provide optimal user
      experiences on any screen size.
    </Text>
  </div>
{/snippet}

{#snippet featureTwoContent()}
  <div class="space-y-3">
    <Text variant="body" color="secondary">
      Full dark mode support is built into every component, with automatic theme switching and
      persistent user preferences.
    </Text>
    <Text variant="body" color="secondary">
      The color strategy ensures proper contrast and readability in both light and dark modes.
    </Text>
  </div>
{/snippet}

{#snippet featureThreeContent()}
  <div class="space-y-3">
    <Text variant="body" color="secondary">
      Built with TypeScript from the ground up, providing excellent developer experience with type
      safety, IntelliSense, and compile-time error checking.
    </Text>
    <Text variant="body" color="secondary">
      All components include proper TypeScript interfaces and type definitions.
    </Text>
  </div>
{/snippet}

{#snippet tipOneContent()}
  <div class="space-y-3">
    <Text variant="body" color="secondary">
      Install the package and import components as needed. Check the documentation for detailed
      setup instructions and examples.
    </Text>
  </div>
{/snippet}

{#snippet tipTwoContent()}
  <div class="space-y-3">
    <Text variant="body" color="secondary">
      Follow the established patterns, use the design tokens consistently, and test components
      across different devices and browsers.
    </Text>
  </div>
{/snippet}

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
