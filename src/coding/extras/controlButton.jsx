import React, { useState } from "react";
import "./controlButton.css";

const ControlButton = function () {
  const [bulbo, setBulbo] = useState({
    status: "off",
    class: "material-icons",
    style: {
      color: "white",
      textShadow: "2px 2px 0px black, -2px -2px 0px black, -2px 2px 0px black, 2px -2px 0px black",
    },
  });

  const bulboHandler = function () {
    if (bulbo.status === "on") {
      setBulbo({
        status: "off",
        class: "material-icons",
        style: {
          color: "white",
          textShadow: "2px 2px 0px black, -2px -2px 0px black, -2px 2px 0px black, 2px -2px 0px black",
        },
      });
    }
    if (bulbo.status === "off") {
      setBulbo({
        status: "on",
        style: {
          color: "yellow",
          textShadow: "2px 2px 0px black, -2px -2px 0px black, -2px 2px 0px black, 2px -2px 0px black",
        },
      });
    }
  };

  return (
    <div className="controlButton">
      <h1>Desk Lamp</h1>
      <div className={"statusIcon material-icons"} style={bulbo.style} onClick={bulboHandler}>
        lightbulb
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default ControlButton;
