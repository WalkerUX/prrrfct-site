import React from "react";

type TextVariant =
  | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  | "body-lg" | "body-md"
  | "caption-md" | "caption-sm";

type TextColor =
  | "primary" | "secondary" | "tertiary"
  | "brand" | "inverse" | "error" | "success";

/**
 * Extend native element props so <Text> behaves like a real tag (h1, p, span, etc).
 */
export type TextProps<T extends React.ElementType> = {
  as?: T;
  variant?: TextVariant;
  color?: TextColor;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export function Text<T extends React.ElementType = "p">({
  as,
  variant = "body-md",
  color = "primary",
  className = "",
  children,
  ...rest
}: TextProps<T>) {
  const Component = as || "p";

  // Tailwind-safe static maps:
  const variantStyles: Record<TextVariant, string> = {
    "h1": "text-h1",
    "h2": "text-h2",
    "h3": "text-h3",
    "h4": "text-h4",
    "h5": "text-h5",
    "h6": "text-h6",
    "body-lg": "text-body-lg",
    "body-md": "text-body-md",
    "caption-md": "text-caption-md",
    "caption-sm": "text-caption-sm",
  };

  const colorStyles: Record<TextColor, string> = {
    "primary": "text-primary",
    "secondary": "text-secondary",
    "tertiary": "text-tertiary",
    "brand": "text-brand-primary",
    "inverse": "text-inverse",
    "error": "text-error",
    "success": "text-success",
  };

  return (
    <Component
      className={`
        ${variantStyles[variant]}
        ${colorStyles[color]}
        ${className}
      `}
      {...rest}
    >
      {children}
    </Component>
  );
}
