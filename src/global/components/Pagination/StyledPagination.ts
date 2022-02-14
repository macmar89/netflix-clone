import styled from "styled-components";

export const StyledPagination = styled.div`
  display: flex;
  user-select: none;
  justify-content: end;
  padding: 2rem 0;

  .paginateClass {
    display: flex;
    align-items: center;
    list-style-type: none;
    column-gap: 0.5rem;

    .activePage {
      a {
        background-color: ${({ theme }) => theme.colors.red};
        padding: 1rem;
      }
    }

    .pageClass {
      cursor: pointer;
      transition: all 0.1s ease-in-out;

      a {
        padding: 1rem 1rem;
        border: 1px solid white;
        width: 100%;
        height: 100%;
      }
      &:hover {
        a {
          background-color: ${({ theme }) => theme.colors.red};
        }
      }
    }
    .prev-next {
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
`;
