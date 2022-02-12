import {DefaultTheme} from "styled-components";

declare module "styled-components" {

  export interface DefaultTheme {
    colors: {
      white: string
      black: string
      red:string
      gray: string
    };
  }
}

export const theme : DefaultTheme = {
  colors: {
    white: '#fff',
    black: '#000',
    red: "#e50914",
    gray: '#222'
  }
}
