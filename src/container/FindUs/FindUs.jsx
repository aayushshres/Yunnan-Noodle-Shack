import React from "react";
import "./FindUs.css";
import images from "../../constants/images";

const MapPage = () => {
  return (
    <div className="location-container">
      {/* Location Card */}
      <div className="location-card">
        {/* Left Section: Logo and Text */}
        <div className="header">
          <img src={images.logo} alt="app logo" className="logo" />
          <h1 className="title">Yunan Noodles</h1>
          <div className="description">
            <p className="address">43 Baldwin St., Toronto</p>
            <p className="email">email@example.com</p>
            <p className="email">(123) 456-7890</p>
          </div>
        </div>

        {/* Right Section: Map */}
        <div>
          <a href="https://www.google.com/maps?q=43+Baldwin+St.,+Toronto" target="_blank" rel="noopener noreferrer">
            <img src={images.map} alt="Map" className="map" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
