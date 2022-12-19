import React, { useState, useEffect } from "react";
import ControlButton from "./extras/controlButton";
import "./project.css";
import "./extras/controlButton.css";
import Tech from "./extras/tech";
import ProjectCarAppDetail from "./extras/ProjectCarAppDetail";
import ControlDetail from "./extras/ControlDetail";
import DashboardDetail from "./extras/DashboardDetail";

const Project = function (props) {
  const [styles, setStyles] = useState({
    background: `var(--${props.bg})`,
    transition: `height 500ms, opacity 600ms ${props.fadeInDelay}ms, transform 500ms`,
  });

  const [chevron, setChevron] = useState(true);
  useEffect(() => {
    setStyles({ ...styles, opacity: 1 });
  }, []);

  return (
    <div
      className={"project " + props.title}
      style={styles}
      onMouseOver={() => {
        setChevron(false);
      }}
      onMouseOut={() => {
        setChevron(true);
      }}
    >
      <p className="projecttitle">{props.title}</p>
      <div className="techList">
        {props.techList.map((i) => (
          <Tech key={i} techName={i} />
        ))}
      </div>
      <p className="description" style={{ background: `var(--${props.bg}cont)`, width: props.textWi }}>
        {props.desc}
      </p>
      {chevron ? (
        <span
          className="material-icons"
          style={{ marginInline: "auto", fontSize: "3rem", marginBottom: "0", marginTop: "2rem" }}
        >
          expand_more
        </span>
      ) : (
        ""
      )}
      {/* control specific jsx */}
      {props.title === "Control" ? <ControlDetail></ControlDetail> : ""}

      {/* project car app specific jsx */}

      {props.title === "Project Car App" ? <ProjectCarAppDetail /> : <></>}
      {props.title === "Smart Home Dashboards" ? <DashboardDetail /> : <></>}
    </div>
  );
};

export default Project;
