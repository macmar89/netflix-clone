import styled from "styled-components";
import { Link } from "react-router-dom";
import { devices } from "../../styles/breakpoints";

const Container = styled.div`
  position: relative;

  img {
    display: none;
    width: 100%;
    height: 100%;

    @media ${devices.tablet} {
      display: flex;
      height: 100vh;
      object-fit: cover;
    }
  }

  .overlay {
    display: none;
    position: absolute;

    @media ${devices.tablet} {
      display: flex;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 5;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
`;

const Content = styled.div`
  z-index: 20;
`;

const Logo = styled(Link)`
  position: absolute;
  top: 0;
  height: 100px;
  display: flex;
  align-items: center;
  z-index: 200;

  .logo {
    margin-left: 50px;
    width: 167px;
    height: 45px;
  }
`;

const LoginBox = styled.div`
  position: absolute;
  padding: 70px 25px;
  height: auto;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 200;

  h1 {
    font-size: 2em;
    margin-bottom: 2rem;
  }

  @media ${devices.tablet} {
    padding: 60px 68px 48px;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 350px;
  margin: 0 auto 90px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-flow: column;

  margin-bottom: 2.5rem;
`;

const LoginFormHelp = styled.div`
  display: flex;
  justify-content: space-between;
  color: #b3b3b3;

  .help a {
    color: #b3b3b3;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Other = styled.div`
  color: #b3b3b3;

  > * {
    margin-bottom: 13px;
  }

  .fa {
    display: flex;
    align-items: center;
    column-gap: 8px;
    font-size: 13px;

    svg {
      color: #3b579d;
      font-size: 24px;
    }
  }

  .link {
    color: white;
  }

  .blue-link {
    color: #0071eb;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 13px;
  }
`;

export const StyledLogin = {
  Container,
  Content,
  Logo,
  LoginBox,
  Form,
  LoginFormHelp,
  Other,
};
