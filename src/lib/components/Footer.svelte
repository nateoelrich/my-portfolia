<script lang="ts">
	import { socialLinks } from '$lib/data/social-links';
	import ExternalLink from './ExternalLink.svelte';
</script>

<footer class="bg-indigo-950 text-white py-12">
	<div class="container mx-auto px-4 text-center">
		<p class="mb-4">© {new Date().getFullYear()} Nate Oelrich. All rights reserved.</p>
		<div class="flex gap-6 justify-center">
			{#each socialLinks as link}
				<ExternalLink {link} class="hover:text-blue-400 transition" />
			{/each}
		</div>
	</div>
</footer>
