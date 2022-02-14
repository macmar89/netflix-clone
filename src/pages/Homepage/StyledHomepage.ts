import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

const Container = styled.div`
  position: relative;
  background-color: #000;
`;

const OurStory = styled.div`
  position: relative;
  border-bottom: 8px solid ${({ theme }) => theme.colors.gray};
  width: 100%;

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 15px;
    left: 30px;
    right: 30px;
    z-index: 500;

    @media ${devices.laptop} {
      top: 30px;
      left: 50px;
      right: 50px;
    }

    img {
      width: 92px;
      height: 25px;
      //object-fit: cover;

      @media ${devices.laptop} {
        width: 167px;
        height: 45px;
      }
    }

    button {
      width: 100px;
      font-size: 0.8rem;
      padding: 0;

      @media ${devices.laptop} {
        width: 140px;
        padding: 7px 17px;
        font-weight: normal;
        font-size: 1rem;
      }
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
    height: 500px;
    object-fit: cover;

    @media ${devices.laptop} {
      height: auto;
    }
  }

  .content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    z-index: 500;
    text-align: center;
    max-width: 90%;
    margin: 0 auto;

    @media ${devices.tablet} {
      max-width: 600px;
    }

    @media ${devices.laptop} {
      max-width: 900px;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
    }

    h1 {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;

      @media ${devices.laptop} {
        font-size: 2.3rem;
        margin-bottom: 1rem;
      }

      @media ${devices.laptopL} {
        font-size: 3.5rem;
        margin-bottom: 1rem;
      }

      @media ${devices.desktop} {
      }
    }

    h2 {
      font-size: 1.3rem;
      font-weight: normal;
      margin-bottom: 0.5rem;

      @media ${devices.laptop} {
        font-size: 1.7rem;
        margin-bottom: 1rem;
      }

      @media ${devices.laptopL} {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
    }
    h3 {
      font-size: 1rem;
      font-weight: lighter;
      margin-bottom: 0.3rem;

      @media ${devices.laptop} {
        font-size: 1.2rem;
        margin-bottom: 1.2rem;
      }

      @media ${devices.laptopL} {
        font-size: 1.3rem;
        margin-bottom: 1.2rem;
      }
    }
  }

  .join-us {
    display: flex;
    flex-flow: column;
    height: 70px;
    padding-top: 1rem;
    align-items: center;

    @media ${devices.laptop} {
      align-items: normal;
      padding: 0;
      flex-flow: row;
    }

    input {
      flex: 5;
      outline: none;
      border: 0;
      padding: 1rem 0 1rem 1.5rem;
      font-size: 1.2rem;
      margin-bottom: 0.8rem;
      border-radius: 3px;
      width: 100%;

      &::placeholder {
        font-size: 1rem;
      }

      @media ${devices.laptop} {
        margin: 0;
        border-radius: 0;
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
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.3rem;
      cursor: pointer;
      border-radius: 3px;
      width: 200px;
      padding: 0.7rem 0;

      svg {
        font-size: 1.4rem;
      }

      @media ${devices.laptop} {
        padding: 0;
        font-size: 1.7rem;
        width: auto;
        border-radius: 0;
      }
    }
  }
`;

export const StyledHomepage = {
  Container,
  OurStory,
};
