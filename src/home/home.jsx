import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Card from "../components/Card";

const Home = function () {
  const [noun, setNoun] = useState(["Web Developer", "Photographer", "Motor Enthusiast"]);
  const [arrowIcon, setArrowIcon] = useState("keyboard_arrow_down");
  const [showCards, setShowCards] = useState(false);

  const arrowHandler = function () {
    if (arrowIcon === "keyboard_arrow_down") {
      setArrowIcon("keyboard_arrow_up");
      setShowCards(false);
      return;
    } else {
      setArrowIcon("keyboard_arrow_down");
      setShowCards(true);
    }
  };
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
      <div className="browse" onClick={arrowHandler}>
        Browse my work <span className="material-icons">{arrowIcon}</span>
      </div>
      {showCards == true ? (
        <div className="cardFlex">
          <Card title="Coding" desc="View my projects" dest="/coding" background="shadowblue"></Card>
          <Card title="Photography" desc="Browse galleries" dest="/Photography" background="middlegreen"></Card>
          <Card title="Motoring" desc="Look at my motoring updates" dest="/Motoring" background="glaucousblue"></Card>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
