import React, { useState } from "react";
import Popup from "./Popup";
import "../style/styles.css";

const Button = ({
  buttonName,
  length,
  breadth,
  heading,
  color,
  background,
}) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <button
        className="common"
        style={{
          color: `${color ? color : "white"}`,
          width: `${length}px`,
          height: `${breadth}px`,
          background: `${background ? background : "#0086C9"}`,
        }}
        onClick={handleButtonClick}
      >
        {buttonName}
      </button>
      {isPopupVisible && (
        <Popup
          status={true}
          onClose={handlePopupClose}
          heading={heading}
        />
      )}
    </>
  );
};

export default Button;
