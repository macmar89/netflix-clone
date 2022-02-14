import styled from "styled-components";
import {devices} from "../../styles/breakpoints";

export const StyledTitleOriginal = styled.div`
  display: flex;
  align-items: baseline;
  column-gap: 0.8rem;
  padding-bottom: 0.5rem;

  @media ${devices.laptop} {
    padding: 1rem 0;
  }
  h1 {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1.8rem;
    margin: 0;

    span {
      font-size: 1.2rem;

      &:before {
        content: "(";
      }
      &:after {
        content: ")";
      }
    }
  }
`;
