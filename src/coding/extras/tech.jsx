import React from "react";
import "./tech.css";

const Tech = function (props) {
  return <div className={"tech " + props.techName}>{props.techName}</div>;
};

export default Tech;
