import React from "react";
import { animateScroll as scroll } from "react-scroll";
import "./UpButton.css";

const UpButton = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <button className="go-up-button" onClick={scrollToTop}>
      &#8679;
    </button>
  );
};

export default UpButton;
