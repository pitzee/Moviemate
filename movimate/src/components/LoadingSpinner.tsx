"use client";

import { Box } from "@radix-ui/themes";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  color?: string;
  text?: string;
}

export default function LoadingSpinner({
  size = "medium",
  color = "var(--violet-9)",
  text,
}: LoadingSpinnerProps) {
  const sizeMap = {
    small: "20px",
    medium: "32px",
    large: "48px",
  };

  const spinnerSize = sizeMap[size];

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
      }}
    >
      <div
        style={{
          width: spinnerSize,
          height: spinnerSize,
          border: `3px solid var(--gray-6)`,
          borderTop: `3px solid ${color}`,
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
        className="animate-spin"
      />
      {text && (
        <Box
          style={{
            color: "var(--gray-11)",
            fontSize: size === "small" ? "12px" : size === "medium" ? "14px" : "16px",
          }}
        >
          {text}
        </Box>
      )}
    </Box>
  );
}

// Add CSS animation for the spinner
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}
