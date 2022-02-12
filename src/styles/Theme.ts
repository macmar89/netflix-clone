import {DefaultTheme} from "styled-components";

declare module "styled-components" {

  export interface DefaultTheme {
    colors: {
      background: string
      white: string
      black: string
      red:string
      gray: string
    };
  }
}

export const theme : DefaultTheme = {
  colors: {
    background: '#141414',
    white: '#fff',
    black: '#000',
    red: "#e50914",
    gray: '#222'
  }
}
