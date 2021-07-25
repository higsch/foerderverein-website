<script context="module">
  import { getAboutIntro, getBosses } from '$lib/utils/api';
  
  export async function load({ fetch }) {
    const intro = await(getAboutIntro({fetch}));
		const bosses = await(getBosses({fetch}));
		return {
			props: {
				intro,
				bosses
			}
		};
	}
</script>

<script>
  import BossCard from '$lib/components/BossCard/index.svelte';

  export let intro;
	export let bosses;

  $: console.log(bosses)
</script>

<section>
	<!-- Intro -->
	<h2>
		{intro.title.rendered}
	</h2>
	{@html intro.content.rendered}
</section>
<section class="boss-cards">
	<!-- Three recent blog articles -->
	{#each bosses.sort((a, b) => a.id > b.id ? 1 : -1) as boss (boss.id)}
		<BossCard boss={boss} />
	{/each}
</section>

<style>
	.boss-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  @media (min-width: 980px) {
    .boss-cards {
      flex-direction: row;
      align-items: stretch;
    }
  }
</style>
