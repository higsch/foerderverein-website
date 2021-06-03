<script>
  import Flows from '$lib/Flows/index.svelte';
</script>

<footer>
  <div class="background"></div>
	<div class="flows">
		<Flows color="purple" />
	</div>
</footer>

<style>
  footer {
		position: relative;
		width: 100%;
	}

	.background {
		position: absolute;
		z-index: 0;
		width: 100%;
		height: 100%;
		opacity: 0.23;
		background: linear-gradient(var(--white), var(--purple));
	}

	.flows {
		position: absolute;
		bottom: 0;
		z-index: 1;
		width: 100%;
	}
</style>