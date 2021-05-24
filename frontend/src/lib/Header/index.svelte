<script>
	import { page } from '$app/stores';
	import logo from './logo_image.svg';

	import Flows from '$lib/Flows/index.svelte';
</script>

<header>
	<div class="background"></div>
	<div class="flows">
		<Flows color="blue" />
	</div>
	<div class="foreground">
		<a class="title" href="/">
			<h1>Förderverein</h1>
			<h2>Franklinschule Mannheim e.V.</h2>
		</a>
		<a class="logo" href="/">
			<img
				src={logo}
				alt="Logo des Förderverein Franklinschule"
			/>
		</a>
		<nav>
			<ul>
				<li class:active={$page.path === '/ueberuns'}><a sveltekit:prefetch href="/ueberuns">Über uns</a></li>
				<li class:active={$page.path === '/neuigkeiten'}><a sveltekit:prefetch href="/neuigkeiten">Neuigkeiten</a></li>
				<li class:active={$page.path === '/mitmachen'}><a sveltekit:prefetch href="/mitmachen">Mitmachen</a></li>
			</ul>
		</nav>
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
		bottom: -15vmin;
		z-index: 1;
		width: 100%;
		height: 100%;
	}

	.foreground {
		position: relative;
		z-index: 100;
		display: flex;
		width: 100%;
		height: 100%;
		padding: 1rem;
	}

	.foreground > * {
		flex: 1;
		display: flex;
	}

	.title {
		flex-direction: column;
		margin-top: -5%;
		justify-content: center;
		text-align: right;
	}

	h1 {
		font-size: 3rem;
	}

	h2 {
		font-size: 1.3rem;
	}

	.logo {
		justify-content: center;
	}
	
	.logo img {
		height: 25vmin;
		max-height: 280px;
		min-height: 130px;
	}

	nav {
		margin-top: -5%;
		align-items: center;
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
		color: var(--black);
		text-decoration: none;
		white-space: nowrap;
	}
</style>
