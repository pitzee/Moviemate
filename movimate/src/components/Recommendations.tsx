"use client";

import { Box, Flex, Text, Container } from "@radix-ui/themes";

export default function Recommendations() {
  // Mock data - will be replaced with database data later
  const recommendedMovies = [
    { id: 1, title: "Movie 1", poster: "/placeholder.jpg" },
    { id: 2, title: "Movie 2", poster: "/placeholder.jpg" },
    { id: 3, title: "Movie 3", poster: "/placeholder.jpg" },
    { id: 4, title: "Movie 4", poster: "/placeholder.jpg" },
    { id: 5, title: "Movie 5", poster: "/placeholder.jpg" },
    { id: 6, title: "Movie 6", poster: "/placeholder.jpg" },
    { id: 7, title: "Movie 7", poster: "/placeholder.jpg" },
    { id: 8, title: "Movie 8", poster: "/placeholder.jpg" },
    { id: 9, title: "Movie 9", poster: "/placeholder.jpg" },
    { id: 10, title: "Movie 10", poster: "/placeholder.jpg" },
  ];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center sm:justify-items-start">
          {recommendedMovies.map((movie) => (
            <Box
              key={movie.id}
              style={{
                width: "200px",
                height: "300px",
                backgroundColor: "var(--gray-4)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--gray-11)",
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
        </div>
      </Box>
    </Container>
  );
}
