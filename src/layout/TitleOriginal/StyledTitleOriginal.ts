import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

export const StyledTitleOriginal = styled.div`
  display: flex;
  flex-flow: column;
  align-items: baseline;
  row-gap: 0.2rem;
  padding-bottom: 0.5rem;

  @media ${devices.laptopL} {
    padding: 1rem 0;
  }

  h1 {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 2.2rem;
    margin: 0;

    @media ${devices.tablet} {
      font-size: 1.8rem
    }

    span {
      font-size: 1.2rem;
    }
  }
`;
