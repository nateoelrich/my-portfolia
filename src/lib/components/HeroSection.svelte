<script lang="ts">
  import { onMount } from 'svelte';
  import ScrollIndicator from './ScrollIndicator.svelte';

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
  class="hero-background h-[90vh] flex flex-col items-center justify-center font-mono relative overflow-hidden"
>
  <!-- Animated gradient background -->
  <div class="hero-gradient"></div>
  
  <!-- Cyberpunk grid lines -->
  <div class="hero-grid"></div>
  
  <!-- Glowing accents -->
  <div class="hero-accent hero-accent-1"></div>
  <div class="hero-accent hero-accent-2"></div>

  <div class="text-center text-white px-4 max-w-4xl relative z-10">
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

  <!-- Scroll indicator -->
  <ScrollIndicator visible={heroVisible} text="more about me..." />
</section>

<style>
  /* Hero background layers */
  .hero-background {
    position: relative;
    background: #1e1b4b; /* Fallback color */
  }

  /* Animated gradient background */
  .hero-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #fb923c, #1a1f3a, #312e81, #0f172a);
    background-size: 400% 400%;
    animation: gradientShift 20s ease infinite;
    z-index: 1;
  }

  /* Cyberpunk grid lines */
  .hero-grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(251, 146, 60, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(251, 146, 60, 0.1) 1px, transparent 1px),
      linear-gradient(rgba(147, 51, 234, 0.15) 1px, transparent 1px),
      linear-gradient(90deg, rgba(147, 51, 234, 0.15) 1px, transparent 1px);
    background-size: 50px 50px, 50px 50px, 100px 100px, 100px 100px;
    background-position: -1px -1px, -1px -1px, -1px -1px, -1px -1px;
    animation: gridScroll 20s linear infinite;
    z-index: 2;
  }

  /* Glowing accent lines */
  .hero-accent {
    position: absolute;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.8), transparent);
    box-shadow: 0 0 20px rgba(251, 146, 60, 0.6), 0 0 40px rgba(251, 146, 60, 0.4);
    z-index: 3;
  }

  .hero-accent-1 {
    width: 60%;
    top: 20%;
    left: -20%;
    animation: slideRight 8s ease-in-out infinite;
  }

  .hero-accent-2 {
    width: 50%;
    bottom: 30%;
    right: -15%;
    background: linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.8), transparent);
    box-shadow: 0 0 20px rgba(147, 51, 234, 0.6), 0 0 40px rgba(147, 51, 234, 0.4);
    animation: slideLeft 10s ease-in-out infinite 2s;
  }

  /* Animations */
  @keyframes gradientShift {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes gridScroll {
    0% {
      transform: translateY(0) translateX(0);
    }
    100% {
      transform: translateY(50px) translateX(50px);
    }
  }

  @keyframes slideRight {
    0%, 100% {
      transform: translateX(0);
      opacity: 0.3;
    }
    50% {
      transform: translateX(40%);
      opacity: 0.8;
    }
  }

  @keyframes slideLeft {
    0%, 100% {
      transform: translateX(0);
      opacity: 0.3;
    }
    50% {
      transform: translateX(-40%);
      opacity: 0.8;
    }
  }

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
