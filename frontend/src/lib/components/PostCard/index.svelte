<script>
  import { locale } from '$lib/utils/date';

  import ArrowLink from '../ArrowLink/index.svelte';

  export let post;

  const formatDate = locale.format('%d. %B %Y');

  $: link = `/neuigkeiten/${post.slug}`;
</script>

<a
  class="post-card"
  href={`/neuigkeiten/${post.slug}`}
>
  <div class="bar"></div>
  <div class="image-wrapper">
    {#if (post.postImage)}
      <img
        src={post.postImage.url}
        alt={post.postImage.alt}
      />
    {/if}
  </div>
  <div class="content">
    <div class="copy">
      <div class="copy-overlay"></div>
      <span class="date">{formatDate(post.date)}</span>
      <h3>{post.title.rendered}</h3>
      <p>{@html post.excerpt}</p>
    </div>
    <ArrowLink
      link={link}
      description="Weiterlesen"
    />
  </div>
</a>

<style>
  a.post-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0.5rem 0;
    background-color: var(--lightpurple);
    border: none;
  }

  @media (min-width: 600px) {
    a.post-card {
      flex-direction: row;
      height: 232px;
      border-radius: var(--border-radius);
    }
  }

  .bar {
    width: 100%;
    height: var(--bar-dimension);
    min-height: var(--bar-dimension);
    background-color: var(--blue);
  }

  @media (min-width: 600px) {
    .bar {
      width: var(--bar-dimension);
      min-width: var(--bar-dimension);
      height: 100%;
      background-color: var(--blue);
      border: none;
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
  }

  .image-wrapper {
    margin: 0 0 1rem 0;
    background-color: var(--blue);
  }

  @media (min-width: 600px) {
    .image-wrapper {
      min-width: 39%;
      height: 100%;
      margin: 0 1rem 0 0;
    }
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }

  .copy {
    position: relative;
    margin-bottom: 0.3rem;
    overflow: hidden;
  }

  .copy-overlay {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: linear-gradient(var(--lightpurple-transparent), var(--lightpurple-transparent) 70%, var(--lightpurple));
  }

  .date {
    font-size: 0.9rem;
    color: var(--gray);
  }

  h3 {
    margin: 0.4rem 0;
  }
  
  p, p > :global(p) {
    width: 100%;
    padding: 0;
    font-size: 1rem;
    color: var(--gray);
  }
</style>