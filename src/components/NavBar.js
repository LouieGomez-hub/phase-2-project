import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
      >
        Home
      </NavLink>
      <br></br>
      <NavLink
        to="/heroshowcase"
        exact
      >
        Showcase
      </NavLink>
      <br></br>
      <NavLink
        to="/herostats"
        exact
      >
        Stats
      </NavLink>
    </div>
  );
}

export default NavBar;