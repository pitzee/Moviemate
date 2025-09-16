"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Flex,
  Text,
  Button,
  TextField,
  IconButton,
  Container,
  Badge,
} from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import MobileNavbar from "./MobileNavbar";
import LoadingSpinner from "./LoadingSpinner";
import { useFavorites } from "@/contexts/FavoritesContext";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { favorites } = useFavorites();
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (query.trim()) {
      setIsSearching(true);
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      // Reset loading state after navigation
      setTimeout(() => {
        setIsSearching(false);
      }, 500);
    }
  }

  return (
    <>
      {/* Desktop Navbar - Hidden on mobile */}
      <div className="hidden md:block">
        <Box
          asChild
          style={{
            width: "100%",
            backgroundColor: "var(--violet-9)",
            backdropFilter: "blur(8px)",
            borderBottom: "1px solid var(--violet-8)",
          }}
        >
          <header>
            <Container size="4">
              <Flex direction="column" gap="3" py="4">
                {/* Top row: Logo and Navigation Links */}
                <Flex justify="between" align="center">
                  <Link href="/" style={{ textDecoration: "none" }}>
                    <Flex align="center" gap="3">
                      <Box
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          backgroundColor: "var(--gray-3)",
                          color: "var(--gray-12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      >
                        MM
                      </Box>
                      <Text
                        size="4"
                        weight="bold"
                        style={{ color: "var(--gray-12)" }}
                      >
                        Moviemate
                      </Text>
                    </Flex>
                  </Link>

                  <Flex gap="3" align="center">
                    <Button asChild variant="soft" color="gray" size="2">
                      <Link href="/">HOME</Link>
                    </Button>
                    <Button asChild variant="soft" color="gray" size="2">
                      <Link href="/favorite" className="relative">
                        Favorites
                        {favorites.length > 0 && (
                          <Badge
                            size="1"
                            color="red"
                            style={{
                              position: "absolute",
                              top: "-8px",
                              right: "-8px",
                              minWidth: "18px",
                              height: "18px",
                              fontSize: "10px",
                            }}
                          >
                            {favorites.length}
                          </Badge>
                        )}
                      </Link>
                    </Button>
                  </Flex>
                </Flex>

                {/* Bottom row: Search */}
                <Flex justify="end" gap="2">
                  <form onSubmit={handleSubmit}>
                    <Flex gap="2" align="center">
                      <TextField.Root
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search here"
                        disabled={isSearching}
                        style={{
                          width: "300px",
                          backgroundColor: "var(--gray-2)",
                          border: "1px solid var(--gray-6)",
                          borderRadius: "20px",
                        }}
                      >
                        <TextField.Slot>
                          {isSearching ? (
                            <LoadingSpinner size="small" />
                          ) : (
                            <MagnifyingGlassIcon width="16" height="16" />
                          )}
                        </TextField.Slot>
                      </TextField.Root>
                      <Button
                        type="submit"
                        disabled={!query.trim() || isSearching}
                      >
                        {isSearching ? "Searching..." : "Search"}
                      </Button>
                    </Flex>
                  </form>
                </Flex>
              </Flex>
            </Container>
          </header>
        </Box>
      </div>

      {/* Mobile Navbar - Hidden on desktop */}
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}
