import React from "react";
import { NavbarWrapper } from "./NavbarStyle";

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