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
  width: 450px;
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
`;

export const StyledLogin = {
  Wrapper,
  Logo,
  LoginBox,
  Form,
};
