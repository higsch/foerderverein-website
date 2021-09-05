<script>
  export let boss;
</script>

<div class="boss-card">
  <div class="content">
    <img src={boss.postImage.url} alt={boss.postImage.alt} />
    <h2>
      {boss.name}
    </h2>
    <h3>
      {boss.funktion}
    </h3>
    <p class="citation">
      {boss.zitat}
    </p>
    {#if boss.zitatquelle}
      <p class="citation-source">
        {boss.zitatquelle}
      </p>
    {/if}
  </div>
  <div class="foot-bar"></div>
</div>

<style>
  .boss-card {
    flex: 1 0;
    display: flex;
    flex-direction: column;
    max-width: 250px;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
    color: var(--black);
    background-color: var(--mintgreen);
    border: none;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  img {
    display: block;
    max-width: 110px;
    border: none;
    border-radius: 50%;
  }

  h2 {
    margin: 1rem auto 0.2rem auto;
    font-size: 1.1rem;
  }

  h3 {
    margin: 0.2rem auto 1rem auto;
    font-size: 1rem;
    font-weight: 500;
  }

  p {
    align-self: flex-start;
    padding: 0;
    color: var(--gray);
    font-size: 0.8rem;
    text-align: left;
  }

  p.citation-source {
    font-style: italic;
  }

  .foot-bar {
    width: 100%;
    height: var(--bar-dimension);
    background-color: var(--blue);
    border: none;
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }
</style>