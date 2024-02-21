import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const data = await fetch(
    'https://firlefanz.backpapier.li/wordpress/wp-json/wp/v2/pages?slug=start'
  );
  const result = await data.json();
  return { content: result[0] };
};
