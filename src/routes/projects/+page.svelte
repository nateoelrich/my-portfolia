<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { projects } from '$lib/data/projects';
</script>

<svelte:head>
  <title>Projects - Nate Oelrich</title>
  <meta name="description" content="Professional projects and technical work by Nate Oelrich" />
</svelte:head>

<section class="min-h-screen py-20 bg-linear-to-br from-purple-900 via-gray-500 to-orange-400">
  <div class="container mx-auto px-4 max-w-5xl">
    <h1 class="text-5xl font-bold text-center text-white mb-4">Projects</h1>
    <p class="text-center text-gray-200 mb-12 text-lg">
      Notable projects and technical achievements
    </p>

    <div class="space-y-8">
      {#each projects as project}
        <ProjectCard {project} />
      {/each}
    </div>
  </div>
</section>
