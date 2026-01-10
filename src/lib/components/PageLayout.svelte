<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title: string;
    description: string;
    gradient: 'purple' | 'indigo';
    children: Snippet;
  }

  let { title, description, gradient, children }: Props = $props();
</script>

<section class="min-h-screen py-20 {gradient === 'purple' ? 'bg-gradient-portfolio-purple' : 'bg-gradient-portfolio-indigo'}">
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
