<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title: string;
    description: string;
    gradientFrom: string;
    children: Snippet;
  }

  let { title, description, gradientFrom, children }: Props = $props();
</script>

<section class="min-h-screen py-20 bg-linear-to-br from-{gradientFrom} via-gray-500 to-orange-400">
  <div class="container mx-auto px-4 max-w-5xl">
    <h1 class="text-5xl font-bold text-center text-white mb-4">{title}</h1>
    <p class="text-center text-gray-200 mb-12 text-lg">
      {description}
    </p>

    <div class="space-y-8">
      {@render children()}
    </div>
  </div>
</section>
