<script context="module">
  import { getPost } from '$lib/utils/api';
  
  export async function load({ fetch, page }) {
    const slug = page.params.slug;
		const post = await(getPost({fetch, slug}));
		return {
			props: {
				post
			}
		};
	}
</script>

<script>
	export let post;
</script>

<section class="post">
  <h2>
		{post.title}
	</h2>
  {@html post.body}
</section>

<style>
</style>
