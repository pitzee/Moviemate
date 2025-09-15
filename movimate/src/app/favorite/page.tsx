"use client";

import { Box, Flex, Text, Container, Button } from "@radix-ui/themes";
import { useFavorites } from "@/contexts/FavoritesContext";
import { IMAGE_SIZES } from "@/config/tmdb";
import FavoriteButton from "@/components/FavoriteButton";
import Link from "next/link";

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Container size="4" py="8">
          <div className="text-center">
            <Text
              size="8"
              weight="bold"
              style={{ color: "black", marginBottom: "16px" }}
            >
              Your Favorites
            </Text>
            <Text
              size="4"
              style={{ color: "var(--gray-11)", marginBottom: "32px" }}
            >
              You haven't added any movies to your favorites yet.
            </Text>
            <Text
              size="3"
              style={{ color: "var(--gray-9)", marginBottom: "32px" }}
            >
              Click the heart icon on any movie to add it to your favorites!
            </Text>
            <Link href="/">
              <Button variant="soft" color="violet" size="3">
                Browse Movies
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Container size="4" py="8">
        <div className="mb-8">
          <Text
            size="8"
            weight="bold"
            style={{ color: "black", marginBottom: "8px" }}
          >
            Your Favorites
          </Text>
          <Text size="3" style={{ color: "var(--gray-11)" }}>
            {favorites.length} {favorites.length === 1 ? "movie" : "movies"}{" "}
            saved
          </Text>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {favorites.map((movie) => (
            <div key={movie.id} className="group">
              <Link href={`/movie/${movie.id}`}>
                <Box
                  style={{
                    width: "100%",
                    height: "400px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "transform 0.2s ease",
                    overflow: "hidden",
                    position: "relative",
                  }}
                  className="hover:scale-105"
                >
                  <FavoriteButton
                    movie={movie}
                    size="large"
                    position="top-right"
                  />

                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/${IMAGE_SIZES.POSTER.LARGE}${movie.poster_path}`}
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

                  {/* Movie info overlay */}
                  <Box
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.9))",
                      padding: "24px 16px 16px",
                      color: "white",
                    }}
                  >
                    <Text
                      size="3"
                      weight="bold"
                      style={{
                        color: "white",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                        marginBottom: "4px",
                      }}
                      className="line-clamp-2"
                    >
                      {movie.title}
                    </Text>
                    <div className="flex items-center justify-between">
                      <Text
                        size="2"
                        style={{
                          color: "var(--gray-9)",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                        }}
                      >
                        {new Date(movie.release_date).getFullYear()}
                      </Text>
                      <div className="flex items-center gap-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="#fbbf24"
                          stroke="#fbbf24"
                          strokeWidth="2"
                        >
                          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                        </svg>
                        <Text
                          size="2"
                          style={{
                            color: "var(--gray-9)",
                            textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                          }}
                        >
                          {Math.round(movie.vote_average * 10) / 10}
                        </Text>
                      </div>
                    </div>
                  </Box>
                </Box>
              </Link>
            </div>
          ))}
        </div>

        {/* Clear all favorites button */}
        {favorites.length > 0 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              color="red"
              size="3"
              onClick={() => {
                if (confirm("Are you sure you want to remove all favorites?")) {
                  favorites.forEach((movie) => removeFromFavorites(movie.id));
                }
              }}
            >
              Clear All Favorites
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}
