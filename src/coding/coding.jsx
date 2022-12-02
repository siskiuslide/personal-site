import React from "react";
import "./coding.css";
import Project from "./project";

const Coding = function () {
  return (
    <>
      <div className="intro">
        <p>
          Below is a collection of the programming projects I've led or contributed to so far. My expertise is
          JavaScript development with my skills ranging across the full MERN stack.
        </p>
      </div>
      <div className="projectList">
        <Project
          bg="paleblue"
          title="Project Car App"
          desc="An application designed for motoring enthusiasts to organize the ownership of their vehicles, track expenses and create to-do lists."
          textWi="60%"
        ></Project>
        <Project
          bg="paleorange"
          title="Control"
          desc="A project that uses the MakerAPI to integrate with users' devices to allow remote control over smart-home devices"
        ></Project>
        <Project bg="palepurple" title="Smart Home Dashboards" textWi="75%"></Project>
        <Project></Project>
        <Project></Project>
      </div>
    </>
  );
};

export default Coding;
