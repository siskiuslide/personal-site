import React, { useState, useEffect } from "react";
import ControlButton from "./extras/controlButton";
import "./project.css";
import "./extras/controlButton.css";
import Tech from "./extras/tech";
import ProjectCarAppDetail from "./extras/ProjectCarAppDetail";

const Project = function (props) {
  const [styles, setStyles] = useState({
    background: `var(--${props.bg})`,
    transition: `height 500ms, opacity 600ms ${props.fadeInDelay}ms, transform 500ms`,
  });
  useEffect(() => {
    setStyles({ ...styles, opacity: 1 });
  }, []);

  return (
    <div className={"project " + props.title} style={styles}>
      <p className="projecttitle">{props.title}</p>
      <div className="techList">
        {props.techList.map((i) => (
          <Tech key={i} techName={i} />
        ))}
      </div>
      <p className="description" style={{ background: `var(--${props.bg}cont)`, width: props.textWi }}>
        {props.desc}
      </p>
      {/* control specific jsx */}
      {props.title === "Control" ? <ControlButton></ControlButton> : ""}

      {/* project car app specific jsx */}

      {props.title === "Project Car App" ? <ProjectCarAppDetail /> : <></>}
      <div className="screenshot"></div>
    </div>
  );
};

export default Project;
