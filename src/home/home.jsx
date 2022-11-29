import React, { useState, useEffect } from "react";
import "./home.css";
import Card from "../components/Card";

const Home = function () {
  const [noun, setNoun] = useState("Web Developer");
  const [arrowIcon, setArrowIcon] = useState("keyboard_arrow_down");
  const [showCards, setShowCards] = useState(false);
  const [browseClickedStyle, setBrowseClickedStyle] = useState();
  const [nounTimeout, setNounTimeout] = useState(5000);

  useEffect(() => {
    setTimeout(() => {
      if (noun === "Web Developer") {
        setNoun("Photographer");
        setNounTimeout(5000);
      }
      if (noun === "Photographer") {
        setNoun("Motor Enthusiast");
        setNounTimeout(5000);
      }
      if (noun === "Motor Enthusiast") {
        setNoun("Web Developer");
        setNounTimeout(60000);
      }
    }, nounTimeout);
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
      setBrowseClickedStyle({ marginTop: "4em" });
    }
  };
  return (
    <>
      <div className="welcomeFlex">
        <div className="side side-1">
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
        </div>

        <div className="side side-2">
          <div className="introduction">
            <div className="introText">
              <p style={{ fontSize: "1.5em" }}>I'm a self-taught Web Developer.</p>
              <p>I create useful and creative web experiences for others who share the same interests as me.</p>
              <p>
                Currently, I'm working on a React JS application designed to make project car ownership more
                streamlined. Here is the github
                <a
                  href="https://github.com/siskiuslide/Project-car-app"
                  style={{ textDecoration: "none", color: "var(--glaucousblue)", fontWeight: 600 }}
                >
                  repo
                </a>
                .
              </p>
            </div>
            <div className="contactSection">
              <p className="contact">
                <span className="material-icons">phone</span> 07778868073
              </p>
              <p className="contact">
                <span className="material-icons">email</span> jakewhatling2002@gmail.com
              </p>
              <p className="contact"></p>
            </div>
          </div>
        </div>
      </div>

      <div className="browse" onClick={browseHandler} style={browseClickedStyle}>
        Browse my work
        <span className="material-icons" style={{ marginInline: "1vw" }}>
          {arrowIcon}
        </span>
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
