import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiUbereats } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Navigation Section */}
<div className="footer-nav">
        <a href="#home" className="footer-link">HOME</a>
        <a href="#info" className="footer-link">INFO</a>
        <a href="#menu" className="footer-link">MENU</a>
        <a href="#gallery" className="footer-link">GALLERY</a>
      </div>      

      {/* Social Media Icons Section */}
      <div className="footer-icons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.ubereats.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon ubereats"
        >
          <SiUbereats />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon twitter"
        >
          <FaTwitter />
        </a>
      </div>

      {/* All Rights Reserved Section */}
      <p className="footer-rights">© 2024 All rights reserved.</p>
    </footer>
  );
};

export default Footer;
