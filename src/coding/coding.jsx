import React, { useEffect, useState } from "react";
import "./coding.css";
import InfoBanner from "./extras/InfoBanner";
import Project from "./project";

const Coding = function () {
  const [introStyle, setIntroStyle] = useState({ opacity: 0, transition: "opacity 400ms 400ms" });
  useEffect(() => {
    setIntroStyle({ opacity: 1, transitionDelay: "275ms" });
  }, []);
  return (
    <>
      <InfoBanner></InfoBanner>
      <div className="codingPage">
        <div className="intro" style={introStyle}>
          <p>
            Here is a collection of the programming projects I've led or contributed to so far. My expertise is
            JavaScript development with my skills ranging across the full <b>MERN</b> stack.{" "}
          </p>

          <p>
            My current focus is improving on my React knowledge. I'm learning how to write optimized code using advanced
            techniques such as custom Hooks, the Context API and managing complex State Reducers.{" "}
          </p>
          <p>
            Once I have progressed with my React learning, I plan to start learning TypeScript as the language gaining
            huge momentum within the software industry{" "}
          </p>
        </div>
        <div className="projectList">
          <Project
            // bg="paleblue"
            title="Project Car App"
            desc="An application designed for motoring enthusiasts to organize the ownership of their vehicles, track expenses and create to-do lists."
            techList={["React", "MongoDB", "Express", "NodeJS"]}
            fadeInDelay="400"
          ></Project>
          <Project
            // bg="paleorange"
            title="Control"
            desc="A project that uses the MakerAPI to integrate with users' devices to allow remote control over smart-home devices."
            techList={["HTML", "CSS", "JS", "MongoDB", "Express", "NodeJS"]}
            fadeInDelay="700"
          ></Project>
          <Project
            // bg="palepurple"
            title="Smart Home Dashboards"
            desc="A collection of CSS templates designed to create an immersive smart-home experience when coupled with interactive dashboards. Designed in relation to the floorplan of my home."
            techList={["CSS"]}
            fadeInDelay="1000"
          ></Project>
        </div>
      </div>
    </>
  );
};

export default Coding;
