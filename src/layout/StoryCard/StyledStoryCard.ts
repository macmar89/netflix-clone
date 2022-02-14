import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

export const StyledStoryCard = styled.div<{ imageSide: "left" | "right" }>`
  border-bottom: 8px solid ${({ theme }) => theme.colors.gray};
  padding: 50px 20px;

  @media ${devices.tablet} {
    padding: 70px 45px;
  }

  .container {
    display: flex;
    flex-flow: column;

    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;

    @media ${devices.laptop} {
      flex-flow: row;
    }

    .image {
      width: 80%;
      order: 2;

      @media ${devices.laptop} {
        order: ${({ imageSide }) => (imageSide === "left" ? 1 : 2)};
        width: 500px;
      }
    }

    > * {
      flex: 1;
    }

    .text {
      order: 1;
      text-align: center;

      margin-bottom: 1.5rem;

      @media ${devices.laptop} {
        order: ${({ imageSide }) => (imageSide === "right" ? 1 : 2)};
        margin: 0;
      }

      h1 {
        font-size: 1.7rem;
        margin-bottom: 0.5rem;

        @media ${devices.tablet} {
          font-size: 2rem;
        }


        @media ${devices.laptop} {
          font-size: 3.125rem;
          line-height: 1.1;
        }
      }

      h2 {
        font-size: 1.15rem;
        margin: 0.75em 0 0.25em;

        @media ${devices.tablet} {
          font-size: 1.2rem;
        }

        @media ${devices.laptop} {
          font-size: 1.625rem;
        }
      }
    }
  }
`;
