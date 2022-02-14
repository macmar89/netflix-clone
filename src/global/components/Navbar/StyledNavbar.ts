import styled from "styled-components";
import { devices } from "../../../styles/breakpoints";

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
  height: 60px;
  width: 100%;
  z-index: 9999;

  transition: background-color 0.5s ease-in-out;

  @media ${devices.tablet} {
    height: 68px;
  }

  .logo {
    width: 84px;
    height: 24px;

    @media ${devices.tablet} {
      width: 92px;
      height: 31px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-flow: row;
  width: 95%;
  margin: 0 auto;

  justify-content: space-between;
  align-items: center;

  @media ${devices.mobileL} {
    width: calc(100% - 60px);
  }

  @media ${devices.tablet} {
  }

  @media ${devices.laptop} {
    width: calc(100% - 120px);
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinks = styled.ul`
  display: none;
  column-gap: 1rem;
  list-style: none;

  @media ${devices.tablet} {
    display: flex;
    &:first-child > * {
      display: none;
    }
  }
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
    display: none;

    @media ${devices.tablet} {
      display: flex;
    }
  }
`;

const Search = styled.form<SearchProps>`
  display: flex;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 5px;
  }

  input {
    background-color: black;
    outline: none;
    color: white;
    padding: 0.5rem 0.5rem 0.5rem 0.75rem;

    @media ${devices.tablet} {
      padding: 0.5rem 0.5rem 0.5rem 2rem;
    }

    &::placeholder {
      font-size: 1.05rem;
    }

    &:focus-within {
      border: 1px solid white;
    }
  }
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
