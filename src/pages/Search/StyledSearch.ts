import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

const Container = styled.div``;

const Content = styled.div`
  padding: 100px 1.25rem 0;

  @media ${devices.tablet} {
    padding: 100px 2rem 0;
  }

  h1 {
    padding-bottom: 1rem;
    text-align: center;
    max-width: 1360px;
    margin: 0 auto;

    @media ${devices.tablet} {
      padding-bottom: 2rem;
    }
  }
`;

export const StyledSearch = {
  Container,
  Content,
};
