import { timeParse } from 'd3';

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

const getPostImage = async ({fetch, id}) => {
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

export const getPosts = async ({ fetch, top }) => {
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
        postImage = await getPostImage({fetch, id: d.featured_media});
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
        postImage = await getPostImage({fetch, id: d.bild});
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