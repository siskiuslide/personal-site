import React from "react";
import "./Card.css";
const Card = function (props) {
  return (
    <div className="card" style={{ background: `var(--${props.background})` }}>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

export default Card;
