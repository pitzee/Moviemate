"use client";

import { Box, Text, Container } from "@radix-ui/themes";

export default function Footer() {
  // Automatically get current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-violet-900 to-violet-950 border-t border-violet-800 mt-16">
      <Container size="4" py="8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
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
                  size="5"
                  weight="bold"
                  style={{ color: "var(--gray-12)" }}
                >
                  Moviemate
                </Text>
              </div>
              <Text
                size="2"
                style={{ color: "var(--gray-11)", lineHeight: "1.6" }}
              >
                Discover your next favorite movie with personalized
                recommendations and trending content.
              </Text>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <Text
                size="4"
                weight="bold"
                style={{ color: "var(--gray-12)", marginBottom: "16px" }}
              >
                Quick Links
              </Text>
              <div className="space-y-2">
                {["About", "Contact", "Privacy Policy", "Terms of Service"].map(
                  (link) => (
                    <Text
                      key={link}
                      size="3"
                      style={{
                        color: "var(--gray-11)",
                        cursor: "pointer",
                        display: "block",
                      }}
                      className="hover:text-gray-300 transition-colors duration-200"
                    >
                      {link}
                    </Text>
                  )
                )}
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-left">
              <Text
                size="4"
                weight="bold"
                style={{ color: "var(--gray-12)", marginBottom: "16px" }}
              >
                Follow Us
              </Text>
              <div className="flex justify-center md:justify-start gap-4">
                {["Twitter", "Facebook", "Instagram", "YouTube"].map(
                  (social) => (
                    <Text
                      key={social}
                      size="3"
                      style={{
                        color: "var(--gray-11)",
                        cursor: "pointer",
                        padding: "8px 12px",
                        borderRadius: "6px",
                        backgroundColor: "var(--gray-2)",
                        transition: "all 0.2s ease",
                      }}
                      className="hover:text-gray-300 hover:bg-gray-700 transition-all duration-200"
                    >
                      {social}
                    </Text>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-violet-800 my-6"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Text size="2" style={{ color: "var(--gray-11)" }}>
              © {currentYear} Moviemate. All rights reserved.
            </Text>
            <div className="flex gap-6">
              <Text
                size="2"
                style={{ color: "var(--gray-11)", cursor: "pointer" }}
                className="hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </Text>
              <Text
                size="2"
                style={{ color: "var(--gray-11)", cursor: "pointer" }}
                className="hover:text-gray-300 transition-colors"
              >
                Terms of Service
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
