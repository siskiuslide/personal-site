import React, { useState, useEffect } from "react";
import "./home.css";
import Card from "../components/Card";

const Home = function () {
  const [noun, setNoun] = useState("Web Developer");
  const [arrowIcon, setArrowIcon] = useState("keyboard_arrow_down");
  const [showCards, setShowCards] = useState(false);
  const [browseClickedStyle, setBrowseClickedStyle] = useState();

  useEffect(() => {
    setTimeout(() => {
      if (noun === "Web Developer") {
        setNoun("Photographer");
      }
      if (noun === "Photographer") {
        setNoun("Motor Enthusiast");
      }
      if (noun === "Motor Enthusiast") {
        setNoun("Web Developer");
      }
    }, 5000);
  }, [noun]);

  const browseHandler = function () {
    if (arrowIcon === "keyboard_arrow_down") {
      setArrowIcon("keyboard_arrow_up");
      setShowCards(true);
      setBrowseClickedStyle({ marginTop: "2em" });
      return;
    } else {
      setArrowIcon("keyboard_arrow_down");
      setShowCards(false);
      setBrowseClickedStyle({ marginTop: "5em" });
    }
  };
  return (
    <>
      <div className="welcome">Welcome!</div>
      <div className="about">
        <p className="name">
          I'm Jake, a <span className="nounSpan">{noun}</span>
        </p>
        <p className="location">
          <span className="material-icons" style={{ fontSize: "0.75em", paddingInline: "0.25em" }}>
            location_on
          </span>
          Based in Warrington
        </p>
      </div>
      <div className="browse" onClick={browseHandler} style={browseClickedStyle}>
        Browse my work <span className="material-icons">{arrowIcon}</span>
      </div>
      {showCards === true ? (
        <div className="cardFlex">
          <Card title="Coding" desc="View my projects" dest="/coding" background="shadowblue" delay="50ms"></Card>
          <Card
            title="Photography"
            desc="Browse galleries"
            dest="/Photography"
            background="middlegreen"
            delay="150ms"
          ></Card>
          <Card
            title="Motoring"
            desc="Look at my motoring updates"
            dest="/Motoring"
            background="glaucousblue"
            delay="250ms"
          ></Card>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
