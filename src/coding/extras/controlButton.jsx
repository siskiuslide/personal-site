import React, { useState, useReducer } from "react";
import "./controlButton.css";

const ControlButton = function (props) {
  const [bulbo, setBulbo] = useState({
    status: "on",
    class: "material-icons",
    style: {
      color: props.color,
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
          color: props.color,
          textShadow: "2px 2px 0px black, -2px -2px 0px black, -2px 2px 0px black, 2px -2px 0px black",
        },
      });
    }
  };

  return (
    <div className="controlButton">
      <h1>{props.deviceName}</h1>
      <div className={"statusIcon material-icons"} style={bulbo.style} onClick={bulboHandler}>
        {props.icon}
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default ControlButton;
