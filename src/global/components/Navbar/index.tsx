import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  const [openSearchBox, setOpenSearchBox] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY! === 0);
    return () => (window.onscroll = null);
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
          <StyledNavbar.Search show={openSearchBox}>
            <BiSearch
              className="icon"
              onClick={() => setOpenSearchBox(!openSearchBox)}
            />
          </StyledNavbar.Search>
          <FaBell className="icon" />
        </StyledNavbar.Right>
      </StyledNavbar.Content>
    </StyledNavbar.Container>
  );
};
