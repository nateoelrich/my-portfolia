<script lang="ts">
  import type { Link } from '$lib/types/link';

  interface Props {
    link: Link;
    class?: string;
  }

  let { link, class: className = '' }: Props = $props();
</script>

<a 
  href={link.href}
  class={className}
  {...(link.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
>
  {link.label}
</a>
