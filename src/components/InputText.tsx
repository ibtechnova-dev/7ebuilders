"use client";

import React, { forwardRef } from "react";

interface InputTextProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
  type?: "text" | "email" | "tel" | "password" | "number" | "url";
}

export const InputText = forwardRef<
  HTMLInputElement & HTMLTextAreaElement,
  InputTextProps
>(
  (
    {
      label,
      error,
      helperText,
      multiline = false,
      rows = 4,
      type = "text",
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${label?.replace(/\s+/g, "-").toLowerCase()}`;

    // Base input styling classes
    const baseInputClasses =
      "w-full px-4 py-3 bg-white dark:bg-brand-dark-navy text-brand-navy dark:text-white rounded-md border border-zinc-300 dark:border-zinc-700 transition-all duration-300 outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold disabled:opacity-50 disabled:cursor-not-allowed";
    const errorInputClasses =
      "border-red-500 focus:border-red-500 focus:ring-red-500";

    return (
      <div className={`flex flex-col w-full text-left gap-1.5 ${className}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-semibold uppercase tracking-wider text-brand-navy dark:text-zinc-300"
          >
            {label}
          </label>
        )}

        {multiline ? (
          <textarea
            id={inputId}
            ref={ref as any}
            rows={rows}
            className={`${baseInputClasses} ${error ? errorInputClasses : ""} resize-none`}
            {...(props as any)}
          />
        ) : (
          <input
            id={inputId}
            ref={ref as any}
            type={type}
            className={`${baseInputClasses} ${error ? errorInputClasses : ""}`}
            {...props}
          />
        )}

        {error && (
          <span className="text-xs text-red-500 font-medium mt-0.5">
            {error}
          </span>
        )}

        {!error && helperText && (
          <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

InputText.displayName = "InputText";
