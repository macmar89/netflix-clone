import React from "react";
import { StyledButton, StyledLinkButton } from "./StyledButton";

interface IButtonProps {
  label: string;
}

interface ILinkButtonProps extends IButtonProps {
  href: string;
}

export const Button = ({ label }: IButtonProps) => {
  return <StyledButton>{label}</StyledButton>;
};

export const LinkButton = ({ href, label }: ILinkButtonProps) => {
  return <StyledLinkButton to={href}>{label}</StyledLinkButton>;
};
