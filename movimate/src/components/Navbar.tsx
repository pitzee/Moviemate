"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  TextField,
  IconButton,
  Container,
} from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  const [query, setQuery] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // For now, do nothing; hook up to search route later
  }

  return (
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
                  <Link href="/favorite">Favorite</Link>
                </Button>
              </Flex>
            </Flex>

            {/* Bottom row: Search */}
            <Flex justify="end">
              <form onSubmit={handleSubmit}>
                <TextField.Root
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search here"
                  style={{
                    width: "300px",
                    backgroundColor: "var(--gray-2)",
                    border: "1px solid var(--gray-6)",
                    borderRadius: "20px",
                  }}
                >
                  <TextField.Slot>
                    <MagnifyingGlassIcon width="16" height="16" />
                  </TextField.Slot>
                </TextField.Root>
              </form>
            </Flex>
          </Flex>
        </Container>
      </header>
    </Box>
  );
}
