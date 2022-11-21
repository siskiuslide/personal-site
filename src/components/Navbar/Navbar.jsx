import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const Navbar = function (props) {
  return (
    <BrowserRouter className="navbar">
      <ul>
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
    </BrowserRouter>
  );
};

export default Navbar;
