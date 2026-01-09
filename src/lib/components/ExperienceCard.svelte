<script lang="ts">
  import type { WorkExperience } from '$lib/types/experience';

  interface Props {
    experience: WorkExperience;
  }

  let { experience }: Props = $props();
</script>

<article class="bg-white/10 backdrop-blur rounded-2xl p-6 md:p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:shadow-xl">
  <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
    <div>
      <h3 class="text-2xl font-bold text-white mb-1">{experience.title}</h3>
      <p class="text-orange-400 text-lg font-semibold">{experience.company}</p>
      {#if experience.location}
        <p class="text-gray-300 text-sm">{experience.location}</p>
      {/if}
    </div>
    <div class="flex flex-col items-start md:items-end gap-1">
      <p class="text-gray-300 font-medium whitespace-nowrap">
        {experience.startDate} - {experience.endDate}
      </p>
      {#if experience.employmentType}
        <p class="text-gray-400 text-sm">{experience.employmentType}</p>
      {/if}
    </div>
  </div>

  <ul class="space-y-2 list-disc list-inside text-gray-200">
    {#each experience.responsibilities as responsibility}
      <li class="leading-relaxed">{responsibility}</li>
    {/each}
  </ul>
</article>
