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
} from "@radix-ui/themes";
import { FaSearch, FaBars, FaHome, FaHeart, FaTimes } from "react-icons/fa";
import * as Dialog from "@radix-ui/react-dialog";
import LoadingSpinner from "./LoadingSpinner";

export default function MobileNavbar() {
  const [query, setQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (query.trim()) {
      setIsSearching(true);
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      // Reset loading state and clear input after navigation
      setTimeout(() => {
        setIsSearching(false);
        setQuery(""); // Clear the search input for next search
      }, 500);
    }
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
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
              {/* Top row: Logo and Hamburger Menu */}
              <Flex justify="between" align="center">
                <Link href="/" style={{ textDecoration: "none" }}>
                  <Flex align="center" gap="3">
                    <Box
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "var(--gray-3)",
                        color: "var(--gray-12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                    >
                      MM
                    </Box>
                    <Text
                      size="3"
                      weight="bold"
                      style={{ color: "var(--gray-12)" }}
                    >
                      Moviemate
                    </Text>
                  </Flex>
                </Link>

                <IconButton
                  variant="soft"
                  color="gray"
                  size="2"
                  onClick={toggleMenu}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                  }}
                  className="hover:bg-white hover:bg-opacity-20 hover:scale-105"
                >
                  <FaBars size={18} style={{ color: "var(--gray-12)" }} />
                </IconButton>
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
                        width: "240px",
                        backgroundColor: "var(--gray-2)",
                        border: "1px solid var(--gray-6)",
                        borderRadius: "20px",
                      }}
                    >
                      <TextField.Slot>
                        {isSearching ? (
                          <LoadingSpinner size="small" />
                        ) : (
                          <FaSearch size={16} />
                        )}
                      </TextField.Slot>
                    </TextField.Root>
                    <Button
                      type="submit"
                      disabled={!query.trim() || isSearching}
                      size="2"
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

      {/* Mobile Menu Dialog */}
      <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <Dialog.Portal>
          <Dialog.Overlay
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              position: "fixed",
              inset: 0,
              zIndex: 50,
              backdropFilter: "blur(4px)",
            }}
            className="animate-in fade-in duration-300"
          />
          <Dialog.Content
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              height: "100vh",
              width: "280px",
              backgroundColor: "var(--gray-1)",
              borderLeft: "1px solid var(--gray-6)",
              padding: "0",
              zIndex: 51,
              boxShadow: "-4px 0 20px rgba(0, 0, 0, 0.15)",
            }}
            className="animate-in slide-in-from-right duration-300"
          >
            {/* Header */}
            <Dialog.Title asChild>
              <Box
                style={{
                  padding: "24px 20px",
                  borderBottom: "1px solid var(--gray-6)",
                  backgroundColor: "var(--violet-9)",
                }}
              >
                <Flex justify="between" align="center">
                  <Text
                    size="4"
                    weight="bold"
                    style={{ color: "var(--gray-12)" }}
                  >
                    Menu
                  </Text>
                  <Dialog.Close asChild>
                    <IconButton
                      variant="ghost"
                      color="gray"
                      size="2"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        color: "var(--gray-12)",
                        borderRadius: "50%",
                        width: "32px",
                        height: "32px",
                      }}
                    >
                      <FaTimes size={16} />
                    </IconButton>
                  </Dialog.Close>
                </Flex>
              </Box>
            </Dialog.Title>

            {/* Menu Items */}
            <Box style={{ padding: "24px 20px", flex: 1 }}>
              <Flex direction="column" gap="3">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    style={{
                      padding: "16px 20px",
                      borderRadius: "12px",
                      backgroundColor: "var(--gray-2)",
                      border: "1px solid var(--gray-4)",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                    className="hover:bg-gray-3 hover:border-gray-5 hover:shadow-sm"
                  >
                    <Box
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "var(--violet-9)",
                      }}
                    />
                    <FaHome size={16} style={{ color: "var(--violet-9)" }} />
                    <Text
                      size="3"
                      weight="medium"
                      style={{ color: "var(--gray-12)" }}
                    >
                      Home
                    </Text>
                  </Box>
                </Link>

                <Link
                  href="/favorite"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    style={{
                      padding: "16px 20px",
                      borderRadius: "12px",
                      backgroundColor: "var(--gray-2)",
                      border: "1px solid var(--gray-4)",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                    className="hover:bg-gray-3 hover:border-gray-5 hover:shadow-sm"
                  >
                    <Box
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "var(--red-9)",
                      }}
                    />
                    <FaHeart size={16} style={{ color: "var(--red-9)" }} />
                    <Text
                      size="3"
                      weight="medium"
                      style={{ color: "var(--gray-12)" }}
                    >
                      Favorites
                    </Text>
                  </Box>
                </Link>

                <Link
                  href="/search"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    style={{
                      padding: "16px 20px",
                      borderRadius: "12px",
                      backgroundColor: "var(--gray-2)",
                      border: "1px solid var(--gray-4)",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                    className="hover:bg-gray-3 hover:border-gray-5 hover:shadow-sm"
                  >
                    <Box
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "var(--blue-9)",
                      }}
                    />
                    <FaSearch size={16} style={{ color: "var(--blue-9)" }} />
                    <Text
                      size="3"
                      weight="medium"
                      style={{ color: "var(--gray-12)" }}
                    >
                      Search
                    </Text>
                  </Box>
                </Link>
              </Flex>
            </Box>

            {/* Footer */}
            <Box
              style={{
                padding: "20px",
                borderTop: "1px solid var(--gray-6)",
                backgroundColor: "var(--gray-1)",
              }}
            >
              <Text
                size="2"
                style={{
                  color: "var(--gray-10)",
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                Discover amazing movies
              </Text>
            </Box>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
