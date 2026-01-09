<script lang="ts">
  import ExperienceCard from '$lib/components/ExperienceCard.svelte';
  import { workExperiences } from '$lib/data/experiences';
</script>

<svelte:head>
  <title>Work Experience | Nate Oelrich</title>
  <meta name="description" content="Professional work experience and career history of Nate Oelrich" />
</svelte:head>

<section class="min-h-screen py-20 bg-linear-to-br from-indigo-900 via-gray-500 to-orange-400">
  <div class="container mx-auto px-4 max-w-5xl">
    <h1 class="text-5xl font-bold text-center text-white mb-4">Work Experience</h1>
    <p class="text-center text-gray-200 mb-12 text-lg">
      My professional journey and key contributions
    </p>

    <div class="space-y-8">
      {#each workExperiences as experience}
        <ExperienceCard {experience} />
      {/each}
    </div>
  </div>
</section>