import React, { useState } from "react";
import Image from "./Image.jsx";
import Title from "../TitleContainer/Title.jsx";
import PastData from "../../PastData.json";
import "./Image.css";
import PopUp from "./PopUp.jsx";
import Carousel from "./Carousel.jsx";
import titles from "../../titles.json";

const PastEvents = () => {
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const openPopUp = (images) => {
    setSelectedImages(images);
    setPopUpOpen(true);
  };

  const closePopUp = () => setPopUpOpen(false);

  const SectionTitles = titles[0];

  return (
    <div className="outer-container">
      <div className="title-container">
        <Title text={SectionTitles.pastEvents} className="past-events-title" />
      </div>
      <div className="past-container" id="pastevents">
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
    </div>
  );
};

export default PastEvents;
