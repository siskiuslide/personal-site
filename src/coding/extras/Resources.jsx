import React from "react";
import Tech from "./tech";

const Resources = function (props) {
  return (
    <>
      <p>{props.title}</p>
      <div className="info-list resources">
        <div className="info-item resource-item resource-1" style={{ transitionDelay: "200ms" }}>
          <div className="resource-title">React - The Complete Guide</div>
          <div className="resource-author">Maximilian Schwarzmüller</div>
          <div className="techList resource-techList" style={{ marginTop: "10px", fontSize: "1rem" }}>
            <Tech techName="React"></Tech>
            <Tech techName="JS"></Tech>
          </div>
          <a className="resource-link" href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">
            Course Page{" "}
            <span className="material-icons" style={{ fontSize: "1.2rem" }}>
              open_in_new
            </span>
          </a>
        </div>

        <div className="info-item resource-item resource-2" style={{ transitionDelay: "400ms" }}>
          <div className="resource-title">NodeJS, Express, MongoDB & More</div>
          <div className="resource-author">Jonas Schmedtmann</div>
          <div className="techList resource-techList" style={{ marginTop: "10px", fontSize: "1rem" }}>
            <Tech techName="NodeJS"></Tech>
            <Tech techName="Express"></Tech>
            <Tech techName="MongoDB"></Tech>
            <Tech techName="JS"></Tech>
          </div>
          <a className="resource-link" href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/">
            Course Page{" "}
            <span className="material-icons" style={{ fontSize: "1.2rem" }}>
              open_in_new
            </span>
          </a>
        </div>

        <div className="info-item resource-item resource-3" style={{ transitionDelay: "600ms" }}>
          <div className="resource-title">The Complete JavaScript Course</div>
          <div className="resource-author">Jonas Schmedtmann</div>
          <div className="techList resource-techList" style={{ marginTop: "10px", marginLeft: "0", fontSize: "1rem" }}>
            <Tech techName="JS"></Tech>
          </div>
          <a className="resource-link" href="https://www.udemy.com/course/the-complete-javascript-course/">
            Course Page{" "}
            <span className="material-icons" style={{ fontSize: "1.2rem" }}>
              open_in_new
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Resources;
