import React, { useState } from "react";
import "./Image.css";

const Image = ({ src, year }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="image-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={`Image for ${year}`}
        className={isHovered ? "colored" : "grayscale"}
      />
      {!isHovered && <div className="watermark">{year}</div>}
    </div>
  );
};

export default Image;
