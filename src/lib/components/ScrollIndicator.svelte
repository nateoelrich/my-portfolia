<script lang="ts">
  interface Props {
    visible?: boolean;
    text?: string;
  }

  let { visible = true, text = 'scroll for more' }: Props = $props();
</script>

<div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 {visible ? 'fade-in' : 'opacity-0'}">
  <div class="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer bounce-limited">
    <span class="text-sm font-medium">{text}</span>
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>

<style>
  /* Limited bounce animation */
  @keyframes bounceLimited {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .bounce-limited {
    animation: bounceLimited 2s ease-in-out 3;
  }

  .fade-in {
    animation: fadeInUp 1.2s ease-out 0.8s forwards;
  }
</style>
