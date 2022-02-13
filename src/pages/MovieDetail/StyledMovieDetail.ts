import styled from "styled-components";

const Container = styled.div``;

const Content = styled.div`
  header {
    position: relative;
    img {
      width: 100%;
      user-select: none;
    }
    .movie-title {
      position: absolute;
      bottom: 50px;
      left: 50px;
      padding: 1.5rem 2rem;
      background-color: rgb(20, 20, 20, 0.6);
      border-radius: 5px;
      text-transform: uppercase;
      font-weight: bolder;

      .buttons {
        display: flex;
        align-items: center;
        column-gap: 0.8rem;
        margin-top: 1rem;

        button {
          width: 150px;
        }

        .icon {
          cursor: pointer;
          font-size: 2rem;
        }
      }
    }
  }
`;

const Info = styled.div``;

export const StyledMovieDetail = {
  Container,
  Content,
  Info,
};
