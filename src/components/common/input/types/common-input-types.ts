import type { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

export type CommonInputProps = {
  label?: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  className?: string;
};
