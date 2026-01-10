<script lang="ts">
  import { TECH_STACK_ANIMATION_DELAY } from '$lib/constants/animation';
  import { techStack } from '$lib/data/tech-stack';
  import { intersectionObserver } from '$lib/actions/intersectionObserver';

  let techStackVisible = $state(false);
</script>

<section 
  use:intersectionObserver={{ onIntersect: () => (techStackVisible = true) }}
  aria-labelledby="tech-stack-heading"
  class="py-20 bg-gradient-portfolio-indigo"
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
