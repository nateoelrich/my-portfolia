<script lang="ts">
  import { aboutParagraphs } from '$lib/data/about';
</script>

<section aria-labelledby="about-heading" class="pt-8 pb-20 bg-orange-400">
  <div class="max-w-4xl mx-auto px-4">
    <h2 id="about-heading" class="text-4xl font-bold mb-4 text-center">About Me</h2>
    <div class="opacity-60 flex flex-col gap-6">
      {#each aboutParagraphs as paragraph}
        <p class="text-base md:text-lg indent-8">
          {paragraph}
        </p>
      {/each}
    </div>
  </div>
</section>
