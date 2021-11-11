<script>
  export let download;
</script>

<div class="download-card">
  <div class="content">
    <svg
      width="30"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      class="svg-inline--fa fa-file fa-w-12 fa-3x"
    >
      <path
        fill="var(--blue)"
        d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z"
      />
    </svg>
    <a
      class="download-link"
      href={download.file.url}
      target="_blank"
    >
      <h2>
        {download.name}
      </h2>
    </a>
  </div>
  <div class="foot-bar"></div>
</div>

<style>
  .download-card {
    flex: 1 0;
    display: flex;
    flex-direction: column;
    width: 100%;
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

  a.download-link {
    border: none;
  }

  h2 {
    margin: 1rem auto 0.2rem auto;
    font-size: 1.1rem;
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