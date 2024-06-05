import React from "react";
import "./Manifest.css";
import backgroundImage from "../../../public/images/parchment.jpg"; /*manifest section background image path and name
 should be changed from here > "" */

const Manifest = ({ text }) => {
  return (
    <div
      className="manifest-container"
      id="manifest-id"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        WebkitBackgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>MANIFEST</h1>
      <div
        className="manifest-wrapper"
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
    </div>
  );
};

export default Manifest;
