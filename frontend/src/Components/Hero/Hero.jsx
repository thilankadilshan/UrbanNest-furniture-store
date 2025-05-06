import React from "react";
import "./Hero.css";
import heroImage from "../Assets/hero_furniture.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Style Your Home with Elegance</h1>
          <p>Discover timeless furniture crafted for comfort and design.</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Furniture Display" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
