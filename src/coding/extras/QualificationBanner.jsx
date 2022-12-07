import React from "react";
import "./QualificationBanner.css";

const QualificationBanner = function (props) {
  return (
    <div className="right-info" style={props.initialPosition}>
      <div className="section qualifications">
        <p>Qualifications</p>
        <div className="qualification-list">
          <div className="qualification-item qual-1" style={{ transitionDelay: "200ms" }}>
            <span className="qual-image"></span>
            <div className="qual-info-flex">
              <p className="qual-issuer">City & Guilds</p>
              <p className="qual-title">Coding and Logic L3 (9628-09)</p>
              <div className="qual-info-footer">
                <p className="qual-date">Jun 2021</p>
                <a
                  className="qual-link"
                  href="https://www.credly.com/badges/2ec2bd23-36a1-4ad5-8d25-1666b45132c4?source=linked_in_profile"
                >
                  View{" "}
                  <span className="material-icons" style={{ fontSize: "1.2rem" }}>
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="qualification-item qual-2" style={{ transitionDelay: "400ms" }}>
            <span className="qual-image"></span>
            <div className="qual-info-flex">
              <p className="qual-issuer">City & Guilds</p>
              <p className="qual-title">Cloud Services L3 (9628-08)</p>
              <div className="qual-info-footer">
                <p className="qual-date">Jun 2021</p>
                <a
                  className="qual-link"
                  href="https://www.credly.com/badges/5a0aed49-d4d9-455c-94e8-7d1c42f8988f?source=linked_in_profile"
                >
                  View{" "}
                  <span className="material-icons" style={{ fontSize: "1.2rem" }}>
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="qualification-item qual-3" style={{ transitionDelay: "600ms" }}>
            <span className="qual-image"></span>
            <div className="qual-info-flex">
              <p className="qual-issuer">City & Guilds</p>
              <p className="qual-title">Coding and Logic L3 (9628-09)</p>
              <div className="qual-info-footer">
                <p className="qual-date">Jun 2021</p>
                <a
                  className="qual-link"
                  href="https://www.credly.com/badges/a723b6a0-416a-414c-8600-45d73eb24871?source=linked_in_profile"
                >
                  View{" "}
                  <span className="material-icons" style={{ fontSize: "1.2rem" }}>
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationBanner;
