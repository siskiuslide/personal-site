import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
const Card = function (props) {
  return (
    <Link to={props.dest} className="card" style={{ background: `var(--${props.background})` }}>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </Link>
  );
};

export default Card;
