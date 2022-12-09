import React from "react";
import "./ProjectCarAppDetail.css";

const ProjectCarAppDetail = function () {
  return (
    <div className="project-car-detail">
      <div className="project-car-images-list">
        <span className="project-car-image pci-1"></span>
        <span className="project-car-image pci-2"></span>
        <span className="project-car-image pci-3"></span>
      </div>
      <div className="image-text-flex">
        <div className="image-text-1">Expenses</div>
        <div className="image-text-2">Dashboards</div>
        <div className="image-text-3">To-do lists</div>
      </div>
      <p className="description" style={{ fontSize: "1.7rem" }}>
        A full-stack application built using React, Node and MongoDB. The basic features have been completed, but there
        is scope to enhance and develop more features in the future.
      </p>
      <p className="description" style={{ fontSize: "1.7rem" }}>
        I would like to integrate the application with the{" "}
        <a
          style={{ color: "var(--glaucousblue)" }}
          href="https://developer-portal.driver-vehicle-licensing.api.gov.uk/apis/vehicle-enquiry-service/vehicle-enquiry-service-description.html#vehicle-enquiry-service-api"
        >
          GOV Vehicle Enquiry API.
        </a>
        which should allow the app to consume more concise data about users' vehicles, and set reminders for key dates
        such as MOT and Tax renewals automatically
      </p>
      <p className="description">
        Here's the {""}
        <a style={{ color: "var(--glaucousblue)" }} href="https://github.com/siskiuslide/Project-car-app">
          Github repo
        </a>
      </p>
    </div>
  );
};

export default ProjectCarAppDetail;
