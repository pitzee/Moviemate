"use client";

import { Box, Flex, Text, Container } from "@radix-ui/themes";

export default function TrendingMovies() {
  // Mock data - will be replaced with database data later
  const trendingMovies = [
    { id: 1, title: "Movie 1", poster: "/placeholder.jpg" },
    { id: 2, title: "Movie 2", poster: "/placeholder.jpg" },
    { id: 3, title: "Movie 3", poster: "/placeholder.jpg" },
    { id: 4, title: "Movie 4", poster: "/placeholder.jpg" },
    { id: 5, title: "Movie 5", poster: "/placeholder.jpg" },
  ];

  return (
    <Container size="4" py="6">
      <Text
        size="6"
        weight="bold"
        style={{ color: "black", marginBottom: "20px" }}
      >
        Trending movies
      </Text>

      <Box style={{ overflowX: "auto", paddingBottom: "10px" }}>
        <Flex gap="4" style={{ minWidth: "max-content" }}>
          {trendingMovies.map((movie) => (
            <Box
              key={movie.id}
              style={{
                minWidth: "200px",
                height: "300px",
                backgroundColor: "var(--red-9)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
                fontSize: "16px",
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              className="hover:scale-105"
            >
              {movie.title}
            </Box>
          ))}
        </Flex>
      </Box>
    </Container>
  );
}
