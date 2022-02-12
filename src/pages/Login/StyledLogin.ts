import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("/login-background.jpg");
  background-size: cover;
  position: relative;
`;

const Logo = styled.div`
  height: 100px;
  display: flex;
  align-items: center;

  .logo {
    margin-left: 50px;
    width: 167px;
    height: 45px;
  }
`;

const LoginBox = styled.div`
  max-width: 350px;
  padding: 60px 68px 48px;
  margin: 0 auto 90px;
  height: auto;
  background-color: rgba(0, 0, 0, 0.75);

  h1 {
    font-size: 2em;
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
      color: #3B579D;
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
  Wrapper,
  Logo,
  LoginBox,
  Form,
  LoginFormHelp,
  Other,
};
