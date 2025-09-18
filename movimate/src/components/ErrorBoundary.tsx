"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { Container, Text, Box, Heading, Button } from "@radix-ui/themes";
import { FaExclamationTriangle, FaRedo, FaHome } from "react-icons/fa";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console or error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-[400px] bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
          <Container size="3">
            <div className="max-w-lg mx-auto text-center">
              {/* Error Icon */}
              <Box className="mb-6">
                <Box
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: "var(--red-2)",
                    border: "3px solid var(--red-6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  <FaExclamationTriangle
                    size={32}
                    style={{ color: "var(--red-9)" }}
                  />
                </Box>
              </Box>

              {/* Error Message */}
              <Box className="mb-6">
                <Heading
                  size="5"
                  weight="bold"
                  style={{
                    color: "var(--gray-12)",
                    marginBottom: "12px",
                  }}
                >
                  Something went wrong
                </Heading>
                <Text
                  size="3"
                  style={{
                    color: "var(--gray-11)",
                    lineHeight: "1.6",
                    marginBottom: "8px",
                  }}
                >
                  We encountered an error while loading this component.
                </Text>
                <Text
                  size="2"
                  style={{
                    color: "var(--gray-10)",
                    lineHeight: "1.5",
                  }}
                >
                  Please try refreshing the page or go back to the home page.
                </Text>
              </Box>

              {/* Action Buttons */}
              <Box className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="2"
                  style={{
                    backgroundColor: "var(--violet-9)",
                    color: "white",
                    padding: "8px 16px",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                  onClick={this.handleReset}
                  className="hover:bg-violet-10 transition-colors"
                >
                  <FaRedo style={{ marginRight: "6px" }} />
                  Try Again
                </Button>

                <Button
                  size="2"
                  variant="soft"
                  color="gray"
                  onClick={() => (window.location.href = "/")}
                  style={{
                    padding: "8px 16px",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                  className="hover:bg-gray-3 transition-colors"
                >
                  <FaHome style={{ marginRight: "6px" }} />
                  Go Home
                </Button>
              </Box>

              {/* Error Details (development only) */}
              {process.env.NODE_ENV === "development" && this.state.error && (
                <Box
                  style={{
                    padding: "12px",
                    borderRadius: "6px",
                    backgroundColor: "var(--gray-2)",
                    border: "1px solid var(--gray-4)",
                    marginTop: "16px",
                    textAlign: "left",
                  }}
                >
                  <Text
                    size="1"
                    weight="bold"
                    style={{ color: "var(--red-9)", marginBottom: "4px" }}
                  >
                    Error Details:
                  </Text>
                  <Text
                    size="1"
                    style={{
                      color: "var(--gray-11)",
                      fontFamily: "monospace",
                      wordBreak: "break-all",
                    }}
                  >
                    {this.state.error.message}
                  </Text>
                </Box>
              )}
            </div>
          </Container>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
