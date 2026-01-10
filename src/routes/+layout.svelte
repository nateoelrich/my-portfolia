<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
	import { afterNavigate } from '$app/navigation';

	let { children, data } = $props();
	let mobileMenuOpen = $state(false);
  
	// Close mobile menu after navigation completes
	afterNavigate(() => {
		mobileMenuOpen = false;
	});

	const toggleMobileMenu = () => {
		mobileMenuOpen = !mobileMenuOpen;
	};

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/experience', label: 'Experience' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/personal', label: 'Personal' },
	];

	// Track current path for active link styling
	let currentPath = $state('/');
	if (typeof window !== 'undefined') {
		currentPath = window.location.pathname;
	}

	// Update currentPath after navigation
	afterNavigate((navigation) => {
		currentPath = navigation.to?.url.pathname || '/';
	});
</script>

<svelte:head>
	<title>Nate Oelrich | Software Engineer</title>
	<meta name="description" content="Portfolio of Nate Oelrich - Dynamic Software Engineer with 10 years of experience" />
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Checkerboard background for ultra-wide screens -->
<div class="checkerboard-bg">
	<!-- Content wrapper with max width -->
	<div class="content-max-width">
		{#if currentPath !== '/'}
			<!-- Navigation Header -->
			<header class="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-white/10">
				<nav class="container mx-auto px-4 py-4 max-w-350">
					<div class="flex items-center justify-between">
						<!-- Logo -->
						<a href="/" class="flex items-center hover:opacity-80 transition-opacity">
							<img src={favicon} alt="Nate Oelrich" class="w-8 h-8" />
						</a>

						<!-- Desktop Navigation -->
						<div class="hidden md:flex gap-6">
							{#each navLinks as link}
								<a 
									href={link.href} 
									class="text-white hover:text-orange-400 transition-colors font-medium"
									class:text-orange-400={currentPath === link.href}
								>
									{link.label}
								</a>
							{/each}
						</div>

						<!-- Mobile Hamburger Button -->
						<button
							onclick={toggleMobileMenu}
							class="md:hidden text-white p-2 hover:bg-white/10 rounded transition-colors"
							aria-label="Toggle menu"
							aria-expanded={mobileMenuOpen}
						>
							{#if mobileMenuOpen}
								<!-- X icon -->
								<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							{:else}
								<!-- Hamburger icon -->
								<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							{/if}
						</button>
					</div>

					<!-- Mobile Menu -->
					{#if mobileMenuOpen}
						<div class="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
							<div class="flex flex-col gap-4">
								{#each navLinks as link}
									<a 
										href={link.href} 
										class="text-white hover:text-orange-400 transition-colors font-medium py-2"
										class:text-orange-400={currentPath === link.href}
									>
										{link.label}
									</a>
								{/each}
							</div>
						</div>
					{/if}
				</nav>
			</header>
		{/if}

		<!-- Main content with top padding to account for fixed nav -->
		<div class="font-mono" class:pt-16={currentPath !== '/'}>
			{@render children()}
		</div>

		<!-- Footer -->
		<footer class="bg-indigo-950 text-white py-12">
			<div class="container mx-auto px-4 text-center">
				<p class="mb-4">© {new Date().getFullYear()} Nate Oelrich. All rights reserved.</p>
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
	</div>
</div>

<style>
	/* Checkerboard background for ultra-wide screens */
	.checkerboard-bg {
		min-height: 100vh;
		background-color: #2a2a2a;
		background-image: 
			linear-gradient(45deg, #4a4a4a 25%, transparent 25%),
			linear-gradient(-45deg, #4a4a4a 25%, transparent 25%),
			linear-gradient(45deg, transparent 75%, #4a4a4a 75%),
			linear-gradient(-45deg, transparent 75%, #4a4a4a 75%),
			radial-gradient(circle at 20% 30%, rgba(251, 146, 60, 0.15) 0%, transparent 50%),
			radial-gradient(circle at 80% 70%, rgba(251, 146, 60, 0.12) 0%, transparent 50%);
		background-size: 40px 40px, 40px 40px, 40px 40px, 40px 40px, 100% 100%, 100% 100%;
		background-position: 0 0, 0 20px, 20px -20px, -20px 0px, 0 0, 0 0;
	}

	/* Content wrapper with max width */
	.content-max-width {
		max-width: 1400px;
		margin: 0 auto;
		background: white;
		box-shadow: 0 0 60px rgba(0, 0, 0, 0.5), 0 0 80px rgba(251, 146, 60, 0.2);
	}
</style>
