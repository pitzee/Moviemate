// TMDB API Configuration
export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  IMAGE_BASE_URL: "https://image.tmdb.org/t/p",
  API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY || "",
  BEARER_TOKEN: process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN || "",
};

// API endpoints
export const TMDB_ENDPOINTS = {
  TRENDING_MOVIES: "/trending/movie/week",
  POPULAR_MOVIES: "/movie/popular",
  TOP_RATED_MOVIES: "/movie/top_rated",
  SEARCH_MOVIES: "/search/movie",
  MOVIE_DETAILS: "/movie",
  MOVIE_CAST: "/movie",
  SIMILAR_MOVIES: "/movie",
};

// Image sizes
export const IMAGE_SIZES = {
  POSTER: {
    SMALL: "w185",
    MEDIUM: "w500",
    LARGE: "w780",
    ORIGINAL: "original",
  },
  BACKDROP: {
    SMALL: "w300",
    MEDIUM: "w780",
    LARGE: "w1280",
    ORIGINAL: "original",
  },
};
