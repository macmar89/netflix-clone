import styled from "styled-components";

const Container = styled.div`

  position: relative;
  width: auto;
  height: 120px;
  background-color: #141414;
  overflow: hidden;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
  &:hover {
    transform: scale(250%);

    -webkit-box-shadow: 0 0 15px 0 rgba(255, 255, 255, 0.07);
    box-shadow: 0 0 15px 0 rgba(255, 255, 255, 0.07);
    z-index: 5;


`;

const Content = styled.div``;

const Text = styled.div<{isHovered: boolean}>`
  position: absolute;
  font-size: 13px;
  z-index: 10;
  width: 100%;
  height: 100%;

  transition: top 0.5s ease-in-out ;

`;

export const StyledMovieCard = {
  Container,
  Content,
  Text,
};
