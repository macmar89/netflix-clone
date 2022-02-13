import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 960px;
  margin: 0 auto;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    row-gap: 2rem;
  }

  @media (min-width: 1440px) {
    max-width: 1140px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 1.5rem;
  }
`;

export const StyledMovieList = {
  Container,
  Main,
};
