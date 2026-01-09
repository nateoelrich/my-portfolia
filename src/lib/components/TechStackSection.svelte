<script lang="ts">
  import { onMount } from 'svelte';

  const ANIMATION_THRESHOLD = 0.25;
  const TECH_STACK_ANIMATION_DELAY = 0.05;

  const techStack = [
    'C#',
    '.NET',
    'SQL',
    'PostgreSQL',
    'MongoDB',
    'Rest APIs',
    'GraphQL',
    'JavaScript',
    'TypeScript',
    'Svelte',
    'React',
    'VueJS',
    'HTML',
    'CSS',
    'Tailwind',
    'Docker',
    'Kubernetes',
    'Azure Cloud',
    'Git',
    'CI/CD',
    'WPF',
    'ASP.Net',
    'TDD',
    'AI Code Generation',
    'Agile',
    'Documentation',
    'Team Leadership',
    'Mentorship',
  ] as const;

  let techStackVisible = $state(false);
  let techStackSection: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            techStackVisible = true;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: ANIMATION_THRESHOLD }
    );

    if (techStackSection) observer.observe(techStackSection);

    return () => {
      if (techStackSection) observer.unobserve(techStackSection);
    };
  });
</script>

<section 
  bind:this={techStackSection} 
  aria-labelledby="tech-stack-heading"
  class="py-20 bg-linear-to-br from-indigo-900 via-gray-500 to-orange-400"
>
  <div class="container mx-auto px-4">
    <h2 id="tech-stack-heading" class="text-4xl font-bold mb-12 text-center">Tech Stack</h2>
    <ul 
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto list-none"
      role="list"
    >
      {#each techStack as tech, i}
        <li 
          class="relative bg-amber-500/80 backdrop-blur p-4 rounded-2xl text-center shadow-lg border border-amber-600/30 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 hover:bg-amber-400 transition-all duration-300 ease-out {techStackVisible ? 'animate-in' : 'opacity-0'}"
          style="animation-delay: {techStackVisible ? i * TECH_STACK_ANIMATION_DELAY : 0}s"
        >
          <div class="absolute inset-0 bg-linear-to-br from-white/10 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity" aria-hidden="true"></div>
          <span class="relative z-10 font-semibold text-gray-900 hover:text-gray-800 transition-colors">{tech}</span>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-in {
    animation: fadeInUp 0.6s ease-out forwards;
  }
</style>
