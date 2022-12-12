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
      setBrowseClickedStyle({
        transform: "translateY(-6rem)",
        fontSize: "2.5rem",
        marginBottom: "2rem",
        animationIterationCount: "0",
      });
      return;
    } else {
      setArrowIcon("keyboard_arrow_down");
      setShowCards(false);
      setBrowseClickedStyle({ marginTop: "5rem", fontSize: "4rem", animationIterationCount: "infinite" });
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
              <span className="material-icons" style={{ fontSize: "2.5rem", paddingInline: "0.25rem" }}>
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
              <p style={{ fontSize: "3rem" }}>I'm a self-taught Web Developer.</p>
              <p>
                I create <b className="introTextBold">useful</b> and <b className="introTextBold">creative</b> web
                experiences for others who share the same interests as me.
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
          <Card
            title="Coding"
            desc="View my projects"
            dest="/coding"
            style={{
              background: "var(--glaucousblue)",
            }}
            delay={200}
          ></Card>
          <Card
            title="Photography"
            desc="Browse galleries"
            dest="/Photography"
            style={{
              background: "var(--tealaccent)",
            }}
            delay={400}
          ></Card>
          <Card
            title="Motoring"
            desc="Look at my motoring updates"
            dest="/Motoring"
            style={{
              background: "var(--palebluecont)",
            }}
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
