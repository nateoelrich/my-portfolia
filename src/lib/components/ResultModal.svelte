<script lang="ts">
	import type { Excuse } from '$lib/data/excuses';

	interface Props {
		excuse: Excuse;
		onClose: () => void;
	}

	let { excuse, onClose }: Props = $props();
</script>

<div
	class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
	onclick={onClose}
	onkeydown={(e) => e.key === 'Escape' && onClose()}
	role="dialog"
	aria-labelledby="excuse-title"
	aria-modal="true"
	tabindex="-1"
>
	<div
		class="relative max-w-2xl w-full bg-linear-to-br from-purple-900 via-indigo-900 to-violet-900 rounded-2xl p-8 shadow-2xl border-2 border-purple-500/50 animate-scale-in"
		role="document"
	>
		<!-- Glowing effect -->
		<div class="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-500/20 to-indigo-500/20 blur-xl"></div>
		
		<div class="relative z-10">
			<!-- Close button -->
			<button
				onclick={onClose}
				class="absolute right-0 top-0 text-gray-400 hover:text-white transition-colors"
				aria-label="Close modal"
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>

			<h2 id="excuse-title" class="text-3xl font-bold text-white mb-6 text-center font-mono">
				Your Excuse 🎯
			</h2>

			<div class="bg-white/10 rounded-xl p-6 mb-6 backdrop-blur-sm border border-white/20">
				<p class="text-xl text-white text-center leading-relaxed">
					"{excuse.text}"
				</p>
			</div>

			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<button
					onclick={onClose}
					class="px-6 py-3 bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg"
				>
					Try Another
				</button>
				<button
					onclick={() => {
						navigator.clipboard.writeText(excuse.text);
					}}
					class="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/30"
				>
					Copy to Clipboard
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes scale-in {
		from {
			opacity: 0;
			transform: scale(0.9);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	.animate-scale-in {
		animation: scale-in 0.3s ease-out;
	}
</style>
