import React, { ChangeEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { StyledNavbar } from "./StyledNavbar";

interface ILink {
  title: string
  url: string
}

const menuLinks = [
  {
    title: "Domovská stránka",
    url: "/browse",
  },
];

export const Navbar = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const [text, setText] = useState("");

  const [isScrolled, setIsScrolled] = useState(false);

  const history = useHistory();

  window.onscroll = () => {
    setIsScrolled(window.scrollY! === 0);
    return () => (window.onscroll = null);
  };

  const handleSearch = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(`/search?query=${text.replaceAll(" ", "+")}`);
    setText("");
  };

  return (
    <StyledNavbar.Container isScrolled={isScrolled}>
      <StyledNavbar.Content>
        <StyledNavbar.Left>
          <Link to={"/browse"}>
            <img src="/images/logo.png" alt="logo" className="logo" />
          </Link>
          <StyledNavbar.NavLinks>
            {menuLinks.map((link: ILink, index: number) => (
              <StyledNavbar.NavLink key={index}>
                <Link to={link.url}>{link.title}</Link>
              </StyledNavbar.NavLink>
            ))}
          </StyledNavbar.NavLinks>
        </StyledNavbar.Left>
        <StyledNavbar.Right>
          <StyledNavbar.Search onSubmit={handleSearch} show={showSearchBox}>
            <BiSearch
              className="icon"
              onClick={() => setShowSearchBox(!showSearchBox)}
            />
            <input
              type="text"
              placeholder={"Hľadaj"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setText(e.target.value)
              }
              value={text}
            />
          </StyledNavbar.Search>
          <FaBell className="icon" />
        </StyledNavbar.Right>
      </StyledNavbar.Content>
    </StyledNavbar.Container>
  );
};
