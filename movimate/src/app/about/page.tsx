"use client";

import { Container, Text, Box, Heading } from "@radix-ui/themes";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Container size="4" py="8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <Box className="text-center mb-12">
            <Heading
              size="8"
              weight="bold"
              style={{
                color: "var(--gray-12)",
                marginBottom: "16px",
                background:
                  "linear-gradient(135deg, var(--violet-9), var(--purple-9))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              About Moviemate
            </Heading>
            <Text
              size="4"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.6",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              A modern movie recommendation application built for the ALX
              Ethiopia Frontend Pro Dev course
            </Text>
          </Box>

          {/* Project Overview */}
          <Box className="mb-12">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "var(--gray-12)", marginBottom: "16px" }}
            >
              Project Overview
            </Heading>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
                marginBottom: "20px",
              }}
            >
              Moviemate is a comprehensive movie recommendation application that
              showcases modern web development practices. This project
              demonstrates the integration of third-party APIs, dynamic routing,
              local data storage, and responsive UI design to deliver an
              engaging user experience.
            </Text>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
              }}
            >
              Built as part of the ALX Ethiopia Frontend Pro Dev course, this
              application serves as a practical example of building scalable,
              user-focused applications using modern frameworks and best
              practices.
            </Text>
          </Box>

          {/* Key Features */}
          <Box className="mb-12">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "var(--gray-12)", marginBottom: "16px" }}
            >
              Key Features
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "API Integration",
                  description:
                    "Fetch and display trending and recommended movies using TMDB API with proper error handling and loading states.",
                },
                {
                  title: "Dynamic Routing",
                  description:
                    "Create detailed pages for individual movies using Next.js dynamic routing for fast navigation.",
                },
                {
                  title: "Favorite Movies",
                  description:
                    "Allow users to save their favorite movies locally and manage them in a dedicated favorites section.",
                },
                {
                  title: "Responsive Design",
                  description:
                    "Fully responsive movie dashboard with smooth interactions, hover effects, and animations.",
                },
                {
                  title: "Search Functionality",
                  description:
                    "Comprehensive search capabilities with real-time results and infinite scroll pagination.",
                },
                {
                  title: "Modern UI/UX",
                  description:
                    "Built with Radix UI components and Tailwind CSS for a professional and accessible interface.",
                },
              ].map((feature, index) => (
                <Box
                  key={index}
                  style={{
                    padding: "20px",
                    borderRadius: "12px",
                    backgroundColor: "var(--gray-2)",
                    border: "1px solid var(--gray-4)",
                  }}
                >
                  <Heading
                    size="4"
                    weight="bold"
                    style={{ color: "var(--violet-9)", marginBottom: "8px" }}
                  >
                    {feature.title}
                  </Heading>
                  <Text
                    size="3"
                    style={{ color: "var(--gray-11)", lineHeight: "1.6" }}
                  >
                    {feature.description}
                  </Text>
                </Box>
              ))}
            </div>
          </Box>

          {/* Technologies */}
          <Box className="mb-12">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "var(--gray-12)", marginBottom: "16px" }}
            >
              Technologies Used
            </Heading>
            <div className="flex flex-wrap gap-3">
              {[
                "Next.js 15",
                "React 18",
                "TypeScript",
                "Radix UI",
                "Tailwind CSS",
                "TMDB API",
                "Local Storage",
                "React Icons",
              ].map((tech, index) => (
                <Box
                  key={index}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "20px",
                    backgroundColor: "var(--violet-3)",
                    border: "1px solid var(--violet-6)",
                  }}
                >
                  <Text
                    size="3"
                    weight="medium"
                    style={{ color: "var(--violet-11)" }}
                  >
                    {tech}
                  </Text>
                </Box>
              ))}
            </div>
          </Box>

          {/* Developer Information */}
          <Box className="text-center">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "var(--gray-12)", marginBottom: "16px" }}
            >
              Developer
            </Heading>
            <Box
              style={{
                padding: "24px",
                borderRadius: "16px",
                backgroundColor: "var(--gray-2)",
                border: "1px solid var(--gray-4)",
                maxWidth: "400px",
                margin: "0 auto",
              }}
            >
              <Text
                size="4"
                weight="bold"
                style={{ color: "var(--gray-12)", marginBottom: "8px" }}
              >
                Petros Birkneh
              </Text>
              <Text
                size="3"
                style={{ color: "var(--gray-11)", marginBottom: "12px" }}
              >
                ALX Ethiopia Frontend Pro Dev Student
              </Text>
              <Text size="3" style={{ color: "var(--violet-9)" }}>
                pitzee421@gmail.com
              </Text>
            </Box>
          </Box>
        </div>
      </Container>
    </div>
  );
}
