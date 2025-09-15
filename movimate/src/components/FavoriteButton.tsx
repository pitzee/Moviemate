"use client";

import { Box } from "@radix-ui/themes";
import { useFavorites } from "@/contexts/FavoritesContext";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

interface FavoriteButtonProps {
  movie: Movie;
  size?: "small" | "medium" | "large";
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

export default function FavoriteButton({
  movie,
  size = "medium",
  position = "top-right",
}: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFavorited = isFavorite(movie.id);

  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-8 h-8",
    large: "w-10 h-10",
  };

  const positionClasses = {
    "top-right": "top-2 right-2",
    "top-left": "top-2 left-2",
    "bottom-right": "bottom-2 right-2",
    "bottom-left": "bottom-2 left-2",
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(movie);
  };

  return (
    <Box
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} cursor-pointer z-10`}
      onClick={handleClick}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <svg
        width={size === "small" ? "14" : size === "medium" ? "18" : "22"}
        height={size === "small" ? "14" : size === "medium" ? "18" : "22"}
        viewBox="0 0 24 24"
        fill={isFavorited ? "#ef4444" : "none"}
        stroke={isFavorited ? "#ef4444" : "#ffffff"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </Box>
  );
}
