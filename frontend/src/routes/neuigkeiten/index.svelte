<script context="module">
  import { getPosts } from '$lib/utils/api';
  
  export async function load({ fetch }) {
		const posts = await(getPosts({fetch}));
		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	import PostCard from '$lib/components/PostCard/index.svelte';

	export let posts;
</script>

<section class="post-cards">
	{#each posts as post (post.id)}
		<PostCard post={post} />
	{/each}
</section>

<style>
	
</style>
