<script lang="ts">
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();
	let mobileMenuOpen = $state(false);

	// Close mobile menu after navigation
	afterNavigate(() => {
		mobileMenuOpen = false;
	});

	const toggleMobileMenu = () => {
		mobileMenuOpen = !mobileMenuOpen;
	};

	const studioNav = [
		{ label: 'STUDIO', href: '/fat-unc-studios' },
		{ label: 'RATES', href: '/fat-unc-studios#rates' },
		{ label: 'GEAR', href: '/fat-unc-studios#gear' },
		{ label: 'BOOK', href: '/fat-unc-studios#contact' },
		{ label: 'PORTFOLIO', href: '/' }
	];
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700;900&family=Rubik:wght@400;500;700;900&display=swap" rel="stylesheet">
</svelte:head>

<div class="studio-layout">
	<!-- Custom Studio Header -->
	<header class="studio-header">
		<nav class="studio-nav-container">
			<div class="studio-nav-content">
				<!-- Logo/Brand -->
				<a href="/fat-unc-studios" class="studio-logo">
					<span class="logo-fat">FAT UNC</span>
					<span class="logo-studios">STUDIOS</span>
				</a>

				<!-- Desktop Navigation -->
				<div class="desktop-nav">
					{#each studioNav as link}
						<a href={link.href} class="nav-link">
							{link.label}
						</a>
					{/each}
				</div>

				<!-- Mobile Hamburger Button -->
				<button
					onclick={toggleMobileMenu}
					class="mobile-menu-button"
					aria-label="Toggle menu"
					aria-expanded={mobileMenuOpen}
				>
					{#if mobileMenuOpen}
						<svg class="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{:else}
						<svg class="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					{/if}
				</button>
			</div>

			<!-- Mobile Navigation -->
			{#if mobileMenuOpen}
				<div class="mobile-nav">
					{#each studioNav as link}
						<a href={link.href} class="mobile-nav-link">
							{link.label}
						</a>
					{/each}
				</div>
			{/if}
		</nav>
	</header>

	<!-- Page Content -->
	<main class="studio-main">
		{@render children()}
	</main>
</div>

<style>
	.studio-layout {
		--studio-red: #ff0040;
		--studio-black: #0a0a0a;
		--studio-dark-gray: #1a1a1a;
		--studio-gray: #2a2a2a;
		--studio-light-gray: #666;
		--studio-white: #ffffff;
		--studio-yellow: #ffed00;
		
		--font-display: 'Bebas Neue', 'Arial Black', sans-serif;
		--font-condensed: 'Barlow Condensed', 'Arial Narrow', sans-serif;
		--font-body: 'Rubik', sans-serif;

		background: var(--studio-black);
		min-height: 100vh;
	}

	/* Header */
	.studio-header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		background: var(--studio-black);
		border-bottom: 4px solid var(--studio-red);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
	}

	.studio-nav-container {
		max-width: 1400px;
		margin: 0 auto;
	}

	.studio-nav-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 2rem;
	}

	/* Logo */
	.studio-logo {
		display: flex;
		flex-direction: column;
		line-height: 0.8;
		text-decoration: none;
		transition: transform 0.2s ease;
	}

	.studio-logo:hover {
		transform: scale(1.05) rotate(-1deg);
	}

	.logo-fat {
		font-family: var(--font-display);
		font-size: 2rem;
		color: var(--studio-white);
		text-shadow: 2px 2px 0 var(--studio-red);
		letter-spacing: 0.02em;
	}

	.logo-studios {
		font-family: var(--font-display);
		font-size: 1.5rem;
		color: var(--studio-yellow);
		text-shadow: 1px 1px 0 var(--studio-black);
		letter-spacing: 0.05em;
	}

	/* Desktop Navigation */
	.desktop-nav {
		display: none;
		gap: 0.5rem;
	}

	@media (min-width: 768px) {
		.desktop-nav {
			display: flex;
		}
	}

	.nav-link {
		font-family: var(--font-condensed);
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--studio-white);
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 1px;
		padding: 0.75rem 1.5rem;
		border: 3px solid transparent;
		transition: all 0.2s ease;
		position: relative;
	}

	.nav-link:hover {
		color: var(--studio-yellow);
		border: 3px solid var(--studio-red);
		background: var(--studio-dark-gray);
		transform: translateY(-2px);
	}

	.nav-link:active {
		transform: translateY(0);
	}

	/* Mobile Menu Button */
	.mobile-menu-button {
		display: block;
		padding: 0.5rem;
		color: var(--studio-white);
		background: transparent;
		border: 3px solid var(--studio-red);
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.mobile-menu-button:hover {
		background: var(--studio-red);
		border-color: var(--studio-yellow);
	}

	@media (min-width: 768px) {
		.mobile-menu-button {
			display: none;
		}
	}

	.menu-icon {
		width: 32px;
		height: 32px;
	}

	/* Mobile Navigation */
	.mobile-nav {
		display: flex;
		flex-direction: column;
		background: var(--studio-dark-gray);
		border-top: 2px solid var(--studio-red);
		padding: 1rem;
		gap: 0.5rem;
	}

	@media (min-width: 768px) {
		.mobile-nav {
			display: none;
		}
	}

	.mobile-nav-link {
		font-family: var(--font-condensed);
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--studio-white);
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 1px;
		padding: 1rem;
		border: 3px solid var(--studio-gray);
		background: var(--studio-gray);
		transition: all 0.2s ease;
		text-align: center;
	}

	.mobile-nav-link:hover {
		color: var(--studio-yellow);
		border-color: var(--studio-red);
		background: var(--studio-black);
	}

	/* Main Content */
	.studio-main {
		padding-top: 100px; /* Account for fixed header */
	}

	@media (max-width: 767px) {
		.studio-main {
			padding-top: 80px;
		}

		.logo-fat {
			font-size: 1.5rem;
		}

		.logo-studios {
			font-size: 1.2rem;
		}

		.studio-nav-content {
			padding: 1rem;
		}
	}
</style>
