import styled from "styled-components";

interface StyledNavbarProps {
  isScrolled: boolean;
}

interface SearchProps {
  show: boolean;
}

const Container = styled.div<StyledNavbarProps>`
  position: fixed;
  display: flex;
  background-color: ${({ isScrolled }) =>
    isScrolled ? "transparent" : "#141414"};
  height: 68px;
  width: 100%;

  transition: background-color 0.5s ease-in-out;

  .logo {
    width: 92px;
    height: 31px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-flow: row;
  width: calc(100% - 120px);
  margin: 0 auto;

  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinks = styled.ul`
  display: flex;
  column-gap: 1rem;
  list-style: none;

`;

const NavLink = styled.li`
  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  .icon {
    cursor: pointer;
    font-size: 1.3rem;
  }
`;

const Search = styled.div<SearchProps>`

`;

export const StyledNavbar = {
  Container,
  Content,
  NavLinks,
  NavLink,
  Search,
  Left,
  Right,
};
