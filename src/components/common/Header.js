import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/">Gods</NavLink>
    </nav>
  );
};

export default Header;