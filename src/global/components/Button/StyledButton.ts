import styled from "styled-components";
import { Link } from "react-router-dom";

interface StyledButtonProps {
  variant: "primary" | "secondary" | "light";
}

export const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  padding: 7px 17px;
  background-color: ${({ theme, variant }) =>
    variant === "primary"
      ? theme.colors.red
      : variant === "secondary"
      ? "#4E4439"
      : "white"};
  color: ${({ theme , variant}) => variant === 'light' ? "black" : theme.colors.white};
  border-radius: 5px;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === "primary"
        ? theme.colors.red
        : variant === "secondary"
        ? "rgba(109,109,110,0.8)"
        : "gb(133, 133, 133)"};
  }
`;

export const StyledLinkButton = styled(Link)`
  margin: auto;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  padding: 7px 17px;
  border-radius: 3px;
`;
