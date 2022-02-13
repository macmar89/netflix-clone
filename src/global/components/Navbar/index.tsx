import React, { ChangeEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { StyledNavbar } from "./StyledNavbar";

const menuLinks = [
  {
    title: "Home",
    url: "/browse",
  },
  {
    title: "Movies",
    url: "/browse/movies",
  },
  {
    title: "New & favorites",
    url: "/latest",
  },
  {
    title: "My List",
    url: "/my-list",
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
          <div>
            <img src="/logo.png" alt="logo" className="logo" />
          </div>
          <StyledNavbar.NavLinks>
            {menuLinks.map((link: any, index: number) => (
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
              placeholder={"Search movie"}
              autoFocus
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
