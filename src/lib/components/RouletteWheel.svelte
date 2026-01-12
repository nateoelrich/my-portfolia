<script lang="ts">
	import { excuses, type Excuse } from '$lib/data/excuses';
	import { onMount } from 'svelte';

	interface Props {
		onExcuseSelected: (excuse: Excuse) => void;
	}

	let { onExcuseSelected }: Props = $props();

	let isSpinning = $state(false);
	let rotation = $state(0);
	let selectedIndex = $state(-1);
	let audioContext: AudioContext | null = null;

	// Create a clicking sound programmatically
	function playClickSound() {
		if (!audioContext) return;
		
		const oscillator = audioContext.createOscillator();
		const gainNode = audioContext.createGain();
		
		oscillator.connect(gainNode);
		gainNode.connect(audioContext.destination);
		
		oscillator.frequency.value = 800;
		oscillator.type = 'square';
		
		gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
		
		oscillator.start(audioContext.currentTime);
		oscillator.stop(audioContext.currentTime + 0.05);
	}

	onMount(() => {
		// Initialize audio context on mount
		audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
	});

	function spinWheel() {
		if (isSpinning) return;
		
		isSpinning = true;
		
		// Random number of full rotations (5-8) plus random final position
		const minSpins = 5;
		const maxSpins = 8;
		const spins = minSpins + Math.random() * (maxSpins - minSpins);
		const finalRotation = spins * 360;
		
		// Calculate which excuse will be selected
		const finalAngle = finalRotation % 360;
		const segmentAngle = 360 / excuses.length;
		selectedIndex = Math.floor(((360 - finalAngle) % 360) / segmentAngle);
		
		rotation = finalRotation;
		
		// Play clicking sounds during spin
		const duration = 3000; // 3 seconds
		const clickInterval = 50; // Initial interval
		let currentInterval = clickInterval;
		let elapsed = 0;
		
		const clickTimer = setInterval(() => {
			playClickSound();
			elapsed += currentInterval;
			
			// Slow down the clicks as the wheel slows down
			currentInterval = clickInterval + (elapsed / duration) * 150;
			
			if (elapsed >= duration) {
				clearInterval(clickTimer);
				
				// Show result after a short delay
				setTimeout(() => {
					isSpinning = false;
					if (selectedIndex >= 0) {
						onExcuseSelected(excuses[selectedIndex]);
					}
				}, 500);
			}
		}, currentInterval);
	}
</script>

