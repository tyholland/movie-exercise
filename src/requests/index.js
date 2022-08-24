import { client } from './client';

const endpoint = 'https://th-recruiting-moviesapi.herokuapp.com';

export const searchMovies = async (title) => {
  const url = `${endpoint}/search?title=${encodeURI(title)}`;
  const search = await client(url, 'GET');

  return search;
};

export const updateFavorites = async (movieId, fav) => {
  const url = `${endpoint}/favorites?omdb_id=${movieId}&favorite=${fav}`;
  const favorites = await client(url, 'POST');

  return favorites;
};
