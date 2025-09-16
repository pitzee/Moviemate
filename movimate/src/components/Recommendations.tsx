"use client";

import { Box, Flex, Text, Container } from "@radix-ui/themes";
import { useState, useEffect, useRef, useCallback } from "react";
import { tmdbService } from "@/utils/tmdbApi";
import { IMAGE_SIZES } from "@/config/tmdb";
import MovieCardSkeleton from "./MovieCardSkeleton";
import LoadingSpinner from "./LoadingSpinner";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export default function Recommendations() {
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastMovieRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Fetch initial movies
  useEffect(() => {
    const fetchInitialMovies = async () => {
      try {
        setLoading(true);
        const response = await tmdbService.getPopularMovies(1);
        setRecommendedMovies(response.results);
        setPage(2);
        setHasMore(response.page < response.total_pages);
      } catch (err) {
        setError("Failed to fetch recommended movies");
        console.error("Error fetching recommended movies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialMovies();
  }, []);

  // Load more movies
  const loadMoreMovies = useCallback(async () => {
    if (loadingMore || !hasMore) return;

    try {
      setLoadingMore(true);
      const response = await tmdbService.getPopularMovies(page);

      // Filter out duplicate movies based on ID
      setRecommendedMovies((prev) => {
        const existingIds = new Set(prev.map((movie) => movie.id));
        const newMovies = response.results.filter(
          (movie) => !existingIds.has(movie.id)
        );
        return [...prev, ...newMovies];
      });

      setPage((prev) => prev + 1);
      setHasMore(response.page < response.total_pages);
    } catch (err) {
      console.error("Error loading more movies:", err);
    } finally {
      setLoadingMore(false);
    }
  }, [page, loadingMore, hasMore]);

  // Intersection Observer for infinite scroll (scoped to internal scroll container)
  useEffect(() => {
    if (loading) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore) {
          loadMoreMovies();
        }
      },
      {
        root: scrollContainerRef.current ?? null,
        threshold: 0.1,
        rootMargin: "200px 0px 200px 0px",
      }
    );

    if (lastMovieRef.current) {
      observerRef.current.observe(lastMovieRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loading, hasMore, loadingMore, loadMoreMovies]);

  if (loading) {
    return (
      <Container size="4" py="6">
        <Text
          size="6"
          weight="bold"
          style={{ color: "black", marginBottom: "20px" }}
        >
          Recommendation for you
        </Text>
        <div className="flex justify-center py-4 mb-4">
          <LoadingSpinner size="medium" text="Loading recommendations..." />
        </div>
        <MovieCardSkeleton count={10} />
      </Container>
    );
  }

  if (error) {
    return (
      <Container size="4" py="6">
        <Text
          size="6"
          weight="bold"
          style={{ color: "black", marginBottom: "20px" }}
        >
          Recommendation for you
        </Text>
        <Text style={{ color: "var(--red-9)" }}>{error}</Text>
      </Container>
    );
  }

  return (
    <Container size="4" py="6">
      <Text
        size="6"
        weight="bold"
        style={{ color: "black", marginBottom: "20px" }}
      >
        Recommendation for you
      </Text>

      <Box>
        <div
          ref={scrollContainerRef}
          className="max-h-[70vh] overflow-y-auto pr-1 movie-scroll-container"
          style={{
            scrollbarGutter: "stable",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center sm:justify-items-start">
            {recommendedMovies.map((movie, index) => (
              <Link key={`${movie.id}-${index}`} href={`/movie/${movie.id}`}>
                <Box
                  ref={
                    index === recommendedMovies.length - 1 ? lastMovieRef : null
                  }
                  style={{
                    width: "200px",
                    height: "300px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "transform 0.2s ease",
                    overflow: "hidden",
                    position: "relative",
                  }}
                  className="hover:scale-105"
                >
                  <FavoriteButton
                    movie={movie}
                    size="medium"
                    position="top-right"
                  />
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/${IMAGE_SIZES.POSTER.MEDIUM}${movie.poster_path}`}
                      alt={movie.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <Box
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "var(--gray-4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--gray-11)",
                        fontWeight: "600",
                        fontSize: "16px",
                      }}
                    >
                      {movie.title}
                    </Box>
                  )}

                  {/* Movie title overlay */}
                  <Box
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.8))",
                      padding: "20px 10px 10px",
                      color: "white",
                    }}
                  >
                    <Text
                      size="2"
                      weight="bold"
                      style={{
                        color: "white",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                      }}
                    >
                      {movie.title}
                    </Text>
                    <Text
                      size="1"
                      style={{
                        color: "var(--gray-9)",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                      }}
                    >
                      {new Date(movie.release_date).getFullYear()}
                    </Text>
                  </Box>
                </Box>
              </Link>
            ))}
          </div>

          {/* Loading more indicator */}
          {loadingMore && (
            <div className="flex justify-center mt-8">
              <LoadingSpinner size="medium" text="Loading more movies..." />
            </div>
          )}

          {/* End of results indicator */}
          {!hasMore && recommendedMovies.length > 0 && (
            <div className="text-center mt-8">
              <Text style={{ color: "var(--gray-11)" }}>
                You've reached the end of recommendations
              </Text>
            </div>
          )}
        </div>
      </Box>
    </Container>
  );
}
