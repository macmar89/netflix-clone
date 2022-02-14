import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

const Container = styled.div`
  background-color: #181818;
`;

const Content = styled.div`
  header {
    position: relative;
    img {
      width: 100%;
      user-select: none;
    }
    .movie-title {
      position: relative;
      padding: 1.5rem 2rem;
      background-color: rgb(20, 20, 20, 0.6);
      border-radius: 5px;
      text-transform: uppercase;
      font-weight: bolder;

      @media ${devices.tablet} {
        position: absolute;
        bottom: 50px;
        left: 3rem;
      }

      .buttons {
        display: flex;
        align-items: center;
        column-gap: 0.8rem;
        margin-top: 1rem;

        .btn-play {
          .btn-label {
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 0.5rem;
          }
          @media ${devices.tablet} {
            width: 150px;
          }
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
  display: flex;
  flex-flow: column;
  column-gap: 4rem;
  padding: 0 2rem 3rem 2rem;
  font-size: 1.05rem;

  @media ${devices.tablet} {
    padding: 1rem 3rem 3rem 3rem;
  }

  @media ${devices.laptopL} {
    flex-flow: row;
  }



  .left {
    flex: 3;
    order: 2;

    @media ${devices.laptopL} {
      order: 1;
    }
  }

  .right {
    flex: 2;
    order: 1;

    @media ${devices.laptopL} {
      order: 2;
    }
  }

  .basic {
    display: flex;
    align-items: baseline;
    column-gap: 0.8rem;
    letter-spacing: 1px;
    font-size: 1.5rem;
    padding: 1rem 0;

    .rating {
      display: flex;
      align-items: baseline;
      color: gold;
      font-weight: bold;

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

    .runtime {
      font-size: 1.2rem;
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
    padding: 1rem 0;
  }

  .genres {
    display: flex;
    align-items: baseline;
    letter-spacing: 1px;
    padding: 1rem 0;

    .label {
      margin-right: 0.5rem;
      font-size: 1rem;

      @media ${devices.laptop} {
        font-size: 1.5rem;
      }
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
