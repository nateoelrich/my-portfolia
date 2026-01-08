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
</script>

<!-- Hero Section -->
<div class="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-400 via-gray-500 to-indigo-900 font-mono">
  <div class="text-center text-white px-4">
    <h1 class="text-5xl md:text-7xl font-bold mb-6">
      Hi, I'm Nate!
    </h1>
     <h3 class="text-2xl md:text-4xl font-bold mb-6">
      Let's Build Something Great Together
    </h3>
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
<div class="container mx-auto px-4 py-20 bg-orange-400">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-4xl font-bold mb-12 text-center">About Me</h2>
    <div class="font-mono font-thin opacity-60">
        <p class="mb-6 0">
            &emsp;
            <em>Before I was a software engineer, I was a poor kid, high school dropout, and a cold caller getting chewed out for minimum wage. Hitting my rock bottom at 17 years old
                was the catalyst I needed to get an education and turn my life around. Without any support from my family, I earned my GED, worked multiple jobs, and eventually enrolled in
                Clover Park Technical College to study Software Development. While there, I began my training as a leader in student government and since entering the workforce in 2013, 
                I've built a successful career in software as a well-rounded professional. I continued my education through self-study, online courses, and obtaining my BA in IT-Software Development 
                from Western Governors University in 2018.
            </em>
        </p>
        <p class="mb-6">
            &emsp;
            <em>
                Throughout my career, I've worked with many different types of companies, technologies, and people. I've been in the private sector most recently, but my career started
                with a local regional agency. Most of my experience has been creating web-based solutions, but I've become proficient in both frontend and backend development, allowing me to 
                build software that delivers the best products for the business and those using it. My focus is understanding the product and the users who use them in order to create
                the most valuable solutions.
            </em>
        </p>
        <p class="mb-6">
            &emsp;
            <em>
                My passion has always been to make a positive impact in the lives of others with the work that I do and the people I work with. Technology has the power to change lives and improve the world, and I recognize
                my role in that as a software engineer. Being a leader means helping others grow and succeed, and I take that responsibility seriously. I'm committed to the success of those 
                around me, because I understand that in order to truly succeed, we must lift others up along the way.
            </em>
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
