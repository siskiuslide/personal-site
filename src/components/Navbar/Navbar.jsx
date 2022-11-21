import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = function (props) {
  return (
    <ul className="navbar">
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/coding">Coding</Link>
      </li>
      <li>
        <Link to="/motoring">Motoring</Link>
      </li>
      <li>
        <Link to="/photography">Photography</Link>
      </li>
    </ul>
  );
};

export default Navbar;
