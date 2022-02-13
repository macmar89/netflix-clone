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

const Section = styled.section``;

const OurStory = styled.div`
  border-bottom: 8px solid ${({ theme }) => theme.colors.gray};
  padding: 70px 45px;

  img {
    width: 100%;
  }
`;

export const StyledHomepage = {
  Container,
  Header,
  Section,
  OurStory,
};
