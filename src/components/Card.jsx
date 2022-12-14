import React, { useEffect, useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = function (props) {
  const [cardStyle, setCardStyle] = useState({ ...props.style });
  const fadeIn = function () {
    setTimeout(() => {
      setCardStyle({ ...cardStyle, opacity: 1 });
    }, props.delay);
  };
  useEffect(fadeIn, []);
  return (
    <Link to={props.dest} className="card" style={cardStyle}>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </Link>
  );
};

export default Card;
