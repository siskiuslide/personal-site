import React from "react";
import GalleryItem from "./galleryItem";
import "./photography.css";

const Photography = function () {
  return (
    <>
      <p className="coming-soon">More galleries coming soon!</p>
      <div className="gallery-grid">
        <GalleryItem />
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
