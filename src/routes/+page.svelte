<script lang="ts">
  import { onMount } from 'svelte';

  // Homepage with hero section
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
  ];

  let techStackVisible = $state(false);
  let techStackSection: HTMLElement;
  let heroVisible = $state(false);
  let heroSection: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === techStackSection) {
              techStackVisible = true;
            } else if (entry.target === heroSection) {
              heroVisible = true;
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (techStackSection) {
      observer.observe(techStackSection);
    }
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (techStackSection) {
        observer.unobserve(techStackSection);
      }
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  });
</script>

<!-- Hero Section -->
<section bind:this={heroSection} class="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-400 via-gray-500 to-indigo-900 font-mono">
  <div class="text-center text-white px-4">
    <h1 class="text-5xl md:text-7xl font-bold mb-6 {heroVisible ? 'hero-title-in' : 'opacity-0'}">
      Hi, I'm Nate!
    </h1>
    <h3 class="text-2xl md:text-4xl font-bold mb-6 {heroVisible ? 'hero-subtitle-in' : 'opacity-0'}">
      Let's Build Something Great Together
    </h3>
    <div class="flex gap-4 justify-center {heroVisible ? 'hero-buttons-in' : 'opacity-0'}">
      <a href="/experience" class="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
        View My Experience
      </a>
      <a href="/projects" class="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition">
        See Projects
      </a>
    </div>
  </div>
</section>

<!-- About Section -->
<section class="py-20 bg-orange-400">
  <div class="container mx-auto px-4 max-w-4xl">
    <h2 class="text-4xl font-bold mb-12 text-center">About Me</h2>
    <div class="opacity-60 space-y-6">
      <p class="indent-8">
        <em>Before I was a software engineer, I was a poor kid, high school dropout, and a cold caller getting chewed out for minimum wage. Hitting my rock bottom at 17 years old
          was the catalyst I needed to get an education and turn my life around. Without any support from my family, I earned my GED, worked multiple jobs, and eventually enrolled in
          Clover Park Technical College to study Software Development. While there, I began my training as a leader in student government and since entering the workforce in 2013, 
          I've built a successful career in software as a well-rounded professional. I continued my education through self-study, online courses, and obtaining my BA in IT-Software Development 
          from Western Governors University in 2018.
        </em>
      </p>
      <p class="indent-8">
        <em>
          Throughout my career, I've worked with many different types of companies, technologies, and people. I've been in the private sector most recently, but my career started
          with a local regional agency. Most of my experience has been creating web-based solutions, but I've become proficient in both frontend and backend development, allowing me to 
          build software that delivers the best products for the business and those using it. My focus is understanding the product and the users who use them in order to create
          the most valuable solutions.
        </em>
      </p>
      <p class="indent-8">
        <em>
          My passion has always been to make a positive impact in the lives of others with the work that I do and the people I work with. Technology has the power to change lives and improve the world, and I recognize
          my role in that as a software engineer. Being a leader means helping others grow and succeed, and I take that responsibility seriously. I'm committed to the success of those 
          around me, because I understand that in order to truly succeed, we must lift others up along the way.
        </em>
      </p>
    </div>
  </div>
</section>

<!-- Skills/Tech Stack Section -->
<section bind:this={techStackSection} class="py-20 bg-linear-to-br from-indigo-900 via-gray-500 to-orange-400">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold mb-12 text-center">Tech Stack</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
      {#each techStack as tech, i}
        <div 
          class="group relative bg-amber-500/80 backdrop-blur-sm p-4 rounded-2xl text-center shadow-lg 
                 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 hover:bg-amber-400 
                 transition-all duration-300 ease-out cursor-pointer border border-amber-600/30
                 {techStackVisible ? 'animate-in' : 'opacity-0'}"
          style="animation-delay: {techStackVisible ? i * 0.05 : 0}s"
        >
          <div class="absolute inset-0 bg-linear-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <p class="font-semibold relative z-10 text-gray-900 group-hover:text-gray-800 transition-colors">{tech}</p>
        </div>
      {/each}
    </div>
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

  .animate-in {
    animation: fadeInUp 0.6s ease-out forwards;
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
