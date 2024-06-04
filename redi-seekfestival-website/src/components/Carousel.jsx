// find a react library for image gallery or carousel

import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Carousel = ({ popimages }) => {
  const galleryImages = popimages.map((img) => ({
    original: img,
    thumbnail: img,
  }));

  return <ImageGallery items={galleryImages} showPlayButton={false} />;
};

export default Carousel;
