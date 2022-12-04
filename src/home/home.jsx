import React, { useState, useEffect } from "react";
import "./home.css";
import Card from "../components/Card";

const Home = function () {
  const [noun, setNoun] = useState("Web Developer");
  const [arrowIcon, setArrowIcon] = useState("keyboard_arrow_down");
  const [showCards, setShowCards] = useState(false);
  const [browseClickedStyle, setBrowseClickedStyle] = useState();
  const [nounTimeout, setNounTimeout] = useState(5000);
  const [fadeIn, setFadeIn] = useState({});

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

  useEffect(() => {
    setTimeout(() => {
      setFadeIn({
        opacity: 1,
      });
    }, 200);
  }, []);

  const browseHandler = function () {
    if (arrowIcon === "keyboard_arrow_down") {
      setArrowIcon("keyboard_arrow_up");
      setShowCards(true);
      setBrowseClickedStyle({ transform: "translateY(-4em)", fontSize: "2em", animationIterationCount: "0" });
      return;
    } else {
      setArrowIcon("keyboard_arrow_down");
      setShowCards(false);
      setBrowseClickedStyle({ marginTop: "3em", fontSize: "2.5em", animationIterationCount: "infinite" });
    }
  };
  return (
    <>
      <div className="welcomeFlex">
        <div className="side side-1" style={fadeIn}>
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
        <div className="center">
          <div className="centerImage" style={fadeIn}></div>
        </div>
        <div className="side side-2" style={fadeIn}>
          <div className="introduction">
            <div className="introText">
              <p style={{ fontSize: "1.5em" }}>I'm a self-taught Web Developer.</p>
              <p>
                I create <b>useful</b> and <b>creative</b> web experiences for others who share the same interests as
                me.
              </p>
              <p>
                Currently, I'm working on a React / NodeJS application designed to make project car ownership more
                streamlined. Here is the github{" "}
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

      <div className="browse" onClick={browseHandler} style={{ ...browseClickedStyle, opacity: 1 }}>
        Browse my work
        <span className="material-icons" style={{ marginInline: "1vw" }}>
          {arrowIcon}
        </span>
      </div>
      {showCards === true ? (
        <div className="cardFlex">
          <Card title="Coding" desc="View my projects" dest="/coding" background="glaucousblue" delay={200}></Card>
          <Card
            title="Photography"
            desc="Browse galleries"
            dest="/Photography"
            background="shadowblue"
            delay={400}
          ></Card>
          <Card
            title="Motoring"
            desc="Look at my motoring updates"
            dest="/Motoring"
            background="glaucousblue"
            delay={600}
          ></Card>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
