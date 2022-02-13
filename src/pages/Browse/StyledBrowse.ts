import styled from "styled-components";

const Container = styled.div`
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
