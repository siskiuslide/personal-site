import React from "react";
import GalleryItem from "./galleryItem";
import "./photography.css";

const Photography = function () {
  return (
    <>
      <div className="header-flex">
        <div className="photography-specs">
          <div>
            <p className="camera-type">Camera:</p>
            <p className="spec">Placeholder</p>
          </div>
          <div>
            <p className="camera-type">Phone:</p>
            <p className="spec">Google Pixel 6a</p>
          </div>
        </div>
        <p className="coming-soon">More galleries coming soon!</p>
        <div className="filler"></div>
      </div>
      <div className="gallery-grid">
        <GalleryItem imageUrl="/l" title="Snake Woodland" date="13/12/2022" />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
      </div>
    </>
  );
};

export default Photography;
