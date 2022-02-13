import styled from "styled-components";

const Container = styled.div`
  background-color: #181818;
  min-height: 100vh;
`;

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
      left: 3rem;
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

const Info = styled.div`
  padding: 2rem 3rem;
  font-size: 1.05rem;

  .basic {
    display: flex;
    align-items: center;
    column-gap: 0.8rem;
    padding: 1rem 0;
    letter-spacing: 1px;
    font-size: 1.5rem;

    .rating {
      display: flex;
      align-items: baseline;
      color: gold;

      .max {
        color: white;
        font-size: 0.9rem;
      }

      .vote-count {
        margin-left: 0.3rem;
        color: white;
        font-size: 0.9rem;
      }
    }

    .adult {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      border: 1px solid ${({ theme }) => theme.colors.red};
    }
  }

  .desc {
    letter-spacing: 1px;
    line-height: 1.3;
  }

  .genres {
    display: flex;

    .label {
      margin-right: 0.5rem;

    }

    .genre {
      margin-right: 0.5rem;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

export const StyledMovieDetail = {
  Container,
  Content,
  Info,
};
