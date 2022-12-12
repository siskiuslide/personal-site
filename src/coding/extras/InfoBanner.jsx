import React from "react";
import "./infoBanner.css";
import Qualifications from "./Qualifications";
import Resources from "./Resources";

const InfoBanner = function (props) {
  return (
    <div className={`right-info`} style={props.position}>
      <div className={"section"}>
        {/* {props.title === "Qualifications" ? <Qualifications title={props.title} /> : <Resources title={props.title} />} */}

        <Qualifications />
        <Resources />
      </div>
    </div>
  );
};

export default InfoBanner;
