//MenuBotton.jsx
import React from "react";
import styled from "styled-components";

const MenuButtonWrapper = styled.button`
  border: 20px;
  box-shadow: 0px 0px 1px rgb(50, 50, 50);
  margin-top: 1.3rem;
  margin-right: 0.5rem;
  background: ;

  @media only screen and (min-width: 624px) {
    display: none;
  }
`;

function MenuButton({ open, handleClick }) {
  return !open ? (
    <MenuButtonWrapper onClick={handleClick}>
      <svg viewBox="0 0 100 80" width="30" height="30" fill="#2962ff">
        <rect width="90" height="10" />
        <rect y="30" width="80" height="10" />
        <rect y="60" width="70" height="10" />
      </svg>
    </MenuButtonWrapper>
  ) : (
    <MenuButtonWrapper onClick={handleClick}>
      <svg
        className="svg-icon"
        width="30"
        height="30"
        viewBox="0 0 20 20"
        fill="#2962ff"
      >
        <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z" />
      </svg>
    </MenuButtonWrapper>
  );
}

export default MenuButton;

//Navbar.jsx
import React from "react";
import { NavbarWrapper } from "./styles/NavbarStyles";

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <a href="#">Link</a>
      <a href="#">Link</a>
      <a href="#">Link</a>
      <a href="#">Link</a>
    </NavbarWrapper>
  );
}

export default Navbar;

//Navbarstyled.jsx
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: silver;
  position: fixed;
  top: 10vh;
  right: ${props => (props.open ? "0" : "-100%")};
  width: 35%;
  height: 90vh;
  transition: right 0.3s linear;
  border-radius: 15px;
  margin-right: 0.3rem;
  

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
    background: black;
  }

  a {
    padding: 0.5rem 0.8rem;
    color: black;
    text-decoration: none;
  }
`;


//Header1.jsx
import React, { useState } from "react";
import { HeaderWrapper } from "./styles/Header";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      <h2>Logo</h2>
      <Navbar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  );
}

export default Header;

//Header2.Jsx
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  margin-top: -1.25rem;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;