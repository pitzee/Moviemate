"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Box, Flex, Text, Container, Button } from "@radix-ui/themes";
import { tmdbService } from "@/utils/tmdbApi";
import { IMAGE_SIZES } from "@/config/tmdb";
import MovieCardSkeleton from "@/components/MovieCardSkeleton";
import LoadingSpinner from "@/components/LoadingSpinner";
import FavoriteButton from "@/components/FavoriteButton";
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

function SearchPageContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  // Update query when search params change
  useEffect(() => {
    const newQuery = searchParams.get("q") || "";
    setQuery(newQuery);
  }, [searchParams]);

  // Perform search when query changes
  useEffect(() => {
    if (query.trim()) {
      performSearch(query, 1);
    } else {
      setSearchResults([]);
      setTotalResults(0);
      setHasMore(false);
    }
  }, [query]);

  // Load more results
  const loadMore = async () => {
    if (loading || !hasMore || !query.trim()) return;

    try {
      setLoading(true);
      const response = await tmdbService.searchMovies(query, page + 1);

      // Filter out duplicate movies based on ID
      setSearchResults((prev) => {
        const existingIds = new Set(prev.map((movie) => movie.id));
        const newMovies = response.results.filter(
          (movie: Movie) => !existingIds.has(movie.id)
        );
        return [...prev, ...newMovies];
      });

      setPage((prev) => prev + 1);
      setHasMore(response.page < response.total_pages);
    } catch (err) {
      setError("Failed to load more results");
      console.error("Error loading more results:", err);
    } finally {
      setLoading(false);
    }
  };

  const performSearch = async (searchQuery: string, pageNum: number = 1) => {
    try {
      setLoading(true);
      setError(null);
      const response = await tmdbService.searchMovies(searchQuery, pageNum);

      setSearchResults(response.results);
      setTotalResults(response.total_results);
      setPage(pageNum);
      setHasMore(response.page < response.total_pages);
    } catch (err) {
      setError("Failed to search movies");
      console.error("Error searching movies:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Container size="4" py="6">
        {/* Search Header */}
        <Box mb="6">
          <Text
            size="6"
            weight="bold"
            style={{ color: "black", marginBottom: "20px" }}
          >
            Search Results
          </Text>

          {/* Results Count */}
          {query && totalResults > 0 && (
            <Text
              size="3"
              style={{ color: "var(--gray-11)", marginTop: "8px" }}
            >
              Found {totalResults.toLocaleString()} result
              {totalResults !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
            </Text>
          )}

          {/* Search Another Movie Hint */}
          {query && (
            <Text
              size="2"
              style={{ color: "var(--gray-10)", marginTop: "8px" }}
            >
              Use the search bar above to search for another movie
            </Text>
          )}
        </Box>

        {/* Error State */}
        {error && (
          <Box mb="6">
            <Text style={{ color: "var(--red-9)" }}>{error}</Text>
          </Box>
        )}

        {/* Loading State */}
        {loading && searchResults.length === 0 && (
          <Box>
            <div className="flex justify-center py-4 mb-4">
              <LoadingSpinner size="medium" text="Searching movies..." />
            </div>
            <MovieCardSkeleton count={10} />
          </Box>
        )}

        {/* No Results */}
        {query && !loading && searchResults.length === 0 && !error && (
          <Box py="8" style={{ textAlign: "center" }}>
            <Text size="4" style={{ color: "var(--gray-11)" }}>
              No movies found for &ldquo;{query}&rdquo;
            </Text>
            <Text
              size="3"
              style={{ color: "var(--gray-10)", marginTop: "8px" }}
            >
              Try searching with different keywords
            </Text>
          </Box>
        )}

        {/* Search Results */}
        {searchResults.length > 0 && (
          <Box>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center sm:justify-items-start">
              {searchResults.map((movie) => (
                <Link key={movie.id} href={`/movie/${movie.id}`}>
                  <Box
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
                        {movie.release_date
                          ? new Date(movie.release_date).getFullYear()
                          : "N/A"}
                      </Text>
                    </Box>
                  </Box>
                </Link>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <Flex justify="center" mt="6">
                <Button
                  onClick={loadMore}
                  disabled={loading}
                  variant="outline"
                  size="3"
                >
                  {loading ? (
                    <Flex align="center" gap="2">
                      <LoadingSpinner size="small" />
                      Loading...
                    </Flex>
                  ) : (
                    "Load More"
                  )}
                </Button>
              </Flex>
            )}

            {/* End of results indicator */}
            {!hasMore && searchResults.length > 0 && (
              <div className="text-center mt-8">
                <Text style={{ color: "var(--gray-11)" }}>
                  You&apos;ve reached the end of search results
                </Text>
              </div>
            )}
          </Box>
        )}
      </Container>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white">
          <Container size="4" py="6">
            <div className="flex justify-center py-8">
              <LoadingSpinner size="large" text="Loading search..." />
            </div>
          </Container>
        </div>
      }
    >
      <SearchPageContent />
    </Suspense>
  );
}
