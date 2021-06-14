<script context="module">
  import { getIndexIntro, getPosts } from '$lib/utils/api';
  
  export async function load({ fetch }) {
    const intro = await(getIndexIntro({fetch}));
		const posts = await(getPosts({fetch, top: 3}));
		return {
			props: {
				intro,
				posts
			}
		};
	}
</script>

<script>
	import PostCard from '$lib/components/PostCard/index.svelte';

  export let intro;
	export let posts;
</script>

<section>
	<!-- Intro -->
	<h2>
		{intro.title.rendered}
	</h2>
	{@html intro.content.rendered}
</section>
<section class="post-cards">
	<!-- Three recent blog articles -->
	{#each posts as post (post.id)}
		<PostCard post={post} />
	{/each}
</section>

<style>
	
</style>
