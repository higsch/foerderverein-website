<script>
  export let color = 'blue';
</script>

<svg
  class={color}
	width="1440"
	height="103"
	viewBox="0 0 1440 103"
	fill="none"
  preserveAspectRatio="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M-37 56C-37 56 272 23 584 23C896 23 914 56 1223 56C1532 56 1664 23 1664 23"
		stroke-width="46"
	/>
	<path
		d="M-370 80C-370 80 -25.5767 47 322.19 47C669.958 47 690.021 80 1034.44 80C1378.87 80 1526 47 1526 47"
		stroke-width="46"
	/>
</svg>

<style>
  svg {
    width: 100%;
  }

  path {
    stroke-opacity: 0.5;
  }

  path:first-child {
    stroke-opacity: 0.8;
  }

  .blue path {
    stroke: var(--blue);
  }

  .purple path {
    stroke: var(--purple);
  }
</style>