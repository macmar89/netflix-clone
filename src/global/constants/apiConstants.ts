const key = process.env.REACT_APP_API_KEY;

export const SEARCH_API_URL: string = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=sk`;

export const RANDOM_MOVIES_API_URL: string = `https://api.themoviedb.org/3/discover/movie?&api_key=${key}&language=sk&primary_release_year=`;

export const IMAGE_URL :string = "https://image.tmdb.org/t/p/original/"
