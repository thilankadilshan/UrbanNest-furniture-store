import React from "react";
import "./Footer.css";
import footerLogo from "../Assets/logo.png";
import instagramIcon from "../Assets/instagram_icon.png";
import pinterestIcon from "../Assets/pintester_icon.png";
import whatsappIcon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <img src={footerLogo} alt="Brand Logo" className="footer-logo" />
          <p>Your trusted source for elegant, lasting furniture.</p>
        </div>

        <div className="footer-links-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Stores</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-social-section">
          <h4>Follow Us</h4>
          <div className="footer-icons">
            <a href="#">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="#">
              <img src={pinterestIcon} alt="Pinterest" />
            </a>
            <a href="#">
              <img src={whatsappIcon} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>&copy; 2024 TracktorPartsLk. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
