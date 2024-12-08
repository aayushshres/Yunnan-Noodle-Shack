import React from "react";
import "./Header.css";
import images from "../../constants/images";

const Header = () => {
  return (
    <div>
      <img className="banner" src={images.banner} />
    </div>
  );
};

export default Header;
