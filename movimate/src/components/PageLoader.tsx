"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LoadingSpinner from "./LoadingSpinner";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    // Simulate loading time for route changes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        backdropFilter: "blur(4px)",
      }}
    >
      <LoadingSpinner size="large" text="Loading..." />
    </div>
  );
}
