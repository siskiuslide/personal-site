import React, { useState, useEffect } from "react";
import ControlButton from "./extras/controlButton";
import "./project.css";
import "./extras/controlButton.css";
import Tech from "./extras/tech";

const Project = function (props) {
  console.log(props.techList);
  const [styles, setStyles] = useState({ background: `var(--${props.bg})` });

  return (
    <div className={"project " + props.title} style={styles}>
      <p className="title">{props.title}</p>
      <div className="techList">
        {props.techList.map((i) => (
          <Tech key={i} techName={i} />
        ))}
      </div>
      <p className="description" style={{ background: `var(--${props.bg}cont)`, width: props.textWi }}>
        {props.desc}
      </p>
      {props.title === "Control" ? <ControlButton></ControlButton> : ""}
      <div className="screenshot"></div>
    </div>
  );
};

export default Project;
