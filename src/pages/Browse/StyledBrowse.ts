import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  .slider {
    background: purple;

    width: 100%;
    padding: 50px 50px;
  }

  .slick-list {
    padding: 80px 0;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const MovieList = styled.div`
  display: flex;
  position: relative;
  flex-flow: row;
  flex-wrap: wrap;
  gap: 0.5rem;

  padding: 100px 30px 0;
`;

export const StyledBrowse = {
  Container,
  Form,
  MovieList,
};
