"use client";

import { Container, Text, Box, Heading, Button } from "@radix-ui/themes";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "pitzee421@gmail.com",
      link: "mailto:pitzee421@gmail.com",
      color: "var(--red-9)",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/petros-birkneh",
      color: "var(--blue-9)",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "View my projects",
      link: "https://github.com/petros-birkneh",
      color: "var(--gray-9)",
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      value: "@petros_birkneh",
      link: "https://twitter.com/petros_birkneh",
      color: "var(--blue-9)",
    },
  ];

  const handleContactClick = (link: string) => {
    if (link.startsWith("mailto:")) {
      window.open(link, "_self");
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

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
              Contact Me
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
              Get in touch with Petros Birkneh, the developer behind Moviemate
            </Text>
          </Box>

          {/* Developer Introduction */}
          <Box className="mb-12">
            <Box
              style={{
                padding: "32px",
                borderRadius: "16px",
                backgroundColor: "var(--gray-2)",
                border: "1px solid var(--gray-4)",
                textAlign: "center",
              }}
            >
              <Text
                size="4"
                weight="bold"
                style={{ color: "var(--gray-12)", marginBottom: "12px" }}
              >
                Petros Birkneh
              </Text>
              <Text
                size="3"
                style={{ color: "var(--gray-11)", marginBottom: "16px" }}
              >
                Frontend Developer & ALX Ethiopia Student
              </Text>
              <Text
                size="3"
                style={{
                  color: "var(--gray-11)",
                  lineHeight: "1.6",
                  maxWidth: "500px",
                  margin: "0 auto",
                }}
              >
                I&apos;m passionate about creating beautiful, functional web
                applications. Moviemate represents my journey in modern frontend
                development, showcasing skills in React, Next.js, TypeScript,
                and API integration.
              </Text>
            </Box>
          </Box>

          {/* Contact Methods */}
          <Box className="mb-12">
            <Heading
              size="6"
              weight="bold"
              style={{
                color: "black",
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              Get In Touch
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <Box
                  key={index}
                  style={{
                    padding: "24px",
                    borderRadius: "12px",
                    backgroundColor: "var(--gray-2)",
                    border: "1px solid var(--gray-4)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  className="hover:bg-gray-3 hover:border-gray-5 hover:shadow-sm"
                  onClick={() => handleContactClick(contact.link)}
                >
                  <div className="flex items-center gap-4">
                    <Box
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        backgroundColor: `${contact.color}20`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <contact.icon
                        size={24}
                        style={{ color: contact.color }}
                      />
                    </Box>
                    <div className="flex-1">
                      <Text
                        size="3"
                        weight="bold"
                        style={{ color: "var(--gray-12)", marginBottom: "4px" }}
                      >
                        {contact.label}
                      </Text>
                      <Text size="3" style={{ color: "var(--gray-11)" }}>
                        {contact.value}
                      </Text>
                    </div>
                  </div>
                </Box>
              ))}
            </div>
          </Box>

          {/* Project Information */}
          <Box className="mb-12">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "black", marginBottom: "16px" }}
            >
              About This Project
            </Heading>
            <Box
              style={{
                padding: "24px",
                borderRadius: "12px",
                backgroundColor: "var(--violet-2)",
                border: "1px solid var(--violet-4)",
              }}
            >
              <Text
                size="3"
                style={{
                  color: "var(--gray-11)",
                  lineHeight: "1.7",
                  marginBottom: "16px",
                }}
              >
                Moviemate is developed as part of the ALX Ethiopia Frontend Pro
                Dev course. This project demonstrates proficiency in modern web
                development technologies and best practices.
              </Text>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Radix UI",
                  "Tailwind CSS",
                  "TMDB API",
                ].map((tech, index) => (
                  <Box
                    key={index}
                    style={{
                      padding: "4px 12px",
                      borderRadius: "16px",
                      backgroundColor: "var(--violet-3)",
                      border: "1px solid var(--violet-6)",
                    }}
                  >
                    <Text
                      size="2"
                      weight="medium"
                      style={{ color: "var(--violet-11)" }}
                    >
                      {tech}
                    </Text>
                  </Box>
                ))}
              </div>
            </Box>
          </Box>

          {/* Call to Action */}
          <Box className="text-center">
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                marginBottom: "20px",
                lineHeight: "1.6",
              }}
            >
              Interested in collaborating or have questions about this project?
            </Text>
            <Button
              size="3"
              style={{
                backgroundColor: "var(--violet-9)",
                color: "white",
                padding: "12px 32px",
                fontSize: "16px",
                fontWeight: "600",
              }}
              onClick={() => handleContactClick("mailto:pitzee421@gmail.com")}
              className="hover:bg-violet-10 transition-colors"
            >
              <FaEnvelope style={{ marginRight: "8px" }} />
              Send Email
            </Button>
          </Box>
        </div>
      </Container>
    </div>
  );
}
