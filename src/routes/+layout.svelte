<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';

	let { children } = $props();
</script>

<svelte:head>
	<title>Nate Oelrich | Software Engineer</title>
	<meta name="description" content="Portfolio of Nate Oelrich - Dynamic Software Engineer with 10 years of experience" />
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Main content with top padding to account for fixed nav -->
<div class="font-mono">
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
