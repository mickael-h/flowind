<script lang="ts">
  import { Text } from '$lib/components/ui';
  import { pageStyles } from '$lib/styles/page.style';
</script>

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
          <div class={pageStyles.colorPalette.colorSwatchPrimary}></div>
          <Text variant="bodySmall" color="primary">Primary 500</Text>
          <Text variant="caption" color="secondary">#3b82f6</Text>
        </div>
        <div class={pageStyles.colorPalette.colorItem}>
          <div class={pageStyles.colorPalette.colorSwatchSecondary}></div>
          <Text variant="bodySmall" color="primary">Secondary 500</Text>
          <Text variant="caption" color="secondary">#64748b</Text>
        </div>
        <div class={pageStyles.colorPalette.colorItem}>
          <div class={pageStyles.colorPalette.colorSwatchAccent}></div>
          <Text variant="bodySmall" color="primary">Accent 500</Text>
          <Text variant="caption" color="secondary">#d946ef</Text>
        </div>
        <div class={pageStyles.colorPalette.colorItem}>
          <div class={pageStyles.colorPalette.colorSwatchSuccess}></div>
          <Text variant="bodySmall" color="primary">Success 500</Text>
          <Text variant="caption" color="secondary">#22c55e</Text>
        </div>
        <div class={pageStyles.colorPalette.colorItem}>
          <div class={pageStyles.colorPalette.colorSwatchWarning}></div>
          <Text variant="bodySmall" color="primary">Warning 500</Text>
          <Text variant="caption" color="secondary">#f59e0b</Text>
        </div>
        <div class={pageStyles.colorPalette.colorItem}>
          <div class={pageStyles.colorPalette.colorSwatchError}></div>
          <Text variant="bodySmall" color="primary">Error 500</Text>
          <Text variant="caption" color="secondary">#ef4444</Text>
        </div>
      </div>
    </div>

    <!-- Dark Mode Color Palette -->
    <div class={pageStyles.colorPalette.container}>
      <Text variant="h4" as="h4">Dark Mode Color Palette</Text>
      <Text variant="body" color="secondary">
        Lighter shades used for better contrast in dark mode.
      </Text>
      <div class={pageStyles.colorPalette.grid}>
        <!-- Dark Mode Primary Colors -->
        <div class={pageStyles.colorPalette.colorItem}>
          <div class={pageStyles.colorPalette.colorSwatchPrimaryDark}></div>
          <Text variant="bodySmall" color="primary">Primary 400</Text>
          <Text variant="caption" color="secondary">#60a5fa</Text>
        </div>
        <div class={pageStyles.colorPalette.colorItem}>
          <div class={pageStyles.colorPalette.colorSwatchSecondaryDark}></div>
          <Text variant="bodySmall" color="primary">Secondary 400</Text>
          <Text variant="caption" color="secondary">#94a3b8</Text>
        </div>
        <div class={pageStyles.colorPalette.colorItem}>
          <div class={pageStyles.colorPalette.colorSwatchAccentDark}></div>
          <Text variant="bodySmall" color="primary">Accent 400</Text>
          <Text variant="caption" color="secondary">#e879f9</Text>
        </div>
        <div class={pageStyles.colorPalette.colorItem}>
          <div class={pageStyles.colorPalette.colorSwatchSuccessDark}></div>
          <Text variant="bodySmall" color="primary">Success 400</Text>
          <Text variant="caption" color="secondary">#4ade80</Text>
        </div>
        <div class={pageStyles.colorPalette.colorItem}>
          <div class={pageStyles.colorPalette.colorSwatchWarningDark}></div>
          <Text variant="bodySmall" color="primary">Warning 400</Text>
          <Text variant="caption" color="secondary">#fbbf24</Text>
        </div>
        <div class={pageStyles.colorPalette.colorItem}>
          <div class={pageStyles.colorPalette.colorSwatchErrorDark}></div>
          <Text variant="bodySmall" color="primary">Error 400</Text>
          <Text variant="caption" color="secondary">#f87171</Text>
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
