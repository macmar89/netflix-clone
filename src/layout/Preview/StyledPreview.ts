import styled from "styled-components";

const Container = styled.div`
  position: relative;

  img {
    width: 100%;
    height: auto;
  }
`;

const Info = styled.div`
  position: absolute;
  left: 50px;
  bottom: 100px;
  background-color: rgb(20, 20, 20, 0.6);
  border-radius: 5px;
  width: auto;
  max-width: 50%;
  padding: 1rem;

  h1 {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1.8rem;
    margin: 0;
    padding: 1rem 0;

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

  .other {
    display: flex;
    column-gap: 0.5rem;
    font-weight: bolder;
    font-size: 1.2rem;

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

  .buttons {
    display: flex;
    align-items: center;
    column-gap: 10px;

    .btn-label {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 10px;

      svg {
        font-size: 1.5rem;
      }
    }
    .btn-play {
      width: 250px;
    }

    .link {
      user-select: none;

      .btn {
        width: 350px;
      }
    }
  }
`;

export const StyledPreview = {
  Container,
  Info,
};
