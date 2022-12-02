import React, { useState, useEffect } from "react";
import controlButton from "./extras/controlButton";
import "./project.css";

const Project = function (props) {
  const [styles, setStyles] = useState({ background: `var(--${props.bg})` });

  return (
    <div className="project" style={styles}>
      <p className="title">{props.title}</p>
      <p className="description" style={{ background: `var(--${props.bg}cont)`, width: props.textWi }}>
        {props.desc}
      </p>
      {props.title === "Control" ? <controlButton /> : ""}
      <div className="screenshot"></div>
    </div>
  );
};

export default Project;
