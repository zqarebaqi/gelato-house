import { clx } from "@/utils/clx";
import type { JSX } from "react";

type ButtonProps = {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonBaseStyles = "rounded-xl";

const variants = {
  contained: {
    primary: "bg-primary-500 text-white",
    secondary: "bg-secondary-500 text-white",
  },
  outlined: {
    primary: "border border-primary-500 text-primary-500",
    secondary: "border border-secondary-500 text-secondary-500",
  },
  text: {
    primary: "text-gray-900",
    secondary: "text-gray-900",
  },
};

const sizes = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  children,
  color = "primary",
  size = "small",
  ...props
}): JSX.Element => {
  return (
    <button
      {...props}
      className={clx(buttonBaseStyles, variants[variant][color], sizes[size])}
    >
      {children}
    </button>
  );
};
