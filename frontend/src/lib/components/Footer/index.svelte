<script>
  import Flows from '$lib/components/Flows/index.svelte';

	export let content = {};
	export let links = {}

	$: ({ adresse, email, rechtliches } = content);
	$: ({
		paypal_beschreibung,
		paypal_url,
		paypal_logo,
		amazon_beschreibung,
		amazon_url,
		amazon_logo
	} = links);

	$: console.log(links);
</script>

<footer>
  <div class="background"></div>
	<div class="flows">
		<Flows color="purple" />
	</div>
	<div class="foreground">
		<div class="action-links"></div>
		<div class="address">
			<p>{@html adresse}</p>
			<a href="mailto:{email}">{email}</a>
		</div>
		<div class="legal">
			<p>{@html rechtliches}</p>
		</div>
	</div>
</footer>

<style>
  footer {
		position: relative;
		width: 100%;
		color: var(--purple);
		font-size: 0.7rem;
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
		top: 0;
		z-index: 1;
		width: 100%;
	}

	.foreground {
		position: relative;
		z-index: 100;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		padding: 130px 0 0 0;
	}

	@media (min-width: 600px) {
		.foreground {
			flex-direction: row;
		}
	}

	.foreground > * {
		flex: 1;
		width: 100%;
		max-width: 360px;
		padding: 1rem;
	}

	a {
		display: inline-block;
		margin-top: 1rem;
	}
</style>