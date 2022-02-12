import React from "react";
import { StyledFooter } from "./StyledFooter";
import { footerLinks } from "./footerData";

type ILink = {
  text: string;
  href: string;
};

const Footer = () => {
  return (
    <StyledFooter.Wrapper>
      <StyledFooter.Container>
        <StyledFooter.FooterLink to="https://help.netflix.com/contactus" className='top'>
          Dotazy? Kontaktujte nás
        </StyledFooter.FooterLink>
        <StyledFooter.List>
          {footerLinks?.map((link: ILink, index: number) => (
            <li key={index}>
              <StyledFooter.FooterLink to={link.href}>
                {link.text}
              </StyledFooter.FooterLink>
            </li>
          ))}
        </StyledFooter.List>
      </StyledFooter.Container>
    </StyledFooter.Wrapper>
  );
};

export default Footer;
