<script lang="ts">
  import { onMount } from 'svelte';

  const ANIMATION_THRESHOLD = 0.25;

  let heroVisible = $state(false);
  let heroSection: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heroVisible = true;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: ANIMATION_THRESHOLD }
    );

    if (heroSection) observer.observe(heroSection);

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  });
</script>

<section 
  bind:this={heroSection} 
  aria-labelledby="hero-heading"
  class="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-400 via-gray-500 to-indigo-900 font-mono"
>
  <div class="text-center text-white px-4 max-w-4xl">
    <h1 id="hero-heading" class="text-5xl md:text-7xl font-bold mb-6 {heroVisible ? 'hero-title-in' : 'opacity-0'}">
      Hi, I'm Nate!
    </h1>
    <p class="text-2xl md:text-4xl font-bold mb-8 {heroVisible ? 'hero-subtitle-in' : 'opacity-0'}">
      Let's Build Something Great Together
    </p>
    <nav aria-label="Primary call to action" class="flex flex-wrap gap-4 justify-center {heroVisible ? 'hero-buttons-in' : 'opacity-0'}">
      <a 
        href="/experience" 
        class="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        View My Experience
      </a>
      <a 
        href="/projects" 
        class="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all"
      >
        See Projects
      </a>
    </nav>
  </div>
</section>

<style>
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes fadeInSlideDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

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

  .hero-title-in {
    animation: fadeInScale 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  .hero-subtitle-in {
    animation: fadeInSlideDown 1.2s ease-out 0.4s forwards;
  }

  .hero-buttons-in {
    animation: fadeInUp 1.2s ease-out 0.8s forwards;
  }
</style>
