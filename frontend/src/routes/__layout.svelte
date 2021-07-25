<script context="module">
	import { HOST } from '$lib/utils/api';
  
  export async function load({ fetch }) {
    const footerUrl = `${HOST}/footer`;
		const footerRes = await fetch(footerUrl);
		const linksUrl = `${HOST}/link`;
		const linksRes = await fetch(linksUrl);
		if (footerRes.ok && linksRes.ok) {
			const [ footerData ] = await footerRes.json();
			const [ linksData ] = await linksRes.json();
			return {
				props: {
					footerData,
					linksData
				}
			};
		}

		return {
			error: new Error('Could not load data.')
		};
	}
</script>

<script>
	import Header from '$lib/components/Header/index.svelte';
	import Footer from '$lib/components/Footer/index.svelte';
	import '../app.css';

	export let footerData;
	export let linksData;
</script>

<div class="page-wrapper">
	<Header />

	<main>
		<slot />
	</main>

	<Footer
		content={footerData}
		links={linksData}
	/>
</div>

<style>
	.page-wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
		min-height: 100%;
	}

	main {
		flex: 1;
		width: 100%;
		max-width: 1100px;
		margin: 0 auto;
		padding: 1rem 0;
	}
</style>
