import React from 'react';
import {LinkButton} from "../../global/components/Button"
import {StyledHeader} from "./StyledHeader";

const Header = () => {
  return (
    <StyledHeader.Wrapper>
      <div>
        <img src="/logo.png" alt="logo" className="logo" />
      </div>
      <div>
        <select name="language">
          <option>English</option>
          <option>Slovenčina</option>
        </select>
        <LinkButton href={"/login"} label={"Prihlásiť sa"} />
      </div>
    </StyledHeader.Wrapper>
  );
};

export default Header;
