<script context="module">
  import { getParticipateIntro, getDownloads } from '$lib/utils/api';
  
  export async function load({ fetch }) {
    const intro = await(getParticipateIntro({fetch}));
    const downloads = await(getDownloads({fetch}));
		return {
			props: {
				intro,
        downloads
			}
		};
	}
</script>

<script>
  import DownloadCard from '$lib/components/DownloadCard/index.svelte';

  export let intro;
  export let downloads;
</script>

<section>
	<h2>
		{intro.title.rendered}
	</h2>
	{@html intro.content.rendered}
</section>
<section class="download-cards">
  {#each downloads as download}
    <DownloadCard
      download={download}
    />
  {/each}
</section>

<style>
	.download-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  @media (min-width: 980px) {
    .download-cards {
      flex-direction: row;
      align-items: stretch;
    }
  }
</style>
