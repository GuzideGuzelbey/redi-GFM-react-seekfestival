import React from "react";
import "./Manifest.css";
import Title from "../TitleContainer/Title.jsx";
import TitleData from "../../titles.json";
import backgroundImage from "../../../public/images/paper.jpg"; /*manifest section background image path and name
 should be changed from here > "" */

const Manifest = ({ text }) => {
  return (
    <div
      className="outer-manifest-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        WebkitBackgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <Title text="MANIFEST" className="manifest-title" />
      </div>
      <div className="manifest-container" id="manifest-id">
        <div
          className="manifest-wrapper"
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </div>
    </div>
  );
};

export default Manifest;
