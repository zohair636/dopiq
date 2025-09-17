import type { InputHTMLAttributes } from "react";

export interface CommonInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
