"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold" | "white";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  icon,
  iconPosition = "left",
  className = "",
  disabled,
  ...props
}) => {
  // Base classes for the button
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  // Size classes
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs tracking-wider",
    md: "px-5 py-2.5 text-sm tracking-wider uppercase",
    lg: "px-8 py-3.5 text-base tracking-wider uppercase",
  };

  // Variant classes
  const variantClasses = {
    primary:
      "bg-brand-navy text-white hover:bg-brand-dark-navy hover:text-brand-gold border border-brand-navy shadow-lg",
    secondary:
      "bg-brand-gold text-brand-deep hover:bg-brand-gold-hover hover:text-white border border-brand-gold shadow-md",
    outline:
      "bg-transparent border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-deep",
    gold:
      "bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-deep font-semibold shadow-lg hover:brightness-110",
    white:
      "bg-white text-brand-navy border border-zinc-200 hover:bg-zinc-50 shadow-md",
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!isLoading && icon && iconPosition === "left" && (
        <span className="mr-2 inline-flex items-center">{icon}</span>
      )}
      {children}
      {!isLoading && icon && iconPosition === "right" && (
        <span className="ml-2 inline-flex items-center">{icon}</span>
      )}
    </button>
  );
};
