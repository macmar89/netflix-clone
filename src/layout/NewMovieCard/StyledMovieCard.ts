import styled from "styled-components";

const Container = styled.div`

  position: relative;
  width: auto;
  height: 220px;
  background-color: #141414;
  overflow: hidden;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  margin: 0 5px;
  z-index: 100;


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
  &:hover {
    transform: scale(125%);

    -webkit-box-shadow: 0 0 15px 0 rgba(255, 255, 255, 0.07);
    box-shadow: 0 0 15px 0 rgba(255, 255, 255, 0.07);
    z-index: 200;


`;

const Content = styled.div``;

const Text = styled.div<{ isHovered: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 0;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 1rem 0;
  text-align: center;
  background-color: rgba(20, 20, 20, 0.8);
  width: 100%;
  z-index: 300;
  transform: ${({ isHovered }) =>
    isHovered ? "translateY(0)" : "translateY(100%)"};

  transition: transform 0.2s ease-in-out;

`;

export const StyledMovieCard = {
  Container,
  Content,
  Text,
};
