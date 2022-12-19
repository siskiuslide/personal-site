import React from "react";

const GalleryItem = function (props) {
  return (
    <>
      <div className="gallery-item" style={{ backgroundImage: `url(${props.imageurl})` }}>
        <p className="gallery-title">
          {props.title} <span>{props.date}</span>
        </p>
      </div>
    </>
  );
};

export default GalleryItem;
