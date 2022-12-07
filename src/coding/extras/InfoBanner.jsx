import React from "react";
import "./infoBanner.css";
import Qualifications from "./Qualifications";
import Resources from "./Resources";

const InfoBanner = function (props) {
  return (
    <div className={`right-info ${props.title}-banner`} style={props.position}>
      <div className={"section " + props.title}>
        {props.title === "Qualifications" ? <Qualifications title={props.title} /> : <Resources title={props.title} />}
      </div>
    </div>
  );
};

export default InfoBanner;
