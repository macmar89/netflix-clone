import React, { InputHTMLAttributes } from "react";
import { StyledInput } from "./StyledInput";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

export const Input = ({ errorMessage, ...rest }: IInputProps) => {
  return (
    <StyledInput.Wrapper>
      <StyledInput.Input {...rest} error={errorMessage !== undefined} />
      <StyledInput.ErrorMessage>{errorMessage}</StyledInput.ErrorMessage>
    </StyledInput.Wrapper>
  );
};
