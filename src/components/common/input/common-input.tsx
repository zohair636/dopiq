import { forwardRef } from "react";
import type { CommonInputProps } from "./types/common-input-types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const CommonInput = forwardRef<HTMLInputElement, CommonInputProps>(
  ({ label, className, ...rest }, ref) => {
    return (
      <div>
        {label && (
          <Label htmlFor={label} className="mb-2">
            {label}
          </Label>
        )}
        <Input
          ref={ref}
          className={cn(
            "border border-gray-300 rounded-full h-12 w-full",
            "focus-visible:ring-0 px-4",
            className
          )}
          {...rest}
        />
      </div>
    );
  }
);

CommonInput.displayName = "CommonInput";

export default CommonInput;
