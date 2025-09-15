"use client";

import { Box, Flex, Skeleton } from "@radix-ui/themes";

interface MovieCardSkeletonProps {
  count?: number;
}

export default function MovieCardSkeleton({
  count = 5,
}: MovieCardSkeletonProps) {
  return (
    <Box style={{ overflowX: "auto", paddingBottom: "10px" }}>
      <Flex gap="4" style={{ minWidth: "max-content" }}>
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            style={{
              minWidth: "200px",
              height: "300px",
              borderRadius: "8px",
              backgroundColor: "var(--gray-4)",
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }}
            className="animate-pulse"
          />
        ))}
      </Flex>
    </Box>
  );
}
