"use client";

import { Box, Flex, Text } from "@radix-ui/themes";

export default function Footer() {
  // Automatically get current year
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full bg-violet-900 border-t border-violet-800 pt-10 pb-5 px-5 min-h-[200px] flex flex-col justify-between">
      <div className="max-w-6xl mx-auto w-full">
        {/* Navigation Links - Top */}
        <div className="flex justify-between items-center mb-20 mt-0">
          <Text
            size="4"
            weight="bold"
            style={{ color: "var(--gray-12)", cursor: "pointer" }}
            className="hover:text-gray-300 transition-colors"
          >
            About
          </Text>
          <Text
            size="4"
            weight="bold"
            style={{ color: "var(--gray-12)", cursor: "pointer" }}
            className="hover:text-gray-300 transition-colors"
          >
            Contact
          </Text>
          <Text
            size="4"
            weight="bold"
            style={{ color: "var(--gray-12)", cursor: "pointer" }}
            className="hover:text-gray-300 transition-colors"
          >
            Quick links
          </Text>
        </div>

        {/* Copyright Section - Bottom */}
        <div className="text-center">
          <Text size="3" weight="bold" style={{ color: "var(--gray-12)" }}>
            © Moviemate {currentYear}
          </Text>
        </div>
      </div>
    </div>
  );
}
