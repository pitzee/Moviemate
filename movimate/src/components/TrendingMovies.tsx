"use client";

import { Box, Flex, Text, Container } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { tmdbService } from "@/utils/tmdbApi";
import { IMAGE_SIZES } from "@/config/tmdb";
import MovieCardSkeleton from "./MovieCardSkeleton";
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

export default function TrendingMovies() {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const response = await tmdbService.getTrendingMovies();
        setTrendingMovies(response.results.slice(0, 10)); // Get first 10 movies
      } catch (err) {
        setError("Failed to fetch trending movies");
        console.error("Error fetching trending movies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  if (loading) {
    return (
      <Container size="4" py="6">
        <Text
          size="6"
          weight="bold"
          style={{ color: "black", marginBottom: "20px" }}
        >
          Trending movies
        </Text>
        <MovieCardSkeleton count={5} />
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
          Trending movies
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
        Trending movies
      </Text>

      <Box
        style={{
          overflowX: "auto",
          paddingBottom: "10px",
        }}
        className="movie-scroll-container"
      >
        <Flex gap="4" style={{ minWidth: "max-content" }}>
          {trendingMovies.map((movie) => (
            <Link key={movie.id} href={`/movie/${movie.id}`}>
              <Box
                style={{
                  minWidth: "200px",
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
                    background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
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
        </Flex>
      </Box>
    </Container>
  );
}
