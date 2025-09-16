"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  Box,
  Flex,
  Text,
  Container,
  Button,
  Badge,
  Skeleton,
} from "@radix-ui/themes";
import { tmdbService } from "@/utils/tmdbApi";
import { IMAGE_SIZES } from "@/config/tmdb";
import MovieCardSkeleton from "@/components/MovieCardSkeleton";
import LoadingSpinner from "@/components/LoadingSpinner";
import FavoriteButton from "@/components/FavoriteButton";
import Link from "next/link";

interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  runtime: number;
  genres: Array<{ id: number; name: string }>;
  production_companies: Array<{ id: number; name: string; logo_path: string }>;
  spoken_languages: Array<{ english_name: string; iso_639_1: string }>;
  budget: number;
  revenue: number;
  status: string;
}

interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string;
  order: number;
}

interface SimilarMovie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export default function MovieDetailPage() {
  const params = useParams();
  const movieId = params.id as string;

  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [cast, setCast] = useState<Cast[]>([]);
  const [similarMovies, setSimilarMovies] = useState<SimilarMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);

        // Fetch movie details, cast, and similar movies in parallel
        const [movieDetails, castData, similarData] = await Promise.all([
          tmdbService.getMovieDetails(parseInt(movieId)),
          tmdbService.getMovieCast(parseInt(movieId)),
          tmdbService.getSimilarMovies(parseInt(movieId)),
        ]);

        setMovie(movieDetails);
        setCast(castData.cast.slice(0, 10)); // Get top 10 cast members
        setSimilarMovies(similarData.results.slice(0, 6)); // Get 6 similar movies
      } catch (err) {
        setError("Failed to fetch movie details");
        console.error("Error fetching movie details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Container size="4" py="4">
          <div className="flex justify-center py-4 mb-4">
            <LoadingSpinner size="medium" text="Loading movie details..." />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <Skeleton
                style={{ width: "100%", height: "400px", borderRadius: "12px" }}
              />
            </div>
            <div className="space-y-4">
              <Skeleton style={{ width: "80%", height: "32px" }} />
              <Skeleton style={{ width: "100%", height: "100px" }} />
              <Skeleton style={{ width: "60%", height: "24px" }} />
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Container size="4" py="6">
          <div className="text-center">
            <Text
              size="6"
              weight="bold"
              style={{ color: "var(--red-9)", marginBottom: "16px" }}
            >
              {error || "Movie not found"}
            </Text>
            <Link href="/">
              <Button variant="soft" color="violet">
                Back to Home
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Backdrop */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        {movie.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/${IMAGE_SIZES.BACKDROP.LARGE}${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
          <Container size="4">
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6">
              <FavoriteButton movie={movie} size="large" position="top-right" />
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/${IMAGE_SIZES.POSTER.LARGE}${movie.poster_path}`}
                  alt={movie.title}
                  className="w-32 h-48 sm:w-48 sm:h-72 object-cover rounded-lg shadow-2xl"
                />
              )}
              <div className="text-white text-center sm:text-left">
                <Text size="6" weight="bold" className="mb-2 sm:text-8">
                  {movie.title}
                </Text>
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Text size="2" weight="bold" style={{ color: "black" }}>
                        {Math.round(movie.vote_average * 10) / 10}
                      </Text>
                    </div>
                    <Text size="2" style={{ color: "var(--gray-9)" }}>
                      {movie.vote_count.toLocaleString()} votes
                    </Text>
                  </div>
                  <Text size="2" style={{ color: "var(--gray-9)" }}>
                    {new Date(movie.release_date).getFullYear()}
                  </Text>
                  {movie.runtime && (
                    <Text size="2" style={{ color: "var(--gray-9)" }}>
                      {formatRuntime(movie.runtime)}
                    </Text>
                  )}
                </div>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
                  {movie.genres.map((genre) => (
                    <Badge key={genre.id} variant="soft" color="violet">
                      {genre.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Main Content */}
      <Container size="4" py="4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Description and Details */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            {/* Overview */}
            <div>
              <Text
                size="6"
                weight="bold"
                style={{ color: "black", marginBottom: "16px" }}
              >
                Description
              </Text>
              <Text
                size="3"
                style={{ color: "var(--gray-11)", lineHeight: "1.6" }}
              >
                {movie.overview}
              </Text>
            </div>

            {/* Cast */}
            {cast.length > 0 && (
              <div>
                <Text
                  size="5"
                  weight="bold"
                  style={{ color: "black", marginBottom: "16px" }}
                >
                  Cast
                </Text>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-3 sm:gap-4">
                  {cast.map((person) => (
                    <div key={person.id} className="text-center">
                      {person.profile_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                          alt={person.name}
                          className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg mb-2"
                        />
                      ) : (
                        <div className="w-full h-32 sm:h-40 md:h-48 bg-gray-200 rounded-lg mb-2 flex items-center justify-center">
                          <Text size="1" style={{ color: "var(--gray-9)" }}>
                            No Image
                          </Text>
                        </div>
                      )}
                      <Text
                        size="1"
                        weight="bold"
                        style={{ color: "black" }}
                        className="line-clamp-2"
                      >
                        {person.name}
                      </Text>
                      <Text
                        size="1"
                        style={{ color: "var(--gray-9)" }}
                        className="line-clamp-2"
                      >
                        {person.character}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Similar Movies */}
            {similarMovies.length > 0 && (
              <div>
                <Text
                  size="5"
                  weight="bold"
                  style={{ color: "black", marginBottom: "16px" }}
                >
                  Similar Movies
                </Text>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                  {similarMovies.map((similarMovie) => (
                    <Link
                      key={similarMovie.id}
                      href={`/movie/${similarMovie.id}`}
                    >
                      <div className="cursor-pointer group">
                        {similarMovie.poster_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w185${similarMovie.poster_path}`}
                            alt={similarMovie.title}
                            className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
                          />
                        ) : (
                          <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                            <Text size="1" style={{ color: "var(--gray-9)" }}>
                              No Image
                            </Text>
                          </div>
                        )}
                        <Text
                          size="1"
                          weight="bold"
                          style={{ color: "black" }}
                          className="mt-2 line-clamp-2"
                        >
                          {similarMovie.title}
                        </Text>
                        <Text size="1" style={{ color: "var(--gray-9)" }}>
                          {new Date(similarMovie.release_date).getFullYear()}
                        </Text>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Movie Details */}
          <div className="space-y-4 lg:space-y-6">
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <Text
                size="4"
                weight="bold"
                style={{ color: "black", marginBottom: "16px" }}
              >
                Movie Details
              </Text>
              <div className="space-y-3">
                <div>
                  <Text
                    size="2"
                    weight="bold"
                    style={{ color: "var(--gray-9)" }}
                  >
                    Status
                  </Text>
                  <Text size="3" style={{ color: "black" }}>
                    {movie.status}
                  </Text>
                </div>
                <div>
                  <Text
                    size="2"
                    weight="bold"
                    style={{ color: "var(--gray-9)" }}
                  >
                    Release Date
                  </Text>
                  <Text size="3" style={{ color: "black" }}>
                    {new Date(movie.release_date).toLocaleDateString()}
                  </Text>
                </div>
                {movie.runtime && (
                  <div>
                    <Text
                      size="2"
                      weight="bold"
                      style={{ color: "var(--gray-9)" }}
                    >
                      Runtime
                    </Text>
                    <Text size="3" style={{ color: "black" }}>
                      {formatRuntime(movie.runtime)}
                    </Text>
                  </div>
                )}
                {movie.budget > 0 && (
                  <div>
                    <Text
                      size="2"
                      weight="bold"
                      style={{ color: "var(--gray-9)" }}
                    >
                      Budget
                    </Text>
                    <Text size="3" style={{ color: "black" }}>
                      {formatCurrency(movie.budget)}
                    </Text>
                  </div>
                )}
                {movie.revenue > 0 && (
                  <div>
                    <Text
                      size="2"
                      weight="bold"
                      style={{ color: "var(--gray-9)" }}
                    >
                      Revenue
                    </Text>
                    <Text size="3" style={{ color: "black" }}>
                      {formatCurrency(movie.revenue)}
                    </Text>
                  </div>
                )}
                {movie.spoken_languages.length > 0 && (
                  <div>
                    <Text
                      size="2"
                      weight="bold"
                      style={{ color: "var(--gray-9)" }}
                    >
                      Languages
                    </Text>
                    <Text size="3" style={{ color: "black" }}>
                      {movie.spoken_languages
                        .map((lang) => lang.english_name)
                        .join(", ")}
                    </Text>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <Text
                size="4"
                weight="bold"
                style={{ color: "black", marginBottom: "16px" }}
              >
                Production
              </Text>
              {movie.production_companies.length > 0 && (
                <div className="space-y-3">
                  {movie.production_companies.slice(0, 3).map((company) => (
                    <div key={company.id} className="flex items-center gap-3">
                      {company.logo_path && (
                        <img
                          src={`https://image.tmdb.org/t/p/w92${company.logo_path}`}
                          alt={company.name}
                          className="h-8 object-contain"
                        />
                      )}
                      <Text size="3" style={{ color: "black" }}>
                        {company.name}
                      </Text>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
