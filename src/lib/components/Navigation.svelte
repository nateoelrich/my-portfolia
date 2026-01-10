<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import favicon from '$lib/assets/favicon.ico';
	import { navigationLinks } from '$lib/data/navigation-links';

	interface Props {
		currentPath: string;
	}

	let { currentPath }: Props = $props();
	let mobileMenuOpen = $state(false);

	// Close mobile menu after navigation completes
	afterNavigate(() => {
		mobileMenuOpen = false;
	});

	const toggleMobileMenu = () => {
		mobileMenuOpen = !mobileMenuOpen;
	};
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-white/10">
	<nav class="container mx-auto px-4 py-4 max-w-350">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<a href="/" class="flex items-center hover:opacity-80 transition-opacity">
				<img src={favicon} alt="Nate Oelrich" class="w-8 h-8" />
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex gap-6">
				{#each navigationLinks as link}
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
					{#each navigationLinks as link}
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
