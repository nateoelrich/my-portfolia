<script lang="ts">
	import RouletteWheel from '$lib/components/RouletteWheel.svelte';
	import ResultModal from '$lib/components/ResultModal.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import type { Excuse } from '$lib/data/excuses';

	let selectedExcuse = $state<Excuse | null>(null);

	function handleExcuseSelected(excuse: Excuse) {
		selectedExcuse = excuse;
	}

	function closeModal() {
		selectedExcuse = null;
	}
</script>

<SEO 
	title="Excuse Me - Work Excuse Generator"
	description="Spin the wheel and get your perfect work excuse!"
/>

<main class="min-h-screen w-full bg-linear-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
	<!-- Cyberpunk grid background -->
	<div class="absolute inset-0 opacity-10">
		<div class="absolute inset-0" style="background-image: linear-gradient(rgba(168, 85, 247, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.4) 1px, transparent 1px); background-size: 50px 50px;"></div>
	</div>

	<!-- Glowing orbs -->
	<div class="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
	<div class="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
	<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

	<!-- Content -->
	<div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
		<!-- Header -->
		<div class="text-center mb-12">
			<h1 class="text-5xl md:text-7xl font-bold text-white mb-4 font-mono">
				Excuse Me! 🎡
			</h1>
			<p class="text-xl md:text-2xl text-gray-300">
				Your premium work excuse generator
			</p>
		</div>

		<!-- Wheel Component -->
		<RouletteWheel onExcuseSelected={handleExcuseSelected} />

		<!-- Back to home link -->
		<a 
			href="/"
			class="mt-12 text-gray-400 hover:text-white transition-colors underline font-mono"
		>
			← Back to Portfolio
		</a>
	</div>
</main>

<!-- Result Modal -->
{#if selectedExcuse}
	<ResultModal excuse={selectedExcuse} onClose={closeModal} />
{/if}
