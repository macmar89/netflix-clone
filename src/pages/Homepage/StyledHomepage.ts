import styled from "styled-components";
import {devices} from "../../styles/breakpoints";

const Container = styled.div`
  position: relative;
  background-color: #000;
`;

const Header = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  padding: 25px;

  select {
    padding: 0.5rem;
  }

  .logo {
    width: 167px;
    height: 45px;
  }
`;

const OurStory = styled.div`
  position: relative;
  border-bottom: 8px solid ${({ theme }) => theme.colors.gray};
  width: 100%;

  .nav {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 30px;
    left: 50px;
    right: 50px;
    z-index: 500;

    img {
      width: 166px;
      height: 44px;
    }

    button {
      width: 140px;
      font-weight: normal;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.85) 100%
    );
    z-index: 200;
  }

  img {
    width: 100%;
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    display: flex;
    flex-flow: column;
    justify-content: center;
    z-index: 500;
    text-align: center;
    max-width: 900px;

    h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;

      @media ${devices.desktop} {
        color: pink
      }
    }

    h2 {
      font-size: 2rem;
      font-weight: normal;
      margin-bottom: 1rem;
    }
    h3 {
      font-size: 1.3rem;
      font-weight: lighter;
      margin-bottom: 1.2rem;
    }
  }

  .join-us {
    display: flex;
    height: 70px;

    input {
      flex: 5;
      border-radius: 0;
      outline: none;
      border: 0;
      padding: 1rem 0 1rem 1.5rem;
      font-size: 1.2rem;

      &::placeholder {
        font-size: 1rem;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 0.5rem;
      flex: 2;
      border: 0;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.red};
      color: ${({theme}) => theme.colors.white};
      font-size: 1.7rem;
      cursor: pointer;
      svg {
        font-size: 1.4rem;
      }
    }
  }
`;

export const StyledHomepage = {
  Container,
  Header,
  OurStory,
};
