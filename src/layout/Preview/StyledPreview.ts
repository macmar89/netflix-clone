import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

const Container = styled.div`
  position: relative;
  display: none;

  img {
    width: 100%;
    height: auto;
  }

  @media ${devices.tablet} {
    display: flex;
  }
`;

const Info = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  background-color: rgb(20, 20, 20, 0.6);
  border-radius: 5px;
  width: auto;
  max-width: 50%;
  padding: 1rem;

  @media ${devices.laptopL} {
    left: 50px;
    bottom: 60px;
  }

  .other {
    display: none;
    column-gap: 0.5rem;
    font-weight: bolder;
    font-size: 1.2rem;

    @media ${devices.laptop} {
      display: flex;
      margin-bottom: 1rem
    }

    .original,
    .count {
      font-size: 0.8rem;
      color: white;

      &:before {
        content: "(";
      }
      &:after {
        content: ")";
      }
    }
  }

  .rating {
    color: gold;

    .max {
      color: white;
      font-size: 0.8rem;
    }

    &:before {
      content: "-";
      margin-right: 0.5rem;
      color: white;
    }
  }

  .overview {
    display: none;

    @media ${devices.laptopL} {
      display: flex;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    column-gap: 10px;

    .btn-label {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 5px;

      @media ${devices.laptopL} {
        column-gap: 10px;
      }

      svg {
        font-size: 1.5rem;
      }
    }
    .btn-play {
      width: 250px;
      display: none;

      @media ${devices.laptop} {
        display: flex;
      }
    }

    .link {
      user-select: none;

      .btn {
        width: 200px;
        font-size: 1rem;

        @media ${devices.laptop} {
          width: 350px;
        }
      }
    }
  }
`;

export const StyledPreview = {
  Container,
  Info,
};
