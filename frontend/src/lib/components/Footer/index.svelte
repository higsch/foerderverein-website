<script>
  import Flows from '$lib/components/Flows/index.svelte';
	import ArrowLink from '$lib/components/ArrowLink/index.svelte';

	export let content = {};
	export let links = {}

	$: ({ adresse, email, rechtliches } = content);
	$: ({
		paypal_beschreibung,
		paypal_url,
		paypal_logo_url,
		amazon_beschreibung,
		amazon_url,
		amazon_logo_url
	} = links);
</script>

<footer>
  <div class="background"></div>
	<div class="flows">
		<Flows color="purple" />
	</div>
	<div class="foreground">
		<div class="action-links">
			<ArrowLink
				link={paypal_url}
				image={paypal_logo_url}
				description={paypal_beschreibung}
			/>
			<ArrowLink
				link={amazon_url}
				image={amazon_logo_url}
				description={amazon_beschreibung}
			/>
		</div>
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
			align-items: flex-start;
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
		color: inherit;
		border: none;
	}
</style>