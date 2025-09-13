import type React from "react";

export type CommonButtonProps = {
  label?: string;
  leftIcon?: string | React.ReactNode;
  rightIcon?: string | React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};
