"use client";

import { Container, Text, Box, Heading, Button } from "@radix-ui/themes";
import { FaExclamationTriangle, FaRedo, FaHome, FaBug } from "react-icons/fa";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
      <Container size="4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Icon */}
          <Box className="mb-8">
            <div className="relative">
              <Box
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: "var(--red-2)",
                  border: "4px solid var(--red-6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  position: "relative",
                }}
              >
                <FaExclamationTriangle
                  size={48}
                  style={{ color: "var(--red-9)" }}
                />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
              </Box>
            </div>
          </Box>

          {/* Error Message */}
          <Box className="mb-8">
            <Heading
              size="7"
              weight="bold"
              style={{
                color: "var(--gray-12)",
                marginBottom: "16px",
                fontSize: "32px",
              }}
            >
              Oops! Something Went Wrong
            </Heading>
            <Text
              size="4"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.6",
                marginBottom: "8px",
              }}
            >
              We encountered an unexpected error while loading the page.
            </Text>
            <Text
              size="3"
              style={{
                color: "var(--gray-10)",
                lineHeight: "1.6",
                marginBottom: "16px",
              }}
            >
              Don&apos;t worry, our team has been notified and we&apos;re
              working to fix this issue.
            </Text>

            {/* Error Details (only in development) */}
            {process.env.NODE_ENV === "development" && (
              <Box
                style={{
                  padding: "16px",
                  borderRadius: "8px",
                  backgroundColor: "var(--gray-2)",
                  border: "1px solid var(--gray-4)",
                  marginTop: "16px",
                  textAlign: "left",
                }}
              >
                <Text
                  size="2"
                  weight="bold"
                  style={{ color: "var(--red-9)", marginBottom: "8px" }}
                >
                  Error Details (Development):
                </Text>
                <Text
                  size="2"
                  style={{
                    color: "var(--gray-11)",
                    fontFamily: "monospace",
                    wordBreak: "break-all",
                  }}
                >
                  {error.message}
                </Text>
                {error.digest && (
                  <Text
                    size="1"
                    style={{
                      color: "var(--gray-10)",
                      marginTop: "8px",
                      fontFamily: "monospace",
                    }}
                  >
                    Error ID: {error.digest}
                  </Text>
                )}
              </Box>
            )}
          </Box>

          {/* Action Buttons */}
          <Box className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="3"
              style={{
                backgroundColor: "var(--violet-9)",
                color: "white",
                padding: "12px 24px",
                fontSize: "16px",
                fontWeight: "600",
              }}
              onClick={reset}
              className="hover:bg-violet-10 transition-colors"
            >
              <FaRedo style={{ marginRight: "8px" }} />
              Try Again
            </Button>

            <Button
              size="3"
              variant="soft"
              color="gray"
              onClick={() => (window.location.href = "/")}
              style={{
                padding: "12px 24px",
                fontSize: "16px",
                fontWeight: "600",
              }}
              className="hover:bg-gray-3 transition-colors"
            >
              <FaHome style={{ marginRight: "8px" }} />
              Go Home
            </Button>
          </Box>

          {/* Additional Help */}
          <Box
            style={{
              padding: "20px",
              borderRadius: "12px",
              backgroundColor: "var(--gray-2)",
              border: "1px solid var(--gray-4)",
              marginTop: "24px",
            }}
          >
            <Text
              size="3"
              weight="bold"
              style={{
                color: "var(--gray-12)",
                marginBottom: "12px",
              }}
            >
              Need Help?
            </Text>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.6",
                marginBottom: "12px",
              }}
            >
              If this problem persists, please contact our support team.
            </Text>
            <Button
              size="2"
              variant="soft"
              color="blue"
              onClick={() =>
                (window.location.href = "mailto:pitzee421@gmail.com")
              }
              style={{
                padding: "8px 16px",
                fontSize: "14px",
              }}
              className="hover:bg-blue-3 transition-colors"
            >
              <FaBug style={{ marginRight: "6px" }} />
              Report Issue
            </Button>
          </Box>

          {/* Developer Info */}
          <Box className="mt-8 pt-6 border-t border-gray-200">
            <Text
              size="2"
              style={{
                color: "var(--gray-10)",
                fontStyle: "italic",
              }}
            >
              Built by Petros Birkneh for ALX Ethiopia Frontend Pro Dev Course
            </Text>
          </Box>
        </div>
      </Container>
    </div>
  );
}
