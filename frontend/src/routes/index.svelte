<script context="module">
  import { HOST } from '$lib/utils/api';
  
  export async function load({ fetch }) {
    const url = `${HOST}/pages?slug=wir-bringen-die-franklinschule-zum-bluehen`;
		const res = await fetch(url);
		if (res.ok) {
      const [ data ] = await res.json();
			return {
				props: {
					data
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
  export let data;
</script>

<!-- <h2>
  {data.title.rendered}
</h2>
{@html data.content.rendered} -->

<style>
	
</style>
