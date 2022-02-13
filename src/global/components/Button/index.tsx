import React, { ReactElement } from "react";
import { StyledButton, StyledLinkButton } from "./StyledButton";

interface IButtonProps {
  label: string | ReactElement;
  variant?: "primary" | "secondary" | "light";
  className?: string;
}

interface ILinkButtonProps extends IButtonProps {
  href: string;
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

export const LinkButton = ({ href, label }: ILinkButtonProps) => {
  return <StyledLinkButton to={href}>{label}</StyledLinkButton>;
};
