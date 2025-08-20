<script lang="ts">
  import { Text } from '$lib/components/ui';
  import { pageStyles } from '$lib/styles/page.style';
  import Header from '$lib/components/layout/Header.svelte';
  import Hero from '$lib/components/layout/Hero.svelte';
  import DesignTokens from '$lib/components/layout/DesignTokens.svelte';
  import Buttons from '$lib/components/showcase/Buttons.svelte';
  import Cards from '$lib/components/showcase/Cards.svelte';
  import FormElements from '$lib/components/showcase/FormElements.svelte';
  import Badges from '$lib/components/showcase/Badges.svelte';
  import TabsShowcase from '$lib/components/showcase/Tabs.svelte';
  import Accordions from '$lib/components/showcase/Accordions.svelte';
  import Tables from '$lib/components/showcase/Tables.svelte';
  import Modals from '$lib/components/showcase/Modals.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
</script>

<svelte:head>
  <title>Flowind Design System</title>
  <meta
    name="description"
    content="A comprehensive design system built with Svelte, Tailwind CSS, and Flowbite components"
  />
</svelte:head>

<div class={pageStyles.layout.container}>
  <Header />
  <Hero />
  <DesignTokens />

  <!-- Components Section -->
  <section id="components" class={pageStyles.section.gray}>
    <div class={pageStyles.layout.maxWidth}>
      <div class={pageStyles.section.header}>
        <Text variant="h3" as="h3">Components</Text>
        <Text variant="body" color="secondary">
          Reusable components built with consistent design tokens and accessibility in mind.
        </Text>
      </div>

      <Buttons />
      <Cards />
      <FormElements />
      <Badges />
      <TabsShowcase />
      <Accordions />
      <Tables />
      <Modals />
    </div>
  </section>

  <Footer />
</div>
