import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Container = styled.div`
  padding: 70px 45px 0 45px;

  .top {
    color: #757575 !important;
    font-size: 1em;
    margin-bottom: 1rem;

    :hover {
      text-decoration: underline;
    }
  }
`;


const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;

  li {
    display: flex;
    justify-content: flex-start;
    flex: 25%;
  }
`;

const FooterLink = styled(Link)`
  color: #757575 !important;
  font-size: 13px;
  margin-bottom: 1rem;

  :hover {
    text-decoration: underline;
  }
`;

export const StyledFooter = {
  Wrapper,
  Container,
  List,
  FooterLink,
};
