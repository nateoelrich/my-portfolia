<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
	import { afterNavigate } from '$app/navigation';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children, data } = $props();

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

<div class="checkerboard-bg">
	<div class="content-max-width">
		{#if currentPath !== '/'}
			<Navigation {currentPath} />
		{/if}
    
		<main class="font-mono" class:pt-16={currentPath !== '/'}>
			{@render children()}
		</main>

		<Footer />
	</div>
</div>

<style>
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
  
	.content-max-width {
		max-width: 1400px;
		margin: 0 auto;
		background: white;
		box-shadow: 0 0 60px rgba(0, 0, 0, 0.5), 0 0 80px rgba(251, 146, 60, 0.2);
	}
</style>
