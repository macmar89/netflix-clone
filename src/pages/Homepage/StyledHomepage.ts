import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
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

const StoryCard = styled.section`
  border-bottom: 8px solid ${({ theme }) => theme.colors.gray};
  padding: 70px 45px;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;

    .image {
      width: 500px;
    }

    > * {
      flex: 1;
    }

    h1 {
      font-size: 3.125rem;
      line-height: 1.1;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 1.625rem;
      margin: 0.75em 0 0.25em;
    }
  }
  //max-width: 950px;
  //padding: 0 75px;
  //text-align: center;
  //background-image: url('homepage-image.jpg');
  //background-position: center;
  //background-repeat: no-repeat;
  //object-fit: cover;
  //
  //h1 {
  //  max-width: 800px;
  //  font-size: 4rem;
  //  margin: 0 75px;
  //}
  //
  //h2 {
  //  font-size: 1.625rem;
  //  max-width: 800px;
  //  margin: 1rem auto;
  //}
  //
  //h3 {
  //  font-size: 19.2px;
  //}
`;

export const StyledHomepage = {
  Wrapper: Wrapper,
  Header: Header,
  Section: Section,
  StoryCard: StoryCard,
};
