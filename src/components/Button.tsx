import type React from "react";
type ButtonProps = {
  text: string;
  variant?: "danger" | "secondary" | "default" | "custom";
  color?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  text,
  variant = "default",
  color = "#000",
  ...props
}) => {
  const variantColors = {
    danger: "#b91c1c", // red-700
    secondary: "#1d4ed8", // blue-700
    default: "#b45309", // amber-700
    custom: color,
  };

  return (
    <button
      {...props}
      style={
        {
          "--border-color": variantColors[variant],
        } as React.CSSProperties
      }
      className="
        cursor-pointer mt-4 relative p-4 outer-neo
        before:absolute before:inset-x-0 before:bottom-0 before:h-1
        before:bg-gradient-to-r before:from-transparent before:to-transparent
        before:via-[var(--border-color)]
        before:opacity-30 hover:before:opacity-100
        before:transition-opacity before:duration-150
      "
    >
      {text}
    </button>
  );
};

/**
 * Similar function but has tons of logic to make color dynamic -> Tailwind 4 doesn't support dynamic classes for pseudo elements  
 import React, { useState } from "react";

type ButtonProps = {
  text: string;
  color?: string;
  hoverColor?: string;
  pulse?: boolean;
  showBorder?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  text,
  color = "#FF8800",
  hoverColor = "#FFA500",
  pulse = false,
  showBorder = true,
  ...props
}) => {
  const [hovered, setHovered] = useState(false);
  const baseGradient = `linear-gradient(to right, transparent, ${color}, transparent)`;
  const hoverGradient = `linear-gradient(to right, transparent, ${hoverColor}, transparent)`;

  return (
    <button
      {...props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative p-4 mt-3 cursor-pointer outer-neo ${
        pulse ? "animate-pulse" : ""
      }`}
      style={{ position: "relative" }}
    >
      {text}
      {showBorder && (
        <span
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "4px",
            borderRadius: "2px",
            background: hovered ? hoverGradient : baseGradient,
            opacity: hovered ? 1 : 0.3,
            transition: "opacity 0.5s ease, background 0.5s ease",
          }}
        />
      )}
    </button>
  );
};

 */
