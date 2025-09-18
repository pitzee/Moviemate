"use client";

import { Container, Text, Box, Heading, Button } from "@radix-ui/themes";
import Link from "next/link";
import { FaHome, FaSearch, FaHeart, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 flex items-center justify-center p-4">
      <Container size="3" className="w-full">
        <div className="max-w-2xl mx-auto text-center px-4">
          {/* 404 Animation */}
          <Box className="mb-6 sm:mb-8">
            <div className="relative">
              <Text
                size="9"
                weight="bold"
                className="text-6xl sm:text-8xl md:text-9xl lg:text-[120px]"
                style={{
                  background:
                    "linear-gradient(135deg, var(--violet-9), var(--purple-9))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: "1",
                  marginBottom: "20px",
                }}
              >
                404
              </Text>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-500 rounded-full animate-pulse"></div>
            </div>
          </Box>

          {/* Error Message */}
          <Box className="mb-6 sm:mb-8">
            <Heading
              size="7"
              weight="bold"
              className="text-2xl sm:text-3xl md:text-4xl"
              style={{
                color: "red",
                marginBottom: "16px",
              }}
            >
              Oops! Page Not Found
            </Heading>
            <Text
              size="4"
              className="text-sm sm:text-base"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.6",
                marginBottom: "8px",
              }}
            >
              The page you&apos;re looking for seems to have vanished into the
              movie universe!
            </Text>
            <Text
              size="3"
              className="text-xs sm:text-sm"
              style={{
                color: "var(--gray-10)",
                lineHeight: "1.6",
              }}
            >
              Don&apos;t worry, even the best movies have plot twists.
              Let&apos;s get you back on track.
            </Text>
          </Box>

          {/* Quick Actions */}
          <Box className="mb-6 sm:mb-8">
            <Text
              size="4"
              weight="bold"
              className="text-sm sm:text-base"
              style={{
                color: "var(--gray-12)",
                marginBottom: "20px",
              }}
            >
              Quick Actions
            </Text>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <Link href="/" style={{ textDecoration: "none" }}>
                <Box
                  style={{
                    padding: "16px",
                    borderRadius: "12px",
                    backgroundColor: "var(--violet-2)",
                    border: "1px solid var(--violet-4)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    textAlign: "center",
                  }}
                  className="hover:bg-violet-3 hover:border-violet-5 hover:shadow-sm sm:p-5"
                >
                  <FaHome
                    size={20}
                    className="sm:w-6 sm:h-6"
                    style={{
                      color: "var(--violet-9)",
                      marginBottom: "8px",
                      margin: "0 auto 8px",
                    }}
                  />
                  <Text
                    size="3"
                    weight="bold"
                    className="text-sm sm:text-base"
                    style={{ color: "var(--violet-11)" }}
                  >
                    Go Home
                  </Text>
                </Box>
              </Link>

              <Link href="/search" style={{ textDecoration: "none" }}>
                <Box
                  style={{
                    padding: "16px",
                    borderRadius: "12px",
                    backgroundColor: "var(--blue-2)",
                    border: "1px solid var(--blue-4)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    textAlign: "center",
                  }}
                  className="hover:bg-blue-3 hover:border-blue-5 hover:shadow-sm sm:p-5"
                >
                  <FaSearch
                    size={20}
                    className="sm:w-6 sm:h-6"
                    style={{
                      color: "var(--blue-9)",
                      marginBottom: "8px",
                      margin: "0 auto 8px",
                    }}
                  />
                  <Text
                    size="3"
                    weight="bold"
                    className="text-sm sm:text-base"
                    style={{ color: "var(--blue-11)" }}
                  >
                    Search Movies
                  </Text>
                </Box>
              </Link>

              <Link href="/favorite" style={{ textDecoration: "none" }}>
                <Box
                  style={{
                    padding: "16px",
                    borderRadius: "12px",
                    backgroundColor: "var(--red-2)",
                    border: "1px solid var(--red-4)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    textAlign: "center",
                  }}
                  className="hover:bg-red-3 hover:border-red-5 hover:shadow-sm sm:p-5"
                >
                  <FaHeart
                    size={20}
                    className="sm:w-6 sm:h-6"
                    style={{
                      color: "var(--red-9)",
                      marginBottom: "8px",
                      margin: "0 auto 8px",
                    }}
                  />
                  <Text
                    size="3"
                    weight="bold"
                    className="text-sm sm:text-base"
                    style={{ color: "var(--red-11)" }}
                  >
                    My Favorites
                  </Text>
                </Box>
              </Link>
            </div>
          </Box>

          {/* Back Button */}
          <Box className="flex justify-center mb-6">
            <Button
              size="3"
              variant="soft"
              color="gray"
              onClick={() => window.history.back()}
              style={{
                padding: "10px 20px",
                fontSize: "14px",
                fontWeight: "600",
              }}
              className="hover:bg-gray-3 transition-colors sm:text-base sm:px-6 sm:py-3"
            >
              <FaArrowLeft style={{ marginRight: "6px" }} />
              Go Back
            </Button>
          </Box>
        </div>
      </Container>
    </div>
  );
}
