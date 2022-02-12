import React, { InputHTMLAttributes } from "react";
import { StyledInput } from "./StyledInput";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  noPadding? :boolean
}

export const Input = ({ noPadding, errorMessage, ...rest }: IInputProps) => {
  return (
    <StyledInput.Container noPadding={noPadding}>
      <StyledInput.Input {...rest} error={errorMessage !== undefined} />
      {errorMessage && <StyledInput.ErrorMessage>{errorMessage}</StyledInput.ErrorMessage>}
    </StyledInput.Container>
  );
};
