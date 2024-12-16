// Gallery.jsx
import React from "react";
import { Carousel } from "react-carousel-minimal";
import { data, captionStyle, slideNumberStyle } from "./GalleryConstants";
import "./Gallery.css";

function Gallery() {
  return (
    <div className="carousel-container">
      <div className="carousel-style">
      <Carousel
          data={data}
          time={2000}
          width="850px"
          height="500px"
          captionStyle={captionStyle}
          radius="20px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="70px"
          slideBackgroundColor="darkgrey"
          slideImageFit="fit"
          thumbnails={true}
          thumbnailWidth="100px"
        />
      </div>
    </div>
  );
}

export default Gallery;
