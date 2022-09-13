import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      
      <img className="super" src="https://img.favpng.com/10/22/6/superhero-png-favpng-9yKc3QvuS0C0akjqeGUDZMS3U_t.jpg" alt="SuperHero Database"/>

      <NavLink
        to="/"
        exact
      >
        Home
      </NavLink>
      <NavLink
        to="/hero-showcase"
        exact
      >
        Showcase
      </NavLink>
      <NavLink
        to="/hero-stats"
        exact
      >
        Stats
      </NavLink>
    </div>
  );
}

export default NavBar;