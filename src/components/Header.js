import React from "react";
import "./Header.css";
import Bitmap from "../images/Bitmap (1).png";
const Header = () => {
  return (
    <div className="header-container">
      <div className="left">
        <p className="left-title">New Product</p>
        <h1>XX99 MARK II HEADPHONE</h1>
        <p className="left-about">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <h2>See Product</h2>
      </div>

      <div className="right">
        <img src={Bitmap} alt="my logo icon" className="header-img" />
      </div>
    </div>
  );
};

export default Header;
