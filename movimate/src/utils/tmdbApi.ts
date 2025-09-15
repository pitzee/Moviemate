import axios from "axios";
import { TMDB_CONFIG, TMDB_ENDPOINTS } from "@/config/tmdb";

// Create axios instance with default config
const tmdbApi = axios.create({
  baseURL: TMDB_CONFIG.BASE_URL,
  headers: {
    Authorization: `Bearer ${TMDB_CONFIG.BEARER_TOKEN}`,
    "Content-Type": "application/json",
  },
  params: {
    api_key: TMDB_CONFIG.API_KEY,
  },
});

// API functions
export const tmdbService = {
  // Get trending movies
  getTrendingMovies: async (page: number = 1) => {
    const response = await tmdbApi.get(TMDB_ENDPOINTS.TRENDING_MOVIES, {
      params: { page },
    });
    return response.data;
  },

  // Get popular movies
  getPopularMovies: async (page: number = 1) => {
    const response = await tmdbApi.get(TMDB_ENDPOINTS.POPULAR_MOVIES, {
      params: { page },
    });
    return response.data;
  },

  // Get top rated movies
  getTopRatedMovies: async (page: number = 1) => {
    const response = await tmdbApi.get(TMDB_ENDPOINTS.TOP_RATED_MOVIES, {
      params: { page },
    });
    return response.data;
  },

  // Search movies
  searchMovies: async (query: string, page: number = 1) => {
    const response = await tmdbApi.get(TMDB_ENDPOINTS.SEARCH_MOVIES, {
      params: { query, page },
    });
    return response.data;
  },
};

export default tmdbApi;
