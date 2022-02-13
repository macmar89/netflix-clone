import styled from "styled-components";

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

    h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 2rem;
      font-weight: normal;
      margin-bottom: 1rem;
    }
    h3 {
      font-size: 1.3rem;
      font-weight: lighter;
      margin-bottom: 0.8rem;
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
      padding: 1rem 0 1rem 1rem;

      &::placeholder {
        font-size: 1rem;
      }
    }

    button {
      flex: 2;
      border: 0;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.red};
    }
  }
`;

export const StyledHomepage = {
  Container,
  Header,
  OurStory,
};
