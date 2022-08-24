import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '7obin2e4',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-07-16',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
