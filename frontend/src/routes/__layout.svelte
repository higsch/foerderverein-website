<script>
	import Header from '$lib/Header/index.svelte';
	import '../app.css';
</script>

<div class="page-wrapper">
	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
	.page-wrapper {
		width: 100%;
	}
</style>
