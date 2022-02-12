// globalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
