import React, { ReactElement } from "react";
import { StyledButton } from "./StyledButton";

interface IButtonProps {
  label: string | ReactElement;
  variant?: "primary" | "secondary" | "light";
  className?: string;
}

export const Button = ({
  label,
  variant = "primary",
  className,
}: IButtonProps) => {
  return (
    <StyledButton variant={variant} className={className}>
      {label}
    </StyledButton>
  );
};
