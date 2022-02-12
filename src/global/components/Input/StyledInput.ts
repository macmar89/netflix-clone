import styled from "styled-components";

interface ContainerProps {
  noPadding?: boolean;
}

interface InputProps {
  error: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-flow: column;
  padding-bottom: ${({ noPadding }) => (noPadding ? 0 : "1rem")};
`;

const Input = styled.input<InputProps>`
  height: 40px;
  border-radius: 5px;
  background-color: #333;
  color: white;
  padding-left: 10px;
  outline: none;

  border-bottom: ${({ error }) => error && "3px solid #e87c03"};

  transition: all 0.2s ease-in-out;

  &:focus-within {
    background-color: #8c8c8c !important;
  }

  &::placeholder {
    color: lightgray;
  }
`;

const ErrorMessage = styled.div`
  color: #e87c03;
  padding: 6px 3px;
`;

export const StyledInput = {
  Container,
  Input,
  ErrorMessage,
};
