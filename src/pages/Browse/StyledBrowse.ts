import styled from "styled-components";

const Container = styled.div`
  height: 200vh;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const MovieList = styled.div`
  display: flex;
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
