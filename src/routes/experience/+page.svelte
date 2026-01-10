<script lang="ts">
  import ExperienceCard from '$lib/components/ExperienceCard.svelte';
  import { workExperiences } from '$lib/data/experiences';
  import SEO from '$lib/components/SEO.svelte';
  import PageLayout from '$lib/components/PageLayout.svelte';
</script>

<SEO 
  title="Work Experience | Nate Oelrich"
  description="Professional work experience and career history of Nate Oelrich"
/>

<PageLayout 
  title="Work Experience" 
  description="My professional journey and key contributions"
  gradientFrom="indigo-900"
>
  {#each workExperiences as experience}
    <ExperienceCard {experience} />
  {/each}
</PageLayout>