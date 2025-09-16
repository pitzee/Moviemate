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
import { MagnifyingGlassIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
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
                >
                  <HamburgerMenuIcon width="16" height="16" />
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
                          <MagnifyingGlassIcon width="16" height="16" />
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
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              position: "fixed",
              inset: 0,
              zIndex: 50,
            }}
          />
          <Dialog.Content
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              height: "100vh",
              width: "250px",
              backgroundColor: "var(--gray-1)",
              borderLeft: "1px solid var(--gray-6)",
              padding: "20px",
              zIndex: 51,
            }}
          >
            <Dialog.Title
              style={{
                marginBottom: "20px",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Menu
            </Dialog.Title>
            <Flex direction="column" gap="4">
              <Button asChild variant="soft" color="gray" size="3">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  HOME
                </Link>
              </Button>
              <Button asChild variant="soft" color="gray" size="3">
                <Link href="/favorite" onClick={() => setIsMenuOpen(false)}>
                  Favorite
                </Link>
              </Button>
            </Flex>
            <Dialog.Close asChild>
              <IconButton
                variant="ghost"
                color="gray"
                size="2"
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                }}
              >
                ×
              </IconButton>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
