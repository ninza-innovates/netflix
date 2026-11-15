import requests from './request';

// TMDB discover ignores unknown params. `with-genres` was dropped, so every
// genre row returned the same unfiltered movie list.
const GENRE_REQUESTS = {
  fetchActionMovies: '28',
  fetchComedyMovies: '35',
  fetchHorrorMovies: '27',
  fetchRomanticMovies: '10749',
  fetchDocumentaries: '99',
};

test('discover genre requests filter with the TMDB with_genres parameter', () => {
  Object.entries(GENRE_REQUESTS).forEach(([key, genreId]) => {
    const url = new URL(requests[key], 'https://api.themoviedb.org');

    expect(url.pathname).toBe('/discover/movie');
    expect(url.searchParams.get('with_genres')).toBe(genreId);
    expect(url.searchParams.has('with-genres')).toBe(false);
  });
});
