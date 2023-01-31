const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c51dc08f163886b6996fd9c932dc96f4';

export async function getTrendingMovies() {
  const res = await fetch(`${BASE_URL}trending/all/day?api_key=${API_KEY}`);
  return res.json();
}

export async function getSearchMovies(searchQuery) {
  const res = await fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );
  return res.json();
}

export async function getMovieDetails(movieId) {
  const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  return res.json();
   
}

export async function getMovieDetailsCast(movieId) {
  const res = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return res.json();
}

export async function getMovieDetailsReviews(movieId) {
  const res = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return res.json();
}
