import axios, { AxiosError } from "axios";
import { TMDB_CONFIG, TMDB_ENDPOINTS } from "@/config/tmdb";

// Custom error class for API errors
export class TMDBError extends Error {
  constructor(message: string, public status?: number, public code?: string) {
    super(message);
    this.name = "TMDBError";
  }
}

// Helper function to handle API errors
const handleApiError = (error: AxiosError): never => {
  if (error.response) {
    // Server responded with error status
    const status = error.response.status;
    const message = getErrorMessage(status);
    throw new TMDBError(message, status);
  } else if (error.request) {
    // Request was made but no response received
    throw new TMDBError(
      "Network error. Please check your internet connection."
    );
  } else {
    // Something else happened
    throw new TMDBError("An unexpected error occurred. Please try again.");
  }
};

// Get user-friendly error messages
const getErrorMessage = (status: number): string => {
  switch (status) {
    case 400:
      return "Invalid request. Please check your input and try again.";
    case 401:
      return "Authentication failed. Please refresh the page.";
    case 403:
      return "Access denied. You don't have permission to access this resource.";
    case 404:
      return "The requested content was not found.";
    case 429:
      return "Too many requests. Please wait a moment and try again.";
    case 500:
      return "Server error. Please try again later.";
    case 502:
      return "Service temporarily unavailable. Please try again later.";
    case 503:
      return "Service unavailable. Please try again later.";
    default:
      return "An error occurred while fetching data. Please try again.";
  }
};

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

// API functions with error handling
export const tmdbService = {
  // Get trending movies
  getTrendingMovies: async (page: number = 1) => {
    try {
      const response = await tmdbApi.get(TMDB_ENDPOINTS.TRENDING_MOVIES, {
        params: { page },
      });
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError);
    }
  },

  // Get popular movies
  getPopularMovies: async (page: number = 1) => {
    try {
      const response = await tmdbApi.get(TMDB_ENDPOINTS.POPULAR_MOVIES, {
        params: { page },
      });
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError);
    }
  },

  // Get top rated movies
  getTopRatedMovies: async (page: number = 1) => {
    try {
      const response = await tmdbApi.get(TMDB_ENDPOINTS.TOP_RATED_MOVIES, {
        params: { page },
      });
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError);
    }
  },

  // Search movies
  searchMovies: async (query: string, page: number = 1) => {
    try {
      const response = await tmdbApi.get(TMDB_ENDPOINTS.SEARCH_MOVIES, {
        params: { query, page },
      });
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError);
    }
  },

  // Get movie details
  getMovieDetails: async (movieId: number) => {
    try {
      const response = await tmdbApi.get(
        `${TMDB_ENDPOINTS.MOVIE_DETAILS}/${movieId}`
      );
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError);
    }
  },

  // Get movie cast
  getMovieCast: async (movieId: number) => {
    try {
      const response = await tmdbApi.get(
        `${TMDB_ENDPOINTS.MOVIE_CAST}/${movieId}/credits`
      );
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError);
    }
  },

  // Get similar movies
  getSimilarMovies: async (movieId: number, page: number = 1) => {
    try {
      const response = await tmdbApi.get(
        `${TMDB_ENDPOINTS.SIMILAR_MOVIES}/${movieId}/similar`,
        {
          params: { page },
        }
      );
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError);
    }
  },
};

export default tmdbApi;
