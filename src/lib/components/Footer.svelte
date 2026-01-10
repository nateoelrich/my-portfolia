<script lang="ts">
	import { socialLinks } from '$lib/data/social-links';
</script>

<footer class="bg-indigo-950 text-white py-12">
	<div class="container mx-auto px-4 text-center">
		<p class="mb-4">© {new Date().getFullYear()} Nate Oelrich. All rights reserved.</p>
		<div class="flex gap-6 justify-center">
			{#each socialLinks as link}
				<a 
					href={link.href}
					{...(link.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
					class="hover:text-blue-400 transition"
				>
					{link.label}
				</a>
			{/each}
		</div>
	</div>
</footer>
