<script lang="ts">
  import { Button, Text, Badge } from '$lib/components/ui';
  import { pageStyles } from '$lib/styles/page.style';

  // Dark mode state
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
          // Default to light mode instead of following system preference
          isDarkMode = false;
        }
      } catch (_error) {
        // Default to light mode on error
        isDarkMode = false;
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
</script>

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
        <Button variant="outline" size="sm" onclick={toggleDarkMode} aria-label="Toggle dark mode">
          {isDarkMode ? '☀️' : '🌙'}
        </Button>
      </div>
    </div>
  </div>
</header>
