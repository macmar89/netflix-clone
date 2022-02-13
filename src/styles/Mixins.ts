import {css, CSSObject} from "styled-components";

export const responsiveStyleMixin = (mobile: CSSObject, tablet: CSSObject, desktop: CSSObject) => css`
  @media (min-width: 0px) and (max-width: 767px) {
    ${mobile};
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    ${tablet};
  }

  @media (min-width: 1024px) {
    ${desktop};
  }
`
