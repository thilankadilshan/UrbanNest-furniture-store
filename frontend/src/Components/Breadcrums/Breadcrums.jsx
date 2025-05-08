import React from "react";
import "./Breadcrums.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      SHOP <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  );
};

export default Breadcrum;
