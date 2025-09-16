import { type FC } from "react";
import type { CommonInputProps } from "./types/common-input-types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const CommonInput: FC<CommonInputProps> = ({
  label,
  placeholder,
  type,
  value,
  disabled,
  onChange,
  className,
  ...rest
}) => {
  return (
    <div className="w-full">
      {label && <Label htmlFor={label} className="mb-2">{label}</Label>}
      <Input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={cn(
          "border border-gray-300 rounded-full h-12 w-full",
          "focus-visible:ring-0 px-4",
          className
        )}
        {...rest}
      />
    </div>
  );
};

export default CommonInput;
