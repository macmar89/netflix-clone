import styled from "styled-components";

export const StyledTitleOriginal = styled.div`
  display: flex;
  align-items: baseline;
  column-gap: 0.8rem;
  padding: 1rem 0;

  h1 {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1.8rem;
  }

  span {
    font-size: 1.2rem;

    &:before {
      content: "(";
    }
    &:after {
      content: ")";
    }
  }
`;
