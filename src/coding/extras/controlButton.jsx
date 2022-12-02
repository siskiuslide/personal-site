import React, { useState } from "react";
import "./controlButton.css";

const ControlButton = function () {
  const [bulbo, setBulbo] = useState({ status: "off", class: "material-symbols-outlined", color: "black" });

  const bulboHandler = function () {
    console.log("x");
    if (bulbo.status === "on") {
      setBulbo({ status: "off", class: "material-symbols-outlined", style: { color: "black" } });
    }
    if (bulbo.status === "off") {
      setBulbo({
        status: "on",
        class: "material-icons",
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
      <div className={"statusIcon " + bulbo.class} style={bulbo.style} onClick={bulboHandler}>
        lightbulb
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default ControlButton;
