import { timeParse } from 'd3-time-format';

const parseDate = timeParse('%Y-%m-%dT%H:%M:%S');

export const HOST = 'https://admin.foerderverein-franklinschule.de/wp-json/wp/v2';
const MEDIA = 'https://admin.foerderverein-franklinschule.de/wp-json/wp/v2/media';

const extractData = async (res) => {
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  return new Error('Could not load data.');
};

const extractFirstData = async (res) => {
  if (res.ok) {
    const [ data ] = await res.json();
    return data;
  }
  return new Error('Could not load data.');
};

const pruneExcerpt = (excerpt) => {
  return excerpt
    .replace(/\<a.*\<\/a\>/g, '')
    .replace(/&hellip;/g, '');
};

const getPostAsset = async ({fetch, id}) => {
  const url = `${MEDIA}/${id}`;
  const res = await fetch(url);
  const data = await extractData(res);
  return {
    url: data.source_url,
    alt: data.alt_text
  };
};

export const getIndexIntro = async ({ fetch }) => {
  const url = `${HOST}/pages?slug=wir-bringen-die-franklinschule-zum-bluehen`;
  const res = await fetch(url);
  return await extractFirstData(res);
};

export const getAboutIntro = async ({ fetch }) => {
  const url = `${HOST}/pages?slug=unser-team`;
  const res = await fetch(url);
  return await extractFirstData(res);
};

export const getParticipateIntro = async ({ fetch }) => {
  const url = `${HOST}/pages?slug=mitmachen`;
  const res = await fetch(url);
  return await extractFirstData(res);
};

export const getPosts = async ({ fetch, top = 100 }) => {
  let url = `${HOST}/posts`;
  if (top) {
    url += `?per_page=${top}&page=1`;
  }
  const res = await fetch(url);
  if (res.ok) {
    const data = await res.json();
    const parsedData = Promise.all(data.map(async d => {
      let postImage;
      if (d.featured_media) {
        postImage = await getPostAsset({fetch, id: d.featured_media});
      }
      return {
        ...d,
        date: parseDate(d.date),
        excerpt: pruneExcerpt(d.excerpt.rendered),
        postImage
      };
    }));
    return parsedData;
  }
  return new Error(`Could not load ${url}.`);
};

export const getBosses = async ({ fetch }) => {
  let url = `${HOST}/vorstand`;
  const res = await fetch(url);
  if (res.ok) {
    const data = await res.json();
    const parsedData = Promise.all(data.map(async d => {
      let postImage;
      if (d.bild) {
        postImage = await getPostAsset({fetch, id: d.bild});
      }
      return {
        ...d,
        date: parseDate(d.date),
        postImage
      };
    }));
    return parsedData;
  }
  return new Error(`Could not load ${url}.`);
};

export const getDownloads = async ({ fetch }) => {
  let url = `${HOST}/downloads`;
  const res = await fetch(url);
  if (res.ok) {
    const data = await res.json();
    const parsedData = Promise.all(data.map(async d => {
      let file;
      if (d.datei) {
        file = await getPostAsset({fetch, id: d.datei});
      }
      return {
        ...d,
        file
      };
    }));
    return parsedData;
  }
  return new Error(`Could not load ${url}.`);
};

export const getPost = async ({ fetch, slug }) => {
  let url = `${HOST}/posts?slug=${slug}`;
  const res = await fetch(url);
  if (res.ok) {
    const [ data ] = await res.json();
      let postImage;
      if (data.featured_media) {
        postImage = await getPostAsset({fetch, id: data.featured_media});
      }
      const parsedData = {
        ...data,
        date: parseDate(data.date),
        title: data.title.rendered,
        body: data.content.rendered,
        postImage
      };
      return parsedData;
  }
  return new Error(`Could not load ${url}.`);
};