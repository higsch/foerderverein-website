<script>
	export let link;
	export let image;
	export let description = '';
</script>

<a
  href={link.url}
  title={link.title}
  target={link.target}>
	<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
    d="M27.7071 16.7071C28.0976 16.3166 28.0976 15.6834 27.7071 15.2929L21.3431 8.92893C20.9526 8.53841 20.3195 8.53841 19.9289 8.92893C19.5384 9.31946 19.5384 9.95262 19.9289 10.3431L25.5858 16L19.9289 21.6569C19.5384 22.0474 19.5384 22.6805 19.9289 23.0711C20.3195 23.4616 20.9526 23.4616 21.3431 23.0711L27.7071 16.7071ZM6 17H27V15H6V17Z"
		/>
	</svg>
  <img src={image.url} alt={image.title} />
	<span>
		{description}
	</span>
</a>

<style>
  a {
    display: flex;
    align-items: center;
  }

	path {
		fill: var(--blue);
	}

  img {
    width: 27px;
  }
</style>
