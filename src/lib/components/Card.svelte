<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    hoverColor?: 'purple' | 'orange';
    children: Snippet;
  }

  let { hoverColor = 'purple', children }: Props = $props();
</script>

<article class="bg-white/10 backdrop-blur rounded-2xl p-6 md:p-8 border border-white/20 hover:border-{hoverColor}-400/50 transition-all duration-300 hover:shadow-xl">
  {@render children()}
</article>
