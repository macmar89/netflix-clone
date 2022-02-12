import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 0 55px;
  width: 500px;
  height: 500px;

  .card {
    background: green;
    flex: 0 0 19.7%;
    text-align: center;
    margin: 0 2px;
    transition: transform 300ms ease 100ms;

    &:hover {
      transform: scale(1.5) !important;
    }

    &:hover ~ .card {
      transform: translateX(25%);
    }
  }

  &:hover .card {
    transform: translateX(-25%);
  }

  .content {
    margin-top: 40px;
    height: 300px;
    position: relative;
  }

  .background {
    display: flex;
    height: 100%;
  }

  .left {
    background: black;
    width: 30%;
    position: relative;
  }

  .left:before {
    content: '';
    position: absolute;
    background-image: linear-gradient(to right,#000,transparent);
    top: 0;
    bottom: 0;
    left: 100%;
    width: 275px;
  }

  .right {
    background: green;
    width: 70%;
  }

  .content-container {
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 30px
  }
`;

const Wrapper = styled.div`


  .card {
    border: 2px solid white;
    width: 200px;
  }
`

export const StyledMovieList = {
  Container, Wrapper
};
