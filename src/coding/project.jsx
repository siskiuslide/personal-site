import React, { useState, useEffect } from "react";
import ControlButton from "./extras/controlButton";
import "./project.css";
import "./extras/controlButton.css";

const Project = function (props) {
  const [styles, setStyles] = useState({ background: `var(--${props.bg})` });

  return (
    <div className={props.title === "Control" ? "controlProj project" : "project"} style={styles}>
      <p className="title">{props.title}</p>
      {props.title === "Control" ? (
        <div className="controlDescSection">
          <p className="description" style={{ background: `var(--${props.bg}cont)`, width: props.textWi }}>
            {props.desc}
          </p>
          <ControlButton className="control control-1" />
        </div>
      ) : (
        <p className="description" style={{ background: `var(--${props.bg}cont)`, width: props.textWi }}>
          {props.desc}
        </p>
      )}
      <div className="screenshot"></div>
    </div>
  );
};

export default Project;
