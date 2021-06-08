<script>
	import Header from '$lib/Header/index.svelte';
	import Footer from '$lib/Footer/index.svelte';
	import '../app.css';
</script>

<div class="page-wrapper">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.page-wrapper {
		width: 100%;
	}

	main {
		width: 100%;
		max-width: 980px;
		margin: 0 auto;
		padding: 1rem 0;
	}
</style>
