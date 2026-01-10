<script lang="ts">
  import type { Project } from '$lib/types/project';
  import Card from './Card.svelte';

  interface Props {
    project: Project;
  }

  let { project }: Props = $props();
</script>

<Card hoverColor="purple">
  <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
    <div class="flex-1">
      <h3 class="text-2xl font-bold text-white mb-2">{project.title}</h3>
      <div class="flex flex-wrap gap-2 items-center text-sm mb-2">
        <span class="text-purple-400 font-semibold">{project.client}</span>
        <span class="text-gray-400">•</span>
        <span class="text-gray-300">{project.duration}</span>
      </div>
    </div>
    
    {#if project.liveUrl || project.githubUrl}
      <div class="flex gap-3">
        {#if project.liveUrl}
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-white hover:text-purple-400 transition-colors font-medium text-sm"
          >
            View Live →
          </a>
        {/if}
        {#if project.githubUrl}
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-white hover:text-purple-400 transition-colors font-medium text-sm"
          >
            GitHub →
          </a>
        {/if}
      </div>
    {/if}
  </div>

  <p class="text-gray-200 leading-relaxed mb-4">
    {project.description}
  </p>

  <div class="flex flex-wrap gap-2">
    {#each project.techStack as tech}
      <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-400/30">
        {tech}
      </span>
    {/each}
  </div>
</Card>
