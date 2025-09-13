import { type FC, type ReactNode } from "react";
import type { CommonButtonProps } from "./types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CommonButton: FC<CommonButtonProps> = ({
  label,
  onClick,
  leftIcon,
  rightIcon,
  className,
  variant = "default",
  type = "button",
  disabled = false,
  ...rest
}) => {
  const renderIcons = (icon: string | ReactNode) => {
    if (typeof icon === "string") {
      return <img src={icon} alt="icon" />;
    } else {
      return icon;
    }
  };
  return (
    <Button
      variant={variant}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "flex cursor-pointer items-center gap-2",
        "rounded-full",
        className
      )}
      {...rest}
    >
      {renderIcons(leftIcon)}
      {label}
      {renderIcons(rightIcon)}
    </Button>
  );
};

export default CommonButton;