<div class="flex flex-col items-center justify-center gap-8">
	<!-- The Wheel -->
	<div class="relative w-full max-w-2xl aspect-square">
		<!-- Pointer at top -->
		<div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 z-20">
			<div class="relative">
				<!-- Pointer triangle -->
				<div class="w-0 h-0 border-l-25 border-l-transparent border-r-25 border-r-transparent border-t-40 border-t-orange-400 drop-shadow-2xl"></div>
				<!-- Pointer glow -->
				<div class="absolute inset-0 w-0 h-0 border-l-25 border-l-transparent border-r-25 border-r-transparent border-t-40 border-t-orange-300 blur-sm opacity-60"></div>
			</div>
		</div>
		
		<!-- Wheel container with outer glow -->
		<div class="absolute inset-4 rounded-full bg-purple-500/30 blur-3xl animate-pulse-glow"></div>
		
		<!-- The spinning wheel -->
		<div
			class="wheel-container relative w-full h-full rounded-full shadow-2xl"
			style="transform: rotate({rotation}deg); transition: transform 3000ms cubic-bezier(0.17, 0.67, 0.12, 0.99);"
		>
			<!-- Outer rim -->
			<div class="absolute inset-0 rounded-full border-8 border-purple-400 shadow-inner"></div>
			<div class="absolute inset-2 rounded-full border-4 border-purple-300/50"></div>
			
			<!-- Wheel segments -->
			<svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
				{#each excuses as excuse, index}
					{@const segmentAngle = 360 / excuses.length}
					{@const startAngle = segmentAngle * index - 90}
					{@const endAngle = startAngle + segmentAngle}
					{@const largeArc = segmentAngle > 180 ? 1 : 0}
					
					{@const startRad = (startAngle * Math.PI) / 180}
					{@const endRad = (endAngle * Math.PI) / 180}
					{@const innerRadius = 15}
					{@const outerRadius = 48}
					
					{@const x1 = 50 + outerRadius * Math.cos(startRad)}
					{@const y1 = 50 + outerRadius * Math.sin(startRad)}
					{@const x2 = 50 + outerRadius * Math.cos(endRad)}
					{@const y2 = 50 + outerRadius * Math.sin(endRad)}
					{@const x3 = 50 + innerRadius * Math.cos(endRad)}
					{@const y3 = 50 + innerRadius * Math.sin(endRad)}
					{@const x4 = 50 + innerRadius * Math.cos(startRad)}
					{@const y4 = 50 + innerRadius * Math.sin(startRad)}
					
					<path
						d="M 50,50 L {x1},{y1} A {outerRadius},{outerRadius} 0 {largeArc},1 {x2},{y2} L 50,50 Z"
						class="segment segment-{index % 3}"
						stroke="rgba(139, 92, 246, 0.3)"
						stroke-width="0.2"
					/>
				{/each}
			</svg>
			
			<!-- Text labels on segments -->
			<div class="absolute inset-0">
				{#each excuses as excuse, index}
					{@const segmentAngle = 360 / excuses.length}
					{@const angle = segmentAngle * index + segmentAngle / 2}
					{@const radius = 32}
					
					<div
						class="absolute top-1/2 left-1/2 origin-left text-label"
						style="
							transform: rotate({angle}deg) translateX({radius}%);
							width: {radius * 1.5}%;
						"
					>
						<span class="block text-white font-bold text-[0.65rem] sm:text-xs leading-tight drop-shadow-lg whitespace-nowrap overflow-hidden text-ellipsis">
							{excuse.text.length > 35 ? excuse.text.substring(0, 35) + '...' : excuse.text}
						</span>
					</div>
				{/each}
			</div>
			
			<!-- Center hub -->
			<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-linear-to-br from-purple-500 via-purple-600 to-indigo-600 border-4 border-white shadow-2xl flex items-center justify-center z-10">
				<div class="absolute inset-0 rounded-full bg-linear-to-br from-white/20 to-transparent"></div>
				<span class="text-white font-bold text-3xl sm:text-4xl relative z-10">🎲</span>
				<!-- Inner shadow for depth -->
				<div class="absolute inset-0 rounded-full shadow-inner"></div>
			</div>
			
			<!-- Decorative rivets around center -->
			{#each Array(8) as _, i}
				{@const angle = (360 / 8) * i}
				{@const x = 50 + 18 * Math.cos((angle - 90) * Math.PI / 180)}
				{@const y = 50 + 18 * Math.sin((angle - 90) * Math.PI / 180)}
				<div 
					class="absolute w-2 h-2 bg-linear-to-br from-gray-300 to-gray-500 rounded-full border border-gray-400 shadow-sm"
					style="left: {x}%; top: {y}%; transform: translate(-50%, -50%);"
				></div>
			{/each}
		</div>
	</div>

	<!-- Spin Button -->
	<button
		onclick={spinWheel}
		disabled={isSpinning}
		class="px-12 py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-bold text-xl rounded-full shadow-2xl transition-all transform hover:scale-110 hover:shadow-orange-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 border-4 border-orange-300"
		class:animate-pulse={!isSpinning}
	>
		{isSpinning ? '🎡 Spinning...' : '🎯 Spin the Wheel!'}
	</button>

	<!-- Instructions -->
	{#if !isSpinning}
		<p class="text-center text-gray-300 text-lg max-w-md font-mono">
			Need an excuse to skip work? Give the wheel a spin and let fate decide! 🎰
		</p>
	{/if}
</div>

<style>
	@keyframes pulse {
		0%, 100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.9;
			transform: scale(1.05);
		}
	}

	.animate-pulse {
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}

	@keyframes pulse-glow {
		0%, 100% {
			opacity: 0.3;
			transform: scale(1);
		}
		50% {
			opacity: 0.5;
			transform: scale(1.05);
		}
	}

	.animate-pulse-glow {
		animation: pulse-glow 3s ease-in-out infinite;
	}

	.wheel-container {
		will-change: transform;
	}

	/* Segment colors - alternating pattern */
	.segment-0 {
		fill: #7c3aed; /* purple-600 */
	}

	.segment-1 {
		fill: #6366f1; /* indigo-500 */
	}

	.segment-2 {
		fill: #8b5cf6; /* violet-500 */
	}

	/* Add gradient overlay to segments for depth */
	.segment {
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
		transition: filter 0.2s ease;
	}

	/* Text label styling */
	.text-label {
		pointer-events: none;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
	}
</style>
