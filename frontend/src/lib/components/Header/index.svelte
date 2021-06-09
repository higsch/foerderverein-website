<script>
	import { page } from '$app/stores';
	import logo from './logo_image.svg';

	import Flows from '$lib/components/Flows/index.svelte';
</script>

<header>
	<div class="background"></div>
	<div class="flows">
		<Flows color="blue" />
	</div>
	<div class="foreground">
		<a class="title a-esc" href="/">
			<h1>Förderverein</h1>
			<h2>Franklinschule Mannheim e.V.</h2>
		</a>
		<nav>
			<ul>
				<li class:active={$page.path === '/ueberuns'}><a sveltekit:prefetch href="/ueberuns">Über uns</a></li>
				<li class:active={$page.path === '/neuigkeiten'}><a sveltekit:prefetch href="/neuigkeiten">Neuigkeiten</a></li>
				<li class:active={$page.path === '/mitmachen'}><a sveltekit:prefetch href="/mitmachen">Mitmachen</a></li>
			</ul>
		</nav>
		<a class="logo a-esc" href="/">
			<img
				src={logo}
				alt="Logo des Förderverein Franklinschule"
			/>
		</a>
	</div>
</header>

<style>
	header {
		position: relative;
		width: 100%;
	}

	.background {
		position: absolute;
		z-index: 0;
		width: 100%;
		height: 100%;
		opacity: 0.23;
		background: linear-gradient(360deg, var(--white), var(--blue));
	}

	.flows {
		position: absolute;
		bottom: 0;
		z-index: 1;
		width: 100%;
	}

	.foreground {
		position: relative;
		z-index: 100;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}

	@media (min-width: 600px) {
		.foreground {
			flex-direction: row;
		}
	}

	.foreground > * {
		flex: 1;
		display: flex;
		margin: 0.7rem 0;
	}

	.title {
		flex-direction: column;
		justify-content: center;
		text-align: center;
	}

	@media (min-width: 600px) {
		.title {
			transform: translateY(-10%);
		}
	}

	h1 {
		font-size: calc(2rem + 0.5vw);
	}

	h2 {
		font-size: calc(0.8rem + 0.4vw);
	}

	.logo {
		justify-content: center;
	}

	@media (min-width: 600px) {
		.logo {
			order: 2;
		}
	}
	
	.logo img {
		height: 25vmin;
		max-height: 280px;
		min-height: 130px;
	}

	nav {
		justify-content: center;
	}

	@media (min-width: 600px) {
		nav {
			order: 3;
			transform: translateY(-10%);
		}
	}

	ul {
		display: flex;
		align-items: center;
		list-style-type: none;
	}

	li {
		margin: 0 1rem;
		font-size: 1.2rem;
	}

	a {
		white-space: nowrap;
	}
</style>
