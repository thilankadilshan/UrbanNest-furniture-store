import React from "react";
import "./Hero.css";
import heroImage from "../Assets/hero_furniture.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Transform Your Space with Urban Nest Style</h1>
          <p>Would you like variations that emphasize luxury, affordability, or sustainability?</p>
          <button className="shop-now-btn">Discover more</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Furniture Display" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
