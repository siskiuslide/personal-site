import React from "react";
import "./coding.css";
import InfoBanner from "./extras/InfoBanner";
import Project from "./project";

const Coding = function () {
  return (
    <>
      <InfoBanner title="Qualifications"></InfoBanner>
      <InfoBanner title="Resources"></InfoBanner>
      <div className="intro">
        <p>
          Below is a collection of the programming projects I've led or contributed to so far. My expertise is
          JavaScript development with my skills ranging across the full MERN stack.
        </p>
        <p>
          Once I have progressed with my React learning, I plan to start learning TypeScript as the language gaining
          huge momentum within the software industry{" "}
        </p>
      </div>
      <div className="projectList">
        <Project
          bg="paleblue"
          title="Project Car App"
          desc="An application designed for motoring enthusiasts to organize the ownership of their vehicles, track expenses and create to-do lists."
          techList={["React", "MongoDB", "Express", "NodeJS"]}
          fadeInDelay="400"
        ></Project>
        <Project
          bg="paleorange"
          title="Control"
          desc="A project that uses the MakerAPI to integrate with users' devices to allow remote control over smart-home devices"
          techList={["HTML", "CSS", "JS", "MongoDB", "Express", "NodeJS"]}
          fadeInDelay="700"
        ></Project>
        <Project
          bg="palepurple"
          title="Smart Home Dashboards"
          desc="A collection of CSS templates designed to create an immersive smart-home experience. Designed in relation to the floorplan of my home, the templates allow customization of different nodes to make the floorplan interactive. "
          techList={["CSS"]}
          fadeInDelay="1000"
        ></Project>
      </div>
    </>
  );
};

export default Coding;
