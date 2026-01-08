<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<!-- Navigation -->
<nav class="fixed top-0 left-0 right-0 bg-indigo-900 backdrop-blur-sm shadow-md z-50">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <a href="/" class="text-xl font-bold text-gray-800 dark:text-white">
        @nateoelrich
      </a>
      <div class="flex gap-6">
        <a href="/" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
          Home
        </a>
        <a href="/experience" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
          Experience
        </a>
        <a href="/projects" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
          Projects
        </a>
        <a href="/personal" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
          Personal
        </a>
      </div>
    </div>
  </div>
</nav>

<!-- Main content with top padding to account for fixed nav -->
<div class="pt-16 font-mono">
  {@render children()}
</div>

<!-- Footer -->
<footer class="bg-indigo-950 text-white py-12">
  <div class="container mx-auto px-4 text-center">
    <p class="mb-4">© {new Date().getFullYear()} [Nate Oelrich]. All rights reserved.</p>
    <div class="flex gap-6 justify-center">
      <a href="https://github.com/nateoelrich" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/nate-oelrich/" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition">
        LinkedIn
      </a>
      <a href="mailto:nate.oelrich@gmail.com" class="hover:text-blue-400 transition">
        Email
      </a>
    </div>
  </div>
</footer>
