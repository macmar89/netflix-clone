import styled from "styled-components";

export const StyledStoryCard = styled.div<{ imageSide: "left" | "right" }>`
  border-bottom: 8px solid ${({ theme }) => theme.colors.gray};
  padding: 70px 45px;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;

    .image {
      order: ${({imageSide}) => imageSide === 'left' ? 1 : 2};
      width: 500px;
    }

    > * {
      flex: 1;
    }

    .text {
      order: ${({imageSide}) => imageSide === 'right' ? 1 : 2};

      h1 {
        font-size: 3.125rem;
        line-height: 1.1;
        margin-bottom: 0.5rem;
      }

      h2 {
        font-size: 1.625rem;
        margin: 0.75em 0 0.25em;
      }
    }
  }
`;
