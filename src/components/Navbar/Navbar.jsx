import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = function (props) {
  return (
    <ul className="navbar">
      <li>
        <NavLink activeClassName="activePage" to="/home">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/coding" activeClassName="activePage">
          Coding
        </NavLink>
      </li>
      <li>
        <NavLink to="/motoring" activeClassName="activePage">
          Motoring
        </NavLink>
      </li>
      <li>
        <NavLink to="/photography" activeClassName="activePage">
          Photography
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
