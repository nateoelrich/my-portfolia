<script lang="ts">
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
    'Azure Cloud Services',
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
    'Dad Jokes',
    'Star Wars',
    'Life Long Sutdent',
    'Multi-instrumentalist'
  ];
</script>

<!-- Hero Section -->
<div class="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-400 via-gray-500 to-indigo-900">
  <div class="text-center text-white px-4">
    <h1 class="text-5xl md:text-7xl font-bold mb-6">
      Hi, I'm Nate!
    </h1>
     <h3 class="text-2xl md:text-4xl font-bold mb-6">
      Let's Build Something Great Together
    </h3>
    <p class="text-xl md:text-2xl mb-8 text-gray-100">
      Dynamic Software Engineer and Emerging People Leader
    </p>
    <div class="flex gap-4 justify-center">
      <a href="/experience" class="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
        View My Experience
      </a>
      <a href="/projects" class="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition">
        See Projects
      </a>
    </div>
  </div>
</div>

<!-- About Section -->
<div class="containerpx-4 py-20 bg-amber-500 opacity-60">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-4xl font-bold mb-8 text-center">About Me</h2>
    <div class="prose prose-lg dark:prose-invert mx-auto">
      <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
        I'm a passionate software engineer with a decade of experience building scalable, 
        performant applications. I specialize in modern web technologies and have a proven 
        track record of delivering high-quality solutions.
      </p>
      <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Throughout my career, I've worked with diverse teams and technologies, from frontend 
        frameworks to backend systems. I'm always excited to tackle new challenges and 
        continuously learn new technologies.
      </p>
    </div>
  </div>
</div>

<!-- Skills/Tech Stack Section -->
<div class="bg-linear-to-br from-indigo-900 via-gray-500 to-orange-400 py-20">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold mb-12 text-center">Tech Stack</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {#each techStack as tech}
        <div class="bg-amber-500 p-3 rounded-lg text-center shadow-md opacity-60 hover:opacity-100 transition">
          <p class="font-semibold">{tech}</p>
        </div>
      {/each}
    </div>
  </div>
</div>
