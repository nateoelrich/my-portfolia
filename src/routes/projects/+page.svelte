<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { projects } from '$lib/data/projects';
  import SEO from '$lib/components/SEO.svelte';
  import PageLayout from '$lib/components/PageLayout.svelte';
</script>

<SEO 
  title="Projects - Nate Oelrich"
  description="Professional projects and technical work by Nate Oelrich"
/>

<PageLayout 
  title="Projects" 
  description="Notable projects and technical achievements"
  gradientFrom="purple-900"
>
  {#each projects as project}
    <ProjectCard {project} />
  {/each}
</PageLayout>
