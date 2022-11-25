import React, { useState, useEffect } from "react";
import "./home.css";
import Card from "../components/Card";

const Home = function () {
  const { noun, setNoun } = useState(["Web Developer", "Photographer", "Motor Enthusiast"]);

  return (
    <>
      <div className="welcome">Welcome!</div>
      <div className="about">
        <p className="name">
          I'm Jake, a <span className="nounSpan">Web Developer</span>
        </p>
        <p className="location">
          <span className="material-icons" style={{ fontSize: "0.75em", paddingInline: "0.25em" }}>
            location_on
          </span>
          Based in Warrington
        </p>
      </div>
      <div className="cardFlex">
        <Card title="Coding" desc="View my projects" background="shadowblue"></Card>
        <Card title="Photography" desc="Browse galleries" background="middlegreen"></Card>
        <Card title="Motoring" desc="Look at my motoring updates" background="glaucousblue"></Card>
      </div>
    </>
  );
};

export default Home;
