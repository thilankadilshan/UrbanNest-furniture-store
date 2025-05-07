import React from "react";
import "./Offers.css";
import exclusiveImage from "../Assets/exclusive_image.png"; // Use a high-quality furniture image

const Offers = () => {
  return (
    <section className="offers">
      <div className="offers-content">
        <div className="offers-text">
          <h2>Exclusive Offers Just for You</h2>
          <p>
            Premium quality furniture from our bestsellers, now at special
            prices.
          </p>
          <button className="offers-btn">Explore Deals</button>
        </div>
        <div className="offers-image">
          <img src={exclusiveImage} alt="Exclusive Offer" />
        </div>
      </div>
    </section>
  );
};

export default Offers;
