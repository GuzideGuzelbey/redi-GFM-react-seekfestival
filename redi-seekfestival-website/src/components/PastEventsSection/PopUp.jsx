import React from "react";
import "./PopUp.css";

const PopUp = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default PopUp;
