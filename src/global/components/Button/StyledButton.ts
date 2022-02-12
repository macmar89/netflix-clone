import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled.button`
  margin: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  padding: 7px 17px;
  border-radius: 5px;

  height: 40px;

  border: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

export const StyledLinkButton = styled(Link)`
  margin: auto;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  padding: 7px 17px;
  border-radius: 3px;
`;
