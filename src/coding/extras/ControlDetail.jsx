import React from "react";
import ControlButton from "./controlButton";
import "./ControlDetail.css";

const ControlDetail = function () {
  return (
    <div className="ControlDetail">
      <p className="description">
        As my first major independent project, the idea was spawned from wanting a centralized dashboard to control
        devices surrounding me.
      </p>
      <p className="description">
        The Web-app launches with my browser which means I always have access to home control.
      </p>
      <div className="controlGrid">
        <ControlButton
          deviceName="Desk Lamp"
          icon="lightbulb"
          color="#f9ff00"
          className="controlGrid-button"
        ></ControlButton>
        <div className="controlGrid-column">
          <p className="description">
            Useful features:
            <ul className="peach">
              <li>
                <p>User Authentication</p>
              </li>
              <li>
                <p>Device Usage Stats</p>
              </li>
              <li>
                <p>Favouriting System</p>
              </li>
            </ul>
          </p>
          <p className="description">Future Development:</p>
          <p className="description futureDev peach" style={{ fontSize: "1.6rem" }}>
            Rebuild the frontend using React. The frontend logic to manage devices can be rather complex. React would
            streamline the UI.
          </p>
        </div>
        <ControlButton deviceName="Heating" icon="local_fire_department" color="orange"></ControlButton>
      </div>
    </div>
  );
};

export default ControlDetail;
