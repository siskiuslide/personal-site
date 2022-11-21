import React from "react";
import "./home.css";

const Home = function () {
  return (
    <>
      <div className="welcome">Welcome!</div>
      <div className="about">
        <p className="name">
          I'm Jake, a <span className="nounSpan"> motor enthusiast </span>
        </p>
        <p className="location">
          <span className="material-icons" style={{ fontSize: "0.75em" }}>
            location_on
          </span>
          Based in Warrington
        </p>
      </div>
      <div className="introduction">
        <p className="explainTag">Allow me to explain</p>
        <p className="text">Firstly, I'm a Web Developer.</p>
      </div>
    </>
  );
};

export default Home;
