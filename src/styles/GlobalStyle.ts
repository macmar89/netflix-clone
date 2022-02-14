import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.white};
  }

  h1,h2,h3,h4,h5,h6 {margin: 0; padding: 0}

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
