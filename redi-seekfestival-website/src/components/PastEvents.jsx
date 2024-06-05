import React, { useState } from "react";
import Image from "./Image.jsx";
import PastData from "../PastData.json";
import "./Image.css";
import PopUp from "./PopUp.jsx";
import Carousel from "./Carousel.jsx";

const PastEvents = () => {
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const openPopUp = (images) => {
    setSelectedImages(images);
    setPopUpOpen(true);
  };

  const closePopUp = () => setPopUpOpen(false);

  return (
    <div className="past-container">
      <div className="image-container">
        {PastData.map((data, index) => (
          <div key={index} onClick={() => openPopUp(data.popimages)}>
            <Image src={data.src} year={data.year} />
          </div>
        ))}
      </div>
      <PopUp isOpen={isPopUpOpen} onClose={closePopUp}>
        <Carousel popimages={selectedImages} />
      </PopUp>
    </div>
  );
};

export default PastEvents;
