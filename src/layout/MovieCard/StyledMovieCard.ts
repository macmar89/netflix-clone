import styled from "styled-components";

const Container = styled.div`
  border: 1px solid white;
  width: 250px;
  height: 140px;
  transition: transform 0.2s ease-in-out;
  border-radius: 5px;

  cursor: pointer;

  &:hover {
    transform: scale(150%);
  }
`;

const Poster = styled.div<{ poster: string }>`
  background-image: ${({ poster }) => `url("${poster}")`};
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: 100%;

  width: 100%;
  height: 100%;

`;

const Content = styled.div`
${Container} &:hover {

}
`;

export const StyledMovieCard = {
  Container,
  Poster,
  Content,
};
